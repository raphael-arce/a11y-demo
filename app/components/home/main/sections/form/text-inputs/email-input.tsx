import { type FormEvent, useRef, useState } from "react";

export function EmailInput() {
	const [value, setValue] = useState("");
	const ref = useRef<HTMLInputElement>(null);

	const handleInput = (event: FormEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value);
	};

	const isValid = ref.current?.validity.valid;

	return (
		<>
			<p style={{ marginBottom: "4px" }}>
				<label
					htmlFor="email"
					style={{ width: "120px", display: "inline-block" }}
				>
					Email-Feld:
				</label>{" "}
				<input
					ref={ref}
					id="email"
					type="email"
					placeholder="name@email.com"
					required
					value={value}
					onInput={handleInput}
				/>{" "}
				<span style={{ fontSize: "16px" }}>{isValid && "✅"}</span>
			</p>
			<p style={{ marginTop: "4px" }}>
				<b>
					Hinweis: der Browser überprüft ob die Eingabe einem Email-Format
					entspricht.
				</b>
			</p>
		</>
	);
}
