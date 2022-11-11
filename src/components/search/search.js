import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URI, GeoApiOption } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOption = (inputValue) => {
    return fetch(
      `${GEO_API_URI}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      GeoApiOption
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleChange = (searchData) => {
    setSearch(searchData);
    // passes the data that we got from input
    onSearchChange(searchData);
  };
  return (
    // AsyncPaginate is an alternative of Async but supports loading page by page
    <AsyncPaginate
      placeholder="Search for the City..."
      debounceTimeout={600}
      value={search}
      onChange={handleChange}
      loadOptions={loadOption}
    />
  );
};

export default Search;
