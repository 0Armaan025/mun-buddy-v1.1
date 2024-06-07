import React from "react";
import "./ChairRoomPage.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const ChairRoomPage: React.FC = () => {
  // Sample data for countries and delegates
  const delegates = [
    { country: "USA", delegate: "John Doe" },
    { country: "UK", delegate: "Jane Smith" },
    { country: "France", delegate: "Jean Dupont" },
    { country: "Germany", delegate: "Max Mustermann" },
    { country: "Canada", delegate: "Emily Carter" },
    { country: "Japan", delegate: "Hiroshi Tanaka" },
    // Add more delegates as needed
  ];

  return (
    <div className="chair-room-page">
      <Navbar />
      <div className="main-content">
        <div className="left-div rounded-r-md">
          <h2 className="text-2xl mb-4" style={{ fontFamily: "Poppins" }}>
            Delegates
          </h2>
          <div className="delegates-grid grid-cols-3 gap-4">
            {delegates.map((delegate, index) => (
              <div key={index} className="delegate relative group">
                <img
                  src="https://th.bing.com/th?id=OSK.mmcolgx31UinKFJtOKw7hPi2vIQy4EV4nNOsk2Hv9lIJYyv4&w=130&h=100&c=8&o=6&dpr=1.2&pid=SANGAM"
                  alt={`Delegate ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="tooltip  transition-opacity duration-300">
                  {delegate.country}
                  <br />
                  {delegate.delegate}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="right-div">
          <p>hi there</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default ChairRoomPage;
