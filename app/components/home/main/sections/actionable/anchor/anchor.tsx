import { EnterKbd } from "../../../../primitives/enter-kbd";
import { useState } from "react";
import { ReminderPressTab } from "../../../../primitives/reminder-press-tab";
import { LinkIcon } from "~/components/home/primitives/link-icon";

export function Anchor() {
	const [firstLinkClicked, setFirstLinkClicked] = useState(false);
	const [secondLinkClicked, setSecondLinkClicked] = useState(false);
	const [thirdLinkClicked, setThirdLinkClicked] = useState(false);

	return (
		<>
			<h3>
				Links{" "}
				<a id="links" href={"#links"}>
					<LinkIcon />
				</a>
			</h3>

			<p>
				Mit Links kann man auf Webseiten oder bestimmte Elemente innerhalb einer
				Webseite verlinken. Emails und Telefonnummern können auch verlinkt
				werden.
			</p>

			<fieldset>
				<legend>
					<b>Aufgabe</b>
				</legend>
				<p>
					<ReminderPressTab plural /> und die <EnterKbd />
					-Taste zu drücken:
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
							Zurück zur Anleitung springen
						</a>{" "}
						{secondLinkClicked && "✅"}
					</li>

					<li>
						<a
							href="mailto:info@berlin.de"
							onClick={() => setThirdLinkClicked(true)}
						>
							info@berlin.de
						</a>{" "}
						{thirdLinkClicked && "✅"}
					</li>
				</ul>
			</fieldset>
		</>
	);
}
