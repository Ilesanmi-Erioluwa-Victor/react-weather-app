export const GeoApiOption = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${process.env.REACT_APP_RAPID_API_KEY}`,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URI = `https://wft-geo-db.p.rapidapi.com/v1/geo`;

export const Openweathermap_url = `https://api.openweathermap.org/data/2.5/`;
