import React from "react";
import "./style.css";
import Grid from "@material-ui/core/Grid";
import img from "../../assest/website.png";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
const landing = () => {
  return (
    <div>
      <div className="landing">
        <div>
          <header className="Header">
            <div className="leftsidebar">
              <img src={img} style={{ width: 300, height: 90 }} />
              {/* <p className="para3">Couponxnge</p> */}
            </div>
            <div className="searchbox">
              <input type="text" className="search" placeholder="Search Here" />
              <img
                src="https://icons-for-free.com/iconfiles/png/512/explore+find+magnifier+search+icon-1320185008030646474.png"
                style={{ width: 20, height: 20, marginTop: 6 }}
              />
            </div>
            <Link to="/login" className="link1">
              <div className="button">
                <p className="para1">Login/Register</p>
              </div>
            </Link>
          </header>
        </div>

        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="theorytotal">
              <div className="theory">
                <p className="theoryp">
                  Now earn money, by selling your unused coupon
                </p>
                <h2># simply list your coupon code &</h2>
                <h2># and get paid</h2>
              </div>
              <Link to="/landing1" className="link1">
                <div className="button">
                  <p className="para1">Explore</p>
                </div>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="Pcard">
              <div className="card">
                {/* <img src="https://static.thenounproject.com/png/3159319-200.png" className="cardimg"/> */}
                <p className="para2">BUY $ SELL COUPEN & VOUCHERS ONLINE</p>
                <div>
                  <Link to="/landing1" className="link1">
                    <button
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        border: "0px",
                      }}
                    >
                      BUY GIFT CARD
                    </button>
                  </Link>

                  <Link to="/form" className="link1">
                    <button
                      style={{
                        backgroundColor: "yellow",
                        color: "black",
                        border: "0px",
                      }}
                    >
                      SELL GIFT CARD
                    </button>
                  </Link>
                </div>
              </div>
              {/* <div className="card">
                  <img src="https://static.thenounproject.com/png/3159319-200.png" className="cardimg"/>
                      <p className="para2">Stocks</p>
                      
                </div> */}
              {/* <div className="card">
                  <img src="https://static.thenounproject.com/png/3159319-200.png" className="cardimg"/>
                      <p className="para2">Future & Options</p>
                      
                </div>
                <div className="card">
                  <img src="https://static.thenounproject.com/png/3159319-200.png" className="cardimg"/>
                      <p className="para2">US Stocks</p>
                      
                </div>
                <div className="card">
                  <img src="https://static.thenounproject.com/png/3159319-200.png" className="cardimg"/>
                      <p className="para2">Golds</p>
                      
                </div>
                <div className="card">
                  <img src="https://static.thenounproject.com/png/3159319-200.png" className="cardimg"/>
                      <p className="para2">Fixed Deposites</p>
                      
                </div> */}
            </div>
          </Grid>
        </Grid>
      </div>
      <SecondPage />
      <ThirdPage />
    </div>
  );
};

export default landing;
