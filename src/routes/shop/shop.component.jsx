import "./shop.styles.scss";
import { useContext } from "react";
import ProductCart from "../../components/product-cart/product-card.component";
import { ProductsContext } from "../../context/products.context";

function Shop() {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCart key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Shop;
