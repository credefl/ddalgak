import React, { useState } from "react";
import axios from "axios";
import Content from "./component/Content";
import "./assets/css/layout.css";
import "./assets/css/reset.css";

const App = () => {
  const [q, setQ] = useState(1);
  const questions = {
    1: ["이번 여행은 어디로?", "내가 걷는 길이 곧 코스", "계획은 필수"],

    2: [
      "여행경비는?",
      "당장 국제거지만 안되면 되지!",
      "걸어다니는 게산기로 변신",
    ],

    3: [
      "여행을 다녀온 후",
      "홈스윗홈... 침대로 점프!",
      "캐리어를 열고 물건을 정리한다.",
    ],

    4: [
      "여행지에서 식사할 때",
      "유명한 맛집 헌터",
      "처음 본 순간 사랑에 빠진 길거리 가게",
    ],

    5: [
      "여행지에서 길을 잃었을 때",
      "왔던 길로 돌아가는 헨젤과 그레텔",
      "자꾸 걸어 나가면 길이 나오겠지..",
    ],

    6: [
      "화려한 건축물을 보면서 드는 생각은?",
      "어떤 방법으로 지었을까? 고민한다",
      "와 멋있다 감탄한다.",
    ],

    7: [
      "아침에 늦잠을 잔 친구에게",
      "여행은 역시 피곤하지",
      "내일은 시간 지키자",
    ],

    8: [
      "친구에게 차사고가 났다고 전화 왔을 때 나의 대답은?",
      "괜찮아? 다친데는 없어?",
      "보험들었어?",
    ],

    9: [
      "친구가 쓸데없는 기념품을 살 때",
      "그래 니가 행복하다면",
      "그거 결국 쓰레기 된다",
    ],

    10: [
      "나는 여행지를 선택할 때 주로",
      "사람이 많은 도시로",
      "나무가 많은 자연으로",
    ],

    11: ["숙소를 구할 때", "저녁에 바베큐파티를 여는 곳", "조용하고 아늑한 곳"],

    12: [
      "여행지에 대한 감상을",
      "말로 내뱉어야 직성이 풀린다",
      "내 마음속에 저...장 마음에 담고 느낀다.",
    ],
  };

  const nextQuestion = () => {
    setQ(q + 1);
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

    return (
      <div className="modal">
        <span className="loader"></span>
        <p className="modal__title">MBTI 분석중</p>
      </div>
    );
  }
  return (
    <div className="wrap">
      <main className="content">
        <span className="content__number">Q{q}</span>
        <h1 className="content__title">{questions[q][0]}</h1>
        <ul className="content__list">
          <a
            className="btn btn--l btn--primary"
            type="button"
            onClick={(e) => nextQuestion()}
          >
            {questions[q][1]}
          </a>
          <a
            className="btn btn--l btn--primary"
            type="button"
            onClick={(e) => nextQuestion()}
          >
            {questions[q][2]}
          </a>
        </ul>
      </main>
    </div>
  );
};

export default App;

// const App = () => {
//   const [mbti, setMbti] = useState({
//     EI: 0,
//     SN: 0,
//     FT: 0,
//     PJ: 0,
//   });

//   // 마지막 페이지에 api 호출하는 코드에다가 옮기기
//   const postUser = () => {
//     try {
//       // 백엔드가 정해 놓은 url로 수정
//       axios.post("http://127.0.0.1:7080/test", {
//         EI: 5,
//         SN: 4,
//         FT: 2,
//         PJ: 0,
//       });
//       console.log("Request was successful");
//     } catch (e) {
//       console.error(e);
//     }
//   };
//   //postUser();
//   return (
//     <div className="wrap">
//       <Content />
//     </div>
//   );
// };

// export default App;
