import { type FormEvent, useState } from "react";

export function FileInput() {
	const [value, setValue] = useState<File | null>(null);

	const handleInput = (event: FormEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.files?.[0] || null);
	};

	const isValid = value !== null;

	return (
		<p style={{ display: "flex", alignItems: "center", gap: "4px" }}>
			<label htmlFor="file">File input: </label>
			<input type="file" id="file" required onInput={handleInput} />{" "}
			{isValid && "✅"}
		</p>
	);
}
