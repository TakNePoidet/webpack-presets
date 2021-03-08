// @ts-ignore
import VueLoaderPlugin from 'vue-loader/lib/plugin';
import { vueLoader } from "../loaders";
import { vueTest } from "../tests";

export const vueRule = (): any => ({
	module: {
		rules: [
			{
				test: vueTest(),
				use: [
					vueLoader()
				]
			}
		]
	},
	plagins: [
		new VueLoaderPlugin()
	]
});