import React from "react";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { pink, white } from "@material-ui/core/colors";
import NotificationsIcon from "@material-ui/icons/Notifications";
import img from "../../assest/landing1H3.png";
import Grid from "@material-ui/core/Grid";
import Amazon from "../../assest/amazon.png";
import Flipkart from "../../assest/flipkart.png";
import Barbeque from "../../assest/barbeque.png";
import Uber from "../../assest/uber.png";
import Nykaa from "../../assest/nykaa.png";
import Myntra from "../../assest/myntra.png";
import footer from "../../assest/footer.png";
import { Flip } from "@material-ui/icons";
import {auth,db} from '../../firebase'

export const Landing1 = () => {
  return (
    <div className="landing1">
      <div className="landing1H">
        <div className="landing1H_">Couponxnge</div>
        <p style={{ fontSize: "2.3rem", marginTop:5, color: "skyblue" }}>{auth?.currentUser?.displayName}</p>
        <div className="iconL1">
         
          <PermIdentityIcon
            style={{ fontSize: "2.0rem", padding: "10px", color: "skyblue" }}
          />
          <LocalMallIcon
            style={{ fontSize: "2.0rem", padding: "10px", color: "skyblue" }}
          />
          <NotificationsIcon
            style={{ fontSize: "2.0rem", padding: "10px", color: "skyblue" }}
          />
        </div>
      </div>
      <div className="landing1HS">
        <div>
          <input type="text" className="search1H" placeholder="Search Here" />
        </div>
        <div style={{ color: "white", margin: "10px" }}>
          HOW it Works Terms and Condition FAQ's
        </div>
        <div>
          <button
            style={{
              backgroundColor: "yellow",
              padding: "10px",
              margin: "5px",
            }}
          >
            SELL GIFT CARD
          </button>
        </div>
      </div>
      <div className="landing1HT">
        <img src={img} alt="ff" style={{ width: "100%", height: "100px" }} />
      </div>

      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<MID>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div className="container">
        <Grid container alignItems="">
          <Grid item xs={4} sm={12} md={3} lg={3}>
            <div className="leftcontainer">
              <div>
                <p className="filter">FILTER BY</p>
              </div>
              <div>
                <p className="filter1">CARD TYPE </p>
              </div>
              <div>
                <p className="filter1">CATEGORIES</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={9} lg={9}>
            <div className="rightcontainer">
              <Grid container alignItems="center">
                <Grid item xs={12} sm={12} md={6} lg={3}>
                  <div className="PcardS">
                    <div className="cardS">
                      <img src={Amazon} alt="ff" />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                  <div className="PcardS">
                    <div className="cardS">
                      <img src={Flipkart} alt="ff" />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                  <div className="PcardS">
                    <div className="cardS">
                      <img src={Myntra} alt="ff" />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                  <div className="PcardS">
                    <div className="cardS">
                      <img src={Uber} alt="ff" />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={3}>
                  <div className="PcardS">
                    <div className="cardS">
                      <img src={Barbeque} alt="ff" />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                  <div className="PcardS">
                    <div className="cardS">
                      <img src={Nykaa} alt="ff" />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                  <div className="PcardS">
                    <div className="cardS">
                      <img src={Amazon} alt="ff" />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                  <div className="PcardS">
                    <div className="cardS">
                      <img src={Flipkart} alt="ff" />
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>

      {/* <<<<<<<<<<<<<<<<<<<<footer>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div>
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            fontSize: "30px",
            color: "skyblue",
            margin: "100px",
            fontWeight: "900",
          }}
        >
          Letest gift card With Best Value
        </div>
        <Grid item xs={12} sm={12} md={9} lg={12}>
          <Grid container alignItems="center">
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <div className="PcardS">
                <div className="cardSL">
                  <img src={Amazon} alt="ff" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <div className="PcardS">
                <div className="cardSL">
                  <img src={Amazon} alt="ff" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <div className="PcardS">
                <div className="cardSL">
                  <img src={Amazon} alt="ff" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <div className="PcardS">
                <div className="cardSL">
                  <img src={Amazon} alt="ff" />
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <button style={{ backgroundColor: "yellow", width: "100%" }}>
        click to post
      </button>
      <div>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="fooimg">
              <img src={footer} alt="hh" />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div
              style={{
                backgroundColor: "silver",
                margin: "3px",
                padding: "20%",
              }}
            ></div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
