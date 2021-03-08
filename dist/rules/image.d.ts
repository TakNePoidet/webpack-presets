export interface RuleImage {
    test: RegExp;
    exclude: Array<string | RegExp>;
    loader: Record<string, any>;
}
export declare const imageRule: (_options?: Partial<RuleImage>) => any;
