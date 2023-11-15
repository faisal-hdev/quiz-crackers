import React from "react";
import { useNavigate } from "react-router-dom";

const TopicCard = ({ topic }) => {
  const { id, name, logo } = topic;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/quizDetails/${id}`);
  };

  return (
    <div className="card bg-gray-500 card-compact w-72 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white justify-center">{name}</h2>
        <div className="card-actions justify-center mt-4 mb-4">
          <button
            onClick={handleNavigate}
            className="btn border-b-2 border-indigo-500 rounded-3xl"
          >
            Start Practice
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
