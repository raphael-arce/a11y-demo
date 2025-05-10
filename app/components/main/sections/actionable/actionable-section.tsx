import { Anchor } from "./anchor/anchor";
import { Button } from "./button/button";

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
