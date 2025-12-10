/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ["@workspace/ui"],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "laravel-upload-diario.s3.amazonaws.com",
				pathname: "/**",
			},
		],
	},
	experimental: {
		missingSuspenseWithCSRBailout: false,
	},
};

export default nextConfig;
