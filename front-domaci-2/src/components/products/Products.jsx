import "./Products.css";

import ProductCard from "./productCard/ProductCard";
import product1 from "../../assets/images/Group 1098.png";
import product2 from "../../assets/images/Group 1911.png";

const Products = () => {
  return (
    <>
      <div className="__products-title">
        <h2>Take a look at</h2>
        <span>our products</span>
      </div>

      <div className="__products-wrapper">      
        <ProductCard
          title="Via"
          subtitle="Business tavel automatization software."
          productImage={product1}
          padding='0 50px 10px 50px'
          maxWidth='500px'        />
        <ProductCard
          title="Shift"
          subtitle="Central base of transfered mobile and fixed numbers."
          productImage={product2}
          padding='0 50px 10px 50px'
          maxWidth='500px'
        />
      </div>
    </>
  );
};

export default Products;
