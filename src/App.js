import React, { useState, useEffect } from "react";
import Country from "./Components/CountryCards";
import Popup from "./Components/Popups";
import "./styles.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [show, setShow] = useState(true);
  const [pass, setPass] = useState("home");

  useEffect(() => {
    getCountry();
  }, [pass]);

  const getCountry = async () => {
    const response = await fetch(
      "https://corona.lmao.ninja/v2/countries?yesterday&sort"
    );

    const data = await response.json();

    setCountries(data);
  };

  const countryName = countries.map(a => a.country);

  const MakeItem = function(X) {
    return <option key={X} value={X}>{X}</option>;
  };

  const closes = () => {
    setShow(!show);
  };

  const textInput = e => {
    e.preventDefault();
    if (e.target.value !== "--Select The Country--") {
      setPass(e.target.value);
      closes();
    }
    else{
      return null;
    }
  };

  return (
    <div className="App">
      <h1>
        STAY HOME AND SAVE WORLD
        <svg
          className="bi bi-heart-fill"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fillRule="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>
      </h1>
      <form onSubmit = {textInput}>
        <select className="Search-Bar" onChange={textInput}>
          <option value="value" selected disabled hidden>
            --Select The Country--
          </option>
          {countryName.map(MakeItem)}
        </select>
      </form>
      <div className="Cards-Content">
        {countries.map(country => (
          <Country
            key={country.country}
            country={country.country}
            cases={country.cases}
            deaths={country.deaths}
            recovered={country.recovered}
            imgs={country.countryInfo.flag}
            datas={countries}
          />
        ))}
      </div>
      <div
        className="Popupss"
        style={show ? { display: "none" } : {}}
        onClick={closes}
      >
        <Popup datas={countries} data={pass} />
      </div>
    </div>
  );
};

export default App;
