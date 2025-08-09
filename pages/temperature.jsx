import React, { useEffect, useState } from "react";

export default function Temperature() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    fetch("https://Sayayay.pythonanywhere.com/temperature")
      .then(res => res.json())
      .then(data => setTemperature(data["temperature in your house"]))
      .catch(err => console.error("You messed up code is: ", err));
  }, []);

  return (
    <div>
      <h1>temperatur data</h1>
      {temperature !== null ? (
        <p>Current temperature in your house: {temperature} °C</p>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}