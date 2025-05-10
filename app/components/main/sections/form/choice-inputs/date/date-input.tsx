import { type FormEvent, useRef, useState } from "react";

export function DateInput() {
	const [value, setValue] = useState("");
	const ref = useRef<HTMLInputElement>(null);

	const handleInput = (event: FormEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value);
	};

	const isValid = ref.current?.validity.valid;

	return (
		<p>
			<label htmlFor="date">Date input: </label>
			<input
				ref={ref}
				type="date"
				id="date"
				required
				value={value}
				onInput={handleInput}
			/>{" "}
			{isValid && "✅"}
		</p>
	);
}
