import amplitudoLogo from "../../../assets/images/logo-footer.svg";
import classes from "./ContactInformation.module.scss";
import logo2 from "../../../assets/images/Group386.png";
import mapOfTheWorld from "../../../assets/images/world-map.svg";
import smile from "../../../assets/images/smile.png";

const ContactInformation = () => {
  return (
    <div className={classes["contact-information"]}>
      <img
        className={classes["contact-information-background"]}
        src={mapOfTheWorld}
        alt="Map of the world"
      />
      <div className={classes["contact-information-indicator"]}>
        <div className={classes.tooltip}>
          <img
            className={classes["logo-image"]}
            src={amplitudoLogo}
            alt="Amplitudo"
          />
          <span>Hello from the center of the world!</span>
          <img className={classes["smiley-image"]} src={smile} alt="Smile" />
        </div>
        <div className={classes.dot}></div>
      </div>
      <div className={classes["contact-information-information"]}>
        <img src={logo2} alt="Amplitudo" />
        <a>
          Boulevard of St. Petar Cetinjski 56
          <br />
          Podgorica, Montenegro
        </a>
        <div className={classes.border}></div>
        <a href="mailto:info@amplitudo.me">info@amplitudo.me</a>
        <a href="tel:38220223244">+382 20 223 244</a>
      </div>
    </div>
  );
};

export default ContactInformation;
