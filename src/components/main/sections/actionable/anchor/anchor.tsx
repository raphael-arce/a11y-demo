import { EnterKbd } from "../../../../primitives/enter-kbd.tsx";
import { useState } from "react";
import { ReminderPressTab } from "../../../../primitives/reminder-press-tab.tsx";

export function Anchor() {
	const [firstLinkClicked, setFirstLinkClicked] = useState(false);
	const [secondLinkClicked, setSecondLinkClicked] = useState(false);
	const [thirdLinkClicked, setThirdLinkClicked] = useState(false);

	return (
		<>
			<h3>Links</h3>

			<p>
				Mit Links kann man auf Webseiten oder bestimmte Elemente innerhalb einer
				Webseite verlinken. Emails und Telefonnummern können auch verlinkt
				werden.
			</p>

			<fieldset>
				<legend>Aufgabe</legend>
				<p>
					<ReminderPressTab /> und drücke die <EnterKbd />
					-Taste:
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
						[
						<a href="#instructions" onClick={() => setSecondLinkClicked(true)}>
							Zur Anleitung springen
						</a>
						] {secondLinkClicked && "✅"}
					</li>

					<li>
						<a
							href="mailto:raphael.arce@ts.berlin"
							onClick={() => setThirdLinkClicked(true)}
						>
							raphael.arce@ts.berlin
						</a>{" "}
						{thirdLinkClicked && "✅"}
					</li>
				</ul>
			</fieldset>
		</>
	);
}
