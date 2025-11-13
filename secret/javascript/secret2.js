setTimeout(() => {
    let secretBtn = document.getElementById('secret-btn1');
    if (secretBtn) {
        secretBtn.style.display = 'block';
    }
}, 5);

document.getElementById("secret-btn1").onclick = function () {
    window.location.href = "/secret/html/secret2.html";
}

