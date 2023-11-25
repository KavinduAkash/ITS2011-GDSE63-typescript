// objects
var btn_element = document.getElementById('btn');
var location1_lat_input_element = document.getElementById('lat1');
var location1_lon_input_element = document.getElementById('lon1');
var location2_lat_input_element = document.getElementById('lat2');
var location2_lon_input_element = document.getElementById('lon2');
var result_element = document.getElementById('result');
var student;
student = { id: 1, name: 'Kavindu', age: 28, college: 'UoBolton' };
// student = {id: 1, name: 'Kavindu', age: 28, college: 'UoBolton', subject: "SE"};
// student = 10;
//------------------------------- Distance Calculator ------------------------------------
function calcDistance(location1, location2) {
    var lon1 = location1.lon;
    var lat1 = location1.lat;
    var lon2 = location2.lon;
    var lat2 = location2.lat;
    // ---- calc distance  ----
    var dLat = lat2 - lat1;
    var dLon = lon2 - lon1;
    var a = Math.pow(Math.sin(dLat / 2), 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dLon / 2), 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    // Radius of the Earth in kilometers (mean value)
    var R = 6371;
    // Calculate the distance
    var distance = R * c;
    // ---- calc distance  ----
    return distance;
}
var location_1 = { lon: 80.7718, lat: 7.8731 }; // sri lanka
var location_2 = { lon: 133.7751, lat: 25.2744 }; // ausi
var distance = calcDistance(location_1, location_2);
console.log("Distance: ".concat(distance.toFixed(2), " KM"));
btn_element.addEventListener('click', function () {
    var location1_lat = location1_lat_input_element.value;
    var location1_lon = location1_lon_input_element.value;
    var location2_lat = location2_lat_input_element.value;
    var location2_lon = location2_lon_input_element.value;
    var location1 = { lon: +location1_lon, lat: +location1_lat };
    var location2 = { lon: +location2_lon, lat: +location2_lat };
    var distance = calcDistance(location1, location2);
    result_element.innerText = "".concat(distance.toFixed(2), " KM");
});
