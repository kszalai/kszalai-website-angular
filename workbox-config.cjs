module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{jpg,css,html,java,png,gif,js,txt,eot,ttf,svg,woff,woff2,json,md}'
	],
	swDest: 'public/service-worker.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};