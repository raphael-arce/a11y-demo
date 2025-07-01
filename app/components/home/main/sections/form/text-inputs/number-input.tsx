import { type FormEvent, useRef, useState } from "react";

export function NumberInput() {
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
					htmlFor="number"
					style={{ width: "110px", display: "inline-block" }}
				>
					Zahlen-Feld:
				</label>{" "}
				<input
					ref={ref}
					id="number"
					type="number"
					placeholder="123"
					required
					value={value}
					onInput={handleInput}
				/>{" "}
				{isValid && "✅"}
			</p>
			<p style={{ marginTop: "4px" }}>
				<i>
					Hinweis: der Browser überprüft ob die Eingabe nur aus Zahlen besteht.
				</i>
			</p>
		</>
	);
}
