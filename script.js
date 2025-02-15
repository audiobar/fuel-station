document.addEventListener("DOMContentLoaded", function () {
    function updateDateTime() {
        let now = new Date();
        let date = now.toLocaleDateString();
        let time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        
        document.getElementById("current-date").textContent = date;
        document.getElementById("current-time").textContent = time;
    }

    updateDateTime();
    setInterval(updateDateTime, 1000); // ✅ Update every second

    function updateFuelPrices() {
        // ✅ Simulated data fetch (Replace with API if needed)
        setTimeout(() => {
            document.getElementById("diesel-price").textContent = "2150 MMK";
            document.getElementById("octane92-price").textContent = "2250 MMK";
            document.getElementById("premium-diesel-price").textContent = "2300 MMK";
            document.getElementById("octane95-price").textContent = "2400 MMK";
        }, 1500); // ✅ Simulate 1.5-second loading
    }

    updateFuelPrices();
});
