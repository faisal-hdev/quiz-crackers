import { useState } from "react";

const QuizOption = ({ option }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      onClick={handleCheck}
      className="border-2 flex items-center cursor-pointer hover:bg-indigo-200 border-indigo-500 rounded-md text-indigo-600"
    >
      <input
        type="radio"
        name="radio-2"
        className="radio ml-4 radio-primary"
        checked={isChecked}
        onChange={handleCheck}
      />
      <h1 className="p-5 ">Quiz {option}</h1>
    </div>
  );
};

export default QuizOption;
