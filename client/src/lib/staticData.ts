// Static data for GitHub Pages deployment - using correct ratios from server
export const staticIngredients = [
  { key: 'flour', name: 'All-Purpose Flour', gramsPerOunce: 18, category: 'baking' },
  { key: 'sugar', name: 'Granulated Sugar', gramsPerOunce: 25, category: 'sweetener' },
  { key: 'butter', name: 'Butter', gramsPerOunce: 30, category: 'fat' },
  { key: 'milk', name: 'Milk', gramsPerOunce: 30, category: 'liquid' },
  { key: 'water', name: 'Water', gramsPerOunce: 29.5, category: 'liquid' },
  { key: 'rice', name: 'White Rice', gramsPerOunce: 18, category: 'grain' },
  { key: 'salt', name: 'Table Salt', gramsPerOunce: 35, category: 'seasoning' },
  { key: 'oil', name: 'Vegetable Oil', gramsPerOunce: 27, category: 'fat' },
  { key: 'brown-sugar', name: 'Brown Sugar', gramsPerOunce: 30, category: 'sweetener' },
  { key: 'powdered-sugar', name: 'Powdered Sugar', gramsPerOunce: 18, category: 'sweetener' },
  { key: 'honey', name: 'Honey', gramsPerOunce: 42, category: 'sweetener' },
  { key: 'cocoa-powder', name: 'Cocoa Powder', gramsPerOunce: 24, category: 'baking' },
  { key: 'olive-oil', name: 'Olive Oil', gramsPerOunce: 27, category: 'fat' },
  { key: 'semolina', name: 'Semolina', gramsPerOunce: 22, category: 'grain' },
  { key: 'yogurt', name: 'Yogurt', gramsPerOunce: 90, category: 'dairy' },
  { key: 'milk-cream', name: 'Milk Cream (35% fat)', gramsPerOunce: 30, category: 'dairy' },
  { key: 'cornflour', name: 'Cornflour', gramsPerOunce: 40, category: 'baking' },
];

export function convertUnits(ingredient: string, amount: number, fromUnit: string) {
  const ingredientData = staticIngredients.find(ing => ing.key === ingredient);
  if (!ingredientData) {
    throw new Error("Ingredient not found");
  }

  const gramsPerOunce = ingredientData.gramsPerOunce;
  
  // Convert everything to grams first
  let grams: number;
  switch(fromUnit) {
    case 'grams':
      grams = amount;
      break;
    case 'ounces':
      grams = amount * gramsPerOunce;
      break;
    case 'cups':
      // 1 cup = 8 fluid ounces
      grams = amount * 8 * gramsPerOunce;
      break;
    case 'teaspoons':
      // 1 teaspoon = 1/6 fluid ounce
      grams = amount * (gramsPerOunce / 6);
      break;
    case 'tablespoons':
      // 1 tablespoon = 1/2 fluid ounce
      grams = amount * (gramsPerOunce / 2);
      break;
    default:
      throw new Error("Invalid from unit");
  }

  // Convert from grams to all other units
  return {
    grams: grams,
    ounces: grams / gramsPerOunce,
    cups: grams / (8 * gramsPerOunce),
    teaspoons: grams / (gramsPerOunce / 6),
    tablespoons: grams / (gramsPerOunce / 2),
    ingredient: ingredientData.name,
    baseAmount: amount,
    baseUnit: fromUnit,
  };
}
