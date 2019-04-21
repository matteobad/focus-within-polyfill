import { eslint } from 'rollup-plugin-eslint'
import { terser } from 'rollup-plugin-terser'

const devPlugins = [eslint()]
const prdPlugins = [eslint(), terser()]

export default {
	input: './src/focus-within.js',
	output: {
		file: 'dist/focus-within.min.js',
		format: 'iife'
	},
	plugins: process.env.BUILD === 'development' ? devPlugins : prdPlugins
}
