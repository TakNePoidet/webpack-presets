const path = require('path');
import deepmerge from 'deepmerge';
export const output = (options: Partial<Record<string, any>> = {}) => ({
	output: deepmerge({
		filename: '[name].js',
		path: path.resolve(__dirname, '../dist')
	}, options)
});
