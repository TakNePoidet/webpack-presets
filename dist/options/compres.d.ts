interface Options {
    useZip: boolean;
    useBrotli: boolean;
    compress: Record<string, any>;
    brotli: Record<string, any>;
}
export declare const compres: (_options?: Partial<Options>) => any;
export {};
