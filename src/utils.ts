// @see https://github.com/emotion-js/emotion/issues/1105#issuecomment-557726922
export const EMOTION_DISABLE_SSR =
  '/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */';

export const splitPropsByKeys = <T, K extends (keyof T)[]>(props: T, keys: K) => {
  type IncludedKeys = K[number];
  type ExcludedKeys = Exclude<keyof T, IncludedKeys>;

  const restKeys = (Object.keys(props) as (keyof T)[]).filter<ExcludedKeys>(
    (key): key is ExcludedKeys => !keys.includes(key)
  );

  return [
    keys.reduce<{ [key in IncludedKeys]: T[key] }>((memo, current) => {
      memo[current] = props[current];
      return memo;
    }, {} as { [key in IncludedKeys]: T[key] }),

    restKeys.reduce<{ [key in ExcludedKeys]: T[key] }>((memo, current) => {
      memo[current] = props[current];
      return memo;
    }, {} as { [key in ExcludedKeys]: T[key] }),
  ] as const;
};
