"use client";
import React, { useState } from "react";
import Select from "react-select";
import "../../app/globals.css";
import "./createorjoinsimulationpage.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const countryOptions = [
  { value: "USA", label: "United States" },
  { value: "CAN", label: "Canada" },
  { value: "GBR", label: "United Kingdom" },
];

const CreateOrJoinSimulationPage = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryAlreadyPicked, setCountryAlreadyPicked] = useState(false);

  const handleCountryChange = (selectedOption: any) => {
    if (selectedOption) {
      // Simulate a check if the country is already picked
      const isAlreadyPicked = selectedOption.value === "USA"; // For example purposes
      setSelectedCountry(selectedOption);
      setCountryAlreadyPicked(isAlreadyPicked);
    }
  };

  return (
    <div className="page-container w-full m-0">
      <Navbar />
      <div className="content flex flex-row justify-center items-center w-full m-0">
        <div className="flex flex-col justify-center h-[80vh] w-full items-center m-0 bg-purple-300">
          <div className="p-2 px-4 bg-white rounded-md border-2 border-black">
            <h3 className="text-2xl font-bold">Create a room</h3>
            <input
              type="text"
              placeholder="Room name"
              className="my-2 border-[1.2px] border-black p-2 rounded-md mt-3"
            />
            <div className="mt-4">
              <h4 style={{ fontFamily: "Poppins" }}>
                Pick your country (delegate):
              </h4>
              <Select
                options={countryOptions}
                value={selectedCountry}
                onChange={handleCountryChange}
                className="mt-2"
              />
              {countryAlreadyPicked && (
                <div className="mt-2 text-red-500">Country already picked</div>
              )}
            </div>
            <div className="codeDiv flex flex-row mt-2">
              <h4 style={{ fontFamily: "Poppins" }}>Room Code: </h4>
              <img
                src="https://cdn-icons-png.flaticon.com/128/3914/3914174.png"
                className="w-6 cursor-pointer ml-4"
                alt="copy"
              />
            </div>
            <input
              type="button"
              value="Create!"
              style={{ fontFamily: "Poppins" }}
              className="mt-4 bg-[#a8901a] transition-all hover:bg-[#c6ac26]  font-bold text-white p-2 rounded-md cursor-pointer w-full"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center h-[80vh] w-full items-center bg-yellow-300 m-0 p-0">
          <div className="p-2 px-4 bg-white rounded-md border-2 border-black py-3">
            <h3 className="text-2xl font-bold ">Join a room</h3>
            <input
              type="text"
              placeholder="Room code"
              className="my-2 border-[1.2px] py-2 border-black p-2 rounded-md mt-3"
            />
            <div className="mt-4">
              <h4 style={{ fontFamily: "Poppins" }}>
                Pick your country (delegate):
              </h4>
              <Select
                options={countryOptions}
                value={selectedCountry}
                onChange={handleCountryChange}
                className="mt-2"
              />
              {countryAlreadyPicked && (
                <div className="mt-2 text-red-500">Country already picked</div>
              )}
            </div>

            <input
              type="button"
              value="Join!"
              style={{ fontFamily: "Poppins" }}
              className="mt-4 bg-[#d8b4fe] transition-all hover:bg-[#a047ff] mb-4 font-bold text-black hover:text-white p-2 rounded-md cursor-pointer w-60"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateOrJoinSimulationPage;
