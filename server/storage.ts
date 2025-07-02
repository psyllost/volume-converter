import {
  ingredients,
  conversions,
  type Ingredient,
  type InsertIngredient,
  type Conversion,
  type InsertConversion,
} from "@shared/schema";

export interface IStorage {
  // Ingredient operations
  getIngredients(): Promise<Ingredient[]>;
  getIngredientByKey(key: string): Promise<Ingredient | undefined>;
  createIngredient(ingredient: InsertIngredient): Promise<Ingredient>;

  // Conversion history operations
  getConversions(limit?: number): Promise<Conversion[]>;
  createConversion(conversion: InsertConversion): Promise<Conversion>;
  clearConversions(): Promise<void>;
}

export class MemStorage implements IStorage {
  private ingredients: Map<number, Ingredient>;
  private conversions: Map<number, Conversion>;
  private ingredientCurrentId: number;
  private conversionCurrentId: number;

  constructor() {
    this.ingredients = new Map();
    this.conversions = new Map();
    this.ingredientCurrentId = 1;
    this.conversionCurrentId = 1;

    // Pre-populate with common cooking ingredients
    this.initializeIngredients();
  }

  private initializeIngredients() {
    const defaultIngredients: InsertIngredient[] = [
      {
        key: "flour",
        name: "All-Purpose Flour",
        gramsPerOunce: 18,
        category: "baking",
      },
      {
        key: "sugar",
        name: "Granulated Sugar",
        gramsPerOunce: 25,
        category: "sweetener",
      },
      { key: "butter", name: "Butter", gramsPerOunce: 30, category: "fat" },
      { key: "milk", name: "Milk", gramsPerOunce: 30, category: "liquid" },
      { key: "rice", name: "White Rice", gramsPerOunce: 18, category: "grain" },
      {
        key: "brown-sugar",
        name: "Brown Sugar",
        gramsPerOunce: 30,
        category: "sweetener",
      },
      {
        key: "powdered-sugar",
        name: "Powdered Sugar",
        gramsPerOunce: 18,
        category: "sweetener",
      },
      { key: "honey", name: "Honey", gramsPerOunce: 42, category: "sweetener" },
      {
        key: "cocoa-powder",
        name: "Cocoa Powder",
        gramsPerOunce: 24,
        category: "baking",
      },
      // { key: 'semolina', name: 'Semolina', gramsPerOunce: 28.35, category: 'grain' },
      { key: "yogurt", name: "Yogurt", gramsPerOunce: 90, category: "dairy" },
      {
        key: "milk-cream",
        name: "Milk Cream (35% fat)",
        gramsPerOunce: 30,
        category: "dairy",
      },
      {
        key: "cornflour",
        name: "Cornflour",
        gramsPerOunce: 40,
        category: "baking",
      },
    ];

    defaultIngredients.forEach((ingredient) => {
      const id = this.ingredientCurrentId++;
      const fullIngredient: Ingredient = { ...ingredient, id };
      this.ingredients.set(id, fullIngredient);
    });
  }

  async getIngredients(): Promise<Ingredient[]> {
    return Array.from(this.ingredients.values()).sort((a, b) =>
      a.name.localeCompare(b.name),
    );
  }

  async getIngredientByKey(key: string): Promise<Ingredient | undefined> {
    return Array.from(this.ingredients.values()).find(
      (ingredient) => ingredient.key === key,
    );
  }

  async createIngredient(
    insertIngredient: InsertIngredient,
  ): Promise<Ingredient> {
    const id = this.ingredientCurrentId++;
    const ingredient: Ingredient = { ...insertIngredient, id };
    this.ingredients.set(id, ingredient);
    return ingredient;
  }

  async getConversions(limit: number = 10): Promise<Conversion[]> {
    const allConversions = Array.from(this.conversions.values());
    return allConversions
      .sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
      )
      .slice(0, limit);
  }

  async createConversion(
    insertConversion: InsertConversion,
  ): Promise<Conversion> {
    const id = this.conversionCurrentId++;
    const conversion: Conversion = {
      ...insertConversion,
      id,
      timestamp: new Date(),
    };
    this.conversions.set(id, conversion);
    return conversion;
  }

  async clearConversions(): Promise<void> {
    this.conversions.clear();
  }
}

export const storage = new MemStorage();
