#!/usr/bin/env python3
"""Vampire Escape app icon: 64x64 pixel art (castle, full moon, bats), dark and light, scaled up crisp."""
from PIL import Image, ImageDraw
import random, os
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
N = 64
BAT = ["0.......0", "00.0.0.00", "000020000", ".0000000.", "..0...0.."]
THEMES = {
 "dark": dict(frame=(104,55,43), sky1=(20,12,40), sky2=(111,61,134), star=(255,255,255), moon=(236,231,214), moon2=(190,186,176),
              castle=(10,8,16), win=(184,199,111), bat=(10,8,16), eye=(200,40,40), ground=(40,25,60)),
 "light": dict(frame=(53,40,121), sky1=(236,231,214), sky2=(214,190,220), star=(111,61,134), moon=(104,55,43), moon2=(80,40,30),
              castle=(40,30,60), win=(184,160,90), bat=(40,30,60), eye=(200,40,40), ground=(170,150,180)),
}
def draw(t):
    im = Image.new("RGBA", (N, N), (0,0,0,0)); px = im.load(); d = ImageDraw.Draw(im)
    d.rectangle([0,0,N-1,N-1], fill=t["frame"])
    for (x,y) in [(0,0),(1,0),(0,1),(N-1,0),(N-2,0),(N-1,1),(0,N-1),(1,N-1),(0,N-2),(N-1,N-1),(N-2,N-1),(N-1,N-2)]: px[x,y]=(0,0,0,0)
    B=[4,4,N-5,N-5]
    for y in range(4,N-4):
        f=(y-4)/(N-9)
        for x in range(4,N-4):
            c = t["sky1"] if ((x*7+y*13)%16)/16 > f*0.9 else t["sky2"]
            px[x,y]=c
    rnd=random.Random(3)
    for i in range(30): px[rnd.randint(5,N-6), rnd.randint(5,30)] = t["star"]
    for y in range(8,30):
        for x in range(30,54):
            dd=(x-42)**2+(y-18)**2
            if dd<=100: px[x,y]=t["moon"]
            if dd<=100 and ((x-46)**2+(y-15)**2<=6 or (x-39)**2+(y-22)**2<=4): px[x,y]=t["moon2"]
    C=t["castle"]
    d.polygon([(4,59),(4,50),(14,44),(24,46),(34,40),(48,42),(59,48),(59,59)], fill=t["ground"])
    rects=[(14,30,20,52),(26,22,33,52),(20,38,44,52),(40,28,46,52),(48,36,53,52)]
    for r in rects: d.rectangle(r, fill=C)
    d.polygon([(13,30),(17,22),(21,30)], fill=C); d.polygon([(25,22),(29.5,12),(34,22)], fill=C); d.polygon([(39,28),(43,20),(47,28)], fill=C)
    for x in range(20,45,3): px[x,37]=C
    for (x,y) in [(17,34),(29,27),(29,33),(43,32),(35,43),(23,44)]: px[x,y]=t["win"]; px[x,y+1]=t["win"]
    d.rectangle([4,52,N-5,N-5], fill=C)
    for (ox,oy) in [(8,10),(18,6),(50,32)]:
        for j,row in enumerate(BAT):
            for i,ch in enumerate(row):
                if ch=="0": px[ox+i,oy+j]=t["bat"]
                if ch=="2": px[ox+i,oy+j]=t["eye"]
    return im
os.makedirs(os.path.join(root,"icons"),exist_ok=True)
for name,t in THEMES.items():
    base=draw(t)
    for size in (1024,512,192,180,32): base.resize((size,size),Image.NEAREST).save(os.path.join(root,f"icons/icon-{name}-{size}.png"))
print("ok")
