import { useState } from "preact/hooks";

import "./styles/app.css";
import Items from "./components/Items";
import SimpleForm from "./components/Dummy";

export function App() {
  const [counter1, setcounter1] = useState(1);
  const [counter2, setcounter2] = useState(1);

  const prices = [54.99, 74.99];
  const discount = [94.99, 124.99];

  const Total = counter1 * prices[0] + counter2 * prices[1] + 19;

  return (
    <>
      <header className="Header">
        <h1
          style={{
            textAlign: "start",
            margin: "50px 10px",
            width: "90%",
          }}>
          Checkout
        </h1>
      </header>
      <main className="Main">
        <Items
          counter1={counter1}
          setcounter1={setcounter1}
          counter2={counter2}
          setcounter2={setcounter2}
          prices={prices}
          discount={discount}
          Total={Total}
        />

        <SimpleForm counter1={counter1} counter2={counter2} />
      </main>
      <footer
        style={{
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="Footer">
        <small>
          created by
          <a target="_blank" href="https://devchallenges.io/portfolio/XxtbmfxX">
            {" "}
            Toro
          </a>{" "}
          -
          <a target="_blank" href="https://devchallenges.io">
            {" "}
            dev.Challenges.io
          </a>
        </small>
      </footer>
    </>
  );
}
