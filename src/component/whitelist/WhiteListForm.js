import { useState } from "react";

import classes from "./WhiteListForm.module.css";
import { SocialIcon } from "react-social-icons";
import metamaskicon from "../../image/metamask.png";

const WhiteListForm = () => {
  const [enteredTelegramId, setEnteredTelegramId] = useState("");
  const [enteredTwitterId, setEnteredTwitterId] = useState("");
  const [enteredWalletAddress, setEnteredWalletAddress] = useState("");
  const [completeAllFiled, setCompleteAllFiled] = useState(false);
  const [isPostOk, setIsPostOk] = useState(false);
  const [error, setError] = useState(null);

  const telegramIdHandler = (event) => {
    setEnteredTelegramId(event.target.value);
  };

  const twitterIdHandler = (event) => {
    setEnteredTwitterId(event.target.value);
  };

  const walletAddressHandler = (event) => {
    setEnteredWalletAddress(event.target.value);
  };

  async function submitHandler(event) {
    event.preventDefault();
    setCompleteAllFiled(false);
    setError(null);
    setIsPostOk(false);

    if (
      enteredTelegramId.trim().length === 0 ||
      enteredTwitterId.trim().length === 0 ||
      enteredWalletAddress.trim().length === 0
    ) {
      return setCompleteAllFiled(true);
    }
    const date = new Date().toString();
    const userData = {
      telegram: enteredTelegramId,
      twitter: enteredTwitterId,
      wallet: enteredWalletAddress,
      date: date,
    };
    // console.log(userData);
    try {
      const response = await fetch(
        // "https://potonft-airdrop-default-rtdb.firebaseio.com/Airdrop.json",
        "https://airdrops_user:zxEG2KJhWLV6Yo1PlwQnOVkq7zwTNctV@dpg-cdemj0ta4992md3khkjg-a.oregon-postgres.render.com/airdrops",
        {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        setIsPostOk(true);
      }
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      // const data = await response.json();
    } catch (error) {
      setError(error.message);
    }

    setEnteredTelegramId("");
    setEnteredTwitterId("");
    setEnteredWalletAddress("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.form}>
        <div className={classes.formhead}>
          <h2>participate in airdrop</h2>
        </div>
        <div className={classes.telid}>
          <label>
            <SocialIcon
              style={{ height: 25, width: 25 }}
              network="telegram"
              fgColor="#ffffff"
            />{" "}
            Telegram ID
          </label>
          <input
            type="text"
            // placeholder="Example: @PotoNFT"
            onChange={telegramIdHandler}
            value={enteredTelegramId}
          />
        </div>
        <div className={classes.twitterid}>
          <label>
            <SocialIcon
              style={{ height: 25, width: 25 }}
              network="twitter"
              fgColor="#ffffff"
            />
            Twitter ID
          </label>
          <input
            type="text"
            // placeholder="Example: @PotoNFT"
            onChange={twitterIdHandler}
            value={enteredTwitterId}
          />
        </div>
        <div className={classes.wallet}>
          <label>
            <img
              src={metamaskicon}
              alt="metamaskicon"
              className={classes.metamask}
            />
            Wallet address (BSC)
          </label>
          <input
            type="text"
            onChange={walletAddressHandler}
            value={enteredWalletAddress}
          />
        </div>
        <div className={classes.btndiv}>
          <button type="submit" className={classes.submit}>
            Submit
          </button>
        </div>
        {isPostOk && <h3 className={classes.formok}>You do it weil...</h3>}
        {completeAllFiled && !isPostOk && (
          <h3 className={classes.formerror}>Please complete the form</h3>
        )}
        {error && (
          <h3 className={classes.formerror}>Some thing went wrong...</h3>
        )}
      </div>
    </form>
  );
};

export default WhiteListForm;
