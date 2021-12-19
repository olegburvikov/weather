import stylesBlockLocations from "./styles.module.scss";

export default function BlockLocations() {
  return (
    <div className={stylesBlockLocations.block}>
      <div className={stylesBlockLocations.text}>Added Locations:</div>
      <ul className={stylesBlockLocations.locations}>
        <li className={stylesBlockLocations.item}>Bali</li>
        <li className={stylesBlockLocations.item}>Bali</li>
        <li className={stylesBlockLocations.item}>Bali</li>
        <li className={stylesBlockLocations.item}>Bali</li>
        <li className={stylesBlockLocations.item}>Bali</li>
        <li className={stylesBlockLocations.item}>Bali</li>
        <li className={stylesBlockLocations.item}>Bali</li>
        <li className={stylesBlockLocations.item}>Bali</li>
        <li className={stylesBlockLocations.item}>Bali</li>
        <li className={stylesBlockLocations.item}>Bali</li>
        <li className={stylesBlockLocations.item}>Bali</li>
      </ul>
    </div>
  );
}
