import { TabKbd } from "./tab-kbd";

export function ReminderPressTab({ plural }: { plural: boolean }) {
	const wording = plural ? "die nächsten Elemente" : "das nächste Element";

	return (
		<>
			Deine Aufgabe ist es, {wording} mit der <TabKbd />
			-Taste zu fokussieren
		</>
	);
}
