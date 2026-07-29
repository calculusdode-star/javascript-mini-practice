const temperature = 90;


if (temperature >= 120) {

    console.log("Emergency shutdown");

}
else if (temperature >= 100) {

    console.log("Warning: High temperature");

}
else if (temperature >= 80) {

    console.log("Temperature normal");

}
else {

    console.log("Engine cold");

}