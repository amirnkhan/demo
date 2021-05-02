import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { pink, white } from "@material-ui/core/colors";
import InstagramIcon from "@material-ui/icons/Instagram";
export default function ThirdPage() {
  return (
    <div className="third-page">
      <header className="thirdH">
        <div>
          <p className="paraT"> Matador</p>
        </div>
        <div
          style={{
            margin: "0px 10px",
            padding: "10px",
            justifyContent: "space-between",
          }}
        >
          <FacebookIcon
            style={{ fontSize: "2.5rem", padding: "10px", color: "yellow" }}
          />
          <TwitterIcon
            style={{ fontSize: "2.5rem", padding: "10px", color: "yellow" }}
          />
          <InstagramIcon
            style={{ fontSize: "2.5rem", padding: "10px", color: "yellow" }}
          />
        </div>
        {/* <p className="paraT">icon</p> */}
      </header>
      <div className="middleT">
        <div>
          <h1 style={{ color: "white", fontSize: "70px", margin: "0px" }}>
            we're about to{" "}
          </h1>
          <h1 style={{ color: "white", fontSize: "70px", margin: "0px" }}>
            change everything.
          </h1>
        </div>
        <div className="searchT">
          <input
            type="text"
            className="searchT1"
            placeholder="Your email address"
          />
        </div>
        <div>
         
          <div className="button">
                  <p className="para1"> Subscribe</p>
                </div>
        </div>
      </div>
    </div>
  );
}
