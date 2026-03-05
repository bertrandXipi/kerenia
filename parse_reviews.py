import urllib.request
import re

url = "https://www.google.com/maps/place/R%C3%A9sidence+Ker+Enia+Meubl%C3%A9s+de+Tourisme/@43.3583076,-1.4034587,17z/data=!4m11!3m10!1s0xd513bde8e105d53:0xd49a1d40c1fa8fda!5m2!4m1!1i2!8m2!3d43.3583076!4d-1.4034587!9m1!1b1!16s%2Fg%2F11j53cl1c9?hl=fr"

try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    
    # Try to find review text in the raw HTML
    print("Extracting strings that might be reviews...")
    matches = re.findall(r'\"([^\"]{100,500}?)\"', html)
    candidates = set()
    for m in matches:
        if "appartement" in m.lower() or "agréable" in m.lower() or "séjour" in m.lower() or "résidence" in m.lower() or "calme" in m.lower() or "piscine" in m.lower():
            if not "<" in m and not ">" in m and "\\x22" not in m:
                candidates.add(m)
    
    for c in list(candidates)[:20]:
        print("-", c)
except Exception as e:
    print("Error:", e)
