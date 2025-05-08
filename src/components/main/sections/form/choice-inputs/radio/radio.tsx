export function Radio() {
	return (
		<p>
			Radio Buttons:
			<label htmlFor="radio1">
				<input id="radio1" name="radio" type="radio" className="radio" />
				Option 1
			</label>
			<label htmlFor="radio2">
				<input id="radio2" name="radio" type="radio" className="radio" />
				Option 2
			</label>
			<label htmlFor="radio3">
				<input id="radio3" name="radio" type="radio" className="radio" />
				Option 3
			</label>
		</p>
	);
}
