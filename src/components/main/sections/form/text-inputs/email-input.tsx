export function EmailInput() {
  return (
    <>
      <p>
        <label htmlFor="input__emailaddress">Email-Adresse</label>{" "}
        <input
          id="input__emailaddress"
          type="email"
          placeholder="name@email.com"
        />{" "}
        <span style={{ fontStyle: "italic", fontSize: "14px" }}>
          Info: hier überprüft der Browser, ob die Eingabe richtig formatiert
          ist.
        </span>
      </p>
    </>
  );
}
