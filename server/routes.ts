import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { conversionRequestSchema, type ConversionResult } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Get all ingredients
  app.get("/api/ingredients", async (req, res) => {
    try {
      const ingredients = await storage.getIngredients();
      res.json(ingredients);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch ingredients" });
    }
  });

  // Convert units
  app.post("/api/convert", async (req, res) => {
    try {
      const { ingredient, amount, fromUnit } = conversionRequestSchema.parse(req.body);
      
      // Get ingredient data
      const ingredientData = await storage.getIngredientByKey(ingredient);
      if (!ingredientData) {
        return res.status(404).json({ error: "Ingredient not found" });
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
          return res.status(400).json({ error: "Invalid from unit" });
      }

      // Convert from grams to all other units
      const result: ConversionResult = {
        grams: grams,
        ounces: grams / gramsPerOunce,
        cups: grams / (8 * gramsPerOunce),
        teaspoons: grams / (gramsPerOunce / 6),
        tablespoons: grams / (gramsPerOunce / 2),
        ingredient: ingredientData.name,
        baseAmount: amount,
        baseUnit: fromUnit,
      };

      // Save conversion to history
      await storage.createConversion({
        ingredient: ingredientData.name,
        amount,
        fromUnit,
        toUnit: 'all',
        result: grams,
      });

      res.json(result);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Conversion failed" });
      }
    }
  });

  // Get conversion history
  app.get("/api/conversions", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
      const conversions = await storage.getConversions(limit);
      res.json(conversions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch conversion history" });
    }
  });

  // Clear conversion history
  app.delete("/api/conversions", async (req, res) => {
    try {
      await storage.clearConversions();
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to clear conversion history" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
