/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ["@workspace/ui"],
	experimental: {
		serverActions: {
			bodySizeLimit: "20mb",
		},
	},
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
