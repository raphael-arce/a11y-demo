export function Select() {
  return (
    <p>
      <label htmlFor="select">Auswahl</label>{" "}
      <select id="select">
        <optgroup label="Optionsgruppe A">
          <option>Option 1</option>
          <option>Option 2</option>
        </optgroup>
        <optgroup label="Optionsgruppe B">
          <option>Option 3</option>
          <option>Option 4</option>
        </optgroup>
      </select>
    </p>
  );
}
