import deepmerge from 'deepmerge';

export const sassLoader = (options: Record<string, any> = {}): any => ({
	loader: 'sass-loader',
	options: deepmerge({
		sourceMap: true
	}, options)
});