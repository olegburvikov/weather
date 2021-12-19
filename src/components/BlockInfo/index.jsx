import stylesBlockInfo from "./styles.module.scss";
import { ReactComponent as Cloud } from "../../assets/icons/cloud.svg";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import Buttons from "../Buttons/index";

export default function BlockInfo() {
  return (
    <div className={stylesBlockInfo.block}>
      <div className={stylesBlockInfo.degrees}>14</div>
      <div className={stylesBlockInfo.cloud}>
        <Cloud />
      </div>
      <div className={stylesBlockInfo.added}>
        <div className={stylesBlockInfo.city}>Aktobe</div>
        <button className={stylesBlockInfo.heart}>
          <Heart />
        </button>
      </div>
      <Buttons />
    </div>
  );
}
