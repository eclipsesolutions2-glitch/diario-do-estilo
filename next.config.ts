import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	cacheComponents: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "laravel-upload-diario.s3.amazonaws.com",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
