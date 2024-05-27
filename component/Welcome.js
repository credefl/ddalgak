import React, { useState } from "react";

const Welcome = (props) => {
  const {startQuestion, setStartQuestion} = props;
  
  const stepToQuestion = ()=>{
    setStartQuestion(!startQuestion);
  }

  return (
    <main className="content">
      <h1 className="content__title">MBTI TRAVEL</h1>
      <h2 className="content__sub-title">질문으로 여행 MBTI 를 ~~~~</h2>
      <button className="content__link btn btn--s btn--primary" onClick={e => stepToQuestion()}>Start</button>
    </main>
  );
};

export default Welcome;
