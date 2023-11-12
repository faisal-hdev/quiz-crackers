import React from "react";
import { useLoaderData } from "react-router-dom";
import TopicCard from "../TopicCard/TopicCard";

const Topics = () => {
  const topics = useLoaderData();
  return (
    <div className="container mx-auto mt-10">
      <h2>All Topics : {topics.data.length}</h2>
      <div className="flex gap-10 mt-6">
        {topics.data.map((topic) => (
          <TopicCard key={topic.id} topic={topic}></TopicCard>
        ))}
      </div>
    </div>
  );
};

export default Topics;
