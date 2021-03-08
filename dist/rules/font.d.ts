export interface RuleFont {
    test: RegExp;
    exclude: Array<string | RegExp>;
    loader: Record<string, any>;
}
export declare const fontRule: (_options?: Partial<RuleFont>) => any;
