import "./globalStyles.scss";
import stylesMain from "./styles.module.scss";
import SearchForm from "./components/Search/index";
import BlockInfo from "./components/BlockInfo/index";
import BlockLocations from "./components/BlockLocations/index";
import { getWeatherCity } from "./services/api";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [activeTab, setActiveTab] = useState("Now");
  const [tabNow, setTabNow] = useState({});

  function onInfoWeatherCity(e) {
    e.preventDefault();

    getWeatherCity(value).then((city) => {
      console.log(city);
      setTabNow({ city: city.name, degrees: city.main.temp });
    });

    setValue("");
  }

  return (
    <div className="App">
      <main className={stylesMain.main}>
        <div className={stylesMain.container}>
          <SearchForm
            value={value}
            onInfoWeatherCity={onInfoWeatherCity}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className={stylesMain.wrapper}>
            <BlockInfo tabNow={tabNow} activeTab={activeTab} />
            <BlockLocations />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
