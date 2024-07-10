/************************************************************************\
                              set TUC time
\************************************************************************/
let utc = 2;
let currentDate = new Date();
currentDate.setTime(currentDate.getTime() + currentDate.getTimezoneOffset() * 60 * 1000 + (/* UTC+2 */ utc) * 60 * 60 * 1000);
let currentDay = currentDate.getDay();
let currentHour = currentDate.getHours();
let checkIn = document.getElementById("check-in");
let checkOut = document.getElementById("check-out");

function openClose() {

   if (currentHour >= 15 && currentHour <= 21) {

      checkIn.style.color = "green";
   } else {

      checkIn.style.color = "red";
   }

   if (currentHour >= 7 && currentHour <= 10) {

      checkOut.style.color = "green";

   } else {

      checkOut.style.color = "red";
   }
}

setInterval(openClose(), 5000)
