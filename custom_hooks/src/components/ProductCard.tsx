import { FaShoppingCart } from "react-icons/fa"
import type { Product } from "../data/products";

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
}

function ProductCard({product, onAddToCart}: ProductCardProps) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={() => onAddToCart(product)}>
        <FaShoppingCart /> Add to Cart
      </button>
    </div>
  )
}

export default ProductCard