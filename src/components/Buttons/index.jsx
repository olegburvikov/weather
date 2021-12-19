import stylesAddCity from "./styles.module.scss";

export default function Buttons() {
  return (
    <div className={stylesAddCity.buttons}>
      <button className={stylesAddCity.item}>Now</button>
      <button className={stylesAddCity.item}>Details</button>
      <button className={stylesAddCity.item}>Forecast</button>
    </div>
  );
}
