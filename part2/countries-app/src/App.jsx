import { useEffect, useState } from "react";
import getCountries from "./services/get_countries";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountryName, setSelectedCountryName] = useState(null);

  useEffect(() => {
    getCountries.getAll().then((response) => {
      setCountries(response.data);
      console.log(response.data);
    });
  }, []);

  const handlerSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.official.includes(search.toLowerCase())
  );

  const handleShowDetails = (countryName) => {
    setSelectedCountryName(selectedCountryName === countryName ? null : countryName);
  }

  return (
    <>
      <h1>Countries</h1>
      <div>
        <label>
          Find countries: <input type="text" onChange={handlerSearch} />
        </label>
      </div>
      <div>
        <ul>
          {filteredCountries.length < 10 ? (
            filteredCountries.length === 1 ? (
              filteredCountries.map((country) => (
                <li key={country.name.common}>
                  <h2>{country.name.official}</h2>
                  <p>Capital: {country.capital}</p>
                  <p>Population: {country.population}</p>
                  <h3>Languages</h3>
                  <ul>
                    {Object.values(country.languages).map((language) => (
                      <li key={language}>{language}</li>
                    ))}
                  </ul>
                  <img
                    src={country.flags.png}
                    alt={`Flag of ${country.name.common}`}
                    width="200"
                  />
                </li>
              ))
            ) : (
              filteredCountries.map((country) => (
                <li key={country.name.common}>
                  <p>
                    {country.name.official} - {country.name.common} <button onClick={() => handleShowDetails(country.name.common)}>Show</button>
                     {selectedCountryName === country.name.common ? (
                       <div>
                    <h3>{country.name.official}</h3>
                    <p>Capital: {country.capital}</p>
                    <p>Population: {country.population}</p>
                   <h4>Languages</h4>
                   <ul>
                    {Object.values(country.languages).map((language) => (
                      <li key={language}>{language}</li>
                    ))}
                  </ul>
                  <img
                    src={country.flags.png}
                    alt={`Flag of ${country.name.common}`}
                    width="200"
                  />
                </div>
                     ): null}
                        
                  </p>
                </li>
              ))
            )
          ) : (
            <p>Too many matches, specify another filter</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
