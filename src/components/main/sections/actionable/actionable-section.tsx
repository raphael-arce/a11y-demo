import { Anchor } from "./anchor/anchor.tsx";
import { Button } from "./button/button.tsx";

export function ActionableSection() {
	return (
		<section>
			<h2>Klickbare Elemente</h2>
			<Anchor />
			<Button />
			<br />
			<hr />
		</section>
	);
}
