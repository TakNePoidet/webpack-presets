import deepmerge from 'deepmerge';
import { fileLoader } from '../loaders';
import { fontTest } from '../tests';

export interface RuleFont {
	test: RegExp,
	exclude: Array<string | RegExp>;
	loader: Record<string, any>;
}

const defaultOptions: RuleFont = {
	test: fontTest(),
	exclude: [],
	loader: {}
};

export const fontRule = (_options: Partial<RuleFont> = {}): any => {
	const options = deepmerge(defaultOptions, _options);
	return {
		module: {
			rules: [
				{
					test: options.test,
					exclude: options.exclude ?? [],
					use: [
						fileLoader(options.loader ?? {})
					]
				}
			]
		}
	};
};