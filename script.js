// Auto Update Time
function updateTime() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  document.getElementById("timeDisplay").textContent = "Current Time: " + timeStr;
}

// 1-second interval for time
setInterval(updateTime, 1000);
updateTime();

// Hard-coded Fuel Prices
document.getElementById("dieselPrice").textContent = "2125 MMK";
document.getElementById("octane92Price").textContent = "2125 MMK";
document.getElementById("premiumDieselPrice").textContent = "2150 MMK";
document.getElementById("octane95Price").textContent = "2900 MMK";
