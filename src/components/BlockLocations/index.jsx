import styles from "./styles.module.scss";
import { ReactComponent as Remove } from "../../assets/icons/remove.svg";

export default function BlockLocations({
   favorites,
   onCityClick,
   onDeleteClick
}) {
  if (favorites.length) {
    return (
      <div className={styles.block}>
        <div className={styles.text}>Added Locations:</div>
        <ul className={styles.locations}>
          {favorites.map((city) => (
            <li
              onClick={() => onCityClick(city)}
              key={city}
              className={styles.li}
            >
              {city}
              <button
                onClick={() => onDeleteClick(city)}
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
