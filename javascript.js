
    // JavaScript for Countdown Timer
    const targetDate = new Date('2025-01-30T00:00:00').getTime(); // Change this to your desired date
    const countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `
                ${days}d ${hours}h ${minutes}m ${seconds}s
            `;
        } else {
            countdownElement.innerHTML = "We're live now!";
        }
    }

    // Update the countdown every second
    setInterval(updateCountdown, 1000);
