import deepmerge from 'deepmerge';
import TerserWebpackPlugin from 'terser-webpack-plugin';

export const terserWebpackPlugin = (options: Record<string, any> = {}): any => (
	new TerserWebpackPlugin(deepmerge({
		sourceMap: true
	}, options))
);