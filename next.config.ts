import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	images: {
		unoptimized: true,
	},
	basePath: process.env.GITHUB_REPOSITORY
		? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`
		: undefined,
};

export default nextConfig;
