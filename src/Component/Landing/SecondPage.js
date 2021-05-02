import React from "react";
import Grid from "@material-ui/core/Grid";
import Amazon from "../../assest/amazon.png";
import Flipkart from "../../assest/flipkart.png";
import Barbeque from "../../assest/barbeque.png";
import Uber from "../../assest/uber.png";
import Nykaa from "../../assest/nykaa.png";
import Myntra from "../../assest/myntra.png";
export default function SecondPage() {
  return (
    <div className="second-page">
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <div className="PcardS">
            <div className="cardS">
              <img src={Amazon} alt="ff" />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <div className="PcardS">
            <div className="cardS">
              <img src={Flipkart} alt="ff" />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <div className="PcardS">
            <div className="cardS">
              <img src={Myntra} alt="ff" />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <div className="PcardS">
            <div className="cardS">
              <img src={Uber} alt="ff" />
            </div>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={4}>
          <div className="PcardS">
            <div className="cardS">
              <img src={Barbeque} alt="ff" />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <div className="PcardS">
            <div className="cardS">
              <img src={Nykaa} alt="ff" />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
