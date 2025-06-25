import { Category } from "@/types";
import { cryptoEssentialsCategory } from "./cryptoEssentials";
import { perpsCategory } from "./perpswalkthrough";
import { perpsEssentialsCategory } from "./perpsEssentials1";

// Export combined mock data
export const Data = {
  categories: [
    cryptoEssentialsCategory,
    perpsCategory,
    perpsEssentialsCategory,
  ] as Category[],
};
