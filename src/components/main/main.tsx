// import { Text } from "./sections/text.tsx";
import { Embed } from "./sections/embed.tsx";
import { Form } from "./sections/form/form.tsx";
import { ActionableSection } from "./sections/actionable/actionable-section.tsx";

export function Main() {
	return (
		<main role="main">
			<ActionableSection />
			<Form />
			<Embed />
			{/*<Text />*/}
		</main>
	);
}
