// objects

let btn_element = document.getElementById('btn');

let location1_lat_input_element = document.getElementById('lat1') as HTMLInputElement;
let location1_lon_input_element = document.getElementById('lon1') as HTMLInputElement;

let location2_lat_input_element = document.getElementById('lat2') as HTMLInputElement;
let location2_lon_input_element = document.getElementById('lon2') as HTMLInputElement;

let result_element = document.getElementById('result');

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


btn_element.addEventListener('click', () => {
  let location1_lat = location1_lat_input_element.value;
  let location1_lon = location1_lon_input_element.value;
  let location2_lat = location2_lat_input_element.value;
  let location2_lon = location2_lon_input_element.value;

  let location1 = { lon: +location1_lon, lat: +location1_lat };
  let location2 = { lon: +location2_lon, lat: +location2_lat };

  let distance = calcDistance(location1, location2);

  result_element.innerText = `${distance.toFixed(2)} KM`;
});
