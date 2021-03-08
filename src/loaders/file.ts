import deepmerge from 'deepmerge';

export const fileLoader = (options: Record<string, any> = {}): any => ({
	loader: 'file-loader',
	options: deepmerge({
		name: '[contenthash].[ext]',
		esModule: false,
		useRelativePath: true,
	}, options)
});