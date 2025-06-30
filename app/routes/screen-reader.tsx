import { useState } from "react";
import { getNextWorkdays } from "~/routes/next-workdays";

const AMOUNT_OF_WORKDAYS = 3;

export function meta() {
	return [
		{ title: "♿️ Barrierefreiheit im Web" },
		{
			name: "description",
			content: "Lerne wie man Screen-Reader auf Webseiten verwendet.",
		},
	];
}

export default function Index() {
	const [isVisible, setIsVisible] = useState(false);

	const nextWorkdays = getNextWorkdays(AMOUNT_OF_WORKDAYS);

	return (
		<div
			style={{
				maxWidth: "680px",
				margin: "auto",
			}}
		>
			<header id="top" role="banner">
				<h1>Screen-Reader im Web</h1>
				<p>
					Diese Seite dient als Demo für Screen-Reader. Diese Seite enthält
					unterhalb dieses Abschnitts unsichtbare Inhalte, die von
					Screen-Readern gelesen werden können.
				</p>
			</header>
			<button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
			<main
				style={{
					opacity: isVisible ? 1 : 0,
				}}
			>
				<section>
					<h2>Termin Vereinbaren</h2>
					<p>
						Sie wollen einen Termin im Bürgeramt vereinbaren. Die Termine in
						Blau sind Verfügbar und die Termine in Rot sind bereits belegt.
					</p>
					<p>
						Bitte geben sie Ihre Kontaktdaten ein und wählen Sie einen Termin.
					</p>
					<form
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "1rem",
						}}
						onSubmit={(e) => e.preventDefault()}
					>
						<fieldset
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "1rem",
							}}
						>
							<legend>Kontaktdaten</legend>
							<label htmlFor="name">
								Name <input type="text" id="name" name="name" />
							</label>
							<label htmlFor="email">
								Email <input type="email" id="email" name="email" />
							</label>
							<label htmlFor="phone">
								Telefon <input type="tel" id="phone" name="phone" />
							</label>
						</fieldset>
						<fieldset
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "1rem",
							}}
						>
							<legend>Terminauswahl</legend>
							{nextWorkdays.map((date, index) => {
								const isAvailable = index === AMOUNT_OF_WORKDAYS - 1;

								return (
									<label
										key={index}
										htmlFor={`date-${index}`}
										style={{
											backgroundColor: isAvailable
												? "rgba(0,140,255,0.67)"
												: "rgba(255,0,0,0.54)",
										}}
									>
										<input
											type="radio"
											id={`date-${index}`}
											name="date"
											value={date.toString()}
											disabled={!isAvailable}
										/>
										{new Date(date).toLocaleDateString("de-DE", {
											weekday: "long",
											year: "numeric",
											month: "long",
											day: "numeric",
											hour: "2-digit",
											minute: "2-digit",
										})}{" "}
										({isAvailable ? "Verfügbar" : "Nicht verfügbar"})
									</label>
								);
							})}
						</fieldset>

						<button type="submit">Termin vereinbaren</button>
					</form>
				</section>
			</main>
		</div>
	);
}
