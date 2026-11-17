# PaintingsByMery website

Static website for Mery Zakkak's paintings (index.html, gallery.html, beyond.html).
Content lives in `site.js`: paintings (`P`), extra photos and videos (`MEDIA`), Instagram links (`INSTAGRAM_POSTS`), Beyond the canvas (`BEYOND`) and past workshops (`PAST_WS`).
Hosted on Netlify: every change pushed here goes live automatically.

Painting extras in `site.js`: `DETAILS` holds the "Perfect for" line and the image description (alt text) for each painting. The 40% sale ends automatically after `SALE_END` (14 February 2027); the prices Google reads (JSON-LD in gallery.html and llms.txt) carry the same end date, so update them when the sale ends.
