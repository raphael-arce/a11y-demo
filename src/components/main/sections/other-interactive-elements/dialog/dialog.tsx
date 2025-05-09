import { EscapeKbd } from "../../../../primitives/escape-kbd.tsx";
import { useState } from "react";

export function Dialog() {
	const [hasOpenedDialog, setHasOpenedDialog] = useState(false);

	const handleDialogOpen = () => {
		const dialog = document.getElementById("dialog") as HTMLDialogElement;
		dialog.showModal();
		setHasOpenedDialog(true);
	};

	const isValid = hasOpenedDialog;

	return (
		<>
			<p>
				<button onClick={handleDialogOpen}>Dialog öffnen</button>{" "}
				{isValid && "✅"}
			</p>

			<dialog id="dialog">
				<p>
					Du kannst diesen Dialog mit <EscapeKbd /> schließen.
				</p>
			</dialog>
		</>
	);
}
