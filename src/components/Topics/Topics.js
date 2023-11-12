import React from "react";
import { useLoaderData } from "react-router-dom";
import TopicCard from "../TopicCard/TopicCard";
import TopicsHeader from "../TopicsHeader/TopicsHeader";

const Topics = () => {
  const topics = useLoaderData();
  return (
    <div className="mx-auto container">
      <TopicsHeader></TopicsHeader>
      <h2 className="mt-8">All Topics : {topics.data.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8 mt-8 container mx-auto mb-32">
        {topics.data.map((topic) => (
          <TopicCard key={topic.id} topic={topic}></TopicCard>
        ))}
      </div>
    </div>
  );
};

export default Topics;
