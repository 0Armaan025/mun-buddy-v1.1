"use client";

import LeftSideBar from "@/components/left-side-bar/LeftSideBar";
import Navbar from "@/components/navbar/Navbar";

import { WobbleCard } from "@/components/wobble-card/WobbleCard";

import Link from "next/link";

import { motion } from "framer-motion";

import React from "react";

import Footer from "@/components/footer/Footer";

type Props = {};

const ProfilePage = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="dashboardPage flex flex-row justify-start items-start">
        <LeftSideBar />
        <div className="contentDiv ml-8 mt-2 flex flex-col justify-start items-start">
          <Link href="/#pricing">
            <WobbleCard className="cursor-pointer">
              <h2 className="m-4 text-xl" style={{ fontFamily: "Poppins" }}>
                Tries Left: <span style={{ fontWeight: "bold" }}>10</span>
              </h2>
            </WobbleCard>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
