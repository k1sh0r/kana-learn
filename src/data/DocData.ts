import { Category } from "@/types";

export async function getDataForLanguage(
  lang: string,
  showToastIfFallback?: (requested: string, fallback: string) => void
): Promise<{ categories: Category[] }> {
  // Helper to import with fallback
  async function importCategory(base: string, key: string) {
    try {
      const mod = await import(`./${base}_${lang}`);
      return mod[key];
    } catch {
      if (showToastIfFallback) showToastIfFallback(lang, 'en');
      const mod = await import(`./${base}_en`);
      return mod[key];
    }
  }
  const cryptoEssentialsCategory = await importCategory('cryptoEssentials', 'cryptoEssentialsCategory');
  const perpsCategory = await importCategory('perpswalkthrough', 'perpsCategory');
  const perpsEssentialsCategory = await importCategory('perpsEssentials1', 'perpsEssentialsCategory');
  return {
    categories: [cryptoEssentialsCategory, perpsCategory, perpsEssentialsCategory],
  };
}
