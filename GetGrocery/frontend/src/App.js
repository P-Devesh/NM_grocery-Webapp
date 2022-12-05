import './App.css';
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import { useEffect, useState } from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home.js"
import Loader from './component/Loader/Loader';
import ProductDetails from "./component/Product/ProductDetails.js";
import ScrollToTop from "./ScrollToTop"
import Products from "./component/Product/Products.js"
import Search from "./component/Product/Search.js"
import LoginSignUp from './component/User/LoginSignUp';
import store from "./store"
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js"
import { useSelector } from 'react-redux';
import Profile from "./component/User/Profile.js"
import ProtectedRoute from './component/Route/ProtectecRoute';
import UpdateProfile from './component/User/UpdateProfile';
function App() {

  const { isAuthenticated, user } = useSelector(state => state.user)
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Cambria", "Georgia", "serif"],
      },
    });
    store.dispatch(loadUser());
  }, []);
  return (

    <Router >
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />
        <Route exact path="/search" component={Search} />
        <ProtectedRoute exact path="/account" component={Profile} />
        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />
        <Route exact path="/login" component={LoginSignUp} />
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
