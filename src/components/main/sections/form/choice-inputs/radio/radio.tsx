import { type FormEvent, useState } from "react";

export function Radio() {
	const [value, setValue] = useState("");

	const handleInput = (event: FormEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value);
	};

	const isValid = value !== "";

	return (
		<p>
			Radio Buttons:
			<label htmlFor="radio1">
				<input
					id="radio1"
					name="radio"
					type="radio"
					className="radio"
					value="radio1"
					checked={value === "radio1"}
					onInput={handleInput}
				/>
				Option 1
			</label>
			<label htmlFor="radio2">
				<input
					id="radio2"
					name="radio"
					type="radio"
					className="radio"
					value="radio2"
					checked={value === "radio2"}
					onInput={handleInput}
				/>
				Option 2
			</label>
			<label htmlFor="radio3">
				<input
					id="radio3"
					name="radio"
					type="radio"
					className="radio"
					value="radio3"
					checked={value === "radio3"}
					onInput={handleInput}
				/>
				Option 3
			</label>{" "}
			{isValid && "✅"}
		</p>
	);
}
