// Update Date and Time with Emojis Only
function updateDateTime() {
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  const timeStr = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
  document.getElementById("current-date").innerText = "📅 " + dateStr;
  document.getElementById("current-time").innerText = "⏰ " + timeStr;
}

setInterval(updateDateTime, 1000);
updateDateTime();

// Update Fuel Prices (Hard-coded for demonstration)
function updateFuelPrices() {
  const data = {
    date: "February 16, 2025",
    diesel: "3400 MMK",
    octane92: "3300 MMK",
    premiumDiesel: "3450 MMK",
    octane95: "3370 MMK"
  };

  document.getElementById("dieselPrice").innerText = data.diesel;
  document.getElementById("octane92Price").innerText = data.octane92;
  document.getElementById("premiumDieselPrice").innerText = data.premiumDiesel;
  document.getElementById("octane95Price").innerText = data.octane95;
  document.getElementById("effective-date").innerText = data.date;
}

updateFuelPrices();
// Optionally, auto-refresh fuel prices every 60 seconds:
// setInterval(updateFuelPrices, 60000);
