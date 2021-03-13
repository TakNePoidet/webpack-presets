import deepmerge from 'deepmerge';
import { cssLoader, sassLoader, postcssLoader } from '../loaders';
import { sassTest } from '../tests';

export interface RuleSass {
	dev: boolean,
	test: RegExp,
	exclude: Array<string | RegExp>;
	extract: boolean;
	loaderCss: Record<string, any>;
	loaderSass: Record<string, any>;
	loaderPostcss: Record<string, any>;
}
const defaultOptions: RuleSass = {
	dev: true,
	test: sassTest(),
	exclude: [],
	extract: false,
	loaderCss: {},
	loaderSass: {},
	loaderPostcss: {},
};
export const sassRule = (_options: Partial<RuleSass> = {}): any => {
	const options = deepmerge(defaultOptions, _options);
	const use = [];
	use.push(cssLoader(options.loaderCss));
	use.push(postcssLoader(options.loaderPostcss));
	use.push(sassLoader(options.loaderSass));
	return {
		module: {
			rules: [
				{
					test: options.test,
					exclude: options.exclude ?? [],
					use
				}
			]
		}
	};
};