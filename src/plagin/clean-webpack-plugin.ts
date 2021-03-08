// @ts-ignore
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import deepmerge from 'deepmerge';

export const cleanWebpackPlugin = (options: Record<string, any> = {}): any => ({
	plagins: [
		new CleanWebpackPlugin(deepmerge({}, options))
	]
});