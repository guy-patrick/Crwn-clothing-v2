import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../../components/navigation-bar/navigation-bar.component";

function Navigation() {
  return (
    <Fragment>
      <NavigationBar />
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
