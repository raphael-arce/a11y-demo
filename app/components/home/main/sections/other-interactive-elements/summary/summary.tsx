import { useState } from "react";

export function Summary() {
	const [hasOpened, setHasOpened] = useState(false);

	const handleOpen = () => setHasOpened(true);

	const isValid = hasOpened;

	return (
		<>
			<p style={{ display: "flex", alignItems: "start", gap: "6px" }}>
				<details>
					<summary onClick={handleOpen}>Details {isValid && "✅"}</summary>
					<p>
						<i>
							Hier kann eine länger Beschreibung stehen, die nicht immer auf den
							ersten Blick sichtbar sein muss. Der text wird erst sichtbar, wenn
							man auf "Details" klickt bzw. aktiviert.
						</i>
					</p>
				</details>
			</p>
		</>
	);
}
