import { useState } from "react";

const defaultValue = "2";

export function RangeInput() {
	const [value, setValue] = useState(defaultValue);

	const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value);
	};

	const isValid = value !== defaultValue;

	return (
		<p style={{ display: "flex", alignItems: "center", gap: "6px" }}>
			<label htmlFor="range">Range input:</label>
			<input
				type="range"
				id="range"
				required
				min={0}
				max={4}
				value={value}
				onInput={handleInput}
			/>{" "}
			{isValid && "✅"}
		</p>
	);
}
