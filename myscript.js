myFunction();

function myFunction() {
var d = new Date();
var weekday = new Array();
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];

var date2 = new Date();
var weekday2 = new Array();
weekday2[0]=  "Time to relax!";
weekday2[1] = "Prepare for work - have a nice week!";
weekday2[2] = "Push your limits!";
weekday2[3] = "consolidate your agression";
weekday2[4] = "introspect your efforts";
weekday2[5] = "revisit the plan!";
weekday2[6] = "Time to party!.";

var n2 = weekday2[date2.getDay()]

document.getElementById("weekday").innerHTML = n;
document.getElementById("phrase").innerHTML = n2;
        


}



