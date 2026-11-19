"""Build one page per painting at /paintings/<slug>/ from the data in site.js.

Run from the repository root after changing paintings in site.js:
    python3 tools/build_painting_pages.py
It (re)writes paintings/*/index.html, the painting links list in gallery.html,
the artwork URLs in gallery.html's JSON-LD, the painting URLs in sitemap.xml
and the page links in llms.txt.
"""
import html, json, os, re, shutil, subprocess, datetime
from urllib.parse import quote
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = 'https://paintingsuae.com'
TODAY = datetime.date.today().isoformat()
WA = '971563380577'
EMAIL = 'merycreativejourney@gmail.com'

d = json.loads(subprocess.check_output(['node', os.path.join(ROOT, 'tools/dump.js'), os.path.join(ROOT, 'site.js')]))
P, MEDIA, NOW, SALEOF = d['P'], d['MEDIA'], d['nowPrice'], d['saleOf']

def slug(t): return re.sub(r'^-|-$', '', re.sub(r'[^a-z0-9]+', '-', t.lower()))
def esc(s): return html.escape(str(s), quote=True)
def fmt(n): return f'AED {n:,}' if n else 'Price on request'
def rd(f): return open(os.path.join(ROOT, f), encoding='utf-8').read()
def wr(f, s):
    os.makedirs(os.path.dirname(os.path.join(ROOT, f)) or ROOT, exist_ok=True)
    open(os.path.join(ROOT, f), 'w', encoding='utf-8').write(s)
def dims(path):
    try:
        with Image.open(os.path.join(ROOT, path)) as im: return im.size
    except Exception: return (900, 1200)

for p, n, s in zip(P, NOW, SALEOF): p['now'] = n; p['sale'] = s; p['slug'] = slug(p['title']); p['url'] = f"/paintings/{p['slug']}/"

# ---------- page shell taken from gallery.html, with links made root-relative ----------
g = rd('gallery.html')
def rootify(s):
    return re.sub(r'(href|src)="(?!https?:|mailto:|tel:|#|/|data:)([^"]*)"', r'\1="/\2"', s)
head_common = re.search(r'<link rel="preconnect".*?<script src="analytics.js" async></script>', g, re.S).group(0)
body_top = rootify(re.search(r'<div class="sale">.*?</header>', g, re.S).group(0))
footer = rootify(re.search(r'<footer>.*?</footer>', g, re.S).group(0))
lb = re.search(r'<div class="lb" id="lb".*?\n</div>\n', g, re.S).group(0)
head_common = rootify(head_common)

PIECES = {'Family Bond': [('Piece 1', '15 × 15 cm, 2 cm deep', 300), ('Piece 2', '20 × 15 cm, 2 cm deep', 300), ('Piece 3', '20 × 20 cm, 4 cm deep', 500), ('Piece 4', '30 × 24 cm, 4 cm deep', 500)]}

def price_html(p):
    if p['sold']: return (f"<span>{fmt(p['price'])}</span>" if p['price'] else '') + '<span class="sold">SOLD</span>'
    if p['sale']: return f"<span>{fmt(p['now'])}</span><s>{fmt(p['price'])}</s>"
    return f"<span>{fmt(p['price'])}</span>"

def wa_link(p):
    if p['sold']: msg = f'Hello Mery, I love "{p["title"]}". Could you paint something similar for me?'
    else: msg = f'Hello Mery, I\'m interested in "{p["title"]}"' + (f" ({p['size']})" if p['size'] else '') + (f" at {fmt(p['now'])}" if p['price'] else '') + '. Is it still available?'
    return f'https://wa.me/{WA}?text={quote(msg)}'

def mail_link(p):
    if p['sold']: return f'mailto:{EMAIL}?subject=' + quote('Painting commission inspired by ' + p['title'])
    body = f'Hello Mery,\n\nI\'m interested in "{p["title"]}"' + (f" ({p['size']})" if p['size'] else '') + (f" at {fmt(p['now'])}" if p['price'] else '') + '. Is it still available?\n\nThank you!'
    return f'mailto:{EMAIL}?subject=' + quote('Painting inquiry: ' + p['title']) + '&body=' + quote(body)

WA_ICON = re.search(r'const WA_ICON = `(.*?)`;', rd('site.js'), re.S).group(1)
IG_ICON = re.search(r"const IG_ICON='(.*?)';", rd('site.js'), re.S).group(1)

def card(p):
    w, h = dims(p['img'])
    badge = '<span class="ribbon">SOLD</span>' if p['sold'] else ('<span class="badge sale-b">40% off</span>' if p['sale'] else '')
    return f'''<a class="card pp-card" href="{p['url']}">
        <div class="img"><img src="/{p['img']}" alt="{esc(p['alt'] or p['title'])}" width="{w}" height="{h}" loading="lazy">{badge}</div>
        <h3>{esc(p['title'])}</h3>
        <div class="meta">{esc(p['series'])}{' · ' + str(p['year']) if p['year'] else ''}</div>
        <div class="price">{price_html(p)}</div>
      </a>'''

def page(p):
    title = f"{p['title']}, original painting by Mery Zakkak" + (' | Abu Dhabi' if not p['sold'] else '')
    bits = [b for b in [p['medium'], p['size']] if b]
    if p['sold']: desc = f"{p['title']} ({', '.join(bits)}), an original painting by Abu Dhabi artist Mery Zakkak. Sold; commissions for something similar are welcome."
    else: desc = f"{p['title']}: {', '.join(bits)}. Original painting by Abu Dhabi artist Mery Zakkak, {fmt(p['now'])}" + (' (40% off)' if p['sale'] else '') + '. Ask on WhatsApp or by email.'
    if len(desc) > 170: desc = desc[:167].rsplit(' ', 1)[0] + '…'
    url = BASE + p['url']
    img = f"{BASE}/{p['big']}"
    sers = [p['series']] + p['also']
    # structured data
    art = {'@type': 'VisualArtwork', '@id': url + '#artwork', 'name': p['title'], 'url': url,
           'creator': {'@id': f'{BASE}/#mery'}, 'artform': 'Painting', 'artMedium': p['medium'],
           'image': {'@type': 'ImageObject', 'url': img, 'caption': p['alt'] or p['title']},
           'isPartOf': {'@type': 'CreativeWorkSeries', 'name': p['series'], 'url': f"{BASE}/gallery#{slug(p['series'])}"}}
    if p['year']: art['dateCreated'] = str(p['year'])
    if p['size']: art['size'] = p['size']
    if p['story']: art['description'] = p['story']
    if not p['sold'] and p['price']:
        o = {'@type': 'Offer', 'priceCurrency': 'AED', 'price': p['now'], 'availability': 'https://schema.org/InStock', 'url': url, 'seller': {'@id': f'{BASE}/#studio'}}
        if p['sale']: o['priceValidUntil'] = d['SALE_END']
        art['offers'] = o
        if p['title'] in PIECES:
            art['hasPart'] = [{'@type': 'VisualArtwork', 'name': f"{p['title']}, {n}", 'size': sz, 'creator': {'@id': f'{BASE}/#mery'},
                               'offers': {'@type': 'Offer', 'priceCurrency': 'AED', 'price': pr, 'availability': 'https://schema.org/InStock', 'seller': {'@id': f'{BASE}/#studio'}}}
                              for n, sz, pr in PIECES[p['title']]]
    crumbs = {'@type': 'BreadcrumbList', 'itemListElement': [
        {'@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': f'{BASE}/'},
        {'@type': 'ListItem', 'position': 2, 'name': 'Gallery', 'item': f'{BASE}/gallery'},
        {'@type': 'ListItem', 'position': 3, 'name': p['series'], 'item': f"{BASE}/gallery#{slug(p['series'])}"},
        {'@type': 'ListItem', 'position': 4, 'name': p['title'], 'item': url}]}
    ld = {'@context': 'https://schema.org', '@graph': [art, crumbs]}
    # page parts
    w, h = dims(p['big'])
    extra = [m for m in MEDIA.get(p['title'], []) if m.get('type') == 'image'][:4]
    thumbs = ''.join(f'<a href="/{esc(m["src"])}" target="_blank" rel="noopener"><img src="/{esc(m["src"])}" alt="{esc(p["title"] + ": " + m.get("label", "detail"))}" loading="lazy"><span>{esc(m.get("label", ""))}</span></a>' for m in extra)
    ser_links = ', '.join(f'<a href="/gallery.html#{slug(s)}">{esc(s)}</a>' for s in sers)
    rows = [('Series', ser_links, True), ('Year', p['year'], False), ('Medium', p['medium'], False), ('Size', p['size'], False),
            ('Framing', p['frame'] or ('Unframed' if p['size'] else ''), False), ('Edition', 'Original, one of a kind (no prints)', False)]
    rows += [(n, f'{sz} · AED {pr:,}', False) for n, sz, pr in PIECES.get(p['title'], [])]
    dl = ''.join(f'<div><dt>{k}</dt><dd>{v if raw else esc(v)}</dd></div>' for k, v, raw in rows if v)
    if p['perfect']:
        if p['sold']:
            t = re.sub(r'^Sold\.\s*', '', p['perfect']); perfect = f'<p class="perfect">{esc(t)}</p>' if t else ''
        else: perfect = f'<p class="perfect"><b>Perfect for:</b> {esc(p["perfect"])}</p>'
    else: perfect = ''
    cta = (f'<a class="btn btn-ink" href="{esc(mail_link(p))}">Commission something similar</a>' if p['sold']
           else f'<a class="btn btn-ink" href="{esc(mail_link(p))}">Inquire to purchase</a>')
    same = [q for q in P if q is not p and (q['series'] == p['series'] or p['series'] in q['also'])]
    same.sort(key=lambda q: (q['sold'], -(q['year'] or 0)))
    more = same[:4]
    if len(more) < 4: more += [q for q in P if q is not p and q not in more and not q['sold']][:4 - len(more)]
    k = P.index(p); prev_p, next_p = P[k - 1], P[(k + 1) % len(P)]
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<base href="/">
<title>{esc(title)}</title>
<meta name="description" content="{esc(desc)}">
{head_common}
<link rel="canonical" href="{url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Paintings by Mery">
<meta property="og:title" content="{esc(title)}">
<meta property="og:description" content="{esc(desc)}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{img}">
<meta property="og:image:alt" content="{esc(p['alt'] or p['title'])}">
<meta property="og:locale" content="en_AE">
<meta name="twitter:card" content="summary_large_image">
<meta name="geo.region" content="AE-AZ">
<meta name="geo.placename" content="Abu Dhabi">
<script type="application/ld+json">{json.dumps(ld, ensure_ascii=False)}</script>
</head>
<body class="painting-page">

{body_top}

<main class="pp">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/gallery.html">Gallery</a> / <a href="/gallery.html#{slug(p['series'])}">{esc(p['series'])}</a> / <span>{esc(p['title'])}</span></nav>
    <div class="pp-grid">
      <figure class="pp-img">
        <img src="/{p['big']}" alt="{esc(p['alt'] or p['title'])}" width="{w}" height="{h}">
        {'<div class="pp-thumbs">' + thumbs + '</div>' if thumbs else ''}
      </figure>
      <div class="lb-info pp-info">
        <div class="eyebrow">{ser_links}</div>
        <h1>{esc(p['title'])}</h1>
        {f'<p class="story-t">{esc(p["story"])}</p>' if p['story'] else ''}
        {perfect}
        <dl class="details">{dl}</dl>
        <div class="price" id="ppPrice" data-title="{esc(p['title'])}">{price_html(p)}</div>
        <div class="ask-row">
          {cta}
          <a class="ico ico-wa" href="{esc(wa_link(p))}" target="_blank" rel="noopener" aria-label="WhatsApp Mery" title="WhatsApp Mery">{WA_ICON}</a>
          <a class="ico ico-ig" href="https://www.instagram.com/paintings.bymery/" target="_blank" rel="noopener" aria-label="Message on Instagram" title="Message on Instagram">{IG_ICON}</a>
        </div>
        <p class="note">Ask about shipping, framing or viewing in person in Abu Dhabi · {EMAIL} · +971 56 338 0577</p>
        <p class="pp-pn"><a href="{prev_p['url']}">← {esc(prev_p['title'])}</a><a href="{next_p['url']}">{esc(next_p['title'])} →</a></p>
      </div>
    </div>
  </div>
  <section class="pp-more">
    <div class="wrap">
      <div class="eyebrow">Keep looking</div>
      <h2>More from <em>{esc(p['series'])}</em></h2>
      <div class="pp-cards">
      {''.join(card(q) for q in more)}
      </div>
      <p class="pp-all"><a class="btn btn-ink" href="/gallery.html">See all 66 paintings</a></p>
    </div>
  </section>
</main>

{footer}

{lb}
<script src="/site.js"></script>
</body>
</html>
'''

# ---------- write pages ----------
if os.path.isdir(os.path.join(ROOT, 'paintings')): shutil.rmtree(os.path.join(ROOT, 'paintings'))
for p in P: wr(f"paintings/{p['slug']}/index.html", page(p))

# ---------- gallery.html: crawlable list of painting pages + JSON-LD URLs ----------
g = rd('gallery.html')
groups = {}
for p in P: groups.setdefault(p['series'], []).append(p)
lst = '\n'.join(f'      <div><h3>{esc(s)}</h3>' + ''.join(f'<a href="{p["url"]}">{esc(p["title"])}{" (sold)" if p["sold"] else ""}</a>' for p in ps) + '</div>' for s, ps in groups.items())
block = f'''<!-- painting-links:start -->
<section class="pp-index">
  <div class="wrap">
    <div class="eyebrow">Every painting</div>
    <h2>All paintings <em>by title</em></h2>
    <div class="pp-index-cols">
{lst}
    </div>
  </div>
</section>
<!-- painting-links:end -->'''
if '<!-- painting-links:start -->' in g:
    g = re.sub(r'<!-- painting-links:start -->.*?<!-- painting-links:end -->', lambda m: block, g, flags=re.S)
else:
    g = g.replace('</main>', block + '\n</main>', 1)
m = re.search(r'(<script type="application/ld\+json">)(.*?)(</script>)', g, re.S)
ld = json.loads(m.group(2))
urls = {p['title']: BASE + p['url'] for p in P}
for it in ld['@graph']:
    if it['@type'] == 'CollectionPage':
        for li in it['mainEntity']['itemListElement']:
            a = li['item']; a['url'] = urls.get(a['name'], a.get('url')); li['url'] = a['url']
g = g[:m.start(2)] + json.dumps(ld, ensure_ascii=False) + g[m.end(2):]
wr('gallery.html', g)

# ---------- sitemap ----------
sm = rd('sitemap.xml')
sm = re.sub(r'\s*<url><loc>https://paintingsuae\.com/paintings/[^<]*</loc>.*?</url>', '', sm)
add = ''.join(f'\n  <url><loc>{BASE}{p["url"]}</loc><lastmod>{TODAY}</lastmod><priority>{"0.7" if not p["sold"] else "0.4"}</priority></url>' for p in P)
sm = sm.replace('\n</urlset>', add + '\n</urlset>')
wr('sitemap.xml', sm)

# ---------- llms.txt: link each available painting to its page ----------
lt = rd('llms.txt')
for p in P:
    if p['sold']: continue
    pat = re.compile(r'^(- ' + re.escape(p['title']) + r' \()(.*)$', re.M)
    def addurl(mm):
        line = mm.group(0)
        line = re.sub(r' Page: \S+$', '', line)
        return line + f' Page: {BASE}{p["url"]}'
    lt = pat.sub(addurl, lt, count=1)
if '- [All paintings, one page each]' not in lt:
    lt = lt.replace(f'- [Gallery]({BASE}/gallery):', f'- [All paintings, one page each]({BASE}/gallery): every painting also has its own page at {BASE}/paintings/<name>/.\n- [Gallery]({BASE}/gallery):', 1)
wr('llms.txt', lt)
print('built', len(P), 'painting pages')
