'use client'
import { Actions } from 'ahooks/lib/useToggle';
import React, { useState, ReactNode, useContext } from 'react';
import { useToggle } from 'ahooks';

interface Toggle {
  value: boolean;
  actions: Actions<boolean>;
}
interface Children {
  childrens: ReactNode;
  setChildrens: (data: ReactNode) => void;
}

type UIContextProps = {
  toggle: Toggle;
  children: Children;
};

export const UIContext = React.createContext<UIContextProps>(
  {} as UIContextProps,
);

interface UIProvider {
  children: React.ReactNode;
}

export const UIProvider = ({ children }: UIProvider) => {
  const [value, actions] = useToggle();
  const [childrens, setChildrens] = useState<ReactNode>();
  // const selections = useSelections([])
  return (
    <UIContext.Provider
      value={{
        toggle: { value, actions },
        children: { childrens, setChildrens },
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const {toggle, children} = useContext(UIContext)
  return {
    toggle, children
  }
}