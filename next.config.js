/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["mir-s3-cdn-cf.behance.net"],
	},
};

module.exports = nextConfig;
