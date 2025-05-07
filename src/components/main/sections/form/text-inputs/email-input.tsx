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
			<p style={{ marginBottom: "8px" }}>
				<label htmlFor="email">Email-Adresse</label>{" "}
				<input
					ref={ref}
					id="email"
					type="email"
					placeholder="name@email.com"
					required
					value={value}
					onInput={handleInput}
				/>{" "}
				{isValid && "✅"}
			</p>
			<p style={{ marginTop: "8px" }}>
				<i>
					Hinweis: der Browser überprüft ob die Eingabe einem Email-Format
					entspricht.
				</i>
			</p>
		</>
	);
}
