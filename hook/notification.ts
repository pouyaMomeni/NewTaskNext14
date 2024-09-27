// useNotification.ts
import { notification } from 'antd';
import { useCallback } from 'react';

const useCustomNotification = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = useCallback(
    (message: string, description: string, duration: number = 0) => {
      api.open({
        message,
        description,
        duration,
      });
    },
    [api],
  );

  return {
    openNotification,
    contextHolder,
  };
};

export default useCustomNotification;
