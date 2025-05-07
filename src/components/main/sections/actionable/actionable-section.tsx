import { Anchor } from "./anchor.tsx";
import { Button } from "./button.tsx";

export function ActionableSection() {
	return (
		<section>
			<h2>Klickbare Elemente</h2>
			<Anchor />
			<Button />
		</section>
	);
}
