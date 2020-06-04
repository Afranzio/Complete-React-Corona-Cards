import React, { useState } from "react";
import Popup from "./Popups";

const Country = ({
  keys,
  country,
  cases,
  deaths,
  recovered,
  imgs,
  datas
}) => {
  const [show, setShow] = useState(false);
  const [click, setClick] = useState("home");

  const closes = () => {
    setShow(!show);
  }

  const views = e => {
    setShow(!show);
    const a = e.currentTarget.getAttribute("value");
    setClick(a);
  };


  return (
    <div>
      <div key={keys} value={country} className="Card" onClick={views}>
        <h1> {country}</h1>
        <h2>Cases = {cases}</h2>
        <h3 className="Danger">Total_Deaths = {deaths}</h3>
        <h3 className="Success">Total_Recovered = {recovered}</h3>
        <img src={imgs} alt={country} />
      </div>
        <div className="Popupss" style={!show ? { display: "none" } : {}} onClick = {closes}>
          <Popup
            datas={datas}
            data={click}
          />
        </div>
    </div>
  );
};
export default Country;
