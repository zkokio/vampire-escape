#!/usr/bin/env python3
"""Build dist/vampire-escape.html: the whole game in ONE file (CSS, JS, packs, fonts inlined)."""
import re, base64, os
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
rd = lambda p: open(os.path.join(root, p), encoding="utf-8").read()
html = rd("index.html")
css = rd("css/style.css")
for name in ("vt323", "press-start-2p"):
    b64 = base64.b64encode(open(os.path.join(root, f"fonts/{name}.woff2"), "rb").read()).decode()
    css = css.replace(f'url("../fonts/{name}.woff2")', f'url("data:font/woff2;base64,{b64}")')
html = html.replace('<link rel="stylesheet" href="css/style.css">', "<style>\n" + css + "\n</style>")
import json
for m in set(re.findall(r'href="(icons/[^"]+\.png)"', html)):
    html = html.replace('href="' + m + '"', 'href="data:image/png;base64,' + base64.b64encode(open(os.path.join(root, m), "rb").read()).decode() + '"')
def inline(m):
    src = rd(m.group(1))
    if m.group(1).startswith("packs/"):          # map packs: compact the JSON
        data = json.loads(src[src.index("{"):src.rindex("}") + 1])
        src = "Starways.addPack(" + json.dumps(data, separators=(",", ":"), ensure_ascii=False) + ");"
    src = src.replace("</script", "<\\/script")
    return "<script>\n/* ---- " + m.group(1) + " ---- */\n" + src + "\n</script>"
html = re.sub(r'<script src="([^"]+)"></script>', inline, html)
html = html.replace('href="docs/PACK_GUIDE.md"', 'href="https://github.com/zkokio/vampire-escape/blob/main/docs/PACK_GUIDE.md"')
os.makedirs(os.path.join(root, "dist"), exist_ok=True)
open(os.path.join(root, "dist/vampire-escape.html"), "w", encoding="utf-8").write(html)
print("dist/vampire-escape.html", len(html.encode()), "bytes")
head = open(os.path.join(root, "dist/vampire-escape-import-prompt.txt"), encoding="utf-8").read().split("```html")[0] if os.path.exists(os.path.join(root, "dist/vampire-escape-import-prompt.txt")) else ""
if head:
    open(os.path.join(root, "dist/vampire-escape-import-prompt.txt"), "w", encoding="utf-8").write(head + "```html\n" + html + "\n```\n")
    print("dist/vampire-escape-import-prompt.txt updated")

HEAD = """Please create a single-file HTML app (artifact) from the code below.

RULES - follow exactly:
1. Use the code EXACTLY as given. Do not rewrite, shorten, summarise, restyle, "improve", or convert it to React or any framework.
2. Keep everything: all CSS, all JavaScript, the embedded base64 fonts and icons, and the map data (the Starways.addPack(...) blocks).
3. Output the complete file in one piece, then render it so I can play it.
4. It's a retro Commodore 64-style gothic text adventure called VAMPIRE ESCAPE. It uses localStorage for saves (wrapped in try/catch, so it's fine if storage is blocked) and the browser's WebAudio for sound.
5. When I ask for changes later, edit only the parts I mention and keep everything else identical.

Here is the complete code:

"""
open(os.path.join(root, "dist/vampire-escape-import-prompt.txt"), "w", encoding="utf-8").write(HEAD + "```html\n" + html + "\n```\n")
open(os.path.join(root, "dist/short-prompt-with-attachment.txt"), "w").write("I've attached vampire-escape.html. Please turn it into an artifact EXACTLY as written: don't rewrite, shorten, restyle or convert it to React. Keep all CSS, JavaScript, the embedded fonts and the map data. Render it so I can play. When I ask for changes later, edit only those parts.\n")
print("prompt written")
