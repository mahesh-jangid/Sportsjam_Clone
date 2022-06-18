import React from "react";

export default function Billing_Shipping() {
  let style1 = {
    color: "red",
    display: "inline",
  };
  return (
    <div
      style={{
        height: "800px",
        width: "1200px",
        margin: "auto",
        marginBottom: "-210px",
      }}
    >
      <div style={{ display: "flex" }}>
        <h2 style={{ marginLeft: "70px" }}>Shipping address</h2>
      </div>
      <form className="form" style={{ marginLeft: "70px" }}>
        <div>
          <h4>
            Name<h3 style={style1}>*</h3>
          </h4>
          <input required />
        </div>
        <div>
          <h4>
            Last Name<h3 style={style1}>*</h3>
          </h4>
          <input required />
        </div>
        <div>
          <h4>
            Address<h3 style={style1}>*</h3>
          </h4>
          <input required />
        </div>
        <div>
          <h4>
            Landmark<h3 style={style1}>*</h3>
          </h4>
          <input required />
        </div>
        <div>
          <h4>
            Post/Zip code<h3 style={style1}>*</h3>
          </h4>
          <input required />
        </div>
        <div>
          <h4>
            Country<h3 style={style1}>*</h3>
          </h4>
          <input required />
        </div>
        <div>
          <h4>
            State<h3 style={style1}>*</h3>
          </h4>
          <input required />
        </div>
        <div>
          <h4>
            City<h3 style={style1}>*</h3>
          </h4>
          <input required />
        </div>
        <div>
          <h4>Telephone</h4>
          <input value="91" style={{ width: "50px", marginRight: "10px" }} />
          <input required style={{ width: "300px" }}></input>
        </div>
        <div>
          <h4>
            Mobile<h3 style={style1}>*</h3>
          </h4>
          <input value="91" style={{ width: "50px", marginRight: "10px" }} />
          <input required style={{ width: "300px" }}></input>
        </div>
      </form>
      <div style={{ marginLeft: "70px", marginTop: "20px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input type="radio" />
          <h5>Send this product as gift</h5>
        </div>
        <p>
          Type in your message in less than 400 charactors and the product will
          sent as gift with the message of yours.
        </p>
        <textarea />
      </div>
    </div>
  );
}
