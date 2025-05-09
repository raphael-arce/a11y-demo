import { ActionableSection } from "./sections/actionable/actionable-section.tsx";
import { Form } from "./sections/form/form.tsx";
import { OtherInteractiveElements } from "./sections/other-interactive-elements/other-interactive-elements.tsx";

export function Main() {
	return (
		<main role="main">
			<ActionableSection />
			<Form />
			<OtherInteractiveElements />
		</main>
	);
}
