export function UrlInput() {
  return (
    <p>
      <label htmlFor="input__webaddress">Internetadresse (URL)</label>{" "}
      <input
        id="input__webaddress"
        type="url"
        placeholder="https://www.berlin.de"
      />
    </p>
  );
}
