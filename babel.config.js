// const { transform } = require("typescript");

module.exports = {
	presets: [
		"@babel/preset-env",
		["@babel/preset-react", { runtime: "automatic" }]
	],
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
		"node_modules/.+\\.(js|jsx|ts|tsx)$": "babel-jest"
	}
};
