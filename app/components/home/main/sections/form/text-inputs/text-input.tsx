import { type FormEvent, useRef, useState } from "react";

export function TextInput() {
	const [value, setValue] = useState("");
	const ref = useRef<HTMLInputElement>(null);

	const handleInput = (event: FormEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value);
	};

	const isValid = ref.current?.validity.valid;

	return (
		<p>
			<label htmlFor="text" style={{ width: "120px", display: "inline-block" }}>
				Text-Feld:
			</label>{" "}
			<input
				ref={ref}
				id="text"
				type="text"
				placeholder="Hallo!"
				required
				value={value}
				onInput={handleInput}
			/>{" "}
			<span style={{ fontSize: "16px" }}>{isValid && "✅"}</span>
		</p>
	);
}
