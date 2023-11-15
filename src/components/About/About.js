import React from "react";
import mySvg from "../../design-file/undraw_page_not_found_re_e9o6.svg";

const About = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-center mb-14">
        <img className="h-72" src={mySvg} alt="" />
      </div>
      <h2 className="text-5xl">404 error Page</h2>
    </div>
  );
};

export default About;
