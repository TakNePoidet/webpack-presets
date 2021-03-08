import deepmerge from 'deepmerge';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Entry } from 'webpack';

export const entry = (options: Partial<Entry> = {}): any => ({
	entry: deepmerge({
		index: './src/index.js'
	}, options)
});
