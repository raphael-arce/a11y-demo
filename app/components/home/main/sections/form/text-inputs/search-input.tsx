import { type FormEvent, useRef, useState } from "react";

export function SearchInput() {
	const [value, setValue] = useState("");
	const ref = useRef<HTMLInputElement>(null);

	const handleInput = (event: FormEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value);
	};

	const isValid = ref.current?.validity.valid;

	return (
		<p>
			<label
				htmlFor="search"
				style={{ width: "120px", display: "inline-block" }}
			>
				Such-Feld:
			</label>{" "}
			<input
				ref={ref}
				id="search"
				type="search"
				placeholder="Suchbegriff"
				required
				value={value}
				onInput={handleInput}
			/>{" "}
			<span style={{ fontSize: "16px" }}>{isValid && "✅"}</span>
		</p>
	);
}
