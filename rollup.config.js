import { eslint } from 'rollup-plugin-eslint'
import { terser } from 'rollup-plugin-terser'

const plugins =
	process.env.BUILD !== 'development'
		? [eslint(), terser({ warnings: 'verbose' })]
		: [eslint()]

const outputFile =
	process.env.BUILD !== 'development'
		? 'dist/focus-within.min.js'
		: 'dist/focus-within.js'

export default {
	input: './src/focus-within.js',
	output: {
		file: outputFile,
		format: 'iife'
	},
	plugins: plugins
}
