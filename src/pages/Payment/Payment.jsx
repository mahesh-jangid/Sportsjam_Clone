import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Payment.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setCount } from "../../Redux/action";

export default function Payment() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = () => {
    localStorage.removeItem("cartdata");
    dispatch(setCount(0));
    alert("Payment Success!");
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="Quick_checkout"
        style={{
          height: "319px",
          width: "1200px",
          margin: "auto",
          marginLeft: "230px",
        }}
      >
        <div>
          <h5>My Email address:</h5>
          <input
            type="email"
            required
            style={{
              width: "600px",
              borderRadius: "5px",
              border: "1px solid gray",
              height: "40px",
              backgroundColor: "inherit",
              marginTop: "5px",
            }}
          />
          <p>Your order details will be sent to this email address.</p>
        </div>
        <div>
          <div
            className="box"
            style={{ display: "flex", gap: "10px", marginTop: "10px" }}
          >
            <span>
              <input type="radio" />
            </span>
            <span>
              <h5>Continue as guest</h5>
              <p>You do not a password for this option</p>
            </span>
          </div>
          <div className="box" style={{ display: "flex", gap: "10px" }}>
            <div>
              <input type="radio" />
            </div>
            <div>
              <h3>I have an account and password</h3>
              <p>Sign in to your account and checkout faster</p>
            </div>
          </div>
        </div>
        <button className={styles.pay}>PAY</button>
      </div>
    </form>
  );
}
