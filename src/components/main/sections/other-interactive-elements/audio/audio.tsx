import { useState } from "react";

export function Audio() {
	const [hasPlayed, setHasPlayed] = useState(false);

	const handlePlay = () => setHasPlayed(true);

	const isValid = hasPlayed;

	return (
		<>
			<p style={{ display: "flex", alignItems: "center", gap: "6px" }}>
				<audio
					controls
					src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Ode_to_Joy.ogg"
					onPlay={handlePlay}
				>
					audio
				</audio>{" "}
				{isValid && "✅"}
			</p>
			<p>
				Quelle:{" "}
				<a href="https://commons.wikimedia.org/wiki/File:Ode_to_Joy.ogg">
					Ludwig van Beethoven
				</a>
				, Public domain, via Wikimedia Commons
			</p>
		</>
	);
}
