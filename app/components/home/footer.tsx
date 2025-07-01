export function Footer() {
	return (
		<footer style={{ height: "300px" }}>
			<br />
			<hr />
			<p>
				Geschafft! 🥳 Du kannst jetzt Webseiten mit der Tastatur bedienen. ⌨️ Du
				wirst damit viel schneller und effizienter arbeiten können.
			</p>
			<p>
				Unter dem folgenden Link gelangst du zur Demo für Screen-Reader:{" "}
				<a href={"/screen-reader/"}>Screen-Reader Demo</a>
			</p>
			<hr />
			<br />
			<br />
			<p>
				© Raphael Arce,{" "}
				<a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>,{" "}
				<a href="https://github.com/raphael-arce/a11y-demo">
					Link zum Quellcode
				</a>
			</p>
		</footer>
	);
}
