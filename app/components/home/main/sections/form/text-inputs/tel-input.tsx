import { type FormEvent, useRef, useState } from "react";

export function TelInput() {
	const [value, setValue] = useState("");
	const ref = useRef<HTMLInputElement>(null);

	const handleInput = (event: FormEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value);
	};

	const isValid = ref.current?.validity.valid;

	return (
		<p>
			<label htmlFor="tel" style={{ width: "120px", display: "inline-block" }}>
				Telefonnummer:
			</label>{" "}
			<input
				ref={ref}
				id="tel"
				type="tel"
				placeholder="+49 30 123 456"
				required
				value={value}
				onInput={handleInput}
			/>{" "}
			<span style={{ fontSize: "16px" }}>{isValid && "✅"}</span>
		</p>
	);
}
