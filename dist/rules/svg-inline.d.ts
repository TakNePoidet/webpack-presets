export interface RuleSvgInline {
    test: RegExp;
    exclude: Array<string | RegExp>;
    loader: Record<string, any>;
}
export declare const svgInlineRule: (_options?: Partial<RuleSvgInline>) => any;
