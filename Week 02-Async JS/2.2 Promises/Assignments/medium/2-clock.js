let currentDate = new Date();
let currentTime = {
  hours: currentDate.getHours(),
  minute: currentDate.getMinutes(),
  second: currentDate.getSeconds(),
};
function timeDisplay() {
  setInterval(function () {
    console.clear();
    currentTime.second++;
    if (currentTime.second > 59) {
      currentTime.second = 0;
      currentTime.minute++;
    }
    if (currentTime.minute > 59) {
      currentTime.hours++;
      currentTime.minute = 0;
    }
    if (currentTime.hours > 23) {
      currentTime.hours = 0;
    }
    let str = "";
    if (currentTime.hours < 12) {
      str = "AM";
    } else {
      str = "PM";
    }
    let formattedHours = String(currentTime.hours).padStart(2, "0");
    let formattedMinutes = String(currentTime.minute).padStart(2, "0");
    let formattedSeconds = String(currentTime.second).padStart(2, "0");
    console.log(
      formattedHours +
        ":" +
        formattedMinutes +
        ":" +
        formattedSeconds +
        " " +
        str
    );
  }, 1000);
}
timeDisplay();
//padStart() is used to ensure that the hours, minutes, and seconds are always displayed with two digits.
//This method is useful for formatting numbers so they appear consistently, especially when dealing with time.
