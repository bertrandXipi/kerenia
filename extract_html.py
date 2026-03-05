import urllib.request
import re

url = "https://www.google.com/maps/place/R%C3%A9sidence+Ker+Enia+Meubl%C3%A9s+de+Tourisme/@43.3583076,-1.4034587,17z/data=!4m11!3m10!1s0xd513bde8e105d53:0xd49a1d40c1fa8fda!5m2!4m1!1i2!8m2!3d43.3583076!4d-1.4034587!9m1!1b1!16s%2Fg%2F11j53cl1c9?hl=fr"

try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', 'Accept-Language': 'fr-FR,fr;q=0.9'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    
    matches = re.findall(r'\"([^\"]{40,800}?)\"', html)
    print("MATCHES START:")
    count = 0
    seen = set()
    for m in matches:
        lm = m.lower()
        # Look for typical french review words
        if ("appartement" in lm or "séjour" in lm or "calme" in lm or "accueil" in lm or "piscine" in lm or "très bien" in lm):
            if "<" not in m and "{" not in m and "function" not in m and "Google" not in m and len(m) > 60:
                if m not in seen:
                    print("-", m)
                    seen.add(m)
                    count += 1
    if count == 0:
        print("No matches found")
except Exception as e:
    print("Error:", e)
