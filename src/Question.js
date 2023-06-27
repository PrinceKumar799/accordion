import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [readMore, setReadMore] = useState(false);
  const handleClick = () => {
    setReadMore(!readMore);
  };
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={handleClick}>
          {readMore ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {readMore ? <p>{info}</p> : <p></p>}
    </article>
  );
};

export default Question;
