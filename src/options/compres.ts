import deepmerge from 'deepmerge';
import { compressionPlugin, brotliWebpackPlugin } from "../plagin";

interface Options {
	useZip: boolean;
	useBrotli: boolean,
	compress: Record<string, any>;
	brotli: Record<string, any>;

}


export const compres = (_options: Partial<Options> = {}): any => {
	const options: Options = deepmerge({
		useZip: true,
		useBrotli: false,
		compress: {},
		brotli: {},
	}, _options);
	const plagins = [];
	if (options.useZip) {
		plagins.push(compressionPlugin(options.compress));
	}
	if (options.useBrotli) {
		plagins.push(brotliWebpackPlugin(options.brotli));
	}
	return {
		plagins
	};
};