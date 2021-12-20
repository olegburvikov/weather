import stylesInfo from "./styles.module.scss";
import { ReactComponent as Cloud } from "../../assets/icons/cloud.svg";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import { ReactComponent as Deg } from "../../assets/icons/deg.svg";
import Buttons from "../Buttons/index";

export default function BlockInfo({ activeTab, tabNow }) {
  return (
    <div className={stylesInfo.block}>
      <div className={stylesInfo.temp}>
        <div className={stylesInfo.degrees}>{tabNow.degrees}</div>
        <div className={stylesInfo.celsius}>
          <Deg />
        </div>
      </div>
      <div className={stylesInfo.cloud}>
        <Cloud />
      </div>
      <div className={stylesInfo.added}>
        <div className={stylesInfo.city}>{tabNow.city}</div>
        <button className={stylesInfo.heart}>
          <Heart />
        </button>
      </div>
      <Buttons tab={activeTab} />
    </div>
  );
}
