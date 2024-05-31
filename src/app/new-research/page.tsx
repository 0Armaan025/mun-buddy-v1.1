"use client";
import React from "react";
import "../../app/globals.css";
import "./newresearchpage.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ResearchForm from "@/components/research-form/ResearchForm";

const NewResearchPage = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className="content flex flex-row justify-center items-center">
        <ResearchForm />
      </div>
      <Footer />
    </div>
  );
};

export default NewResearchPage;
