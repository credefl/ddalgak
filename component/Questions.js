import { useState } from "react";
import questionsList from "../constant";

const Questions = (props) => {
  const { q, setQ } = props;
  const [EI, setEI] = useState([0, 0, 0]);
  const [NS, setNS] = useState([0, 0, 0]);
  const [FT, setFT] = useState([0, 0, 0]);
  const [PJ, setPJ] = useState([0, 0, 0]);
  const nextOrBack = (isNext) => {
    if (isNext === true) {
      if (1 <= q <= 3) {
        setEI(EI[q] + 1);
      }
      setQ(q + 1);
    } else setQ(q - 1);
  };

  if (q === 13) {
    // try {
    //   // 백엔드가 정해 놓은 url로 수정
    //   axios.post("http://127.0.0.1:7080/test", {
    //     EI: 5,
    //     SN: 4,
    //     FT: 2,
    //     PJ: 0,
    //   });
    //   console.log("Request was successful");
    // } catch (e) {
    //   console.error(e);
    // }

    // 아래 코드는 api 통신까지 기다린 테스트 코드로 나중에 지우던가
    // 3000 -> 1000으로 변경
    setTimeout(() => {
      console.log(q);
      setQ(q + 1);
    }, 1000);
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
          Q{q}. {questionsList[q][0]}{" "}
        </span>
        <ul className="content__list">
          {questionsList[q].slice(1, 3).map((question, index) => (
            <button
              className="btn btn--l btn--primary"
              type="button"
              onClick={(e) => nextOrBack(true)}
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
