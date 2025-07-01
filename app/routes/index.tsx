import { Header } from "~/components/home/header";
import { Navigation } from "~/components/home/navigation";
import { Main } from "~/components/home/main/main";
import { Footer } from "~/components/home/footer";

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
