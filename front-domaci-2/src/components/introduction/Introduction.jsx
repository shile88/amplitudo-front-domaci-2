import Title from '../title/Title'
import classes from './Introduction.module.scss';
import intro from "../../assets/images/Group 1045.png";

const Introduction = () => {
  return (
    <div className={classes['introduction-wrapper']}>
        <Title type='page-title'/>
        <div className={classes.content}>
            <img src={intro} alt='Intro-img'/>
            <div className={classes['p-group']}>
                <p>We are one of the few companies which create their own products, and we are proud to mention SHIFT and eTenderi.</p>
                <p>We make software according to your wishes and needs. Our team of dedicated programmers and IT professionals will create an easy-to-use solution for you, with unique user experience and attractive design.</p>
                <p>So far we have met the requirements of the following clients: Agency for electronical communications and postal services, Societe Generale bank, Ministry of Economy, Ministry of Justice, Volcano and others.</p>
            </div>
        </div>
    </div>
  )
}

export default Introduction