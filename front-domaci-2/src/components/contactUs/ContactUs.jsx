import Title from "../title/Title"
import classes from './ContactUs.module.scss';
import parrot from '../../assets/images/Group 1052.png';

const ContactUs = () => {
  return (
    <div className={classes['contact-us']}>
        <Title type='section-title' title='Like what you see?'/>
        <p>Lets talk about it.</p>
        <button>contact us</button>
        <img src={parrot} alt='contact-image' />
    </div>
  )
}

export default ContactUs