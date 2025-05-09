import { ReminderPressTab } from "../../../primitives/reminder-press-tab.tsx";
import { SpaceKbd } from "../../../primitives/space-kbd.tsx";
import { Audio } from "./audio/audio.tsx";
import { Video } from "./video/video.tsx";
import { EnterKbd } from "../../../primitives/enter-kbd.tsx";
import { Dialog } from "./dialog/dialog.tsx";
import { TabKbd } from "../../../primitives/tab-kbd.tsx";

export function OtherInteractiveElements() {
	return (
		<>
			<section>
				<h2>Weitere interaktive Elemente</h2>

				<h3>Audio-Wiedergabe</h3>
				<fieldset>
					<legend>Aufgabe</legend>
					<p>
						<ReminderPressTab /> und drücke die <SpaceKbd />
						-Taste um die Audio-Wiedergabe zu starten.
					</p>
					<p>
						<i>
							Hinweis: Solange das Audio Element fokussiert ist, werden die
							Pfeiltasten für die Lautstärke-Regelung verwendet. Drücke die{" "}
							<TabKbd />
							-Taste um das nächste Element zu fokussieren.
						</i>
					</p>
					<Audio />
				</fieldset>

				<h3>Video-Wiedergabe</h3>
				<fieldset>
					<legend>Aufgabe</legend>
					<p>
						<ReminderPressTab /> und drücke die <SpaceKbd />
						-Taste um die Video-Wiedergabe zu starten.
					</p>
					<p>
						<i>
							Hinweis: Solange das Audio Element fokussiert ist, werden die
							Pfeiltasten für die Lautstärke-Regelung verwendet. Drücke die{" "}
							<TabKbd />
							-Taste um das nächste Element zu fokussieren.
						</i>
					</p>
					<Video />
				</fieldset>

				<h3>Dialog</h3>
				<fieldset>
					<legend>Aufgabe</legend>
					<p>
						<ReminderPressTab /> und drücke die <EnterKbd />
						-Taste um den Dialog zu öffnen.
					</p>
					<Dialog />
				</fieldset>
			</section>
		</>
	);
}
