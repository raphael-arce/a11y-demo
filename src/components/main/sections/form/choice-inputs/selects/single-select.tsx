import { type FormEvent, useRef, useState } from "react";

export function SingleSelect() {
	const [value, setValue] = useState("");
	const ref = useRef<HTMLSelectElement>(null);

	const handleInput = (event: FormEvent<HTMLSelectElement>) => {
		setValue(event.currentTarget.value);
	};

	const isValid = ref.current?.validity.valid;

	return (
		<>
			<p>
				<label htmlFor="select">Einfache Auswahl: </label>{" "}
				<select
					ref={ref}
					id="select"
					required
					value={value}
					onInput={handleInput}
				>
					<option style={{ display: "none" }}>Wähle eine Option</option>
					<option>Option 1</option>
					<option>Option 2</option>
					<option>Option 3</option>
				</select>{" "}
				{isValid && "✅"}
			</p>
		</>
	);
}
