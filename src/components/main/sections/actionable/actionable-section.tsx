import { Anchor } from "./anchor/anchor.tsx";
import { Button } from "./button/button.tsx";
import { InstructionsLink } from "../../../primitives/instructions-link.tsx";

export function ActionableSection() {
	return (
		<section>
			<h2>Klickbare Elemente</h2>
			<Anchor />
			<InstructionsLink />
			<Button />
			<InstructionsLink />
			<hr />
		</section>
	);
}
