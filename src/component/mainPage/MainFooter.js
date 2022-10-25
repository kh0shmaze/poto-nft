import { Fragment } from "react";
import { SocialIcon } from "react-social-icons";
import classes from "./MainFooter.module.css";

const MainFooter = () => {
  return (
    <Fragment>
      <div className={classes.footer}>
        <h3>&#169; PotoNFT.com All Rights Reserved</h3>
        <div className={classes.icon}>
          <SocialIcon
            style={{ height: 40, width: 40 }}
            network="twitter"
            fgColor="#ffffff"
            className={classes.twitter}
            url="https://twitter.com/Potonft_oficial"
            target="_blank"
          />

          <SocialIcon
            style={{ height: 40, width: 40 }}
            network="telegram"
            fgColor="#ffffff"
            className={classes.telegram}
            url="https://t.me/potonft_official"
            target="_blank"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default MainFooter;
