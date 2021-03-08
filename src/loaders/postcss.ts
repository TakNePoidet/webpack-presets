import deepmerge from 'deepmerge';
import path from 'path';

export const postcssLoader = (options: Record<string, any> = {}): any => ({
	loader: 'postcss-loader',
	options: deepmerge({
		postcssOptions: {
			config: path.resolve(__dirname, "../config/postcss.config.js"),
		},
	}, options)
});