import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
// import { createRequire } from 'module'
// const require = createRequire(import.meta.url)

const modulePath = path.dirname(fileURLToPath(import.meta.url))
console.log('context: ' + path.resolve(modulePath, '.'))

const distPath = path.resolve(modulePath, './dist')

export default {
	entry: {
		main: './FixImports.mjs',
	},
	mode: 'development',
	devtool: 'eval-source-map',
	output: {
		//filename: 'main',
		path: distPath,
		clean: true,
		pathinfo: true,
		environment: {
			module: true,
		},
		module: true,
		scriptType: 'module',
	},
	context: path.resolve(modulePath, '.'),
	target: 'node',
	node: {
		__dirname: true, //'node-module',
		__filename: true, // 'node-module',
		//global: false,
	},
	resolve: {
		extensionAlias: {
			'.js': ['.ts', '.js'],
			'.mjs': ['.mts', '.mjs'],
		},
	},
	experiments: {
	//	topLevelAwait: true,
		outputModule: true,
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				resolve: {
					fullySpecified: false, // disable the behaviour
				},
			},
		],
		parser: {
			javascript: {
				importMeta: false,
				//url: 'relative',
			},
		},
	},
	plugins: [],
}
