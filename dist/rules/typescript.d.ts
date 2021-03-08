export interface RuleTypescript {
    test?: RegExp;
    jsx: boolean;
    exclude: Array<string | RegExp>;
    loader: Record<string, any>;
}
export declare const typescriptRule: (_options?: Partial<RuleTypescript>) => any;
