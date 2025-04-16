import { createContext, useContext, useState, ReactNode } from "react";

type SearchContextType = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export default function SearchProvider({ children }: { children: ReactNode }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
