import { useState } from "react";
import data from "../constant";

// 0 ~ 1은 두번째, 2~3은 첫번째
const { questionsList } = data;
const Questions = (props) => {
  const { q, setQ, count, setCount } = props;
  let select_q = 0;

  const nextOrBack = (isNext, index) => {
    console.log("q1: ", q);
    if (isNext === true) {
      if (index === 0) {
        if (1 <= q && q <= 3) select_q = 0;
        else if (4 <= q && q <= 6) select_q = 1;
        else if (7 <= q && q <= 9) select_q = 2;
        else if (10 <= q && q <= 12) select_q = 3;
        const newCount = [...count];
        newCount[select_q] += 1;
        setCount(newCount);
      }
      setQ(q + 1);
    } else {
      if (1 <= q - 1 && q - 1 <= 3) select_q = 0;
      else if (4 <= q - 1 && q - 1 <= 6) select_q = 1;
      else if (7 <= q - 1 && q - 1 <= 9) select_q = 2;
      else if (10 <= q - 1 && q - 1 <= 12) select_q = 3;
      setQ(q - 1);
      const newCount = [...count];
      if (newCount[select_q] > 0) newCount[select_q] -= 1;
      setCount(newCount);
    }
  };
  console.log("count: ", count);
  if (q === 13) {
    setTimeout(() => {
      console.log(q);
      setQ(q + 1);
    }, 3000);
    return (
      <div className="modal">
        <span className="loader"></span>
        <p className="modal__title">MBTI 분석중...</p>
      </div>
    );
  }
  return (
    <div className="wrap">
      <main className="content">
        <span className="content__number">
          Q{q}. {questionsList[q][0]}
        </span>
        <ul className="content__list">
          {questionsList[q].slice(1, 3).map((question, index) => (
            <button
              className="btn btn--l btn--primary"
              type="button"
              onClick={(e) => nextOrBack(true, index)}
              key={index}
            >
              {question}
            </button>
          ))}
          {/* 뒤로가기 버튼 디자인 필요 */}
          {q > 1 ? (
            <button
              className="content__link btn btn--b btn--primary2"
              onClick={(e) => {
                nextOrBack(false);
              }}
            >
              뒤로가기
            </button>
          ) : null}
        </ul>
      </main>
    </div>
  );
};

export default Questions;
