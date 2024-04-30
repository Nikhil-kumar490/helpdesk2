// Set the target date for the countdown (in UTC milliseconds)
const targetDate = new Date('2024-05-02T10:00:00Z').getTime(); // Adjusted for Indian Standard Time (IST)

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    // Get the current date and time in Indian Standard Time (IST)
    const nowIST = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    const now = new Date(nowIST).getTime();
    
    // Calculate the difference between the target date and the current date
    const difference = targetDate - now;
    
    // Check if the countdown has reached zero
    if (difference <= 0) {
        clearInterval(countdownInterval); // Stop the countdown
        document.getElementById('countdownmath').innerHTML = 'Countdown ended!';
        return;
    }
    
    // Calculate remaining time
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Display the countdown
    document.getElementById('countdownmath').innerHTML = `Exam in : ${days}d ${hours}h ${minutes}m ${seconds}s`;
}