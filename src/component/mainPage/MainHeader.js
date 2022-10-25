import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";
import logo from "../../image/logo.png";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img className={classes.logopic} src={logo} alt="LOGO" />
        <h1 className={classes.logoname}>Poto NFT</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/" exact>
              {/* <Link to="/" exact> */}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/whitelist">
              WhiteList
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* <button className={classes.btn}>Launch App</button> */}
    </header>
  );
};

export default MainHeader;
