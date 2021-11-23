export declare const EMOTION_DISABLE_SSR = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */";
export declare const splitPropsByKeys: <T, K extends (keyof T)[]>(props: T, keys: K) => readonly [{ [key in K[number]]: T[key]; }, { [key_1 in Exclude<keyof T, K[number]>]: T[key_1]; }];
export * from './types';
//# sourceMappingURL=index.d.ts.map