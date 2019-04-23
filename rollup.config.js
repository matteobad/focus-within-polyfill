import { eslint } from 'rollup-plugin-eslint'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const isDev = process.env.BUILD === 'development'

let external = Object.keys(pkg.dependencies)
let plugins = [eslint()]

if (!isDev) {
	plugins.push(terser())
}

export default {
	input: 'src/focus-within.js',
	output: [
		{
			file: pkg.main,
			format: 'umd',
			name: 'focusWithin',
			sourceMap: true
		},
		{
			file: pkg.module,
			format: 'es',
			sourceMap: true
		},
	],
	plugins: plugins,
	external: external
}
