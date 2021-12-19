import stylesForm from "./styles.module.scss";
import { ReactComponent as Loupe } from "../../assets/icons/loupe.svg";

export default function Search() {
  return (
    <form>
      <input className={stylesForm.input} placeholder="City" />
      <button className={stylesForm.loupe}>
        <Loupe />
      </button>
    </form>
  );
}
