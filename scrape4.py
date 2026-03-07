import urllib.request
import re
try:
    js = urllib.request.urlopen(urllib.request.Request('https://www.ktrwa.or.kr/js/cms.js', headers={'User-Agent': 'Mozilla/5.0'})).read().decode('utf-8')
    match = re.search(r'function\s+goPage\s*\([^\)]*\)\s*\{([^}]*)\}', js, re.DOTALL)
    if match:
        print(match.group(0))
    else:
        print("Not found by regex. Printing simple find:")
        idx = js.find('function goPage')
        print(js[idx:idx+500])
except Exception as e:
    print(e)
