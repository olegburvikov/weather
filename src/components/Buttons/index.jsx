import styles from "./styles.module.scss";

export default function Buttons({ tabs, activeTab, onClick }) {
  return (
    <div className={styles.buttons}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onClick(tab)}
          className={`${styles.button} ${tab === activeTab ? styles.active : ''}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
