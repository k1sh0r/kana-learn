export interface DocPage {
  id: string;
  title: string;
  slug: string;
  content: string;
  sidebar_label?: string;
  sidebar_position?: number;
  category?: string;
}

export interface Category {
  id: string;
  label: string;
  slug: string;
  position: number;
  pages: DocPage[];
  description?: string; // Optional markdown description
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: "dark" | "light" | "system";
  storageKey?: string;
}

export type Theme = "dark" | "light" | "system";
