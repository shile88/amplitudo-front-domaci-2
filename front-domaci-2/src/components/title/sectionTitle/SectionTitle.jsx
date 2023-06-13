import classes from './SectionTitle.module.scss';

const SectionTitle = ({title, className, color}) => {
  return (
    <h2 className={`${classes[`${className}`]} ${color ? classes.blue : ''}`}>{title}</h2>
  )
}

export default SectionTitle