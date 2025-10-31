function secret() {
    const hour = new Date().getHours();

    if (hour >= 0 && hour < 6) {
        const message = document.createElement('div');
        message.textContent = "How lovely are the portals of the night, when stars come out to watch the daylight die?";

        message.style.position = 'fixed';
        message.style.bottom = '20px';
        message.style.right = '20px';
        message.style.color = 'white';
        message.style.padding = '10px';
        message.style.backgroundColor = 'transparent';
        message.style.zIndex = '9999';

        document.body.appendChild(message);
    }
}

window.addEventListener('load', secret);
