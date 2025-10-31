function secret() {
    const hour = new Date().getHours();
    // Check if message has already been shown (stored in localStorage)
    const hasBeenShown = localStorage.getItem('nightMessageShown');

    if (hour >= 0 && hour < 6 && !hasBeenShown) {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'black';
        overlay.style.zIndex = '9999';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';

       
        const message = document.createElement('div');
        message.textContent = "How lovely are the portals of the night, when stars come out to watch the daylight die?";
        message.style.color = 'white';
        message.style.fontSize = '24px';
        message.style.textAlign = 'center';
        message.style.padding = '20px';

        overlay.appendChild(message);
        document.body.appendChild(overlay);

        
        localStorage.setItem('nightMessageShown', 'true');

        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 5000);
    }
}


window.addEventListener('load', secret);