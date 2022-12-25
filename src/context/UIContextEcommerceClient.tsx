'use client'
import { Actions } from 'ahooks/lib/useToggle';
import React from 'react';
import { useToggle } from 'ahooks';

interface Toggle {
  value: boolean;
  actions: Actions<boolean>;
}

type UIContextEcommerceClientProps = {
  toggleSlideOvers: Toggle;
};

export const UIContextEcommerceClient = React.createContext<UIContextEcommerceClientProps>(
  {} as UIContextEcommerceClientProps,
);

interface UIProviderEcommerceClient {
  children: React.ReactNode;
}

export const UIProviderEcommerceClient = ({ children }: UIProviderEcommerceClient) => {
  const [value, actions] = useToggle();
  // const selections = useSelections([])
  return (
    <UIContextEcommerceClient.Provider
      value={{
        toggleSlideOvers: { value, actions },
      }}
    >
      {children}
    </UIContextEcommerceClient.Provider>
  );
};

export const useEcommerceClientUI = () => {
  const {toggleSlideOvers} = React.useContext(UIContextEcommerceClient)
  return {
    toggleSlideOvers
  }
}