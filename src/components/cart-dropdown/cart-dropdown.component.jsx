import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Button>GO TO CHEKCKOUT</Button>
    </div>
  );
}

export default CartDropdown;
