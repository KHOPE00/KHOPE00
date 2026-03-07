import urllib.request
import re

url = "https://www.ktrwa.or.kr/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})

try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        
        print("--- Menu Links ---")
        menus = re.findall(r'<a[^>]*href=[\"\']([^\"\']+)[\"\'][^>]*>(.*?)</a>', html, re.DOTALL)
        for m in menus:
            href, text = m
            text = re.sub(r'<[^>]+>', '', text).strip()
            text = re.sub(r'\s+', ' ', text)
            if text and len(text) > 1 and len(text) < 30:
                print(f"{text}: {href}")
                
        print("\n--- Board Links ---")
        notices = re.findall(r'<li[^>]*>.*?<a href=\"([^\"]+)\"[^>]*>(.*?)</a>', html, re.DOTALL)
        for i, n in enumerate(notices[:10]):
            href, text = n
            text = re.sub(r'<[^>]+>', '', text).strip()
            text = re.sub(r'\s+', ' ', text)
            print(f"Notice {i}: {text} -> {href}")

except Exception as e:
    print('Failed:', e)
