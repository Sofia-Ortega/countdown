var countDownDate = new Date("April 20, 2023 18:00:00");

function formatDate(myDate) {
  var days = myDate.getDay();
  var hours = myDate.getHours();
  var minutes = myDate.getMinutes();
  var seconds = myDate.getSeconds();

  return days + "days " + hours + "hours " + minutes + "min " + seconds + "sec";
}

var counter = 0;
setInterval(() => {
  var now = new Date().getTime();
  var distance = countDownDate.getTime() - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("dayTimer").innerHTML = days;
  document.getElementById("hourTimer").innerHTML = hours;
  document.getElementById("minuteTimer").innerHTML = minutes;
  document.getElementById("secondTimer").innerHTML = seconds;
  // document.title = str;
}, 1000);
