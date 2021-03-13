import deepmerge from 'deepmerge';
import { cssLoader, postcssLoader } from '../loaders';
import { cssTest } from '../tests';

export interface RuleCss {
	dev: boolean,
	test: RegExp,
	exclude: Array<string | RegExp>;
	extract: boolean;
	loaderCss: Record<string, any>;
	loaderPostcss: Record<string, any>;
}
const defaultOptions: RuleCss = {
	dev: true,
	test: cssTest(),
	exclude: [],
	extract: false,
	loaderCss: {},
	loaderPostcss: {},
};
export const ruleCss = (_options: Partial<RuleCss> = {}): any => {
	const options = deepmerge(defaultOptions, _options);
	const use = [];
	use.push(cssLoader(options.loaderCss ?? {}));
	use.push(postcssLoader(options.loaderPostcss ?? {}));
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