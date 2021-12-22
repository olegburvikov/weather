import styles from "./styles.module.scss";
import { ReactComponent as Remove } from "../../assets/icons/remove.svg";

export default function BlockLocations({
  list,
  deleteClickLocation,
  getClickWeatherCity,
}) {
  if (list.length) {
    return (
      <div className={styles.block}>
        <div className={styles.text}>Added Locations:</div>
        <ul className={styles.locations}>
          {list.map((item) => (
            <li
              onClick={() => getClickWeatherCity(item.city)}
              key={item.id}
              className={styles.li}
            >
              {item.city}
              <button
                onClick={() => deleteClickLocation(item.id)}
                className={styles.remove}
              >
                <Remove />
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div className={styles.block}>
        <div className={styles.text}>Added Locations:</div>
        <ul className={styles.locations}>
          <div className={styles.message}>No cities added</div>
        </ul>
      </div>
    );
  }
}
