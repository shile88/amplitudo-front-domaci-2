import classes from './ArtisticTitle.module.scss';

const ArtisticTitle = ({title, className}) => {
  return (
    <h2 className={classes[`${className}`]}>{title}</h2>
  )
}

export default ArtisticTitle