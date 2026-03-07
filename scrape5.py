import urllib.request
import re

url = "https://www.ktrwa.or.kr/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    scripts = re.findall(r'<script[^>]+src=[\"\']([^\"\']+)[\"\']', html)
    for s in scripts:
        if not s.startswith('http'):
            s = 'https://www.ktrwa.or.kr' + s
        if 'common.js' in s or 'main.js' in s or 'menu' in s or 'layout' in s or 'cms.js' in s:
            try:
                js = urllib.request.urlopen(urllib.request.Request(s, headers={'User-Agent': 'Mozilla/5.0'})).read().decode('utf-8')
                matches = re.finditer(r'function\s+goPage\s*\(', js)
                for m in matches:
                    start = m.start()
                    print(f"--- FOUND goPage in {s} ---")
                    print(js[start:start+400])
            except:
                pass

    # Also search the HTML body for goPage definition
    m = re.search(r'function\s+goPage\s*\(', html)
    if m:
        start = m.start()
        print("--- FOUND goPage IN HTML ---")
        print(html[start:start+400])

except Exception as e:
    print(e)
