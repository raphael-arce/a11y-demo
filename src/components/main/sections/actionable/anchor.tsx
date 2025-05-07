import { EnterKbd } from "../../../primitives/enter-kbd.tsx";
import { useState } from "react";

export function Anchor() {
	const [firstLinkClicked, setFirstLinkClicked] = useState(false);
	const [secondLinkClicked, setSecondLinkClicked] = useState(false);

	return (
		<>
			<h3>Links</h3>

			<p>
				Mit Links kann man auf interne, externe oder bestimmte Elemente
				innerhalb einer Seite verlinken. Drücke die <EnterKbd />
				-Taste auf die Folgenden Links:
			</p>

			<fieldset>
				<legend>Aufgabe</legend>
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
			</fieldset>
		</>
	);
}
