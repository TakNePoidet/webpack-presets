import deepmerge from 'deepmerge';
import { babelLoader } from '../loaders';
import { javasctriptTest } from '../tests';

export interface RuleJavascript {
	test?: RegExp;
	jsx: boolean,
	exclude: Array<string | RegExp>;
	useBabel: boolean,
	useEslint: boolean,
	babelLoader: Record<string, any>;
}

const defaultOptions: RuleJavascript = {
	jsx: false,
	exclude: [],
	useBabel: true,
	useEslint: true,
	babelLoader: {},
};


export const javascriptRule = (_options: Partial<RuleJavascript> = {}): any => {
	const options = deepmerge(defaultOptions, _options);
	const use = [];
	if (options.useBabel) use.push(babelLoader(options.babelLoader));
	return {
		module: {
			rules: [
				{
					test: options.test ? options.test : javasctriptTest(options.jsx),
					exclude: options.exclude,
					use
				}
			]
		}
	};
};