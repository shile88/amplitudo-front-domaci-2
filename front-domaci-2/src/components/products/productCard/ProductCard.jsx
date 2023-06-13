import Title from "../../title/Title";
import classes from './ProductCard.module.scss';

const ProductCard = ({subtitle, productImage, title, bottomTitle, maxWidth, padding}) => {
  return (
    <div className={classes.product}>
        <Title title={title} type='artistic-title'/>
        <p>{subtitle}</p>
        <img style={{maxWidth: `${maxWidth}`, padding: `${padding}`}} src={productImage} alt="Product image" />
        <h2>{bottomTitle}</h2>
    </div>
  )
}

export default ProductCard;