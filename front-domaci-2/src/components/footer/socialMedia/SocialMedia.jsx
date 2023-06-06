import './SocialMedia.css';

import be from '../../../assets/images/Group 396.png';
import facebook from '../../../assets/images/001-facebook.png';
import ins from '../../../assets/images/Group 395.png';
import instagram from '../../../assets/images/Group 394.png';
import twitter from '../../../assets/images/twitter.png';

const SocialMedia = () => {
  return (
    <div className='__social-media'>
    <p>Follow us on social media</p>
    <div className='__social-media__icons'>
        <img src={facebook} alt='facebook'/>
        <img src={instagram} alt='instagram'/>
        <img src={ins} alt='ins'/>
        <img src={twitter} alt='twitter'/>
        <img src={be} alt='be'/>
    </div>
</div>
  )
}

export default SocialMedia; 