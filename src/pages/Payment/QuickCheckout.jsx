import { NavLink } from "react-router-dom";
import Styles from "./Quick.module.css";

function Quick_checkout() {
  const run = () => {};
  return (
    <div className={Styles.part1}>
      <div className={Styles.first}>
        <p>My Email address:</p>
        <input id="one" required />
        <h6>Your order details will be sent to this email address.</h6>
      </div>
      <br />

      <div className={Styles.second}>
        <input id="two" type="radio" required />
        <div>
          <p>Continue as guest</p>
          <h6>You do not a password for this option</h6>
        </div>
      </div>
      <br />
      <br />

      <div className={Styles.third}>
        <input type="radio" required />
        <div className={Styles.inner1}>
          <p>I have an account and password</p>
          <h6>Sign in to your account and checkout faster</h6>
        </div>
        <br />
        <div className={Styles.inner2}>
          <p>Enter your password</p>
          <input />
          <h5>But I forgot my password</h5>
        </div>
      </div>
    </div>
  );
}
export { Quick_checkout };
