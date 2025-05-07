import { useState } from "react";
import { SpaceKbd } from "../../../primitives/space-kbd.tsx";
import { EnterKbd } from "../../../primitives/enter-kbd.tsx";

export function ButtonSection() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const color = count >= 10 ? "green" : "red";

  return (
    <section>
      <h2>Buttons</h2>
      <p>
        Mit Buttons kann man verschiedene Aktionen auslösen. Drücke die
        <SpaceKbd />
        -Taste oder die <EnterKbd />
        -Taste auf dem Button bis der Zählerstand 10 erreicht.
      </p>

      <button onClick={increment} style={{ padding: "2px 10px" }}>
        +1
      </button>

      <p style={{ color }}>
        Aktueller Zählerstand: {count}{" "}
        <span style={{ visibility: count >= 10 ? "visible" : "hidden" }}>
          ✅
        </span>
      </p>
    </section>
  );
}
