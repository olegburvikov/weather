import "./globalStyles.scss";
import "./globalStyles.scss";
import stylesMain from "./styles.module.scss";
import SearchForm from "./components/Search/index";
import BlockInfo from "./components/BlockInfo/index";
import BlockLocations from "./components/BlockLocations/index";

function App() {
  return (
    <div className="App">
      <main className={stylesMain.main}>
        <div className={stylesMain.container}>
          <SearchForm />
          <div className={stylesMain.wrapper}>
            <BlockInfo />
            <BlockLocations />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
