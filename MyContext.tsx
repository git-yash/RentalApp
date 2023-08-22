import React, {createContext, useContext, useState} from 'react';
import {Rental} from './modals/Rental';

interface MyContextValue {
  bookmarkedPosts: Rental[];
  setBookmarkedPosts: React.Dispatch<React.SetStateAction<Rental[]>>;
}

const MyContext = createContext<MyContextValue | undefined>(undefined);

export function useMyContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
}

export function MyContextProvider({children}: {children: React.ReactNode}) {
  const [bookmarkedPosts, setBookmarkedPosts] = useState<Rental[]>([]);

  const value: MyContextValue = {
    bookmarkedPosts,
    setBookmarkedPosts,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}
