// --- PART 1 ---
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const btnGreet = document.getElementById("btnGreet");
const greetingOutput = document.getElementById("greetingOutput");

btnGreet.addEventListener("click", () => {
    const name = nameInput.value;
    const age = (ageInput.value);
    const lines = [];

    lines.push("SYSTEM NOTICE: GREETING SEQUENCE INITIATED");
    lines.push(`USER IDENTIFIED: ${name}`);
    if (age < 13) {
        lines.push(`AGE CHECK: ${age} YEARS OLD`);
        lines.push("STATUS: MINOR DETECTED -- ACCESS DENIED");
    } else {
        lines.push(`AGE CHECK: ${age} YEARS OLD`);
        lines.push("STATUS: ADULT CONFIRMED -- CONTINUE");
    }

    greetingOutput.textContent = "";

    lines.forEach((line, i) => {
        setTimeout(() => {
            greetingOutput.textContent += line + "\n";
        }, i * 500);
    });
});

// --- PART 2 ---
const colorInput = document.getElementById("colorInput");
const volumeInput = document.getElementById("volumeInput");
const colorOutput = document.getElementById("colorOutput");

function updateColorOutput() {
    let color = colorInput.value;
    let volume = volumeInput.value;
    colorOutput.textContent = `COLOR: ${color}, VOLUME: ${volume}`;
    colorOutput.style.backgroundColor = color;

    document.body.style.backgroundColor = color;
}
colorInput.addEventListener("input", updateColorOutput);
volumeInput.addEventListener("input", updateColorOutput);

// --- PART 3 ---
const subscribeBox = document.getElementById("subscribeBox");
const btnSubmit = document.getElementById("btnSubmit");
const modeOutput = document.getElementById("modeOutput");
const btnContinue = document.getElementById("btnContinue");

btnSubmit.addEventListener("click", () => {
    let modes = document.querySelector('input[name="mode"]:checked').value.toUpperCase();
    let isSubscribed = subscribeBox.checked;
    const age = parseInt(ageInput.value);
    const ageCheck = age >= 13 ? "CONFIRMED" : "DENIED";
    let messageLines = [
        `SELECTED MODE: ${modes}`,
        `SUBSCRIPTION STATUS: ${isSubscribed ? "TRUE" : "FALSE"}`,
        `AGE VERIFICATION: ${ageCheck}`,
    ];
    modeOutput.textContent = "";
    modeOutput.textContent += "SYSTEM NOTICE: AUTH SEQUENCE INITIATED\n";
    modeOutput.textContent += "EVALUATING ACCESS CONDITIONS...\n";

    messageLines.forEach((line, i) => {
        setTimeout(() => {
            modeOutput.textContent += line + "\n";
        }, 1000 + i * 500);
    });

    setTimeout(() => {
        modeOutput.textContent = "FINALIZING ACCESS CHECK";
        let dotCount = 0;
        const dotInterval = setInterval(() => {
            dotCount = (dotCount % 3) + 1;
            modeOutput.textContent = "FINALIZING ACCESS CHECK" + ".".repeat(dotCount);
        }, 400);
        setTimeout(() => {
            clearInterval(dotInterval);
        }, 2500);
    }, 1000 + messageLines.length * 500 + 800);

    setTimeout(() => {
        if (age >= 13 && isSubscribed && modes === "DARK") {
            btnContinue.style.display = "inline-block";
            accessGranted.style.display = "block";
        } else {
            btnContinue.style.display = "none";
            accessGranted.style.display = "none";
            modeOutput.textContent += "\nACCESS STATUS: DENIED\n";
        }
    }, 1000 + messageLines.length * 500 + 800 + 2500);
});