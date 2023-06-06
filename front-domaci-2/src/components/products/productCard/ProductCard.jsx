import './ProductCard.css';

import Title from "../../title/Title";

const ProductCard = ({subtitle, productImage, title, bottomTitle, maxWidth, padding}) => {
  return (
    <div className='product'>
        <Title title={title} className='artistic-title'/>
        <p>{subtitle}</p>
        <img style={{maxWidth: `${maxWidth}`, padding: `${padding}`}} src={productImage} alt="Product image" />
        <h2>{bottomTitle}</h2>
    </div>
  )
}

export default ProductCard;