import LeftSideBar from "@/components/left-side-bar/LeftSideBar";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="dashboardPage">
        <LeftSideBar />
      </div>
    </>
  );
};

export default DashboardPage;
