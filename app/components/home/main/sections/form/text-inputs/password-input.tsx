import { type FormEvent, useRef, useState } from "react";

export function PasswordInput() {
	const [value, setValue] = useState("");
	const ref = useRef<HTMLInputElement>(null);

	const handleInput = (event: FormEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value);
	};

	const isValid = ref.current?.validity.valid;

	return (
		<p>
			<label
				htmlFor="password"
				style={{ width: "120px", display: "inline-block" }}
			>
				Passwort-Feld:
			</label>{" "}
			<input
				ref={ref}
				id="password"
				type="password"
				placeholder="Passwort"
				required
				value={value}
				onInput={handleInput}
			/>{" "}
			<span style={{ fontSize: "16px" }}>{isValid && "✅"}</span>
		</p>
	);
}
