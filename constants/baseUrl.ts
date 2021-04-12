import { isDevelopment } from "utils/isDevelopment";

export const BASE_URL =
	isDevelopment === true
		? "http://localhost:3000"
		: "https://" + process.env.VERCEL_URL;