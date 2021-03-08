import deepmerge from 'deepmerge';

export const cssLoader = (options: Record<string, any> = {}): any => ({
	loader: 'css-loader',
	options: deepmerge({
		sourceMap: true
	}, options)
});