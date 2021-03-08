import deepmerge from 'deepmerge';
import { svgInlineLoader } from '../loaders';
import { svgInlineTest } from '../tests';

export interface RuleSvgInline {
	test: RegExp,
	exclude: Array<string | RegExp>;
	loader: Record<string, any>;
}

const defaultOptions: RuleSvgInline = {
	test: svgInlineTest(),
	exclude: [],
	loader: {}
};

export const svgInlineRule = (_options: Partial<RuleSvgInline> = {}): any => {
	const options = deepmerge(defaultOptions, _options);
	return {
		module: {
			rules: [
				{
					test: options.test,
					exclude: options.exclude ?? [],
					use: [
						svgInlineLoader(options.loader ?? {})
					]
				}
			]
		}
	};
};