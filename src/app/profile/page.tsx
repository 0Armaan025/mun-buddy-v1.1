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
        <LeftSideBar height="89vh" />
        <div className="contentDiv ml-8 mt-2 flex flex-col justify-start items-start">
          <Link href="/#pricing">
            <WobbleCard className="cursor-pointer">
              <h2 className="m-4 text-xl" style={{ fontFamily: "Poppins" }}>
                Tries Left: <span style={{ fontWeight: "bold" }}>10</span>
              </h2>
            </WobbleCard>
          </Link>
          <center className="text-center mt-4 flex flex-col justify-start items-start">
            <div className="profileImageDiv flex flex-col justify-start items-start">
              <h3
                className="text-2xl text-white"
                style={{ fontFamily: "Poppins" }}
              >
                Your Profile
              </h3>
              <div className="profileDiv flex-row flex justify-start items-start mt-2">
                <div className="flex-col flex justify-start items-start">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                    className="mt-4 hover:scale-105 cursor-pointer transition-all"
                    alt="avatar image"
                  />
                  <input type="file" className="mt-4 text-white" />
                </div>
                <div className="cardDivForProfile flex flex-col justify-start items-start bg-slate-200 p-2 rounded-md w-96">
                  <label className="text-lg" style={{ fontFamily: "Poppins" }}>
                    Name:
                  </label>

                  <input
                    type="text"
                    placeholder="Eg. Armaan."
                    className="p-2 rounded-md mt-2 outline-none border-[1.5px] border-black w-full  "
                  />
                  <label
                    className="text-lg mt-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Phone number:
                  </label>

                  <input
                    type="phone"
                    placeholder="Eg. 7837433000"
                    className="p-2 rounded-md mt-2 outline-none border-[1.5px] border-black w-full"
                  />

                  <button className="relative inline-flex h-12 mt-4 w-full overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      Update
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
