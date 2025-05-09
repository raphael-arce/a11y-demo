import { useState } from "react";

export function Video() {
	const [hasPlayed, setHasPlayed] = useState(false);

	const handlePlay = () => setHasPlayed(true);

	const isValid = hasPlayed;

	return (
		<>
			<p style={{ display: "flex", alignItems: "start", gap: "6px" }}>
				<video
					controls
					width={480}
					src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Aerial_view_of_sand_beach._Top_view_sea_waves._Drone_footage.webm"
					onPlay={handlePlay}
				/>{" "}
				{isValid && "✅"}
			</p>
			<p>
				Quelle:{" "}
				<a href="https://commons.wikimedia.org/wiki/File:Aerial_view_of_sand_beach._Top_view_sea_waves._Drone_footage.webm">
					Nature video, HD - 4K
				</a>
				, <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>,
				via Wikimedia Commons
			</p>
		</>
	);
}
