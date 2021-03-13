import deepmerge from 'deepmerge';
import { Entry } from 'webpack';

export const entry = (options: Partial<Entry> = {}): any => ({
	entry: deepmerge({
		index: './src/index.js'
	}, options)
});
