import React from "react";

const Popup = ({ datas, data}) => {
  if (data !== "home" && data !== "") {
    const list = datas.map(a => a.country);

    const index = list.indexOf(data);

    const country = datas[index];

    return (
      <div className="all">
        <div className="pops">
          <h1>{country.country}</h1>
          <h2>Cases = {country.cases}</h2>
          <h3>Today Cases = {country.todayCases}</h3>
          <h3>Active Cases = {country.active}</h3>
          <h3>Deaths = {country.deaths}</h3>
          <h3>Today Deaths = {country.todayDeaths}</h3>
          <h3>Recovered = {country.recovered}</h3>
          <h3>Critical Cases = {country.critical}</h3>
          <h3>Cases/OneMillion = {country.casesPerOneMillion}</h3>
          <h3>Deaths/OneMillion = {country.deathsPerOneMillion}</h3>
          <h3>Populations = {country.population}</h3>
          <h3>Tests Taken = {country.tests}</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Close Kindly</h1>
      </div>
    );
  }
};

export default Popup;
