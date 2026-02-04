const lastUpdate = document.getElementById("last-update");

const pad = (value) => value.toString().padStart(2, "0");

const updateTimestamp = () => {
  const now = new Date();
  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());
  lastUpdate.textContent = `${hours}:${minutes}:${seconds} IST`;
};

updateTimestamp();
setInterval(updateTimestamp, 1000);
