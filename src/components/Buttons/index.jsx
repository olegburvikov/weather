import styles from "./styles.module.scss";

export default function Buttons({ actionButtons }) {
  return (
    <div className={styles.buttons}>
      {actionButtons.map((item) => (
        <button
          key={item.label}
          className={`${styles.button} ${styles.active}`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
