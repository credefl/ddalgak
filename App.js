import React, { useState, useEffect } from "react";
import Welcome from "./component/Welcome";
import Questions from "./component/Questions"
import Result from "./component/Result"
import "./assets/css/layout.css";

const App = () => {
  const [startQuestion, setStartQuestion] = useState(false);
  const [q, setQ] = useState(1);
  const [content, setContent] = useState(null);

  useEffect(() => {
    console.log("QQQQQ: ", q);
    if (startQuestion) {
      if (q > 13) {
        setContent(<Result />);
      } else if (q >= 1) {
        setContent(<Questions q={q} setQ={setQ} />);
      }
    } else {
      setContent(<Welcome startQuestion={startQuestion} setStartQuestion={setStartQuestion} />);
    }
  }, [q, startQuestion]);
  return (
    <div className="wrap">
      {content}
    </div>
  );
};

export default App;
