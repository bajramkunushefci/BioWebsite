// Fig. 11.12: datetime.js
// Date and Time methods of the Date object.
function start()
{

var current = new Date();
document.getElementById("strings").innerHTML=
"<p>toString: " + current.toString() + "</p>" +
"<p>toLocaleString: " + current.toLocaleString() + "</p>" +
"<p>toUTCString: " + current.toUTCString() + "</p>" +
"<p>valueOf: " + current.valueOf() + "</p>";

//methods
document.getElementById("getMethods").innerHTML =
"<p>getDate: " + current.getDate() + "</p>" +
"<p>getDay: " + current.getDay() + "</p>" +
"<p>getMonth: " + current.getMonth() + "</p>" +
"<p>getFullYear: " + current.getFullYear() + "</p>" +
"<p>getTime: " + current.getTime() + "</p>" +
"<p>getHours: " + current.getHours() + "</p>" +
"<p>getMinutes: " + current.getMinutes() + "</p>" +
"<p>getSeconds: " + current.getSeconds() + "</p>" +
"<p>getMilliseconds: " + current.getMilliseconds() + "</p>" +
"<p>gettimezoneOffset: " + current.getTimezoneOffset() + "</p>";

var anotherDate = new Date(2011, 2, 18, 1, 5, 0, 0);
document.getElementById("newArguments").innerHTML =
	"<p>Date:" + anotherDate + "</p>";

	anotherDate.setDate(31);
	anotherDate.setMonth(11);
	anotherDate.setFullYear(2011);
	anotherDate.setHours(23);
	anotherDate.setMinutes(59);
	anotherDate.setSeconds(59);
	document.getElementById("setMethods").innerHTML =
		"<p>Modified date:" + anotherDate + "</p>";
	}
	window.addEventListener("load", start, false);