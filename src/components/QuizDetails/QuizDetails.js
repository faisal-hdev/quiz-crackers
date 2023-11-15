import React from "react";
import { useLoaderData } from "react-router-dom";

const QuizDetails = () => {
  const quiz = useLoaderData();
  const { name, id, total } = quiz.data;
  console.log(quiz.data);
  return (
    <div>
      <h2 className="text-4xl mt-16">Quiz of {name}</h2>
    </div>
  );
};

export default QuizDetails;
