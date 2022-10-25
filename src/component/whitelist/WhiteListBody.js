import { Fragment } from "react";
import WhiteListForm from "./WhiteListForm";

import potogirl from "../../image/e4.png";
import classes from "./WhiteListBody.module.css";

const WhiteListBody = () => {
  return (
    <Fragment>
      <div className={classes.fullpage}>
        <div className={classes.tasks}>
          <h2>
            Please do folowing tasks step by step then complete the form to
            Participate in airdrop
          </h2>
          <ul>
            <li>
              Join us on Telegram:&nbsp;
              <a
                href="https://t.me/potonft_official"
                target="_blank"
                rel="noreferrer"
              >
                https://t.me/potonft_official
              </a>{" "}
            </li>
            <li>
              Follow us on Twitter:&nbsp;
              <a
                href="https://twitter.com/Potonft_oficial"
                target="_blank"
                rel="noreferrer"
              >
                https://twitter.com/Potonft_oficial
              </a>
            </li>
            <li>
              Retweet pinned Post:{" "}
              <a
                href="https://twitter.com/Potonft_oficial/status/1581385261455331329?s=20&t=1A9qfUGVF7duhPHGsCr1RQ"
                target="_blank"
                rel="noreferrer"
              >
                Click here
              </a>
            </li>
            {/* <li>follow us on instagram</li> */}
          </ul>
        </div>
        <div className={classes.ppp}>
          <img src={potogirl} alt="potogirl" className={classes.potogirl}></img>
        </div>
        <div className={classes.formbody}>
          <WhiteListForm />
        </div>
      </div>
    </Fragment>
  );
};
export default WhiteListBody;
