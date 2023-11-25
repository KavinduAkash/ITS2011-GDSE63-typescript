// objects
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
