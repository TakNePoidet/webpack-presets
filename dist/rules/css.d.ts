export interface RuleCss {
    dev: boolean;
    test: RegExp;
    exclude: Array<string | RegExp>;
    extract: boolean;
    loaderCss: Record<string, any>;
    loaderPostcss: Record<string, any>;
}
export declare const ruleCss: (_options?: Partial<RuleCss>) => any;
