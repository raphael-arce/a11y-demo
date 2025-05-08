export function Checkbox() {
	return (
		<ul style={{ listStyle: "none", paddingLeft: "0" }}>
			<li>
				<label htmlFor="checkbox1">
					<input id="checkbox1" name="checkbox" type="checkbox" />
					Checkbox A
				</label>
			</li>
			<li>
				<label htmlFor="checkbox2">
					<input id="checkbox2" name="checkbox" type="checkbox" />
					Checkbox B
				</label>
			</li>
			<li>
				<label htmlFor="checkbox3">
					<input id="checkbox3" name="checkbox" type="checkbox" />
					Checkbox C
				</label>
			</li>
		</ul>
	);
}
