import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="de">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="data:," />
				<Meta />
				<Links />
				<style>
					{`
					body {
						font-size: 18px;
					}
					h1, h2, h3, h4, h5, h6 {
						display: flex;
						gap: 6px;
						align-items: center;
					}
					li {
						line-height: 2;
					}
					`}
				</style>
			</head>
			<body id="body">
				{children}
				<ScrollRestoration />
				<Scripts />
				<script type="module">{`
					function disableWheelEvents() {
						if (${import.meta.env.DEV}) {
							return;
						}
	
						const body = document.getElementById("body");
						body.addEventListener("wheel", (e) => e.preventDefault(), { passive: false,	});
					}
	
					disableWheelEvents();
				`}</script>
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
