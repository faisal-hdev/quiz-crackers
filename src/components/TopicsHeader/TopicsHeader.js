import React from "react";

const TopicsHeader = () => {
  return (
    <div
      className="hero h-96 rounded-b-3xl"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1570215171323-4ec328f3f5fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-50 rounded-b-3xl"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn glass">Glass button</button>
        </div>
      </div>
    </div>
  );
};

export default TopicsHeader;
