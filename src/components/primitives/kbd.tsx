import type { ReactNode } from "react";

export function Kbd({ children }: { children: ReactNode | string }) {
	return (
		<kbd
			style={{
				backgroundColor: "#eee",
				borderRadius: "3px",
				border: "1px solid #b4b4b4",
				boxShadow: `
		0 1px 1px rgba(0, 0, 0, 0.2),
		0 2px 0 0 rgba(255, 255, 255, 0.7) inset`,
				color: "#333",
				display: "inline-block",
				fontSize: "0.8rem",
				fontWeight: "700",
				fontStyle: "normal",
				lineHeight: 1,
				padding: "2px 4px",
				margin: "0 2px",
				whiteSpace: "nowrap",
			}}
		>
			{children}
		</kbd>
	);
}
