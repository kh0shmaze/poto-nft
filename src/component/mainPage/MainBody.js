import { Fragment } from "react";
import poto from "../../image/poto.png";
import back from "../../image/back.jpg";

import { Link } from "react-router-dom";

import classes from "./MainBody.module.css";

const MainBody = () => {
  return (
    <Fragment>
      <div>
        <img src={back} className={classes.backimg} alt="background" />
      </div>
      <div className={classes.bodybox}>
        <div className={classes.text}>
          <h2>Stake NFT Earn Reward</h2>
          <h3>
            Poto NFT is blockchain based staking platform with mini games. Users
            can earn rewards by playing the game and staking their NFTs.
          </h3>
          <Link to="/whitelist">
            <button className={classes.bodybtn}>Launch App</button>
          </Link>
        </div>
        <div className={classes.potosection}>
          <img className={classes.img} src={poto} alt="POTO" />
          <div className={classes.oval}></div>
        </div>
      </div>
    </Fragment>
  );
};
export default MainBody;
