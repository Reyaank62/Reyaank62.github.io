function secret() {
    const hour = new Date().getHours();
    const lastShown = localStorage.getItem('nightMessageLastShown');
    const currentTime = new Date().getTime();

    
    const canShow = !lastShown || (currentTime - parseInt(lastShown)) > 300000;

    if (hour >= 0 && hour < 24 && canShow) {
        
        localStorage.setItem('nightMessageLastShown', currentTime.toString());

        
        const message = document.createElement('div');
        message.textContent = "How lovely are the portals of the night, when stars come out to watch the daylight die?";

       
        message.style.position = 'fixed';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.color = 'white';
        message.style.fontSize = '24px';
        message.style.textAlign = 'center';
        message.style.padding = '20px';
        message.style.maxWidth = '80%';
        message.style.backgroundColor = 'transparent';
        message.style.zIndex = '9999';

        document.body.appendChild(message);

        setTimeout(() => {
            document.body.removeChild(message);
        }, 5000);
    }
}


window.addEventListener('load', secret);
