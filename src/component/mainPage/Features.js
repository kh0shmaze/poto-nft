import { Fragment } from "react";

import useAnimation from "../../hook/use-Animation";
import "animate.css";
// className="animate__animated animate__fadeInLeft"

import moneybag from "../../image/moneybag1.png";
import play from "../../image/playinghand.png";
import market from "../../image/market.png";

import classes from "./Features.module.css";

const Features = () => {
  const { myRef, myElementIsVisible } = useAnimation();

  return (
    <Fragment>
      <div ref={myRef} className={classes.disp}>
        <div
          className={`${classes["features"]} ${
            myElementIsVisible && classes.testanimate
          }`}
        >
          <div className={classes.staking}>
            <img src={moneybag} alt="STAKE" />
            <h1>NFT Staking</h1>
            <h3>
              stake your NFt to get reward as BUSD and Poto token. There are
              diffrent plans for you to choose your favrite type of staking.
            </h3>
          </div>
          <div className={classes.marketplace}>
            <img src={market} alt="MARKETPLACE" />
            <h1>Market Place</h1>
            <h3>
              Buy or Sell your Poto NFT on NFT marketplace. Find appropriate
              Poto and buy it easily. trade NFT and earn profit, be lucky.
            </h3>
          </div>
          <div className={classes.minigame}>
            <img src={play} alt="PLAY" />
            <h1>Mini Games</h1>
            <h3>
              Play block chain based mini Games with your Poto NFTs to get
              rewards as Poto token. there are different rewards for different
              difficulty levels.
            </h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Features;
