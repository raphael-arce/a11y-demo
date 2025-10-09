import { useState } from "react";
import { EnterKbd } from "../../../../primitives/enter-kbd";
import { ReminderPressTab } from "../../../../primitives/reminder-press-tab";
import { LinkIcon } from "~/components/home/primitives/link-icon";

export function Button() {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount((prevCount) => prevCount + 1);
	};

	const target = 3;

	return (
		<>
			<h3>
				Buttons{" "}
				<a id="buttons" href={"#buttons"}>
					<LinkIcon />
				</a>
			</h3>
			<p>
				Mit Buttons kann man verschiedene Aktionen auslösen, z. B. Formulare
				abschicken, Dialoge öffnen usw.
			</p>

			<fieldset>
				<legend>
					<b>Aufgabe</b>
				</legend>
				<p>
					<ReminderPressTab plural={false} /> und die <EnterKbd />
					-Taste zu drücken bis der Zählerstand 3 erreicht.
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
