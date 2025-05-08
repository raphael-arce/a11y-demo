import { useState } from "react";

export function RangeInput() {
	const [value, setValue] = useState("0");

	const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value);
	};

	const isValid = value !== "0";

	return (
		<p style={{ display: "flex", alignItems: "center", gap: "6px" }}>
			<label htmlFor="range">Range input:</label>
			<input
				type="range"
				id="range"
				required
				min={0}
				max={5}
				value={value}
				onInput={handleInput}
			/>{" "}
			{isValid && "✅"}
		</p>
	);
}
