export function TextInput() {
  return (
    <p>
      <label htmlFor="input__text">Text-Feld</label>{" "}
      <input id="input__text" type="text" required placeholder="Hallo!" />
    </p>
  );
}
