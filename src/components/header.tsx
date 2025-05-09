import { SpaceKbd } from "./primitives/space-kbd.tsx";
import { DownKbd } from "./primitives/down-kbd.tsx";
import { UpKbd } from "./primitives/up-kbd.tsx";
import { ShiftKbd } from "./primitives/shift-kbd.tsx";
import { TabKbd } from "./primitives/tab-kbd.tsx";
import { EnterKbd } from "./primitives/enter-kbd.tsx";
import { EscapeKbd } from "./primitives/escape-kbd.tsx";
import { LeftKbd } from "./primitives/left-kbd.tsx";
import { RightKbd } from "./primitives/right-kbd.tsx";

export function Header() {
	return (
		<header id="top" role="banner">
			<h1>Barrierefreiheit im Web</h1>
			<p>
				Diese Seite enthält interaktive HTML-Elemente wie Links, Buttons,
				Eingabefelder und mehr.
			</p>

			<p>
				Ziel ist es, zu lernen, wie man Webseiten ausschließlich mit der
				Tastatur bedient.
			</p>

			<p>
				<i>
					Hinweis: Die Seite ist so programmiert, dass Maustasten und Mausrad
					deaktiviert sind.
				</i>
			</p>

			<hr />

			<h2 id="instructions">Anleitung</h2>
			<p>Aufgaben:</p>
			<ul>
				<li>Alle Felder sollen ausgefüllt werden.</li>
				<li>Alle interaktiven Elemente sollen einmal bedient werden.</li>
			</ul>

			<h3>Kurzbefehle</h3>
			<p>
				<i>
					Hinweis: Manche Tasten führen je nach Kontext unterschiedliche
					Aktionen aus, zum Beispiel wenn gerade ein Element
					ausgewählt/fokussiert ist oder nicht.
				</i>
			</p>

			<h4>Ohne Fokus</h4>
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

			<h4>Mit Fokus</h4>
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
