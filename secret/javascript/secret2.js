setTimeout(() => {
    let secretBtn = document.getElementById('secret-btn1');
    if (secretBtn) {
        secretBtn.style.display = 'block';

        secretBtn.onclick = function() {   
            if (Math.random() < 0.65) {
                window.location.href = "secret/html/secret2.html";
            } else {
                window.location.href = "secret/html/secret3.html";
            }
        };
    }
}, 3600000);
