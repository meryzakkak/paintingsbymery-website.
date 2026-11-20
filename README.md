# PaintingsByMery website

Static website for Mery Zakkak's paintings (index.html, gallery.html, beyond.html).
Content lives in `site.js`: paintings (`P`), extra photos and videos (`MEDIA`), Instagram links (`INSTAGRAM_POSTS`), Beyond the canvas (`BEYOND`) and past workshops (`PAST_WS`).
Hosted on Netlify: every change pushed here goes live automatically.

Painting extras in `site.js`: `DETAILS` holds the "Perfect for" line and the image description (alt text) for each painting. The 40% sale ends automatically after `SALE_END` (14 February 2027); the prices Google reads (JSON-LD in gallery.html and llms.txt) carry the same end date, so update them when the sale ends.

Painting pages: every painting has its own page at /paintings/<name>/ (built from site.js). After changing paintings in site.js, run `python3 tools/build_painting_pages.py` (needs node and Pillow); it rebuilds the pages, the "All paintings by title" list and JSON-LD URLs in gallery.html, the sitemap entries and the page links in llms.txt.

Journal and Arabic page: articles are Markdown files in tools/journal/ (front matter: slug, title, seo_title, description, date, image, image_alt). The Arabic page text is tools/ar.md. Run `python3 tools/build_journal.py` (needs the markdown package), then `python3 tools/build_painting_pages.py` so the painting pages pick up header/footer changes.
