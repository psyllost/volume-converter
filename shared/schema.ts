import { pgTable, text, serial, integer, real, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const ingredients = pgTable("ingredients", {
  id: serial("id").primaryKey(),
  key: text("key").notNull().unique(),
  name: text("name").notNull(),
  gramsPerOunce: real("grams_per_ounce").notNull(), // grams per ounce ratio
  category: text("category").notNull(),
});

export const conversions = pgTable("conversions", {
  id: serial("id").primaryKey(),
  ingredient: text("ingredient").notNull(),
  amount: real("amount").notNull(),
  fromUnit: text("from_unit").notNull(),
  toUnit: text("to_unit").notNull(),
  result: real("result").notNull(),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

export const insertIngredientSchema = createInsertSchema(ingredients).omit({
  id: true,
});

export const insertConversionSchema = createInsertSchema(conversions).omit({
  id: true,
  timestamp: true,
});

export type InsertIngredient = z.infer<typeof insertIngredientSchema>;
export type Ingredient = typeof ingredients.$inferSelect;
export type InsertConversion = z.infer<typeof insertConversionSchema>;
export type Conversion = typeof conversions.$inferSelect;

// Validation schemas
export const conversionRequestSchema = z.object({
  ingredient: z.string().min(1),
  amount: z.number().positive(),
  fromUnit: z.enum(['grams', 'cups', 'ounces', 'teaspoons', 'tablespoons']),
});

export type ConversionRequest = z.infer<typeof conversionRequestSchema>;

export const conversionResultSchema = z.object({
  grams: z.number(),
  cups: z.number(),
  ounces: z.number(),
  teaspoons: z.number(),
  tablespoons: z.number(),
  ingredient: z.string(),
  baseAmount: z.number(),
  baseUnit: z.string(),
});

export type ConversionResult = z.infer<typeof conversionResultSchema>;
