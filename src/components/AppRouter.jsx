import React from "react";
import {
  Redirect,
  Routes,
  Route,
  Switch,
  useLocation,
  Router,
} from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import { Home } from "../pages/HomePage/Home/Home";
import NotfoundPage from "../pages/NotfoundPage";
import Registerpage from "../pages/Registerpage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import TestPage from "../pages/TestPage";
import { Navbar } from "./Navbar/Navbar";
import Header from "./Navbar/Header";
import Loginpage from "../pages/Loginpage";
import Details from "../pages/ProductsPage/ProductDetails";
import Products from "../pages/ProductsPage/Products";
import Footer from "./Footer";
import Cart from "../pages/Cart/Cart";
import { Main } from "../pages/Payment/Index";

export default function AppRouter(props) {
  return (
    <>
      {/* <Router> */}
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/description" component={Details} />
        <ProtectedRoute exact path="/cart" component={Cart} />
        <ProtectedRoute exact path="/payment" component={Main} />
        <ProtectedRoute exact path="/login" component={Loginpage} />
        <ProtectedRoute exact path="/register" component={Registerpage} />

        <ProtectedRoute
          exact
          path="/forgot-password"
          component={ForgotPasswordPage}
        />
        <ProtectedRoute
          exact
          path="/reset-password"
          component={ResetPasswordPage}
        />
        <Route exact path="*" component={NotfoundPage} />
      </Switch>
      <Footer />
      {/* </Router> */}
    </>
  );
}

function ProtectedRoute(props) {
  const { currentUser } = useAuth();
  const { path } = props;
  console.log("path", path);
  const location = useLocation();
  console.log("location state", location.state);

  if (
    path === "/login" ||
    path === "/register" ||
    path === "/forgot-password" ||
    path === "/reset-password"
  ) {
    return currentUser ? (
      <Redirect to={location.state?.from ?? "/"} />
    ) : (
      <Route {...props} />
    );
  }
  return currentUser ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: path },
      }}
    />
  );
}
