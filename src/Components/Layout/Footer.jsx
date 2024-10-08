import img from "../../images/badge.png";
import "./styles.scss";
import "../../styles/global.scss";

const Footer = () => {
  return (
      <div id="footerCont">
        <div id="footerInner">
          <div id="footerTxt">
            <p className="webfont2">
              Esta página web es creada por Sunny Díaz - 2024
            </p>
          </div>
          <div id="footerImg">
            <img src={img}></img>
          </div>
        </div>
      </div>
  );
};

export default Footer;
