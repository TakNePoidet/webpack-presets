import deepmerge from 'deepmerge';

export const svgInlineLoader = (options: Record<string, any> = {}): any => ({
	loader: 'svg-inline-loader',
	options: deepmerge({
		sourceMap: true
	}, options)
});