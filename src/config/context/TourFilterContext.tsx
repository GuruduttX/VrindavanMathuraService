"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type TourFilterContextType = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

const TourFilterContext = createContext<TourFilterContextType | undefined>(
  undefined,
);

export function TourFilterProvider({ children }: { children: ReactNode }) {
  const [activeCategory, setActiveCategory] = useState("Explore All");

  return (
    <TourFilterContext.Provider value={{ activeCategory, setActiveCategory }}>
      {children}
    </TourFilterContext.Provider>
  );
}

// Custom hook to make importing easier
export function useTourFilter() {
  const context = useContext(TourFilterContext);
  if (!context) {
    throw new Error("useTourFilter must be used within a TourFilterProvider");
  }
  return context;
}
