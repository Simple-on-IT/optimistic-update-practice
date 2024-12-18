import { useRef, useEffect } from 'react';

export function useCallbackCustom<T extends (...args: any[]) => any>(
  callback: T,
  dependencies: ReadonlyArray<unknown>
): T {
  const callbackRef = useRef<T>(callback);
  const dependenciesRef = useRef<ReadonlyArray<unknown>>([]);

  // Обновляем функцию только если зависимости изменились
  useEffect(() => {
    const hasChanged = dependencies.some(
      (dep, index) => dep !== dependenciesRef.current[index]
    );
    if (hasChanged) {
      callbackRef.current = callback;
      dependenciesRef.current = dependencies;
    }
  }, [callback, dependencies]);

  return callbackRef.current;
}
