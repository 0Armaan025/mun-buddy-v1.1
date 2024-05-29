import React from "react";
import { PlaceholdersAndVanishInput } from "./placeholders-and-vanish-input";

type Props = {};

const MotionPracticeComponent = (props: Props) => {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="motionPracticeComponent p-4 bg-white rounded-md flex flex-col justify-start items-start mt-4 relative bottom-80">
      <h2
        className="text-black text-xl font-bold "
        style={{ fontFamily: "Poppins" }}
      >
        Prompt
      </h2>
      <h4>
        Write a motion to start moderated caucus on the topic:{" "}
        <span className="font-bold">Benefits of being alone</span>
      </h4>
      <div className="someRandomRowDiv flex flex-row justify-center">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/9311/9311549.png"
          className="w-12 mt-4 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MotionPracticeComponent;
