import React from "react";
import { Link } from "react-router-dom";

const TopicCard = ({ topic }) => {
  const { id, name, logo } = topic;
  return (
    <div className="card bg-gray-500 card-compact w-72 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white justify-center">{name}</h2>
        <div className="card-actions justify-center mt-4 mb-4">
          <Link
            to={`/friend/${id}`}
            className="btn border-b-2 border-indigo-500 rounded-3xl"
          >
            Start Practice
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
