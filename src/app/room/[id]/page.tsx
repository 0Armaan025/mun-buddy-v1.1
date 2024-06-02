"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./roomidpage.css";
import { usePathname } from "next/navigation";

const RoomPage = () => {
  const pathName = usePathname();
  const roomPath = pathName.split("/room/")[1];

  const [leftChairs, setLeftChairs] = useState(4);
  const [rightChairs, setRightChairs] = useState(4);
  const [toolboxVisible, setToolboxVisible] = useState(true);
  const [leftToolboxVisible, setLeftToolboxVisible] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [timerActive, setTimerActive] = useState(true);
  const [timeLeft, setTimeLeft] = useState(5);
  const [selectedYield, setSelectedYield] = useState("");
  const [selectedDelegate, setSelectedDelegate] = useState("");
  const [showDelegateModal, setShowDelegateModal] = useState(false);

  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setTimerActive(false);
      setTimeLeft(5);
    }
  }, [timerActive, timeLeft]);

  const toggleToolbox = () => {
    setToolboxVisible(!toolboxVisible);
  };

  const toggleLeftToolbox = () => {
    setLeftToolboxVisible(!leftToolboxVisible);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleRaisePlacard = () => {
    alert("Placard raised!");
  };

  const handleYieldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYield(e.target.value);
    alert(selectedYield);
    if (e.target.value === "point2") {
      setShowDelegateModal(true);
    }
  };

  const handleDelegateSelect = (delegate: string) => {
    setSelectedDelegate(delegate);
    setShowDelegateModal(false);
  };

  const handleMotionChange = (e: any) => {
    alert(`Motion raised: ${e.target.value}`);
  };

  const handlePointChange = (e: any) => {
    alert(`Point raised: ${e.target.value}`);
  };

  const handleCustomSubmit = () => {
    const customInput = (
      document.getElementById("customInput") as HTMLSelectElement
    ).value;
    alert(`Custom motion/point: ${customInput}`);
  };

  const handleSendChit = () => {
    const to = (document.getElementById("toCountry") as HTMLSelectElement)
      .value;
    const from = "India";
    const message = (
      document.getElementById("chitMessage") as HTMLTextAreaElement
    ).value;
    alert(`Chit sent!\nTo: ${to}\nFrom: ${from}\nMessage: ${message}`);
    closeModal();
  };

  const chairData = [
    { country: "USA", role: "Delegate" },
    { country: "UK", role: "Delegate" },
    { country: "France", role: "Delegate" },
    { country: "Germany", role: "Delegate" },
    { country: "Italy", role: "Delegate" },
    { country: "Spain", role: "Delegate" },
    { country: "Canada", role: "Delegate" },
    { country: "Australia", role: "Delegate" },
  ];

  const renderChairs = (num: any, side: any) => {
    return Array.from({ length: num }).map((_, index) => (
      <div key={index} className={`chair ${side}-chair`}>
        {index + 1}
        <div className="tooltip">
          {chairData[index].country}, {chairData[index].role}
        </div>
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
          <div className={`toolbox ${toolboxVisible ? "" : "hidden"}`}>
            <h3>Toolbox</h3>
            <button onClick={handleRaisePlacard}>Raise Your Placard</button>
            <div className="dropdown">
              <label htmlFor="motion">Raise a motion:</label>
              <select id="motion" onChange={handleMotionChange}>
                <option value="">Select motion</option>
                <option value="motion1">Motion 1</option>
                <option value="motion2">Motion 2</option>
                <option value="motion3">Motion 3</option>
              </select>
            </div>
            <div className="dropdown">
              <label htmlFor="point">Raise a point:</label>
              <select id="point" onChange={handlePointChange}>
                <option value="">Select point</option>
                <option value="point1">Point of Order</option>
                <option value="point2">Point of Information</option>
                <option value="point3">Point of Personal Privilege</option>
              </select>
            </div>
            <div className="dropdown">
              <label htmlFor="point">Yields:</label>
              <select id="point" onChange={handleYieldChange}>
                <option value="">Select Yield</option>
                <option value="point1">Yield to the chair</option>
                <option value="point2">Yield to another delegate</option>
                <option value="point3">Yield to questions</option>
                <option value="point3">Yield to floor</option>
              </select>
            </div>
            <div className="input-container">
              <label htmlFor="customInput">Custom motion/point:</label>
              <input type="text" id="customInput" placeholder="Type here..." />
              <button onClick={handleCustomSubmit}>Send</button>
            </div>
          </div>
          <div className={`left-toolbox ${leftToolboxVisible ? "" : "hidden"}`}>
            <h3>Status</h3>
            <button className="svg-button">Present</button>
            <button className="svg-button">Present and Voting</button>
            <div className="timer">
              {timerActive && `Seconds left: ${timeLeft}`}
            </div>
            <button onClick={openModal} className="svg-button">
              Pass Chit
            </button>
          </div>
          <button className="toggle-button" onClick={toggleToolbox}>
            {toolboxVisible ? (
              <img
                src="https://cdn-icons-png.flaticon.com/128/5683/5683514.png"
                alt="toggle toolbox"
                className="w-8"
              />
            ) : (
              <img
                src="https://cdn-icons-png.flaticon.com/128/5683/5683501.png"
                alt="toggle toolbox"
                className="w-8"
              />
            )}
          </button>
          <button
            className="toggle-button2"
            style={{ left: "20px", right: "auto" }}
            onClick={toggleLeftToolbox}
          >
            {leftToolboxVisible ? (
              <img
                src="https://cdn-icons-png.flaticon.com/128/5683/5683514.png"
                alt="toggle toolbox"
                className="w-8"
              />
            ) : (
              <img
                src="https://cdn-icons-png.flaticon.com/128/5683/5683501.png"

                alt="toggle toolbox"
                className="w-8"
              />
            )}
          </button>
        </div>
        <Footer />
      </div>
      <div className={`modal ${modalVisible ? "active" : ""}`}>
        <h3>Pass Chit</h3>
        <div className="input-container">
          <label htmlFor="fromCountry">To:</label>
          <select id="fromCountry">
            {chairData.map((chair, index) => (
              <option key={index} value={chair.country}>
                {chair.country}
              </option>
            ))}
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="toCountry">From:</label>
          <input type="text" id="toCountry" value="India" readOnly />
        </div>

        <div className="input-container">
          <label htmlFor="chitMessage">Message:</label>
          <textarea
            id="chitMessage"
            placeholder="Type your message here..."
          ></textarea>
        </div>
        <div className="button-container">
          <button onClick={handleSendChit}>Send</button>
        </div>
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
      </div>
      {showDelegateModal && (
        <div className="delegate-modal bg-[#222728]">
          <div className="flex flex-row justify-start items-center w-full">
            <h2
              className="text-2xl mr-2 cursor-pointer "
              onClick={(e) => {
                setShowDelegateModal(false);
              }}
            >
              &times;
            </h2>
            <h3 className="text-sm">Select Delegate</h3>
          </div>

          <ul>
            {chairData.map((chair, index) => (
              <li
                key={index}
                onClick={() => handleDelegateSelect(chair.country)}
              >
                {chair.country}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default RoomPage;
