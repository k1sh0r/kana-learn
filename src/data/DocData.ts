
import { Category } from "@/types";
import { cryptoEssentialsCategory } from "./cryptoEssentials";
import { perpsCategory } from "./perpswalkthrough";

// Export combined mock data
export const Data = {
  categories: [
    cryptoEssentialsCategory,
    perpsCategory,
  ] as Category[],
};
