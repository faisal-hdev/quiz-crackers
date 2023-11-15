import React from "react";

const QuizOption = ({ option }) => {
  return (
    <div className="border-2 flex items-center cursor-pointer hover:bg-indigo-200 border-blue-300 rounded-md text-indigo-600">
      <input type="radio" name="radio-2" className="radio ml-4 radio-primary" />
      <h1 className="p-5 ">Quiz {option}</h1>
    </div>
  );
};

export default QuizOption;
