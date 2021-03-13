// @ts-ignore
import { VueLoaderPlugin } from 'vue-loader';
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