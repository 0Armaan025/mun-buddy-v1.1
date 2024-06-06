"use client";
import React, { useState } from "react";

import "../app/globals.css";
import "./chairroompage.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const ChairRoomPage = () => {
  return (
    <div className="page-container w-full m-0">
      <Navbar />
      <div className="content flex flex-row justify-center items-center w-full m-0"></div>
      <Footer />
    </div>
  );
};

export default ChairRoomPage;
