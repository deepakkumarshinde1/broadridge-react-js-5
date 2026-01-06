import axios from "axios";
import { useEffect, useState } from "react";

function Input(props) {
  let { setCites, cites } = props;
  let [text, setText] = useState("Nashik");

  let getWeatherData = async () => {
    try {
      if (text.trim().length == 0) {
        return false;
      }
      let API_KEY = "338d7049189196fba6402362a0f256f2";
      let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${text}&appid=${API_KEY}`;
      let response = await axios.get(url);
      setCites([response.data, ...cites]);
      // alert("Weather data found");
      setText("");
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);
  return (
    <>
      {/* <!-- Search Section --> */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter city name"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button className="search-btn" onClick={getWeatherData}>
          <i className="fa fa-search"></i>
          Get Weather
        </button>
      </div>
    </>
  );
}

export default Input;
