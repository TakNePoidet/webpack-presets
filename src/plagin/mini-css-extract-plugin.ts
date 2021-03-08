// @ts-ignore
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import deepmerge from 'deepmerge';

export const miniCssExtractPlugin = (options: Record<string, any> = {}): any => ({
	plagins: [
		new MiniCssExtractPlugin(deepmerge({}, options))
	]
});