/* eslint-disable react-hooks/exhaustive-deps */
import { debounce as _debounce } from 'lodash';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';

const useDebouncedInput = (defaultValue = '') => {
  const [value, setInputValue] = useState<string>(defaultValue || '');

  const debouncedSetInputValue = useCallback(_debounce(setInputValue, 50), [
    setInputValue,
  ]);

  const inputChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      debouncedSetInputValue(e.target.value),
    [debouncedSetInputValue],
  );

  const resetInput = useCallback(() => setInputValue(defaultValue), []);

  return useMemo(
    (): [
      string,
      (e: ChangeEvent<HTMLInputElement>) => void | undefined,
      () => void,
    ] => [value, inputChangeHandler, resetInput],
    [value, inputChangeHandler, resetInput],
  );
};

export default useDebouncedInput;
