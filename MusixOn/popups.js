//Clock-function for greeting
function clock() {
    var date = new Date();
    var hours = date.getHours();

    hours = updateTime(hours);
    var name = "Harshvardhan Singh";

    if (hours < 12) {
        var greeting = "Good Morning " + name;
    }
    else if (hours >= 12 && hours < 18) {
        var greeting = "Good Afternoon " + name;
    }
    else if (hours >= 18 && hours <= 24) {
        var greeting = "Good Evening " + name;
    }
    document.getElementById("greeting").innerHTML = greeting;
}

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    } else {
        return k;
    }
}
clock();

