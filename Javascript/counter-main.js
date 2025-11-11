
const bellSchedule = {
    monday: {
        1: { end: "09:15" },
        2: { end: "10:10" },
        3: { end: "11:10" },
        4: { end: "12:05" },
        5: { end: "13:35" },
        6: { end: "14:30" },
        7: { end: "15:25" },
    },
    tuesday: {
        1: { end: "10:00" },
        2: { end: "11:40" },
        3: { end: "13:55" },
        4: { end: "15:35" },
    },
    wednesday: {
        5: { end: "10:00" },
        6: { end: "11:40" },
        7: { end: "13:55" },
        8: { end: "14:55" },
    },
    thursday: {
        1: { end: "10:00" },
        2: { end: "11:40" },
        3: { end: "13:55" },
        4: { end: "15:35" },
    },
    friday: {
        5: { end: "10:00" },
        6: { end: "11:40" },
        7: { end: "13:55" },
        8: { end: "14:55" },
    },
};


let countdownInterval = null;


start.onclick = function () {
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    let dayText = dayinput.value.toLowerCase()
    let periodText = periodinput.value;

    if (!bellSchedule[dayText] || !bellSchedule[dayText][periodText]) {
        return;
    }

    function updateCountdown() {
        const now = new Date()
        let timeString = bellSchedule[dayText][periodText].end
        let target = new Date()

        let parts = timeString.split(":")
        let hours = parseInt(parts[0])
        let minutes = parseInt(parts[1])

        target.setHours(hours);
        target.setMinutes(minutes);
        target.setSeconds(0);
        target.setMilliseconds(0);

        const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        const currentDay = now.getDay();
        const targetDayIndex = daysOfWeek.indexOf(dayText);

        let daysUntilTarget = targetDayIndex - currentDay;

        if (daysUntilTarget === 0) {
            if (target < now) {
                daysUntilTarget = 7;
            }
        }
        else if (daysUntilTarget < 0) {
            daysUntilTarget += 7;
        }

        target.setDate(target.getDate() + daysUntilTarget);

        let diff = target - now
        let daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24))
        let hoursLeft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        let secondsLeft = Math.floor((diff % (1000 * 60)) / 1000)
        countdown.value = daysLeft + "d " + hoursLeft + "h " + minutesLeft + "m " + secondsLeft + "s"
    }

    updateCountdown()
    countdownInterval = setInterval(updateCountdown, 1000)
}