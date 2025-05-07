import { EnterKbd } from "../../../primitives/enter-kbd.tsx";
import { useState } from "react";

export function AnchorSection() {
  const [firstLinkClicked, setFirstLinkClicked] = useState(false);
  const [secondLinkClicked, setSecondLinkClicked] = useState(false);

  return (
    <section>
      <h2>Links</h2>
      <p>
        Mit Links kann man auf interne, externe oder bestimmte Elemente
        innerhalb einer Seite verlinken. Drücke die <EnterKbd />
        -Taste auf einem der Folgenden Links:
      </p>
      <ul>
        <li>
          <a
            href="https://www.berlin.de/"
            target="_blank"
            onClick={() => setFirstLinkClicked(true)}
          >
            www.berlin.de
          </a>{" "}
          {firstLinkClicked && "✅"}
        </li>
        <li>
          <a href="#instructions" onClick={() => setSecondLinkClicked(true)}>
            [Zur Anleitung springen]
          </a>{" "}
          {secondLinkClicked && "✅"}
        </li>
      </ul>
    </section>
  );
}
