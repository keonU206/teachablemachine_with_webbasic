function updateClock() {
  var now = new Date();
  var date = now.toDateString();
  var time = now.toLocaleTimeString();

  document.getElementById("date").textContent = "DATE: " + date;
  document.getElementById("clock").textContent = "TIME: " + time;

  setTimeout(updateClock, 1000);
}

window.onload = updateClock;
