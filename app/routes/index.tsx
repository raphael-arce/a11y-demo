import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { Main } from "../components/main/main";
import { Footer } from "../components/footer";

export function meta() {
	return [
		{ title: "♿️ Barrierefreiheit im Web" },
		{
			name: "description",
			content: "Lerne wie man die Tastatur auf Webseiten verwendet.",
		},
	];
}

export default function Index() {
	return (
		<div
			style={{
				maxWidth: "680px",
				margin: "auto",
				pointerEvents: import.meta.env.DEV ? "auto" : "none",
				scrollBehavior: "smooth",
			}}
		>
			<Header />
			<Navigation />
			<Main />
			<Footer />
		</div>
	);
}
