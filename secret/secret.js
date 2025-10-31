let messageShown = false;

function secret() {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 6 && !messageShown) {
        messageShown = true;
        const message = document.createElement('div');
        message.textContent = "How lovely are the portals of the night, when stars come out to watch the daylight die?";

        message.style.all = 'initial';

        message.style.position = 'fixed';
        message.style.bottom = '20px';
        message.style.right = '20px';
        message.style.margin = '0';
        message.style.padding = '10px';
        message.style.backgroundColor = 'black';
        message.style.color = 'white';

        document.body.appendChild(message);

        setTimeout(() => {
            document.body.removeChild(message);
            setTimeout(() => {
                messageShown = false;
            }, 30 * 60 * 1000);
        }, 5000);
    }
}

window.addEventListener('load', secret);

setInterval(secret, 60000);