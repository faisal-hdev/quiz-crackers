import React from "react";
import QuizOption from "../QuizOption/QuizOption";

const QuizCard = ({ singleQuestion, index }) => {
  const { options, id, question, correctAnswer } = singleQuestion;
  console.log(index);
  // console.log(Object.keys(singleQuestion).join(","));
  return (
    <div className="bg-sky-100 my-16 p-12 pt-4 rounded-lg">
      <h3 className="text-2xl text-indigo-600 text-center mb-6">
        Quiz {index + 1} : {question}
      </h3>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
        {options.map((option) => (
          <QuizOption key={option} option={option}></QuizOption>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
