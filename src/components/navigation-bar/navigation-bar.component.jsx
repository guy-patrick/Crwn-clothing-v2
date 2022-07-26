import "./navigation-bar.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

function NavigationBar() {
  return (
    <div className="navigation">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
