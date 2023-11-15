import React, { useState } from "react";
import QuizOption from "../QuizOption/QuizOption";

import { IoMdEye } from "react-icons/io";

const QuizCard = ({ singleQuestion, index }) => {
  const { options, id, question, correctAnswer } = singleQuestion;

  return (
    <div className="bg-sky-100 my-16 p-12 pt-4 rounded-lg">
      <div className=" flex justify-between items-start">
        <h3 className="text-2xl text-indigo-600 text-center mb-6 max-w-[720px]">
          Quiz {index + 1} : {question}
        </h3>
        <button>
          <IoMdEye className="text-3xl text-indigo-600 "></IoMdEye>
        </button>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
        {options.map((option) => (
          <QuizOption key={option} option={option}></QuizOption>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
