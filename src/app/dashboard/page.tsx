"use client";

import LeftSideBar from "@/components/left-side-bar/LeftSideBar";
import Navbar from "@/components/navbar/Navbar";
import ScoreChart from "@/components/score-chart/ScoreChart";
import { WobbleCard } from "@/components/wobble-card/WobbleCard";

import Link from "next/link";

import { motion } from "framer-motion";
import { LampContainer } from "@/components/lamp";
import React from "react";
import MotionPracticeComponent from "@/components/motionPractice/MotionPracticeComponent";

type Props = {};

const DashboardPage = (props: Props) => {
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

          <h3
            className="mt-4 text-2xl text-white font-semibold"
            style={{ fontFamily: "Poppins" }}
          >
            Good evening, Armaan 👋
          </h3>

          <div className="eyeCatcherDiv flex flex-row justify-center items-center">
            <div className="mt-8 bg-white text-center p-2 rounded-md cursor-pointer hover:border-b-amber-200 hover:scale-105 transition-all">
              <h3 className="text-xl text-black font-semibold mb-4">
                Score Improvement Chart
              </h3>
              <ScoreChart />
            </div>
            <div className="commonMistakesDiv ml-16 mt-8 bg-white text-center p-2 py-5 rounded-md cursor-pointer hover:border-b-amber-200 hover:scale-105 transition-all">
              <h2
                style={{ fontFamily: "Poppins" }}
                className="text-xl font-semibold"
              >
                Your top 5 common mistakes:
              </h2>
              <br />
              <ul className="flex flex-col justify-start items-start list-decimal ml-7 ">
                <li>You ain't enough</li>
                <li>You are a stupid man</li>
                <li>Hey, you can't do it</li>
                <li>Shut up</li>
                <li>Yeah, go ahead loser</li>
              </ul>
            </div>
          </div>
          <br />
          <LampContainer className="mb-0">
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
              Practice motions <br /> and points of order.
            </motion.h1>
          </LampContainer>
          <MotionPracticeComponent />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
