// Update Time & Date
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    const dateString = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    
    document.getElementById("time").innerText = timeString;
    document.getElementById("date").innerText = dateString;
}

setInterval(updateTime, 1000);
updateTime();

// Fetch Fuel Prices
fetch("fuel-prices.json")
    .then(response => response.json())
    .then(data => {
        document.querySelector("#diesel p").innerText = `${data.diesel} MMK`;
        document.querySelector("#octane92 p").innerText = `${data.octane92} MMK`;
        document.querySelector("#premiumDiesel p").innerText = `${data.premiumDiesel} MMK`;
        document.querySelector("#octane95 p").innerText = `${data.octane95} MMK`;
        document.getElementById("effective-date").innerText = data.date;
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        document.querySelectorAll(".rate p").forEach(el => el.innerText = "Failed to Load");
    });
