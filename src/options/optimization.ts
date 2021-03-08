import deepmerge from 'deepmerge';
import { cssMinimizerWebpackPlugin } from "../plagin/css-minimizer-webpack-plugin";
import { terserWebpackPlugin } from '../plagin';

export const optimization = (options: Record<string, any>): any => ({
	optimization: deepmerge({
		runtimeChunk: {
			name: `runtime`
		},
		splitChunks: {
			chunks: 'async',
			maxAsyncRequests: Infinity,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					chunks: 'initial',
					name(module) {
						const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
						return `npm.${packageName.replace('@', '')}`;
					},
				}
			}
		},
		minimizer: [
			terserWebpackPlugin({
				parallel: true,
				extractComments: false,
				terserOptions: {
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
				}
			}),
			cssMinimizerWebpackPlugin()
		]
	}, options),
});