import './Footer.css';

import ContactInformation from "./contactInformation/ContactInformation.jsx";
import SocialMedia from './socialMedia/SocialMedia';

const Footer = () => {
    return(
        <footer className='footer__container'>
            <div className='footer__container__contact-us'>
                <p>Interested in our services?</p>
                <p>contact us</p>
            </div>
            <ContactInformation/>
            <SocialMedia />
            <div className='copyright'>
                <span>© All rights reserved 2019 Amplitudo Ltd.</span>
            </div>
        </footer>
    )
}

export default Footer;