export interface RuleJavascript {
    test?: RegExp;
    jsx: boolean;
    exclude: Array<string | RegExp>;
    useBabel: boolean;
    useEslint: boolean;
    babelLoader: Record<string, any>;
}
export declare const javascriptRule: (_options?: Partial<RuleJavascript>) => any;
