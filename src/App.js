import React, { useState, useEffect } from "react";
import Welcome from "./component/Welcome";
import Questions from "./component/Questions";
import Result from "./component/Result";
import "./assets/css/layout.css";

const App = () => {
  const [startQuestion, setStartQuestion] = useState(false);
  const [q, setQ] = useState(1);
  const [content, setContent] = useState(null);
  const [count, setCount] = useState([0, 0, 0, 0]);
  useEffect(() => {
    if (startQuestion) {
      if (q > 13) {
        setContent(<Result count={count} setQ={setQ} setCount={setCount} />);
      } else if (q >= 1) {
        setContent(
          <Questions q={q} setQ={setQ} count={count} setCount={setCount} />
        );
      }
    } else {
      setContent(
        <Welcome
          startQuestion={startQuestion}
          setStartQuestion={setStartQuestion}
        />
      );
    }
  }, [q, startQuestion]);
  return <div className="wrap">{content}</div>;
};

export default App;
