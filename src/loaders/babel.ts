import deepmerge from 'deepmerge';
import path from 'path';

export const babelLoader = (options: Record<string, any> = {}): any => ({
	loader: 'babel-loader',
	options: deepmerge({
		configFile: path.resolve(__dirname, "../config/babel.config.js"),
	}, options)
});