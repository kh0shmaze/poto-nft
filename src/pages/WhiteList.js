import { Fragment } from "react";
import MainHeader from "../component/mainPage/MainHeader";
import MainFooter from "../component/mainPage/MainFooter";
import WhiteListBody from "../component/whitelist/WhiteListBody";

import classes from "./WhiteList.module.css";

const WhiteList = () => {
  return (
    <Fragment>
      <div className={classes.whitelist}>
        <MainHeader />
        <WhiteListBody />
        <div className={classes.footer}>
          <MainFooter />
        </div>
      </div>
    </Fragment>
  );
};
export default WhiteList;
