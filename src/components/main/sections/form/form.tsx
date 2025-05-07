import { TextInput } from "./text-inputs/text-input.tsx";
import { PasswordInput } from "./text-inputs/password-input.tsx";
import { UrlInput } from "./text-inputs/url-input.tsx";
import { EmailInput } from "./text-inputs/email-input.tsx";
import { TelInput } from "./text-inputs/tel-input.tsx";
import { SearchInput } from "./text-inputs/search-input.tsx";
import { NumberInput } from "./text-inputs/number-input.tsx";
import { Select } from "./select/select.tsx";
import { Checkbox } from "./checkbox/checkbox.tsx";
import { Radio } from "./radio/radio.tsx";
import { InstructionsLink } from "../../../primitives/instructions-link.tsx";

export function Form() {
	return (
		<section>
			<h2>Formular-Elemente</h2>

			<form>
				<p>
					Bei den folgenden Eingabe-Feldern kann man direkt Text mit der
					Tastatur eingeben. Fülle alle Felder aus.
				</p>
				<fieldset>
					<legend>Aufgabe</legend>
					<TextInput />
					<PasswordInput />
					<TelInput />
					<SearchInput />
					<EmailInput />
					<NumberInput />
					<UrlInput />
				</fieldset>

				<p>
					<InstructionsLink />
				</p>

				<fieldset id="forms__select">
					<legend>Auswahl-Menus</legend>
					<Select />
				</fieldset>
				<p>
					<InstructionsLink />
				</p>
				<fieldset id="forms__checkbox">
					<legend>Checkboxen (Auswahlkasten)</legend>
					<Checkbox />
				</fieldset>
				<p>
					<InstructionsLink />
				</p>
				<fieldset id="forms__radio">
					<legend>Radio buttons</legend>
					<Radio />
				</fieldset>
				<p>
					<InstructionsLink />
				</p>
				<fieldset id="forms__textareas">
					<legend>Textareas</legend>
					<p>
						<label htmlFor="textarea">Textarea</label>
						<textarea
							id="textarea"
							rows={8}
							cols={48}
							placeholder="Enter your message here"
						></textarea>
					</p>
				</fieldset>
				<p>
					<InstructionsLink />
				</p>
				<fieldset id="forms__html5">
					<legend>HTML5 inputs</legend>
					<p>
						<label htmlFor="ic">Color input</label>
						<input type="color" id="ic" defaultValue="#000000" />
					</p>
					<p>
						<label htmlFor="ir">Range input</label>
						<input type="range" id="ir" defaultValue="10" />
					</p>
					<p>
						<label htmlFor="idd">Date input</label>
						<input type="date" id="idd" defaultValue="1970-01-01" />
					</p>
					<p>
						<label htmlFor="idm">Month input</label>
						<input type="month" id="idm" defaultValue="1970-01" />
					</p>
					<p>
						<label htmlFor="idw">Week input</label>
						<input type="week" id="idw" defaultValue="1970-W01" />
					</p>
					<p>
						<label htmlFor="idt">Datetime input</label>
						<input
							type="datetime"
							id="idt"
							defaultValue="1970-01-01T00:00:00Z"
						/>
					</p>
					<p>
						<label htmlFor="idtl">Datetime-local input</label>
						<input
							type="datetime-local"
							id="idtl"
							defaultValue="1970-01-01T00:00"
						/>
					</p>
				</fieldset>
				<p>
					<InstructionsLink />
				</p>
				<fieldset id="forms__action">
					<legend>Action buttons</legend>
					<p>
						<input type="submit" value="<input type=submit>" />
						<input type="button" value="<input type=button>" />
						<input type="reset" value="<input type=reset>" />
						<input type="submit" value="<input disabled>" disabled />
					</p>
					<p>
						<button type="submit">&lt;button type=submit&gt;</button>
						<button type="button">&lt;button type=button&gt;</button>
						<button type="reset">&lt;button type=reset&gt;</button>
						<button type="button" disabled>
							&lt;button disabled&gt;
						</button>
					</p>
				</fieldset>
				<p>
					<InstructionsLink />
				</p>
			</form>
		</section>
	);
}
