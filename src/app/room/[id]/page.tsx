"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./roomidpage.css";
import { usePathname } from "next/navigation";

const RoomPage = () => {
  const pathName = usePathname();
  const roomPath = pathName.split("/room/")[1];

  const [leftChairs, setLeftChairs] = useState(4);
  const [rightChairs, setRightChairs] = useState(4);

  const renderChairs = (num: number, side: "left" | "right") => {
    return Array.from({ length: num }).map((_, index) => (
      <div key={index} className={`chair ${side}-chair`}>
        {index + 1}
      </div>
    ));
  };

  return (
    <>
      <div className="page-container">
        <Navbar />
        <div className="content flex flex-col items-center justify-center">
          <div className="conference-room">
            <div className="left-side">{renderChairs(leftChairs, "left")}</div>
            <div className="table">
              <div className="head-chair">Chair</div>
            </div>
            <div className="right-side">
              {renderChairs(rightChairs, "right")}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default RoomPage;
