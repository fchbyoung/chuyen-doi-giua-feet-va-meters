function convertFeetToMeters() {
    let meters = document.getElementById('feet').value;
    document.getElementById('result').innerHTML = " = " + (0.305 * meters) + " Meters";
}

function convertMetersToFeet() {
    let feet = document.getElementById('meters').value;
    document.getElementById('result2').innerHTML = " = " + (3.279 * feet) + " Feet";
}