import ProductCard from '../products/productCard/ProductCard';
import Title from '../title/Title';
import classes from './InterestingTopics.module.scss';
import product from "../../assets/images/Group 1045.png";

const InterestingTopics = () => {
  return (
    <div className={classes['topic-wrapper']}>
        <Title type='section-title' title='You might be interested' color='blue'/>
        <div className={classes.content}>
            <ProductCard productImage={product} bottomTitle='Mobile apps development' maxWidth='318px' padding='24px'/>
            <ProductCard productImage={product} bottomTitle='Website development' maxWidth='318px' padding='24px'/>
            <ProductCard productImage={product} bottomTitle='SaaS' maxWidth='318px' padding='24px'/>
        </div>   
    </div>
  )
}

export default InterestingTopics