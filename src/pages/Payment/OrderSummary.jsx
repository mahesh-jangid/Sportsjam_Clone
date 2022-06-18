import React from "react";
import styled from "styled-components";

const TD = styled.td`
  border: 1px solid gray;
`;

export default function Order_summary() {
  let style1 = {
    lineHeight: "2",
  };
  const data = JSON.parse(localStorage.getItem("paymentdata")) || {
    subtotal: 0,
    shipping: 0,
    gst: 0,
  };
  const { subtotal, shipping, gst } = data;
  return (
    <div
      style={{
        height: "350px",
        width: "1200px",
        margin: "auto",
        marginBottom: "-100px",
      }}
    >
      <div style={{ display: "flex", gap: "30px" }}>
        <div>
          <h2 style={{ color: "gray", marginLeft: "70px" }}>Order Details</h2>

          <div
            style={{
              width: "700px",
              height: "121px",
              backgroundColor: "rgb(218, 209, 209",
              marginTop: "20px",
              borderRadius: "5px",
              padding: "10px",
              marginLeft: "70px",
            }}
          >
            <b>Use your voucher code</b>
            <p>Only one coupon code can be used per order at this time.</p>
            <b>
              Voucher code
              <input
                style={{
                  backgroundColor: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              />{" "}
              <button
                style={{
                  width: "54px",
                  height: "26px",
                  margin: "30px",
                  border: "none",
                }}
              >
                Apply
              </button>
            </b>
          </div>
        </div>

        <div>
          <h2 style={{ color: "gray" }}>Invoice</h2>
          <div style={{ display: "flex", gap: "10px" }}>
            <div>
              <h3 style={style1}>Cart sub total </h3>
              <hr style={style1}></hr>
              <h3 style={style1}>Sipping & Handling Price </h3>
              <hr style={style1}></hr>
              <h3 style={style1}>GST 18% </h3>
              <hr style={style1}></hr>
              <h3 style={style1}>Total payable </h3>
              <hr style={style1}></hr>
            </div>
            <hr></hr>
            <div>
              <h3 style={style1}>Rs.{subtotal}</h3>
              <hr style={style1}></hr>
              <h3 style={style1}>Rs{shipping}</h3>
              <hr style={style1}></hr>
              <h3 style={style1}>Rs.{Math.round((gst * subtotal) / 100)}</h3>
              <hr style={style1}></hr>
              <h3 style={style1}>
                Rs.{Math.round(subtotal + shipping + (gst * subtotal) / 100)}
              </h3>
              <hr style={style1}></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
