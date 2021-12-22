import "./globalStyles.scss";
import styles from "./styles.module.scss";
import SearchForm from "./components/Search/index";
import BlockInfo from "./components/BlockInfo/index";
import BlockLocations from "./components/BlockLocations/index";
import { getWeatherCity } from "./services/api";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const [activeTab, setActiveTab] = useState("Now");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  function onInfoWeatherCity(e) {
    e.preventDefault();

    getWeatherCity(value)
      .then((city) => {
        const { name, main, weather } = city;
        setWeather({
          city: name,
          degrees: Math.floor(main.temp - 273.15),
          icon: weather.map((item) => item.icon).join(),
        });
        setLoading(false);
        setValue("");
      })
      .catch((err) =>
        alert(
          `${err}. Something went wrong! Maybe there is no such city? Try again!`
        )
      );
  }

  function handleDeleteClick(city) {
    setFavorites(prevState => prevState.filter((item) => item !== city));
  }

  function handleCityClick() {
    // ...
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
              isFavorite={favorites.includes(weather?.city)}
              loading={loading}
              weather={weather}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              setFavorites={setFavorites}
            />
            <BlockLocations
              favorites={favorites}
              onCityClick={handleCityClick}
              onDeleteClick={handleDeleteClick}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
