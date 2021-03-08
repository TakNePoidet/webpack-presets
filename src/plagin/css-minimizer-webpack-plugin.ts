import deepmerge from 'deepmerge';
// @ts-ignore
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

export const cssMinimizerWebpackPlugin = (options: Record<string, any> = {}): any => (
	new CssMinimizerPlugin(deepmerge({
		sourceMap: true
	}, options))
);