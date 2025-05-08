import { type FormEvent, useRef, useState } from "react";

export function UrlInput() {
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
					htmlFor="url"
					style={{ width: "110px", display: "inline-block" }}
				>
					URL-Feld:
				</label>{" "}
				<input
					ref={ref}
					id="url"
					type="url"
					placeholder="https://www.berlin.de"
					required
					value={value}
					onInput={handleInput}
				/>{" "}
				{isValid && "✅"}
			</p>
			<p style={{ marginTop: "4px" }}>
				<i>
					Hinweis: der Browser überprüft ob die Eingabe dem URL-Format
					entspricht.
				</i>
			</p>
		</>
	);
}
