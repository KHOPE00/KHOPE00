document.addEventListener('DOMContentLoaded', () => {
    // 1. Tab Interaction Logic
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            // Note: In a real environment, we would fetch or swap content right here.
            // For now, it just demonstrates the UI state change smoothly.
        });
    });

    // 2. Language Toggle Logic
    const langToggles = document.querySelectorAll('.lang-toggle span');

    langToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            langToggles.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // 3. Subtle Parallax effect on Hero Section Swirls
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const hero = document.querySelector('.hero');
        if (hero && scrolled < 500) {
            hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
        }
    });

    // ==========================================
    // Real KTRWA Notice Board Live Scraping
    // ==========================================
    async function loadLiveNotices() {
        const boardList = document.querySelector('.board-list');
        if (!boardList) return;

        try {
            const proxyUrl = 'https://api.allorigins.win/get?url=';
            const targetUrl = encodeURIComponent('https://www.ktrwa.or.kr/');

            const response = await fetch(proxyUrl + targetUrl);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();

            const parser = new DOMParser();
            const doc = parser.parseFromString(data.contents, 'text/html');

            // Extract notices from the tabs list
            const listItems = doc.querySelectorAll('.tabs + div ul li');
            let injectedHTML = '';

            if (listItems.length > 0) {
                // Take 4 recent notices
                for (let i = 0; i < Math.min(4, listItems.length); i++) {
                    const li = listItems[i];
                    const aTag = li.querySelector('a');
                    if (aTag) {
                        const title = aTag.innerText.trim();
                        // Search for the date span
                        let dateText = '03.07'; // Fallback
                        if (li.innerHTML.includes('</span>')) {
                            // Quick text extraction for date since it's a naked text node or generic span in the reference
                            const spans = li.querySelectorAll('span');
                            if (spans.length > 0) dateText = spans[spans.length - 1].innerText.trim();
                        }

                        let href = aTag.getAttribute('href');
                        // Route javascript clicks via our handler
                        injectedHTML += `
                            <li>
                                <a href="https://www.ktrwa.or.kr/" target="_blank" onclick="return window.openKtrwaLink(event, '${href}')">
                                    <span class="title">${title}</span>
                                    <span class="date">${dateText}</span>
                                </a>
                            </li>
                        `;
                    }
                }
            }

            if (injectedHTML) {
                boardList.innerHTML = injectedHTML;
            }
        } catch (error) {
            console.error('Failed to load notices:', error);
        }
    }

    loadLiveNotices();
});

// Link Handler for opening real URLs
window.openKtrwaLink = function (event, jsAction) {
    if (event) event.preventDefault();
    // Default fallback to open the homepage if it's a dynamic JS session route
    let finalUrl = 'https://www.ktrwa.or.kr/';

    if (jsAction && jsAction.startsWith('http')) {
        finalUrl = jsAction;
    } else if (jsAction && jsAction.startsWith('/')) {
        finalUrl = 'https://www.ktrwa.or.kr' + jsAction;
    }

    window.open(finalUrl, '_blank');
    return false;
};
