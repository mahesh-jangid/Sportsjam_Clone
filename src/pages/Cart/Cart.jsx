import React from "react";
import styled from "styled-components";
import {
  cart_data,
  increase_qty,
  decrease_qty,
  delete_cart_data,
} from "../../Redux/action";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const Div = styled.div`
  padding: 10px;
  background-color: rgb(192, 192, 192);
  font-size: 15px;
  font-weight: 900;
`;
const Table = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  border: 1px solid rgb(193, 193, 193);
`;
const ProductName = styled.th`
  width: 60%;
  border: 1px solid rgb(193, 193, 193);
  background-color: rgb(215, 215, 215);
  border-collapse: collapse;
  padding: 5px;
`;
const Th = styled.th`
  border: 1px solid rgb(193, 193, 193);
  background-color: rgb(215, 215, 215);
  padding: 5px;
`;
const Td = styled.td`
  border: 1px solid rgb(193, 193, 193);
  vertical-align: top;
  padding: 7px;
`;
const TD = styled.td`
  border-top: 1px solid rgb(193, 193, 193);
  border-bottom: 1px solid rgb(193, 193, 193);
  vertical-align: top;
  padding: 7px;
  text-align: end;
  padding-left: 400px;
`;
const Td1 = styled.td`
  border-bottom: 1px solid rgb(193, 193, 193);
  vertical-align: top;
  display: flex;
  padding: 7px;
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
  padding: 7px;
  border: 1px solid gray;
  margin-right: 7px;
`;
const Cross = styled.img`
  width: 30px;
  height: 30px;
  padding: 7px;
  cursor: pointer;
  border: 3px solid red;
`;
const Button = styled.button`
  width: 30px;
  height: 30px;
  font-size: 25px;
`;
const Quantity = styled.div`
  border: 1px solid gray;
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const Cart = () => {
  const toast = useToast();
  const [voucher, setVoucher] = React.useState("");
  const store = useSelector((state) => state);
  const data = store.cartdata;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(delete_cart_data(id));
    toast({
      description: "Item removed from cart",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    const data1 = data.filter((elem) => id !== elem.id);
    localStorage.setItem("cartdata", JSON.stringify(data1));
    if (data.length == 1) {
      localStorage.removeItem("cartdata");
    }
    call(data1);
  };
  React.useEffect(() => {
    let data = JSON.parse(localStorage.getItem("cartdata")) || [];
    dispatch(cart_data(data));
    call(data);
  }, []);
  const handleDecrease = (item) => {
    if (item.qty == 1) {
      dispatch(delete_cart_data(item.id));
      const data1 = data.filter((elem) => item.id !== elem.id);
      localStorage.setItem("cartdata", JSON.stringify(data1));
      if (data.length == 1) {
        localStorage.removeItem("cartdata");
      }
      call(data1);
    } else {
      dispatch(decrease_qty(item.id));
      localStorage.setItem("cartdata", JSON.stringify(data));
      call(data);
    }
  };
  const handleIncrease = (item) => {
    dispatch(increase_qty(item.id));
    localStorage.setItem("cartdata", JSON.stringify(data));
    call(data);
  };
  const [value, setValue] = React.useState(100);
  const call = (data) => {
    var subTotal = data.reduce(function (acc, elem) {
      return acc + elem.mrp * elem.qty;
    }, 0);
    setValue(subTotal);
  };
  const handleChangeVoucher = (e) => {
    setVoucher(e.target.value);
  };
  const handleVoucher = (e) => {
    e.preventDefault();
    if (voucher == "masai30") {
      const discount = Math.floor(value * 0.7);
      setValue(discount);
    } else {
      alert("APPLY: masai30");
    }
    setVoucher("");
  };

  const handlePayment = (value) => {
    const paymentdata = {
      subtotal: value,
      shipping: 0.01 * value,
      gst: 18,
    };
    localStorage.setItem("paymentdata", JSON.stringify(paymentdata));
    history.push("/payment");
  };
  return (
    <>
      <Div>Shopping Cart</Div>
      <Table>
        <thead>
          <tr>
            <ProductName>Product Name</ProductName>
            <Th>Unit Price</Th>
            <Th>Quantity</Th>
            <Th>Total</Th>
            <Th>Remove</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <>
                <tr>
                  <Td1>
                    <Img src={item.img} alt={item.img} />
                    <div>
                      <p>{item.desc}</p>
                      <br />
                      <p
                        style={{
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                        onClick={() => history.push("/description")}
                      >
                        View Details
                      </p>
                    </div>
                  </Td1>
                  <Td>₹{item.mrp}</Td>
                  <Td>
                    <div style={{ display: "flex", textAlign: "center" }}>
                      <Button onClick={() => handleDecrease(item)}>-</Button>
                      <Quantity>{item.qty}</Quantity>
                      <Button onClick={() => handleIncrease(item)}>+</Button>
                    </div>
                  </Td>
                  <Td>₹{item.mrp * item.qty}</Td>
                  <Td>
                    <Cross
                      onClick={() => handleDelete(item.id)}
                      src="https://thumbs.dreamstime.com/z/red-cross-symbol-icon-as-delete-remove-fail-failure-incorr-incorrect-answer-89999776.jpg"
                      alt="remove"
                    />
                  </Td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          style={{
            padding: "7px 17px",
            color: "white",
            background: "darkgray",
            border: "0px solid",
            fontSize: "12px",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
          }}
          onClick={() => history.push("/products")}
        >
          CONTINUE SHOPPING
        </button>
        <button
          style={{
            padding: "5px 10px",
            color: "white",
            background: "orangered",
            border: "0px solid",
            fontSize: "12px",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
          }}
          onClick={() => handlePayment(value)}
        >
          PROCEED TO PAY
        </button>
      </div>
      <div>
        <Table style={{ width: "99%", margin: "20px auto" }}>
          <tbody>
            <tr>
              <Td
                style={{
                  width: "100%",
                  textAlign: "start",
                  background: "rgb(215, 215, 215)",
                  borderRight: "0px solid",
                }}
              >
                <h4>Order Summary</h4>
              </Td>
              <TD
                style={{
                  background: "rgb(215, 215, 215)",
                }}
              ></TD>
            </tr>
            <tr>
              <TD>Cart Sub Total</TD>
              <TD>₹{value}</TD>
            </tr>
            <tr>
              <TD style={{ color: "gray" }}>GST 12%</TD>
              <TD>₹{Math.floor(value * 0.12)}</TD>
            </tr>
            <tr>
              <TD>Total Cart Amount</TD>
              <TD>₹{value + Math.floor(value * 0.12)}</TD>
            </tr>
          </tbody>
        </Table>
      </div>
      <div
        style={{
          display: "flex",
          width: "40%",
          marginTop: "20px",
          marginLeft: "20px",
          marginBottom: "20px",
        }}
      >
        <div style={{ marginRight: "20px" }}>
          <img
            style={{ height: "70px", width: "150px", borderRadius: "3px" }}
            src="https://image.shutterstock.com/image-vector/30-off-discount-label-sign-600w-2096258380.jpg"
            alt="discount"
          />
          <p>Voucher Code</p>
        </div>
        <div>
          <strong style={{ fontWeight: "900", color: "black" }}>
            Use your voucher code
          </strong>
          <p style={{ color: "gray", fontSize: "12px" }}>
            only one coupon code can be used per order at this time
          </p>
          <form onSubmit={handleVoucher}>
            <input
              style={{
                width: "300px",
                marginBottom: "10px",
                border: "1px solid rgb(193, 193, 193)",
              }}
              value={voucher}
              type="text"
              placeholder="Voucher Code"
              onChange={(e) => {
                handleChangeVoucher(e);
              }}
            />
            <br />
            <button
              type="submit"
              style={{
                color: "white",
                background: "gray",
                border: "0px",
                fontSize: "12px",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              APPLY
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Cart;
