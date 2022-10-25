import { Fragment } from "react";

import useAnimation from "../../hook/use-Animation";

import classes from "./MintNft.module.css";
import robo from "../../image/robo.png";
import roboback from "../../image/roboback.jpg";
import { Link } from "react-router-dom";

const MintNft = () => {
  const { myRef, myElementIsVisible } = useAnimation();
  const { myRef: roboPic, myElementIsVisible: roboVisible } = useAnimation();
  const { myRef: titel, myElementIsVisible: titleVisible } = useAnimation();
  const { myRef: desH3, myElementIsVisible: desVisible } = useAnimation();
  const { myRef: btnRef, myElementIsVisible: btnVisible } = useAnimation();

  return (
    <Fragment>
      <div ref={myRef} className={classes.mintcomp}>
        <img
          src={roboback}
          //   className={classes.robobackground}
          className={`${classes["robobackground"]} ${
            myElementIsVisible && classes.backanimate
          }`}
          alt="robo Background"
        />
      </div>
      <div ref={roboPic} className={classes.mint}>
        <section className={classes.robopoto}>
          <img
            src={robo}
            className={` ${roboVisible && classes.robopic}`}
            alt="Robo Poto"
          />
        </section>
        <section className={classes.description}>
          <h1 ref={titel} className={` ${titleVisible && classes.h1titel}`}>
            Airdrop
          </h1>
          <h3 ref={desH3} className={` ${desVisible && classes.h3des}`}>
            Do some easy task to get Poto NFT or Poto token airdrop and become
            part of our white list
          </h3>
          <Link to="/whitelist">
            <button
              ref={btnRef}
              className={`${classes["airbtn"]} ${
                btnVisible && classes.btnanimate
              }`}
            >
              White List
            </button>
          </Link>
        </section>
      </div>
    </Fragment>
  );
};
export default MintNft;
