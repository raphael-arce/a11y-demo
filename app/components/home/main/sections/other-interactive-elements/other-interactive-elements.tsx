import { ReminderPressTab } from "../../../primitives/reminder-press-tab";
import { SpaceKbd } from "../../../primitives/space-kbd";
import { Audio } from "./audio/audio";
import { Video } from "./video/video";
import { EnterKbd } from "../../../primitives/enter-kbd";
import { Dialog } from "./dialog/dialog";
import { TabKbd } from "../../../primitives/tab-kbd";
import { LinkIcon } from "~/components/home/primitives/link-icon";

export function OtherInteractiveElements() {
	return (
		<>
			<section>
				<h2>
					Weitere interaktive Elemente{" "}
					<a
						id="other-interactive-elements"
						href={"#other-interactive-elements"}
					>
						<LinkIcon />
					</a>
				</h2>

				<h3>
					Audio-Wiedergabe{" "}
					<a id="audio-player" href={"#audio-player"}>
						<LinkIcon />
					</a>
				</h3>
				<fieldset>
					<legend>
						<b>Aufgabe</b>
					</legend>
					<p>
						<ReminderPressTab plural={false} /> und die Audio-Wiedergabe zu
						starten.
					</p>
					<p>
						<b>
							Hinweis: Du kannst, nachdem das Element fokussiert ist, die{" "}
							<SpaceKbd />
							-Taste drücken, um die Audio-Wiedergabe zu starten.
						</b>
					</p>
					<p>
						<b>
							Hinweis: Solange das Audio-Element fokussiert ist, werden die
							Pfeiltasten für die Lautstärke-Regelung verwendet. Drücke die{" "}
							<TabKbd />
							-Taste um das nächste Element zu fokussieren, dann kannst du
							wieder mit den Pfeiltasten scrollen.
						</b>
					</p>
					<Audio />
				</fieldset>

				<h3>
					Video-Wiedergabe{" "}
					<a id="video-player" href={"#video-player"}>
						<LinkIcon />
					</a>
				</h3>
				<fieldset>
					<legend>
						<b>Aufgabe</b>
					</legend>
					<p>
						<ReminderPressTab plural={false} /> und die Video-Wiedergabe zu
						starten.
					</p>
					<p>
						<b>
							Hinweis: Du kannst, nachdem das Element fokussiert ist, die{" "}
							<SpaceKbd />
							-Taste drücken um die Video-Wiedergabe zu starten.
						</b>
					</p>
					<p>
						<b>
							Hinweis: Solange das Video-Element fokussiert ist, werden die
							Pfeiltasten für die Lautstärke-Regelung verwendet. Drücke die{" "}
							<TabKbd />
							-Taste um das nächste Element zu fokussieren, dann kannst du
							wieder mit den Pfeiltasten scrollen.
						</b>
					</p>
					<Video />
				</fieldset>

				<h3>
					Dialog{" "}
					<a id="dialog-header" href={"#dialog-header"}>
						<LinkIcon />
					</a>
				</h3>
				<fieldset>
					<legend>
						<b>Aufgabe</b>
					</legend>
					<p>
						<ReminderPressTab plural={false} /> und öffne den Dialog.
					</p>
					<p>
						<b>
							Hinweis: Du kannst, nachdem das Element fokussiert ist, die{" "}
							<EnterKbd />
							-Taste drücken, um den Dialog zu öffnen.
						</b>
					</p>
					<Dialog />
				</fieldset>
			</section>
		</>
	);
}
