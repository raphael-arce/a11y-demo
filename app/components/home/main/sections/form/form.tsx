import { TextInput } from "./text-inputs/text-input";
import { PasswordInput } from "./text-inputs/password-input";
import { UrlInput } from "./text-inputs/url-input";
import { EmailInput } from "./text-inputs/email-input";
import { TelInput } from "./text-inputs/tel-input";
import { SearchInput } from "./text-inputs/search-input";
import { NumberInput } from "./text-inputs/number-input";
import { Checkbox } from "./choice-inputs//checkbox/checkbox";
import { Radio } from "./choice-inputs//radio/radio";
import { TextAreaInput } from "./text-inputs/text-area-input";
import { RangeInput } from "./choice-inputs/range/range-input";
import { ColorInput } from "./choice-inputs/color/color-input";
import { DateInput } from "./choice-inputs/date/date-input";
import { SingleSelect } from "./choice-inputs/selects/single-select";
import { MultiSelect } from "./choice-inputs/selects/multi-select";
import { SpaceKbd } from "../../../primitives/space-kbd";
import { UpKbd } from "../../../primitives/up-kbd";
import { DownKbd } from "../../../primitives/down-kbd";
import { EnterKbd } from "../../../primitives/enter-kbd";
import { LeftKbd } from "../../../primitives/left-kbd";
import { RightKbd } from "../../../primitives/right-kbd";
import { ShiftKbd } from "../../../primitives/shift-kbd";
import { ReminderPressTab } from "../../../primitives/reminder-press-tab";
import { LinkIcon } from "~/components/home/primitives/link-icon";
import { FileInput } from "./choice-inputs/file/file";

export function Form() {
	return (
		<section>
			<h2>
				Formular-Elemente
				<a id="form-elements" href={"#form-elements"}>
					<LinkIcon />
				</a>
			</h2>

			<h3>
				Textartige Felder{" "}
				<a id="text-based-fields" href={"#text-based-fields"}>
					<LinkIcon />
				</a>
			</h3>
			<p>
				Bei den folgenden Eingabe-Feldern kann man direkt Text mit der Tastatur
				eingeben.
			</p>

			<fieldset>
				<legend>
					<b>Aufgabe</b>
				</legend>
				<p>
					<ReminderPressTab plural /> und alle Felder auszufüllen.
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

			<h3>
				Auswahlartige Felder
				<a id="choice-based-fields" href={"#choice-based-fields"}>
					<LinkIcon />
				</a>
			</h3>

			<p>
				Bei den folgenden Eingabe-Feldern muss man unterschiedliche Tasten
				verwenden, um Werte einzugeben.
			</p>

			<h4>
				Checkboxen{" "}
				<a id="checkboxes" href={"#checkboxes"}>
					<LinkIcon />
				</a>
			</h4>

			<fieldset>
				<legend>
					<b>Aufgabe</b>
				</legend>
				<p>
					<ReminderPressTab plural /> und ein Häkchen auf allen Checkboxen zu
					setzen.
				</p>
				<p>
					<b>
						Hinweis: Du kannst, nachdem das Element fokussiert ist, mit{" "}
						<SpaceKbd /> Häkchen setzen oder sie wieder entfernen.
					</b>
				</p>
				<Checkbox />
			</fieldset>

			<h4>
				Radio-Buttons{" "}
				<a id="radio-buttons" href={"#radio-buttons"}>
					<LinkIcon />
				</a>
			</h4>

			<fieldset>
				<legend>
					<b>Aufgabe</b>
				</legend>
				<p>
					<ReminderPressTab plural={false} /> und eine Auswahl zu treffen.
				</p>

				<p>
					<b>
						Hinweis: Du kannst, nachdem das Element fokussiert ist, mit einer
						Pfeiltaste <UpKbd />, <DownKbd />, <LeftKbd />, <RightKbd /> deine
						Auswahl ändern.
					</b>
				</p>
				<Radio />
			</fieldset>

			<h4>
				Range-Input (Schieberegler)
				<a id="range-inputs" href={"#range-inputs"}>
					<LinkIcon />
				</a>
			</h4>

			<fieldset>
				<legend>
					<b>Aufgabe</b>
				</legend>
				<p>
					<ReminderPressTab plural={false} /> und den Regler zu verschieben.
				</p>
				<p>
					<b>
						Hinweis: Du kannst, nachdem das Element fokussiert ist, mit einer
						Pfeiltaste <UpKbd />, <DownKbd />, <LeftKbd />, <RightKbd /> den
						Regler verschieben.
					</b>
				</p>
				<RangeInput />
			</fieldset>

			<h4>
				Select-Elemente{" "}
				<a id="select-inputs" href={"#select-inputs"}>
					<LinkIcon />
				</a>
			</h4>

			<fieldset>
				<legend>
					<b>Aufgabe</b>
				</legend>
				<p>
					<ReminderPressTab plural={false} /> und eine Option zu wählen:
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
					<ReminderPressTab plural={false} /> und mehrere Optionen zu wählen:
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

			<h4>
				Datum-Feld{" "}
				<a id="date-inputs" href={"#date-inputs"}>
					<LinkIcon />
				</a>
			</h4>

			<fieldset>
				<legend>
					<b>Aufgabe</b>
				</legend>
				<p>
					<ReminderPressTab plural={false} /> und das Datum zu ändern.
				</p>
				<p>
					<b>
						Hinweis: Du kannst, nachdem das Element fokussiert ist, mit den
						Pfeiltasten <UpKbd />, <DownKbd />, <LeftKbd />, <RightKbd /> das
						Datum ändern. Mit der <SpaceKbd />
						-Taste öffnet sich ein Menü, was die Auswahl erleichtern kann. Es
						können auch direkt die Zahlen mit der Tastatur eingegeben werden.
					</b>
				</p>

				<DateInput />
			</fieldset>

			<h4>
				Datei-Feld{" "}
				<a id="file-inputs" href={"#file-inputs"}>
					<LinkIcon />
				</a>
			</h4>
			<fieldset>
				<legend>
					<b>Aufgabe</b>
				</legend>
				<p>
					<ReminderPressTab plural={false} /> und eine Datei auszuwählen.
				</p>
				<p>
					<b>
						Hinweis: Du kannst, nachdem das Element fokussiert ist, die{" "}
						<SpaceKbd />
						-Taste drücken, um das Dateiauswahlmenü zu öffnen.
					</b>
				</p>

				<FileInput />
			</fieldset>

			<h4>
				Farb-Feld{" "}
				<a id="color-inputs" href={"#color-inputs"}>
					<LinkIcon />
				</a>
			</h4>
			<fieldset>
				<legend>
					<b>Aufgabe</b>
				</legend>
				<p>
					<ReminderPressTab plural={false} /> und eine Farbe auszuwählen.
				</p>
				<p>
					<b>
						Hinweis: Du kannst, nachdem das Element fokussiert ist, die{" "}
						<SpaceKbd />
						-Taste drücken, um das Farbauswahlmenü zu öffnen.
					</b>
				</p>

				<ColorInput />
			</fieldset>

			<br />
			<hr />
		</section>
	);
}
