function updateTime() {
  const el = document.getElementById("time");
  if (!el) return;

  const d = new Date();

  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  const day = days[d.getDay()];
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const date = String(d.getDate()).padStart(2, "0");
  const hours = String(d.getHours()).padStart(2, "0");
  const mins = String(d.getMinutes()).padStart(2, "0");
  const secs = String(d.getSeconds()).padStart(2, "0");

  el.textContent = `${day} ${month}/${date} ${hours}:${mins}:${secs}`;
}

setInterval(updateTime, 1000);
updateTime();
