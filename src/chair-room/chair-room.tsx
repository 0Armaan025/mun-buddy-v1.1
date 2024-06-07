import React from "react";
import "./ChairRoomPage.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const ChairRoomPage: React.FC = () => {
  return (
    <div className="chair-room-page">
      <Navbar />
      <div className="main-content">
        <div className="left-div rounded-r-md">
          <h2 className="text-2xl mb-4" style={{ fontFamily: "Poppins" }}>
            Delegates
          </h2>
          <div className="delegates-grid grid-cols-3">
            {Array.from({ length: 20 }, (_, index) => (
              <div key={index} className="delegate">
                <img
                  src="https://th.bing.com/th?id=OSK.mmcolgx31UinKFJtOKw7hPi2vIQy4EV4nNOsk2Hv9lIJYyv4&w=130&h=100&c=8&o=6&dpr=1.2&pid=SANGAM"
                  alt={`Delegate ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="right-div">
          <p>hi there</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChairRoomPage;
