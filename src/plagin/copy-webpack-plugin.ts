import deepmerge from 'deepmerge';
// @ts-ignore
import CopyWebpackPlugin from 'copy-webpack-plugin';

export const copyWebpackPlugin = (options: Record<string, any> = {}): any => ({
	plagins: [
		new CopyWebpackPlugin(deepmerge({}, options))
	]
});