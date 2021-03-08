const plagins = [];
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const external = require('rollup-plugin-peer-deps-external');
const sourceMaps = require('rollup-plugin-sourcemaps');
const typescript = require('rollup-plugin-typescript2');
const json = require('@rollup/plugin-json');
const { terser } = require('rollup-plugin-terser');

if (!isDev) {
	plagins.push(
		terser({
			compress: {
				inline: true,
				passes: 1,
				keep_fargs: false,
				drop_console: true
			},
			output: {
				beautify: false,
				comments: false
			},
			mangle: true
		})
	);
} else {
	plagins.push(sourceMaps());
}
module.exports = {
	input: './src/index.ts',
	output: [
		{
			file: './dist/index.js',
			exports: 'auto',
			format: 'cjs',
			sourcemap: isDev
		}
	],
	plugins: [
		json(),
		commonjs(),
		nodeResolve({
			preferBuiltins: true
		}),
		external({
			peerDeps: true
			// exclude: ['node_modules/**']
		}),
		typescript({
			rollupCommonJSResolveHack: true,
			clean: true,
			tsconfig: './tsconfig.json'
		}),
		...plagins
	]
};
