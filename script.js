// Function to update date and time
function updateDateTime() {
    const now = new Date();
    document.getElementById("currentDate").innerText = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById("currentTime").innerText = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
}

// Auto update time every second
setInterval(updateDateTime, 1000);
updateDateTime(); // Run immediately

// Function to fetch fuel prices
function fetchFuelPrices() {
    fetch("https://raw.githubusercontent.com/audiobar/fuel-station/main/fuel-prices.json")
        .then(response => response.json())
        .then(data => {
            document.querySelector("#diesel .price").innerText = `${data.diesel} MMK`;
            document.querySelector("#octane92 .price").innerText = `${data.octane92} MMK`;
            document.querySelector("#premiumDiesel .price").innerText = `${data.premiumDiesel} MMK`;
            document.querySelector("#octane95 .price").innerText = `${data.octane95} MMK`;
            document.getElementById("updateDate").innerText = data.date;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            document.querySelectorAll(".price").forEach(el => el.innerText = "Failed to Load");
        });
}

// Fetch prices every 60 seconds
setInterval(fetchFuelPrices, 60000);
fetchFuelPrices(); // Run immediately
