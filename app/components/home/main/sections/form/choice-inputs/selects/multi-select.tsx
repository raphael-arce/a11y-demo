import { type FormEvent, useState } from "react";

export function MultiSelect() {
	const [values, setValues] = useState<string[]>([]);

	const handleChange = (event: FormEvent<HTMLSelectElement>) => {
		const options = event.currentTarget.options;
		const selected: string[] = [];
		for (let i = 0; i < options.length; i++) {
			if (options[i].selected) {
				selected.push(options[i].value);
			}
		}
		setValues(selected);
	};

	const isValid = values.length > 1;

	return (
		<>
			<p style={{ display: "flex", alignItems: "start", gap: "4px" }}>
				<label htmlFor="multi-select">Mehrfache Auswahl: </label>
				<select
					id="multi-select"
					multiple
					required
					value={values}
					onChange={handleChange}
				>
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
					<option value="option4">Option 4</option>
				</select>{" "}
				{isValid && "✅"}
			</p>
		</>
	);
}
