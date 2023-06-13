import ContactInformation from "./contactInformation/ContactInformation.jsx";
import SocialMedia from './socialMedia/SocialMedia';
import classes from './Footer.module.scss';

const Footer = () => {
    return(
        <footer className={classes['footer-container']}>
            <div className={classes['contact-us']}>
                <p>Interested in our services?</p>
                <p>contact us</p>
            </div>
            <ContactInformation/>
            <SocialMedia />
            <div className={classes.copyright}>
                <span>© All rights reserved 2019 Amplitudo Ltd.</span>
            </div>
        </footer>
    )
}

export default Footer;