const convertToCelsius = function(x) {
  let fiveninths = Number(5/9);
  let minus32 = Number(x) - 32;
  let converted = minus32 * fiveninths;
  return Math.round(converted * 10) / 10;
};

const convertToFahrenheit = function(y) {
  // Fahrenheit (°F) = (Temperature in degrees Celsius (°C) * 9/5) + 32.
  let ninefifths = Number(y * 9/5);
  let converted = 32 + ninefifths;
  return Math.round(converted * 10) / 10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
