import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "../QuizCard/QuizCard";

const QuizDetails = () => {
  const quiz = useLoaderData();
  const data = quiz.data;
  const { name } = data;
  const questions = data.questions;
  console.log(questions);
  return (
    <div>
      <h2 className="text-4xl mt-16">Quiz of {name}</h2>
      <div className="container max-w-4xl mx-auto">
        {questions.map((singleQuestion, index) => (
          <QuizCard
            key={singleQuestion.id}
            singleQuestion={singleQuestion}
            index={index}
          ></QuizCard>
        ))}
      </div>
    </div>
  );
};

export default QuizDetails;
