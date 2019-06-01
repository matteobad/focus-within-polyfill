import { eslint } from 'rollup-plugin-eslint'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

let external = Object.keys(pkg.dependencies)
let plugins = [eslint()]

const isDev = process.env.BUILD === 'development'
if (!isDev) plugins.push(terser())

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
