import { TextInput } from "./text-inputs/text-input.tsx";
import { PasswordInput } from "./text-inputs/password-input.tsx";
import { UrlInput } from "./text-inputs/url-input.tsx";
import { EmailInput } from "./text-inputs/email-input.tsx";
import { TelInput } from "./text-inputs/tel-input.tsx";
import { SearchInput } from "./text-inputs/search-input.tsx";
import { NumberInput } from "./text-inputs/number-input.tsx";
import { Checkbox } from "./choice-inputs//checkbox/checkbox.tsx";
import { Radio } from "./choice-inputs//radio/radio.tsx";
import { TextAreaInput } from "./text-inputs/text-area-input.tsx";
import { RangeInput } from "./choice-inputs/range/range-input.tsx";
import { ColorInput } from "./choice-inputs/color/color-input.tsx";
import { DateInput } from "./choice-inputs/date/date-input.tsx";
import { SingleSelect } from "./choice-inputs/selects/single-select.tsx";
import { MultiSelect } from "./choice-inputs/selects/multi-select.tsx";
import { SpaceKbd } from "../../../primitives/space-kbd.tsx";
import { UpKbd } from "../../../primitives/up-kbd.tsx";
import { DownKbd } from "../../../primitives/down-kbd.tsx";
import { EnterKbd } from "../../../primitives/enter-kbd.tsx";
import { LeftKbd } from "../../../primitives/left-kbd.tsx";
import { RightKbd } from "../../../primitives/right-kbd.tsx";
import { ShiftKbd } from "../../../primitives/shift-kbd.tsx";
import { ReminderPressTab } from "../../../primitives/reminder-press-tab.tsx";

export function Form() {
	return (
		<section>
			<h2>Formular-Elemente</h2>

			<h3>Textartige Felder</h3>
			<p>
				Bei den folgenden Eingabe-Feldern kann man direkt Text mit der Tastatur
				eingeben.
			</p>

			<fieldset>
				<legend>Aufgabe</legend>
				<p>
					<ReminderPressTab /> und fülle alle Felder aus.
				</p>
				<TextInput />
				<PasswordInput />
				<TelInput />
				<SearchInput />
				<TextAreaInput />
				<EmailInput />
				<NumberInput />
				<UrlInput />
			</fieldset>

			<h3>Auswahlartige Felder</h3>

			<p>
				Bei den folgenden Eingabe-Feldern muss man unterschiedliche Tasten
				verwenden, um Werte einzugeben.
			</p>

			<h4>Checkboxen</h4>

			<fieldset>
				<legend>Aufgabe</legend>
				<p>
					<ReminderPressTab /> und drücke auf <SpaceKbd />, um ein Häkchen zu
					setzen (oder es wieder zu entfernen). Setze ein Häkchen bei allen
					Checkboxen.
				</p>
				<Checkbox />
			</fieldset>

			<h4>Radio-Buttons</h4>

			<fieldset>
				<legend>Aufgabe</legend>
				<p>
					<ReminderPressTab /> und drücke auf eine Pfeiltaste <UpKbd />,{" "}
					<DownKbd />, <LeftKbd />, <RightKbd />, um eine Auswahl zu treffen.
				</p>
				<Radio />
			</fieldset>

			<h4>Range-Input (Schieberegler)</h4>

			<fieldset>
				<legend>Aufgabe</legend>
				<p>
					<ReminderPressTab /> und drücke auf eine Pfeiltaste <UpKbd />,{" "}
					<DownKbd />, <LeftKbd />, <RightKbd />, um den Regler zu verschieben.
				</p>
				<RangeInput />
			</fieldset>

			<h4>Select-Elemente</h4>

			<fieldset>
				<legend>Aufgabe</legend>
				<p>
					<ReminderPressTab /> und wähle eine Option:
				</p>
				<ul>
					<li>
						Drücke <SpaceKbd /> um das Auswahlmenü zu öffnen,
					</li>
					<li>
						mit den Pfeiltasten <UpKbd /> und <DownKbd /> kann man die Optionen
						durchblättern, und
					</li>
					<li>
						mit der <EnterKbd />
						-Taste die Auswahl bestätigen.
					</li>
				</ul>
				<SingleSelect />

				<hr />

				<p>
					<ReminderPressTab /> und wähle mehrere Optionen:
				</p>
				<ul>
					<li>
						Drücke auf die Pfeiltasten <UpKbd />, <DownKbd />, um eine Option
						auszuwählen,
					</li>
					<li>
						mit der <ShiftKbd />
						-Taste können mehrere Optionen ausgewählt werden.
					</li>
				</ul>
				<MultiSelect />
			</fieldset>

			<h4>Datum-Feld</h4>

			<fieldset>
				<legend>Aufgabe</legend>
				<p>
					<ReminderPressTab /> und drücke auf die Pfeiltasten <UpKbd />,{" "}
					<DownKbd />, <LeftKbd />, <RightKbd />, um das Datum zu ändern.
				</p>
				<DateInput />
				<p>
					<i>
						Hinweis: Mit der <SpaceKbd />
						-Taste öffnet sich ein Menü, was die Auswahl erleichtern kann. Es
						können auch direkt die Zahlen mit der Tastatur eingegeben werden.
					</i>
				</p>
			</fieldset>

			<h4>Farb-Feld</h4>
			<fieldset>
				<legend>Aufgabe</legend>
				<p>
					<ReminderPressTab /> und drücke auf die <SpaceKbd />
					-Taste, um das Farbauswahlmenü zu öffnen. Wähle dann eine Farbe aus.
				</p>

				<ColorInput />
			</fieldset>

			<br />
			<hr />
		</section>
	);
}
