import { Anchor } from "./anchor/anchor";
import { Button } from "./button/button";
import { LinkIcon } from "~/components/home/primitives/link-icon";

export function ActionableSection() {
	return (
		<section>
			<h2>
				Klickbare Elemente{" "}
				<a
					id="clickable-elements"
					href={"#clickable-elements"}
					style={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<LinkIcon />
				</a>
			</h2>
			<Anchor />
			<Button />
			<br />
			<hr />
		</section>
	);
}
