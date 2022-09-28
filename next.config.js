/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
	runtimeCaching,
	disable: process.env.NODE_ENV === 'development',
	buildExcludes: [/middleware-manifest.json$/],
	maximumFileSizeToCacheInBytes: 4000000,
})

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
}

module.exports = () => {
	const plugins = [withPWA]
	return plugins.reduce((acc, plugin) => plugin(acc), {
		...nextConfig,
	})
}
