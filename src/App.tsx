import { Navigation } from "./components/navigation.tsx";
import { Header } from "./components/header.tsx";
import { Main } from "./components/main/main.tsx";
import { Footer } from "./components/footer.tsx";

export function App() {
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
