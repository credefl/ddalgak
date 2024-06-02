import { useState } from "react";
import data from "../constant";

const { resultContentsList } = data;
const Result = (props) => {
  const { count, setCount, setQ } = props;
  let MBTI = "INTJ".split(""); // 문자열을 배열로 변환

  if (count[0] === 2 || count[0] === 3) MBTI[3] = "P";
  if (count[1] === 2 || count[1] === 3) MBTI[1] = "S";
  if (count[2] === 2 || count[2] === 3) MBTI[2] = "F";
  if (count[3] === 2 || count[3] === 3) MBTI[0] = "E";

  MBTI = MBTI.join(""); // 배열을 다시 문자열로 변환

  // Questions.js에서 onClick 부분 참조
  const home = () => {
    setCount([0, 0, 0, 0]);
    setQ(0);
  };

  return (
    <div className="wrap">
      <main className="content">
        <h1 className="content__title color--primary">{MBTI}</h1>
        <h2 className="content__sub-title">{resultContentsList[MBTI][0]}</h2>
        <ul className="content__result">
          <a href="#">
            <figure
              className="content__result__thumb"
              onClick="location.href='www.naver.com'"
            >
              <img src={`/images/${MBTI}1.png`} alt="" />
            </figure>
            <p className="content__result__title">
              {resultContentsList[MBTI][1]}
            </p>
          </a>

          <a href="#">
            <figure className="content__result__thumb">
              <img src={`/images/${MBTI}2.png`} alt="" />
            </figure>
            <p className="content__result__title">
              {resultContentsList[MBTI][2]}
            </p>
          </a>
        </ul>
      </main>
    </div>
  );
};

export default Result;
