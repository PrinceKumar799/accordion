import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
import Question from "./Question";
function App() {
  return (
    <div className="container">
      <h3>questions and answers about login</h3>
      <section className="info">
        {data.map((quesInfo) => (
          <Question title={quesInfo.title} info={quesInfo.info} />
        ))}
      </section>
    </div>
  );
}

export default App;
