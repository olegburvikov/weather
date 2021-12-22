import styles from "./styles.module.scss";
import { ReactComponent as Cloud } from "../../assets/icons/cloud.svg";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import { ReactComponent as Deg } from "../../assets/icons/deg.svg";
import Buttons from "../Buttons/index";

export default function BlockInfo({ loading, weather, tabs, onClick }) {
  if (!loading) {
    return (
      <div className={styles.block}>
        <div className={styles.temp}>
          <div className={styles.degrees}>{weather.degrees}</div>
          <div className={styles.celsius}>
            <Deg />
          </div>
        </div>
        <div className={styles.icon}>
          <img
            src={`https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/${weather.icon}.png`}
            alt="icon weather"
          ></img>
        </div>
        <div className={styles.added}>
          <div className={styles.city}>{weather.city}</div>
          <button onClick={onClick} className={styles.heart}>
            <Heart />
          </button>
        </div>

        <Buttons actionButtons={tabs} />
      </div>
    );
  } else {
    return (
      <div className={styles.block}>
        <div className={styles.message}>
          Write city...
          <div className={styles.cloud}>
            <Cloud />
          </div>
        </div>
        <Buttons actionButtons={tabs} />
      </div>
    );
  }
}
