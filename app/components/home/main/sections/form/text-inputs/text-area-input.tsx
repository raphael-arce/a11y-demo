import { type FormEvent, useRef, useState } from "react";

export function TextAreaInput() {
	const [value, setValue] = useState("");
	const ref = useRef<HTMLTextAreaElement>(null);

	const handleInput = (event: FormEvent<HTMLTextAreaElement>) => {
		setValue(event.currentTarget.value);
	};

	const isValid = ref.current?.validity.valid;

	return (
		<p style={{ display: "flex", alignItems: "start", gap: "4px" }}>
			<label
				htmlFor="textarea"
				style={{ width: "110px", display: "inline-block" }}
			>
				Textbereich:
			</label>
			<textarea
				ref={ref}
				id="textarea"
				rows={4}
				cols={22}
				placeholder="Hier kann ein mehrzeiliger Text dargestellt werden"
				required
				value={value}
				onInput={handleInput}
				style={{
					fontFamily: "Arial",
					letterSpacing: "0.025rem",
					fontSize: "13.5px",
				}}
			></textarea>{" "}
			{isValid && "✅"}
		</p>
	);
}
