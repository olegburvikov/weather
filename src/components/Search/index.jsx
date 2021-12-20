import stylesForm from "./styles.module.scss";
import { ReactComponent as Loupe } from "../../assets/icons/loupe.svg";

export default function Search({ onInfoWeatherCity, value, onChange }) {
  return (
    <form onSubmit={onInfoWeatherCity}>
      <input
        value={value}
        onChange={onChange}
        className={stylesForm.input}
        placeholder="City"
      />
      <button onClick={onInfoWeatherCity} className={stylesForm.loupe}>
        <Loupe />
      </button>
    </form>
  );
}
