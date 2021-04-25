import React from 'react'
import './style.css';
import Grid from '@material-ui/core/Grid';
import img from '../../assest/icon.png';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const landing = () => {
    return (
        
        <div className="landing">
        <div>
            <header className="Header">
            <img src= {img} style={{width:"40", height:"40"}}
            />
            
                  <div className="leftsidebar">
               
                      <p className="para">Couponxnge</p>
            </div>
            <div>
              

<TextField
        
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
             <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
                
                </div>
                <div className="enter">
                 <a href="/login">Login/Register</a>
                </div>
               
            </header>
            </div>

{/* <MIDDLEH JISME PARA , BUTTON WITH CARD> */}



            
            <Grid container spacing={3} alignItems="center">

        <Grid item xs={12} sm={12} md={6} lg={6} >
        <div className="theorytotal">
            <div className="theory">
            <p className="theoryp">
                Now earn money, by sellingyour unused coupon
            </p>
            <h2># simply list your coupon code &</h2>
            <h2># and get paid</h2>
            </div>
            <div className="button">
            <Link href="/">
        Explore
      </Link>
      </div>
                </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
        <div className="Pcard">
                <div className="card">
                      <h1></h1>

                </div>
                <div className="card">
                      <h1></h1>
                      
                </div>
                <div className="card">
                      <h1></h1>
                      
                </div>
                <div className="card">
                      <h1></h1>
                      
                </div>
                <div className="card">
                      <h1></h1>
                      
                </div>
                <div className="card">
                      <h1></h1>
                      
                </div>
                </div>
        </Grid>
        </Grid>


            </div>
        
    )
}

export default landing
