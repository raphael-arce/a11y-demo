import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/index.tsx"),
	route("/screen-reader/", "./routes/screen-reader.tsx"),
] satisfies RouteConfig;
