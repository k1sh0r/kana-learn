"use client";
import React, { createContext, useContext, useState, useCallback } from 'react';
import { useToast } from '@/components/ui/use-toast';

interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
  showToastIfFallback: (requested: string, fallback: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const { toast } = useToast();

  const showToastIfFallback = useCallback((requested: string, fallback: string) => {
    if (requested !== fallback) {
      toast({
        title: 'Language not available',
        description: `Falling back to English.`,
      });
    }
  }, [toast]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, showToastIfFallback }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
} 