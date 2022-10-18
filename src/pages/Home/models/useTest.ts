import type { ChangeEvent } from 'react';
import { useCallback, useState } from 'react';

interface IStore {
  searchValue?: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function usePageStore(): IStore {
  const [searchValue, setSearchValue] = useState<string>();

  // 搜索
  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    [setSearchValue],
  );

  return {
    searchValue,
    onInputChange,
  };
}
