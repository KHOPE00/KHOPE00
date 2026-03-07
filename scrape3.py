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
        try:
            js = urllib.request.urlopen(urllib.request.Request(s, headers={'User-Agent': 'Mozilla/5.0'})).read().decode('utf-8')
            gopage = re.search(r'function\s+go[A-Za-z0-9]*[^{]*\{([^}]*)\}', js, re.DOTALL)
            if 'goPage' in js:
                print("\nFOUND 'goPage' in", s)
                # print snippet of code around it
                idx = js.find('goPage')
                print(js[idx:idx+300])
        except Exception as e:
            pass
except Exception as e:
    print(e)
