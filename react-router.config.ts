import type { Config } from "@react-router/dev/config";

export default {
	async prerender() {
		return ["/", "/screen-reader/"];
	},
} satisfies Config;
