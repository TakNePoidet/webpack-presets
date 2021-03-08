export interface RuleSass {
    dev: boolean;
    test: RegExp;
    exclude: Array<string | RegExp>;
    extract: boolean;
    loaderCss: Record<string, any>;
    loaderSass: Record<string, any>;
    loaderPostcss: Record<string, any>;
}
export declare const sassRule: (_options?: Partial<RuleSass>) => any;
