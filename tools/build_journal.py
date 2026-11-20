"""Build the Journal (/journal/) and the Arabic page (/ar/).

Articles live in tools/journal/*.md (front matter + Markdown). To add one, drop a new
.md file there and run from the repository root:
    python3 tools/build_journal.py
Then run tools/build_painting_pages.py if the header/footer changed (it copies them from gallery.html).
The script writes journal/index.html, journal/<slug>/index.html, ar/index.html and updates
sitemap.xml and llms.txt.
"""
import datetime, glob, html, json, os, re
import markdown

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = 'https://paintingsuae.com'

def rd(f): return open(os.path.join(ROOT, f), encoding='utf-8').read()
def wr(f, s):
    os.makedirs(os.path.dirname(os.path.join(ROOT, f)), exist_ok=True)
    open(os.path.join(ROOT, f), 'w', encoding='utf-8').write(s)
def esc(s): return html.escape(str(s), quote=True)

def front(path):
    t = open(path, encoding='utf-8').read()
    m = re.match(r'---\n(.*?)\n---\n(.*)', t, re.S)
    meta = {}
    for line in m.group(1).splitlines():
        k, v = line.split(':', 1); v = v.strip()
        if v.startswith('"') and v.endswith('"'): v = v[1:-1]
        meta[k.strip()] = v
    return meta, m.group(2)

def rootify(s): return re.sub(r'(href|src)="(?!https?:|mailto:|tel:|#|/|data:)([^"]*)"', r'\1="/\2"', s)
g = rd('gallery.html')
head_common = rootify(re.search(r'<link rel="preconnect".*?<script src="analytics.js" async></script>', g, re.S).group(0))
body_top = rootify(re.search(r'<div class="sale">.*?</header>', g, re.S).group(0))
footer = rootify(re.search(r'<footer>.*?</footer>', g, re.S).group(0))
lb = re.search(r'<div class="lb" id="lb".*?\n</div>\n', g, re.S).group(0)  # site.js expects the pop-up markup

HREFLANG = (f'<link rel="alternate" hreflang="en" href="{BASE}/">\n'
            f'<link rel="alternate" hreflang="ar" href="{BASE}/ar/">\n'
            f'<link rel="alternate" hreflang="x-default" href="{BASE}/">')

def shell(lang, title, desc, url, image, image_alt, ld, main, og_type='website', extra_head=''):
    return f'''<!DOCTYPE html>
<html lang="{lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<base href="/">
<title>{esc(title)}</title>
<meta name="description" content="{esc(desc)}">
{head_common}
<link rel="canonical" href="{url}">
{extra_head}
<meta property="og:type" content="{og_type}">
<meta property="og:site_name" content="Paintings by Mery">
<meta property="og:title" content="{esc(title)}">
<meta property="og:description" content="{esc(desc)}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{BASE}/{image}">
<meta property="og:image:alt" content="{esc(image_alt)}">
<meta property="og:locale" content="{'ar_AE' if lang == 'ar' else 'en_AE'}">
<meta name="twitter:card" content="summary_large_image">
<meta name="geo.region" content="AE-AZ">
<meta name="geo.placename" content="Abu Dhabi">
<script type="application/ld+json">{json.dumps(ld, ensure_ascii=False)}</script>
</head>
<body class="journal-page">

{body_top}

{main}

{footer}

{lb}
<script src="/site.js"></script>
</body>
</html>
'''

def nice_date(d): return datetime.date.fromisoformat(d).strftime('%-d %B %Y')

# ---------------- articles ----------------
posts = []
for path in sorted(glob.glob(os.path.join(ROOT, 'tools/journal/*.md')), reverse=True):
    meta, body = front(path)
    meta['html'] = markdown.markdown(body, extensions=['sane_lists'])
    meta['url'] = f"{BASE}/journal/{meta['slug']}/"
    posts.append(meta)
posts.sort(key=lambda p: p['date'], reverse=True)

AUTHOR = {'@type': 'Person', '@id': f'{BASE}/#mery', 'name': 'Mery Zakkak', 'url': f'{BASE}/'}
for i, p in enumerate(posts):
    others = [q for q in posts if q is not p][:3]
    ld = {'@context': 'https://schema.org', '@graph': [
        {'@type': 'BlogPosting', '@id': p['url'] + '#article', 'headline': p['title'], 'description': p['description'],
         'image': f"{BASE}/{p['image']}", 'datePublished': p['date'], 'dateModified': p.get('updated', p['date']),
         'author': AUTHOR, 'publisher': AUTHOR, 'mainEntityOfPage': p['url'], 'inLanguage': 'en',
         'isPartOf': {'@type': 'Blog', 'name': 'Journal by Mery Zakkak', 'url': f'{BASE}/journal/'}},
        {'@type': 'BreadcrumbList', 'itemListElement': [
            {'@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': f'{BASE}/'},
            {'@type': 'ListItem', 'position': 2, 'name': 'Journal', 'item': f'{BASE}/journal/'},
            {'@type': 'ListItem', 'position': 3, 'name': p['title'], 'item': p['url']}]}]}
    more = ''.join(f'<a class="j-more" href="/journal/{q["slug"]}/"><span>{esc(nice_date(q["date"]))}</span>{esc(q["title"])}</a>' for q in others)
    main = f'''<main class="article">
  <div class="wrap narrow">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/journal/">Journal</a> / <span>{esc(p['title'])}</span></nav>
    <div class="eyebrow">Journal · {esc(nice_date(p['date']))}</div>
    <h1>{esc(p['title'])}</h1>
    <p class="lede">{esc(p['description'])}</p>
    <figure class="a-hero"><img src="/{p['image']}" alt="{esc(p['image_alt'])}"></figure>
    <div class="a-body">
{p['html']}
    </div>
    <div class="a-author"><img src="/logo.png" alt=""><p><b>Mery Zakkak</b> is a painter, creative mentor and art workshop facilitator based in Abu Dhabi. She moved from Lebanon to the UAE in 2018 and holds a Training Diploma in Art Therapy. <a href="/">More about Mery</a></p></div>
    {'<div class="a-next"><h2>More from the <em>Journal</em></h2>' + more + '</div>' if more else ''}
  </div>
</main>'''
    wr(f"journal/{p['slug']}/index.html", shell('en', p['seo_title'], p['description'], p['url'], p['image'], p['image_alt'], ld, main, 'article'))

# ---------------- journal index ----------------
cards = ''.join(f'''<a class="j-card" href="/journal/{p['slug']}/">
      <div class="img"><img src="/{p['image']}" alt="{esc(p['image_alt'])}" loading="lazy"></div>
      <div class="j-date">{esc(nice_date(p['date']))}</div>
      <h2>{esc(p['title'])}</h2>
      <p>{esc(p['description'])}</p>
      <span class="view">Read →</span>
    </a>''' for p in posts)
ld = {'@context': 'https://schema.org', '@graph': [
    {'@type': 'Blog', '@id': f'{BASE}/journal/#blog', 'name': 'Journal by Mery Zakkak', 'url': f'{BASE}/journal/', 'inLanguage': 'en',
     'author': AUTHOR, 'blogPost': [{'@type': 'BlogPosting', 'headline': p['title'], 'url': p['url'], 'datePublished': p['date']} for p in posts]}]}
main = f'''<main class="journal">
  <section class="page-head"><div class="wrap">
    <div class="eyebrow">Journal</div>
    <h1>Notes from the <em>studio</em></h1>
    <p>Practical guides and stories from Mery Zakkak's studio in Abu Dhabi: buying and living with original art, art as therapy, workshops, and the stories behind the paintings.</p>
  </div></section>
  <div class="wrap"><div class="j-grid">
    {cards}
  </div></div>
</main>'''
wr('journal/index.html', shell('en', 'Journal: Art, Painting and Art Therapy in Abu Dhabi | Mery Zakkak',
   "Guides and stories from painter Mery Zakkak's studio in Abu Dhabi: buying original art, art as therapy, workshops and the stories behind the paintings.",
   f'{BASE}/journal/', posts[0]['image'], posts[0]['image_alt'], ld, main))

# ---------------- Arabic page ----------------
meta, body = front(os.path.join(ROOT, 'tools/ar.md'))
intro, faq_txt = body.split('=== FAQ')
faq = [blk.strip().split('\n', 1) for blk in faq_txt.strip().split('\n\n') if blk.strip()]
intro_html = ''.join(f'<p>{esc(x.strip())}</p>' for x in intro.strip().split('\n\n'))
faq_html = '\n'.join(f'<details><summary>{esc(q)}</summary><p>{esc(a.strip())}</p></details>' for q, a in faq)
ld = {'@context': 'https://schema.org', '@graph': [
    {'@type': 'WebPage', '@id': f'{BASE}/ar/#page', 'url': f'{BASE}/ar/', 'name': meta['seo_title'], 'description': meta['description'], 'inLanguage': 'ar',
     'about': {'@id': f'{BASE}/#mery'}},
    {'@type': 'FAQPage', 'inLanguage': 'ar', 'mainEntity': [{'@type': 'Question', 'name': q, 'acceptedAnswer': {'@type': 'Answer', 'text': a.strip()}} for q, a in faq]}]}
main = f'''<main class="ar-page" dir="rtl" lang="ar">
  <section class="page-head"><div class="wrap narrow">
    <div class="eyebrow">بالعربية</div>
    <h1>لوحات أصلية <em>وورش فنية</em> في أبوظبي</h1>
    {intro_html}
    <p class="ar-cta"><a class="btn btn-ink" href="/gallery.html">تصفّح اللوحات</a> <a class="btn" href="https://wa.me/971563380577" target="_blank" rel="noopener">راسليني على واتساب</a> <a class="ar-en" href="/" lang="en" dir="ltr">English</a></p>
  </div></section>
  <section id="faq"><div class="wrap narrow">
    <h2>أسئلة <em>شائعة</em></h2>
    <div class="faq-list">
{faq_html}
    </div>
  </div></section>
</main>'''
wr('ar/index.html', shell('ar', meta['seo_title'], meta['description'], f'{BASE}/ar/', 'images/7.jpg', 'لوحة للفنانة ماري زكاك', ld, main, extra_head=HREFLANG))

# ---------------- sitemap ----------------
sm = rd('sitemap.xml')
sm = re.sub(r'\s*<url><loc>https://paintingsuae\.com/(journal|ar)/[^<]*</loc>.*?</url>', '', sm)
today = datetime.date.today().isoformat()
add = f'\n  <url><loc>{BASE}/journal/</loc><lastmod>{today}</lastmod><priority>0.7</priority></url>'
add += ''.join(f'\n  <url><loc>{p["url"]}</loc><lastmod>{p.get("updated", p["date"])}</lastmod><priority>0.7</priority></url>' for p in posts)
add += f'\n  <url><loc>{BASE}/ar/</loc><lastmod>{today}</lastmod><priority>0.7</priority></url>'
sm = sm.replace('\n</urlset>', add + '\n</urlset>')
wr('sitemap.xml', sm)

# ---------------- llms.txt ----------------
lt = rd('llms.txt')
lt = re.sub(r'\n## Journal\n.*?(?=\n## |\Z)', '\n', lt, flags=re.S)
block = '\n## Journal\n' + '\n'.join(f'- [{p["title"]}]({p["url"]}) ({p["date"]}): {p["description"]}' for p in posts) + \
        f'\n- [Arabic page / بالعربية]({BASE}/ar/): introduction and the questions above in Arabic (name in Arabic: ماري زكاك).\n'
lt = lt.replace('\n## Questions', block + '\n## Questions', 1)
wr('llms.txt', lt)
print('journal:', len(posts), 'articles; arabic FAQ:', len(faq))
