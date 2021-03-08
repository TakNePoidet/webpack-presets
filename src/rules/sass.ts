import deepmerge from 'deepmerge';
// @ts-ignore
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
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
	if (options.dev || options.extract === false) {
		use.push(cssLoader(options.loaderCss));
	} else if (options.extract === true) {
		use.push(MiniCssExtractPlugin.loader);
	}
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