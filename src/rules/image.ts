import deepmerge from 'deepmerge';
import { fileLoader } from '../loaders';
import { imageTest } from '../tests';

export interface RuleImage {
	test: RegExp,
	exclude: Array<string | RegExp>;
	loader: Record<string, any>;
}

const defaultOptions: RuleImage = {
	test: imageTest(),
	exclude: [],
	loader: {}
};

export const imageRule = (_options: Partial<RuleImage> = {}): any => {
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