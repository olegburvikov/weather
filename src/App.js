import "./globalStyles.scss";
import styles from "./styles.module.scss";
import SearchForm from "./components/Search/index";
import BlockInfo from "./components/BlockInfo/index";
import BlockLocations from "./components/BlockLocations/index";
import { getWeatherCity } from "./services/api";
import { useState } from "react";
import { createId } from "./helpers/idRandom";

function App() {
  const [value, setValue] = useState("");

  const [activeTab, setActiveTab] = useState([
    { label: "Now", state: true },
    { label: "Details", state: false },
    { label: "Forecast", state: false },
  ]);

  const [weather, setWeather] = useState({});

  const [loading, setLoading] = useState(true);

  const [list, setList] = useState([]);

  function onInfoWeatherCity(e) {
    e.preventDefault();

    getWeatherCity(value)
      .then((city) => {
        const { name, main, weather } = city;
        const nowWeather = {
          city: name,
          degrees: Math.floor(main.temp - 273.15),
          icon: weather.map((item) => item.icon).join(),
          id: createId(),
        };

        setLoading(false);
        setWeather(nowWeather);
      })
      .catch((err) =>
        alert(
          `${err}. Something went wrong! Maybe there is no such city? Try again!`
        )
      );
    setValue("");
  }

  function deleteClickLocation(locationId) {
    setList(list.filter((item) => item.id !== locationId));
  }

  function getClickWeatherCity(clickCity) {
    let cityRenwe = null;

    list.map((item) =>
      item.city === clickCity ? (cityRenwe = { ...item, clickCity }) : null
    );

    setWeather(cityRenwe);
  }

  return (
    <div className="App">
      <main className={styles.main}>
        <div className={styles.container}>
          <SearchForm
            value={value}
            onInfoWeatherCity={onInfoWeatherCity}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className={styles.wrapper}>
            <BlockInfo
              loading={loading}
              weather={weather}
              tabs={activeTab}
              onClick={() => setList([...list, weather])}
            />
            <BlockLocations
              list={list}
              deleteClickLocation={deleteClickLocation}
              getClickWeatherCity={getClickWeatherCity}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
