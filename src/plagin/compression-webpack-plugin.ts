import CompressionPlugin from 'compression-webpack-plugin';
import deepmerge from 'deepmerge';

export const compressionPlugin = (options: Record<string, any> = {}): any => (new CompressionPlugin(deepmerge({}, options)));