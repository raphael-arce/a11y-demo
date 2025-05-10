import { type FormEvent, useState } from "react";

export function ColorInput() {
	const [value, setValue] = useState("#000000");

	const handleInput = (event: FormEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value);
	};

	const isValid = value !== "#000000";

	return (
		<p style={{ display: "flex", alignItems: "center", gap: "4px" }}>
			<label htmlFor="color">Color input: </label>
			<input
				type="color"
				id="color"
				required
				value={value}
				onInput={handleInput}
			/>{" "}
			{isValid && "✅"}
		</p>
	);
}
