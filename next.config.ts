import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	// при необходимости добавь:
	images: {
		unoptimized: true, // нужно для GitHub Pages
	},
};

export default nextConfig;
