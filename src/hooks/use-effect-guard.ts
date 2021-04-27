import { useEffect, useRef } from 'react';

export const useEffectWithGuard = <T>(effect: (mountedGuard: () => boolean) => Promise<T>) => {
  const mounted = useRef(false);
  const guard = () => mounted.current;

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    effect(guard);
  }, [effect]);
};
