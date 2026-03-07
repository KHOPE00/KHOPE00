import urllib.request
import re

url = "https://www.ktrwa.or.kr/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})

try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        
        print("--- Finding goPage function ---")
        gopage = re.search(r'function\s+goPage[^{]*\{([^}]*)\}', html, re.DOTALL)
        if gopage:
            print(gopage.group(0))
        else:
            print("goPage function not found.")
            
        print("\n--- Board Notices Extraction ---")
        # Notice boards typically have an endpoint. Let's see all absolute URLs in the page
        urls = re.findall(r'href=[\"\'](/ktrwa/board/[^\"\']+)[\"\']', html)
        if urls:
            print(list(set(urls))[:10])
        else:
            print("No /ktrwa/board/ links found. Looking for common ones...")
            all_links = re.findall(r'href=[\"\']([^\"\']+)[\"\']', html)
            for link in all_links:
                if 'board' in link.lower() or 'notice' in link.lower() or '.do' in link.lower():
                    print(link)

except Exception as e:
    print('Failed:', e)
