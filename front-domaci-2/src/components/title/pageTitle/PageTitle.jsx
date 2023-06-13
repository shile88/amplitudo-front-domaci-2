import classes from './PageTitle.module.scss';

const PageTitle = ({text, className}) => {
  return (
    <h1 className={classes[`${className}`]}>{text}</h1>
  )
}

export default PageTitle