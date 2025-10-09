import { SpaceKbd } from "./primitives/space-kbd";
import { DownKbd } from "./primitives/down-kbd";
import { UpKbd } from "./primitives/up-kbd";
import { ShiftKbd } from "./primitives/shift-kbd";
import { TabKbd } from "./primitives/tab-kbd";
import { EnterKbd } from "./primitives/enter-kbd";
import { EscapeKbd } from "./primitives/escape-kbd";
import { LeftKbd } from "./primitives/left-kbd";
import { RightKbd } from "./primitives/right-kbd";
import { LinkIcon } from "~/components/home/primitives/link-icon";

export function Header() {
	return (
		<header id="top" role="banner">
			<h1>
				Barrierefreiheit im Web{" "}
				<a id="a11y-in-browsers" href={"#a11y-in-browsers"}>
					<LinkIcon />
				</a>
			</h1>
			<p>
				Diese Seite enthält interaktive HTML-Elemente wie Links, Buttons,
				Eingabefelder und mehr.
			</p>

			<p>
				Ziel ist es, zu lernen, wie man Webseiten ausschließlich mit der
				Tastatur bedient.
			</p>

			<p>
				<b>
					Hinweis: Die Seite ist so programmiert, dass Maustasten und Mausrad
					deaktiviert sind.
				</b>
			</p>

			<hr />

			<h2>
				Anleitung{" "}
				<a
					id="instructions"
					href={"#instructions"}
					style={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<LinkIcon />
				</a>
			</h2>
			<p>Deine Aufgaben sind:</p>
			<ul>
				<li>Folgende interaktiven Elemente sollen bedient werden, und</li>
				<li>Folgende Felder sollen ausgefüllt werden.</li>
			</ul>

			<h3>
				Kurzbefehle{" "}
				<a id="shortcuts" href={"#shortcuts"}>
					<LinkIcon />
				</a>
			</h3>

			<p>
				Tasten können je nach Kontext unterschiedliche Aktionen ausführen, zum
				Beispiel wenn gerade ein bestimmtes Element fokussiert ist oder nicht.
			</p>

			<p>
				<b>Hinweis: Die Tasten-Icons sind nicht fokussierbar.</b>
			</p>

			<h4>
				Ohne Fokus{" "}
				<a id="without-focus" href={"#without-focus"}>
					<LinkIcon />
				</a>
			</h4>

			<ul>
				<li>
					<DownKbd /> (Pfeiltaste nach unten) - Etwas nach unten scrollen
				</li>
				<li>
					<UpKbd /> (Pfeiltaste nach oben) - Etwas nach oben scrollen
				</li>
				<li>
					<SpaceKbd /> (Leertaste) - Eine Seitenhöhe nach unten scrollen
				</li>
				<li>
					<ShiftKbd /> (Umschalttaste) + <SpaceKbd /> - Eine Seitenhöhe nach
					oben scrollen
				</li>
				<li>
					<TabKbd /> - Zum nächsten interaktiven Element springen
				</li>
				<li>
					<ShiftKbd /> + <TabKbd /> - Zum vorherigen interaktiven Element
					springen
				</li>
			</ul>

			<h4>
				Mit Fokus{" "}
				<a id="with-focus" href={"#with-focus"}>
					<LinkIcon />
				</a>
			</h4>

			<ul>
				<li>
					<EnterKbd /> - Das fokussierte Element aktivieren (z.B. einen Link
					öffnen)
				</li>
				<li>
					<SpaceKbd /> - Das fokussierte Element aktivieren (z.B. einen Button
					klicken, eine Checkbox ankreuzen)
				</li>
				<li>
					<UpKbd />, <DownKbd />, <LeftKbd />, <RightKbd /> - Den Wert eines
					Elementes ändern (z.B. ein Radio-Element oder ein Select-Element)
				</li>
				<li>
					<EscapeKbd /> - Ein Element schließen (z.B. ein Modal)
				</li>
			</ul>

			<hr />
		</header>
	);
}
