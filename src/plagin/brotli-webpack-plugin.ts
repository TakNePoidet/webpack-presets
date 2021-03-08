import deepmerge from 'deepmerge';
// @ts-ignore
import BrotliPlugin from 'brotli-webpack-plugin';

export const brotliWebpackPlugin = (options: Record<string, any>): any => (new BrotliPlugin(deepmerge({
	asset: '[path].br[query]',
	test: /\.(js|css|html|svg)$/,
	threshold: 10240,
	minRatio: 0.8
}, options)));