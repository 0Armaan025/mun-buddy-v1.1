import React from "react";
import "./homepage.css";
import "../app/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

import { ThreeDCardDemo } from "@/components/3d-card/3d-card";
import PricingComponent from "@/components/pricing-component/PricingComponent";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className="content flex flex-col justify-start items-center">
        <div className="textArea flex flex-col mt-4 items-center ">
          <h3 className="myLearnAndSimulatetext">Learn and Simulate!</h3>
          <h4 className="myLearnAndSimulateText">
            Use AI to make work faster!
          </h4>
          <h2
            className="mt-8"
            style={{
              width: "550px",
              marginTop: "20px",
              color: "white",
              fontSize: "16px",
              textAlign: "center",
            }}
          >
            M.U.N-Buddy is an open source M.U.N simulator that interacts with
            people by simulating as the chair and delegates (role-playing) to
            help learn in a better way!
          </h2>
        </div>
        <div className="buttonsDiv mt-4 flex flex-row justify-center items-center ">
          <Link href="/create-or-join">
            <input
              type="button"
              value="Start simulating"
              className="startSimulatingButton"
            />
          </Link>
          <input
            type="button"
            value="Start researching"
            className="startResearchingButton"
          />
        </div>
        <br />
        <center>
          <h3
            style={{
              marginTop: "48px",
              fontSize: "22px",
              color: "whitesmoke",
              fontFamily: "Poppins",
            }}
          >
            Start learning in seconds
          </h3>

          <h4
            style={{
              color: "#B8B8BC",
              fontFamily: "Poppins",
              marginTop: "5px",
            }}
          >
            Kickstart your next simulation or research in{" "}
            <span style={{ color: "#0E0A8B", fontWeight: "bold" }}>
              NOT MINUTES but{" "}
            </span>
            <span style={{ color: "yellow", fontWeight: "bold" }}>
              SECONDS!
            </span>
          </h4>
          <br />
        </center>
      </div>
      <div className="myFeaturesDiv flex flex-col w-full justify-start items-center">
        <div className="featureRowDiv flex flex-row justify-center items-center">
          <div className="myFeatureDiv flex flex-col justify-start items-start ">
            <h3
              style={{
                fontSize: "28px",
                color: "white",
                fontFamily: "Poppins",
                fontWeight: "bold",
              }}
            >
              Fast and Furious
            </h3>
            <h4
              style={{
                width: "430px",
                fontFamily: "sans-serif",
                color: "gray",
              }}
            >
              It is super fast, just click a single button to start-up the
              service and start researching/simulating.
            </h4>
          </div>
          <div
            className="myFeatureDiv flex flex-col justify-start items-start "
            style={{ marginLeft: "10px" }}
          >
            <h3
              style={{
                fontSize: "28px",
                color: "white",
                fontFamily: "Poppins",
                fontWeight: "bold",
              }}
            >
              In-built Support
            </h3>
            <h4
              style={{
                width: "430px",
                fontFamily: "sans-serif",
                color: "gray",
              }}
            >
              Have in-built support to raise motions, or points of order, or
              procedure information.
            </h4>
          </div>
        </div>
        <br />
        <div className="featureRowDiv flex flex-row justify-center items-center">
          <div className="myFeatureDiv flex flex-col justify-start items-start ">
            <h3
              style={{
                fontSize: "28px",
                color: "white",
                fontFamily: "Poppins",
                fontWeight: "bold",
              }}
            >
              Easy and accessible
            </h3>
            <h4
              style={{
                width: "430px",
                fontFamily: "sans-serif",
                color: "gray",
              }}
            >
              You can access it anytime you want, you can also get the
              android/IOS app from playstore or appstore.
            </h4>
          </div>
          <div
            className="myFeatureDiv flex flex-col justify-start items-start "
            style={{ marginLeft: "10px" }}
          >
            <h3
              style={{
                fontSize: "28px",
                color: "white",
                fontFamily: "Poppins",
                fontWeight: "bold",
              }}
            >
              Easy AI Researching
            </h3>
            <h4
              style={{
                width: "430px",
                fontFamily: "sans-serif",
                color: "gray",
              }}
            >
              Just input agenda and country to get pdfs ready in seconds,
              research like never before! ;)
            </h4>
          </div>
        </div>

        <PricingComponent />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
