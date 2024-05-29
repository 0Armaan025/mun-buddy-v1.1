"use client";
import React from "react";
import { usePathname } from "next/navigation";

const LeftSideBar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "bg-[#123640]" : "";
  };

  const handleNavigation = (path: string) => {
    // You can implement your navigation logic here
    console.log(`Navigating to ${path}`);
  };

  return (
    <div className="leftSideBar flex flex-col justify-start items-start bg-[#0f191c] w-40 p-2 h-[164vh] rounded-r-md">
      <div
        className={`itemDiv flex flex-row justify-center p-2 py-4 px-4 hover:bg-[#080f11] hover:w-full transition-all rounded-md cursor-pointer ${isActive(
          "/dashboard"
        )}`}
        onClick={() => handleNavigation("/")}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/2386/2386408.png"
          alt="dashboard"
          className="w-6 mr-2"
        />
        <h3
          className="text-white"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Dashboard
        </h3>
      </div>
      <div
        className={`itemDiv flex flex-row justify-start w-full p-2 py-4 px-4 hover:bg-[#080f11] hover:w-full transition-all rounded-md cursor-pointer ${isActive(
          "/profile"
        )}`}
        onClick={() => handleNavigation("/profile")}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/206/206853.png"
          alt="profile"
          className="w-6 mr-2"
        />
        <h3
          className="text-white mr-4"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Profile
        </h3>
      </div>
      <div
        className={`itemDiv flex flex-row justify-start w-full p-2 py-4 px-4 hover:bg-[#080f11] hover:w-full transition-all rounded-md cursor-pointer ${isActive(
          "/researches"
        )}`}
        onClick={() => handleNavigation("/profile")}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/9028/9028717.png"
          alt="Researches"
          className="w-6 mr-2"
        />
        <h3
          className="text-white mr-4"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Researches
        </h3>
      </div>
      <hr
        style={{
          width: "100%",
          border: "1px solid #B10102",
          marginBottom: "20px",
        }}
      />
      <div
        className={`itemDiv flex flex-row justify-center p-2 py-4 px-4 hover:bg-[#721c1c] hover:w-full transition-all rounded-md cursor-pointer ${isActive(
          "/delete-account"
        )}`}
        onClick={() => handleNavigation("/delete-account")}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/8745/8745947.png"
          alt="delete-account"
          className="w-12 mr-2"
        />
        <h3
          className="text-white"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Delete Account
        </h3>
      </div>
      <div
        className={`itemDiv flex flex-row w-full justify-start p-2 py-4 px-4 hover:bg-[#721c1c] hover:w-full transition-all rounded-md cursor-pointer ${isActive(
          "/logout"
        )}`}
        onClick={() => handleNavigation("/logout")}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/5690/5690898.png"
          alt="logout"
          className="w-6 mr-2"
        />
        <h3
          className="text-white"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Log out
        </h3>
      </div>
    </div>
  );
};

export default LeftSideBar;
