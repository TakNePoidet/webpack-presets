import deepmerge from 'deepmerge';

export const typesctiptLoader = (options: Record<string, any> = {}): any => ({
	loader: 'ts-loader',
	options: deepmerge({
		transpileOnly: true
	}, options)
});