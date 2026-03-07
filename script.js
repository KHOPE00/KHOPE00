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
        if(hero && scrolled < 500) {
            hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
        }
    });
});
