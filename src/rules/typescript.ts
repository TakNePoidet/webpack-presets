import deepmerge from 'deepmerge';
import { typsctriptTest } from "../tests";
import { typesctiptLoader } from "../loaders";

export interface RuleTypescript {
	test?: RegExp;
	jsx: boolean,
	exclude: Array<string | RegExp>;
	loader: Record<string, any>;
}

const defaultOptions: RuleTypescript = {
	jsx: false,
	exclude: [],
	loader: {}
};

export const typescriptRule = (_options: Partial<RuleTypescript> = {}): any => {
	const options = deepmerge(defaultOptions, _options);
	return {
		module: {
			rules: [
				{
					test: options.test ? options.test : typsctriptTest(options.jsx),
					exclude: options.exclude,
					use: [
						typesctiptLoader(options.loader)
					]
				}
			]
		}
	};
};