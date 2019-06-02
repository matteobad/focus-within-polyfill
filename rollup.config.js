import compiler from '@ampproject/rollup-plugin-closure-compiler'
import pkg from './package.json'

let external = Object.keys(pkg.dependencies)
let plugins = [
	compiler({
		compilation_level: 'ADVANCED_OPTIMIZATIONS',
		language_out: 'ECMASCRIPT_2015'
	})
]

const isDev = process.env.BUILD === 'development'
if (!isDev) plugins.push()

export default {
	input: 'src/focus-within.js',
	output: {
		file: pkg.main,
		format: 'iife',
		name: 'focusWithin',
		sourcemap: true
	},
	plugins: plugins,
	external: external
}
