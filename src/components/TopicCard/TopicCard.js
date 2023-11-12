import React from "react";

const TopicCard = ({ topic }) => {
  const { name, logo } = topic;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-center">
          <button className="btn">Start Practice</button>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
