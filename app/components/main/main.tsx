import { ActionableSection } from "./sections/actionable/actionable-section";
import { Form } from "./sections/form/form";
import { OtherInteractiveElements } from "./sections/other-interactive-elements/other-interactive-elements";

export function Main() {
	return (
		<main role="main">
			<ActionableSection />
			<Form />
			<OtherInteractiveElements />
		</main>
	);
}
