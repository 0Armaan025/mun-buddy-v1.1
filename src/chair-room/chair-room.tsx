import React from "react";
import "./ChairRoomPage.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { useState } from "react";

const ChairRoomPage: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [showChitsModal, setShowChitsModal] = useState(false);
  const delegates = [
    { country: "USA", delegate: "John Doe" },
    { country: "UK", delegate: "Jane Smith" },
    { country: "France", delegate: "Jean Dupont" },
    { country: "Germany", delegate: "Max Mustermann" },
    { country: "Canada", delegate: "Emily Carter" },
    { country: "Japan", delegate: "Hiroshi Tanaka" },
    // Add more delegates as needed
  ];

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleViewChits = () => {
    setShowChitsModal(true);
  };

  return (
    <>
      <div className="chair-room-page">
        <Navbar />
        <div className="main-content">
          <div className="left-div rounded-r-md">
            <h2
              className="text-2xl mb-4 text-white"
              style={{ fontFamily: "Poppins" }}
            >
              Delegates
            </h2>
            <div className="delegates-grid grid-cols-3 gap-4">
              {delegates.map((delegate, index) => (
                <div
                  key={index}
                  className="delegate-card cursor-pointer transition-all hover:scale-105"
                >
                  <img
                    src="https://th.bing.com/th?id=OSK.mmcolgx31UinKFJtOKw7hPi2vIQy4EV4nNOsk2Hv9lIJYyv4&w=130&h=100&c=8&o=6&dpr=1.2&pid=SANGAM"
                    alt={`Delegate ${index + 1}`}
                    className="delegate-image"
                  />
                  <div className="delegate-country hover:bg-[#282828] transition-all">
                    {delegate.country}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="right-div ">
            <h3 className="text-white text-2xl ">Session Details</h3>
            <div className="flex flex-row justify-center  mt-2 items-center">
              <button
                className="specialBtn p-2  rounded-sm ml-2 specialBtn"
                style={{ background: "white" }}
              >
                Delegates
              </button>
              <button
                className="specialBtn p-2  rounded-sm ml-2 specialBtn"
                style={{ background: "white" }}
              >
                GSL
              </button>
              <button
                className="specialBtn p-2  rounded-sm ml-2 specialBtn"
                style={{ background: "white" }}
              >
                Moderated
              </button>
              <button
                className="specialBtn p-2  rounded-sm m-2 ml-2 "
                style={{ background: "white" }}
              >
                Unmoderated
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
      <div className="bottom-toolbar flex justify-center items-center fixed bottom-0 mb-4 bg-white shadow-md shadow-black rounded-md p-4  ">
        <button
          onClick={handleToggleMute}
          className="mute-button shadow-md shadow-black drop-shadow-md hover:shadow-lg hover:shadow-black hover:drop-shadow-lg transition text-white p-2 mx-2 rounded"
        >
          {isMuted ? (
            <img
              src="https://cdn-icons-png.flaticon.com/128/1679/1679975.png"
              alt="unmute"
              className="w-6"
            />
          ) : (
            <img
              src="https://cdn-icons-png.flaticon.com/128/4903/4903738.png"
              className="w-6"
              alt="mute"
            />
          )}
        </button>
        <button
          onClick={handleViewChits}
          className="chits-button shadow-md shadow-black drop-shadow-md hover:shadow-lg hover:shadow-black hover:drop-shadow-lg transition text-white p-2 mx-2 rounded"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/1041/1041916.png"
            className="w-6"
            alt="view chits"
          />
        </button>
        <button className="chits-button shadow-md shadow-black drop-shadow-md hover:shadow-lg hover:shadow-black hover:drop-shadow-lg transition text-white p-2 mx-2 rounded">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1828/1828490.png"
            className="w-6"
            alt="exit"
          />
        </button>
        <div className="flex flex-row bg-slate-200 mt-[0.15rem] ml-1 drop-shadow-md hover:shadow-lg hover:shadow-black hover:drop-shadow-lg shadow-black shadow-md justify-center items-center h-full w-32 p-1 transition-all cursor-pointer py-[0.4rem] rounded-md">
          <h3 className="text-xl">00:00:40</h3>
        </div>
      </div>
    </>
  );
};

export default ChairRoomPage;
