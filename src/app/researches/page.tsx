"use client";

import LeftSideBar from "@/components/left-side-bar/LeftSideBar";
import Navbar from "@/components/navbar/Navbar";
import { WobbleCard } from "@/components/wobble-card/WobbleCard";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Footer from "@/components/footer/Footer";

type Props = {};

const ResearchesPage = (props: Props) => {
  const router = useRouter();

  // Sample data for research tiles
  const researchTiles = [
    { id: 1, title: "Research 1" },
    { id: 2, title: "Research 2" },
    { id: 3, title: "Research 3" },
    { id: 4, title: "Research 4" },
    { id: 5, title: "Research 5" },
    { id: 6, title: "Research 6" },
  ];

  return (
    <>
      <Navbar />
      <div className="dashboardPage flex flex-row justify-start items-start">
        <LeftSideBar height="89vh" />
        <div className="contentDiv ml-8 mt-2 flex flex-col justify-start items-start w-full">
          <div className="w-full flex flex-col justify-start items-start">
            <Link href="/#pricing">
              <WobbleCard className="cursor-pointer">
                <div>
                  <h2 className="m-4 text-xl" style={{ fontFamily: "Poppins" }}>
                    Tries Left: <span style={{ fontWeight: "bold" }}>10</span>
                  </h2>
                </div>
              </WobbleCard>
            </Link>
          </div>
          <br />
          <div className="text-start w-full flex flex-row justify-start items-start">
            <h3 className="text-4xl text-white font-medium underline">
              Your researches
            </h3>
          </div>
          <br />
          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 border rounded shadow bg-[#898686] transition-all cursor-pointer hover:bg-[#bbb7b7] relative flex flex-col justify-center items-center">
              <h2 className="text-xl font-bold">+</h2>
              <h3>New Research</h3>
            </div>
            {researchTiles.map((tile) => (
              <div
                key={tile.id}
                className="p-4 border rounded shadow  bg-[#898686] transition-all cursor-pointer hover:bg-[#bbb7b7] justify-center items-center flex flex-col "
              >
                <h2 className="text-xl" style={{ fontFamily: "Poppins" }}>
                  {tile.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResearchesPage;
