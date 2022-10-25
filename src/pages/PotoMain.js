import { Fragment } from "react";

import Features from "../component/mainPage/Features";
import MainBody from "../component/mainPage/MainBody";
import MainFooter from "../component/mainPage/MainFooter";
import MainHeader from "../component/mainPage/MainHeader";
import MintNft from "../component/mainPage/MintNft";
// import Space from "../component/mainPage/Space";

import classes from "./PotoMain.module.css";

const PotoMain = () => {
  return (
    <Fragment>
      <div className={classes.mainbody}>
        <MainHeader />
        <MainBody />
        <Features />
        <MintNft />
        <MainFooter />
      </div>
    </Fragment>
  );
};

export default PotoMain;
