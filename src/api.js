export const GeoApiOption = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${process.env.REACT_APP_RAPID_API_KEY}`,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URI = `https://wft-geo-db.p.rapidapi.com/v1/geo/`;

export const Openweathermap_url = `https://api.openweathermap.org/data/2.5/`;

// export const Api = fetch(
//   `https://api.openweathermap.org/data/2.5/weather?lat=6.465422&lon=3.406448&appid=529d739f1d83c534eecf73adc3e4d27f`
// )
//   .then((response) => console.log(response.json()))
//   .catch((err) => console.log(err));
