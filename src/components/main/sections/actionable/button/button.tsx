import { useState } from "react";
import { SpaceKbd } from "../../../../primitives/space-kbd.tsx";
import { EnterKbd } from "../../../../primitives/enter-kbd.tsx";

export function Button() {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount((prevCount) => prevCount + 1);
	};

	const target = 3;

	return (
		<>
			<h3>Buttons</h3>
			<p>
				Mit Buttons kann man verschiedene Aktionen auslösen, z. B. Formulare
				abschicken, Dialoge öffnen usw.
			</p>

			<fieldset>
				<legend>Aufgabe</legend>
				{/* prettier-ignore */}
				<p>
					Drücke die <SpaceKbd />-Taste oder die <EnterKbd />-Taste
					auf dem Button bis der Zählerstand 3 erreicht.
				</p>
				<button onClick={increment} style={{ padding: "2px 10px" }}>
					+1
				</button>

				<p>
					Aktueller Zählerstand: {count}{" "}
					<span style={{ visibility: count >= target ? "visible" : "hidden" }}>
						✅
					</span>
				</p>
			</fieldset>
		</>
	);
}
