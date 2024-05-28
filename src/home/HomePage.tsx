import React from "react";
import "./homepage.css";
import "../app/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const HomePage = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className="content flex flex-col justify-start items-center">
        <div className="textArea flex flex-col mt-4 ">
          <h3 className="myLearnAndSimulatetext">Learn and Simulate!</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
