import stylesLocations from "./styles.module.scss";

export default function BlockLocations() {
  return (
    <div className={stylesLocations.block}>
      <div className={stylesLocations.text}>Added Locations:</div>
      <ul className={stylesLocations.locations}>
        <li className={stylesLocations.item}>Bali</li>
        <li className={stylesLocations.item}>Bali</li>
        <li className={stylesLocations.item}>Bali</li>
        <li className={stylesLocations.item}>Bali</li>
        <li className={stylesLocations.item}>Bali</li>
        <li className={stylesLocations.item}>Bali</li>
        <li className={stylesLocations.item}>Bali</li>
        <li className={stylesLocations.item}>Bali</li>
        <li className={stylesLocations.item}>Bali</li>
        <li className={stylesLocations.item}>Bali</li>
        <li className={stylesLocations.item}>Bali</li>
      </ul>
    </div>
  );
}
