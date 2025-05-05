
import { Category } from "@/types";
import { cryptoEssentialsCategory } from "./cryptoEssentials";
import { securityCategory } from "./security";

// Export combined mock data
export const mockData = {
  categories: [
    cryptoEssentialsCategory,
    securityCategory,
  ] as Category[],
};
