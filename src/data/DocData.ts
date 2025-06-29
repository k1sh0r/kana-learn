import { Category } from "@/types";

export async function getDataForLanguage(
  lang: string,
  categorySlug?: string
): Promise<{ categories: Category[]; usedLanguage: string }> {
  // Helper to import with fallback
  async function importCategory(base: string, key: string) {
    try {
      const mod = await import(`./${base}_${lang}`);
      return { data: mod[key], usedLanguage: lang };
    } catch {
      const mod = await import(`./${base}_en`);
      return { data: mod[key], usedLanguage: 'en' };
    }
  }
  let categories: Category[] = [];
  let usedLanguage = lang;
  if (categorySlug) {
    // Only import the requested category
    if (categorySlug === 'crypto-essentials') {
      const { data, usedLanguage: ul } = await importCategory('cryptoEssentials', 'cryptoEssentialsCategory');
      categories = [data];
      usedLanguage = ul;
    } else if (categorySlug === 'perps') {
      const { data, usedLanguage: ul } = await importCategory('perpsEssentials1', 'perpsEssentialsCategory');
      categories = [data];
      usedLanguage = ul;
    } else if (categorySlug === 'kanaperps' || categorySlug === 'perps-walkthrough') {
      const { data, usedLanguage: ul } = await importCategory('perpswalkthrough', 'perpsCategory');
      categories = [data];
      usedLanguage = ul;
    }
  } else {
    // Import all categories (for home, etc.)
    const { data: ce } = await importCategory('cryptoEssentials', 'cryptoEssentialsCategory');
    const { data: pw } = await importCategory('perpswalkthrough', 'perpsCategory');
    const { data: pe } = await importCategory('perpsEssentials1', 'perpsEssentialsCategory');
    categories = [ce, pw, pe];
    // usedLanguage is not meaningful here
  }
  return { categories, usedLanguage };
}
