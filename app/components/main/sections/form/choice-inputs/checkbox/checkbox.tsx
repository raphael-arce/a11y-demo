import { useState } from "react";

export function Checkbox() {
	const [isFirstChecked, setIsFirstChecked] = useState(false);
	const [isSecondChecked, setIsSecondChecked] = useState(false);
	const [isThirdChecked, setIsThirdChecked] = useState(false);

	return (
		<ul style={{ listStyle: "none", paddingLeft: "0" }}>
			<li>
				<label htmlFor="checkbox1">
					<input
						id="checkbox1"
						name="checkbox"
						type="checkbox"
						checked={isFirstChecked}
						onChange={() => setIsFirstChecked(!isFirstChecked)}
					/>
					Checkbox A
				</label>{" "}
				{isFirstChecked && "✅"}
			</li>
			<li>
				<label htmlFor="checkbox2">
					<input
						id="checkbox2"
						name="checkbox"
						type="checkbox"
						checked={isSecondChecked}
						onChange={() => setIsSecondChecked(!isSecondChecked)}
					/>
					Checkbox B
				</label>{" "}
				{isSecondChecked && "✅"}
			</li>
			<li>
				<label htmlFor="checkbox3">
					<input
						id="checkbox3"
						name="checkbox"
						type="checkbox"
						checked={isThirdChecked}
						onChange={() => setIsThirdChecked(!isThirdChecked)}
					/>
					Checkbox C
				</label>{" "}
				{isThirdChecked && "✅"}
			</li>
		</ul>
	);
}
