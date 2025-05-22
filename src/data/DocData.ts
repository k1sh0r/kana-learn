
import { Category } from "@/types";
import { cryptoEssentialsCategory } from "./cryptoEssentials";
// import { perpsCategory } from "./perps";

// Export combined mock data
export const Data = {
  categories: [
    cryptoEssentialsCategory,
    // perpsCategory,
  ] as Category[],
};
