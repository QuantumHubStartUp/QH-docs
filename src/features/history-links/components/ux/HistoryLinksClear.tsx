import { useClearHistory } from '@features/history-links/hooks/use-clear-history.hook';
import { Button } from '@shared/components/ui/button';

import { memo, useCallback } from 'react';

export const HistoryLinksClear: React.FC = memo(() => {
  const [clearHistory] = useClearHistory();

  const handlerClear = useCallback(() => {
    clearHistory();
  }, [clearHistory]);

  return <Button onClick={handlerClear}>Очистить историю</Button>;
});
