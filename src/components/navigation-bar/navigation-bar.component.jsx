import "./navigation-bar.styles.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

function NavigationBar() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <div className="navigation">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
        {currentUser ? (
          <span className="nav-link" onClick={signOutHandler}>
            Sign out
          </span>
        ) : (
          <Link className="nav-link" to="/auth">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {isCartOpen && <CartDropdown />}
    </div>
  );
}

export default NavigationBar;
