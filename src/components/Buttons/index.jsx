import stylesButtons from "./styles.module.scss";

export default function Buttons({ tab }) {
  return (
    <div className={stylesButtons.buttons}>
      <button className={stylesButtons.button.active}>Now</button>
      <button className={stylesButtons.button}>Details</button>
      <button className={stylesButtons.button}>Forecast</button>
    </div>
  );
}
