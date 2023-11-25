// objects

let student: {
  id: number;
  name: string;
  age: number;
  college: string;
};

student = {id: 1, name: 'Kavindu', age: 28, college: 'UoBolton'};
// student = {id: 1, name: 'Kavindu', age: 28, college: 'UoBolton', subject: "SE"};
// student = 10;

//------------------------------- Distance Calculator ------------------------------------

function calcDistance(location1: {lon: number; lat: number}, location2: {lon: number; lat: number}) {

  let lon1 = location1.lon;
  let lat1 = location1.lat;

  let lon2 = location2.lon;
  let lat2 = location2.lat;


  // ---- calc distance  ----
  const dLat = lat2 - lat1;
  const dLon = lon2 - lon1;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Radius of the Earth in kilometers (mean value)
  const R = 6371;

  // Calculate the distance
  let distance = R * c;
// ---- calc distance  ----

  return distance;

}

let location_1 = { lon: 80.7718, lat: 7.8731 }; // sri lanka
let location_2 = { lon: 133.7751, lat: 25.2744 }; // ausi

let distance = calcDistance(location_1, location_2);
console.log(`Distance: ${distance.toFixed(2)} KM`);