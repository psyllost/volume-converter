import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calculator, Scale, History, RotateCcw, Info } from "lucide-react";
import { staticIngredients, convertUnits } from "@/lib/staticData";

type ConversionResult = {
  grams: number;
  cups: number;
  ounces: number;
  teaspoons: number;
  tablespoons: number;
  ingredient: string;
  baseAmount: number;
  baseUnit: string;
};

type Conversion = {
  id: number;
  ingredient: string;
  amount: number;
  fromUnit: string;
  result: number;
  timestamp: Date;
};

export default function StaticHome() {
  const [selectedIngredient, setSelectedIngredient] = useState<string>("");
  const [amount, setAmount] = useState<string>("250");
  const [fromUnit, setFromUnit] = useState<string>("grams");
  const [conversionResult, setConversionResult] = useState<ConversionResult | null>(null);
  const [history, setHistory] = useState<Conversion[]>([]);
  const { toast } = useToast();

  // Auto-convert when inputs change
  useEffect(() => {
    if (selectedIngredient && amount && parseFloat(amount) > 0 && fromUnit) {
      const numAmount = parseFloat(amount);
      if (!isNaN(numAmount)) {
        handleConvert(numAmount);
      }
    }
  }, [selectedIngredient, amount, fromUnit]);

  const handleConvert = (numAmount?: number) => {
    if (!selectedIngredient) {
      toast({
        title: "Please select an ingredient",
        variant: "destructive",
      });
      return;
    }

    const convertAmount = numAmount || parseFloat(amount);
    if (isNaN(convertAmount) || convertAmount <= 0) {
      toast({
        title: "Please enter a valid amount",
        variant: "destructive",
      });
      return;
    }

    try {
      const result = convertUnits(selectedIngredient, convertAmount, fromUnit);
      setConversionResult(result);

      // Add to history
      const newConversion: Conversion = {
        id: Date.now(),
        ingredient: result.ingredient,
        amount: convertAmount,
        fromUnit,
        result: result.grams,
        timestamp: new Date(),
      };
      setHistory(prev => [newConversion, ...prev.slice(0, 9)]); // Keep only last 10
    } catch (error) {
      toast({
        title: "Conversion Error",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    }
  };

  const clearHistory = () => {
    setHistory([]);
    toast({
      title: "History Cleared",
      description: "Conversion history has been cleared.",
    });
  };

  const quickConversions = [
    { text: "1 cup flour", detail: "≈ 227g" },
    { text: "1 cup sugar", detail: "≈ 227g" },
    { text: "1 tbsp butter", detail: "≈ 14g" },
    { text: "1 tsp salt", detail: "≈ 5g" },
  ];

  const formatValue = (value: number): string => {
    if (value < 0.1) return value.toFixed(3);
    if (value < 1) return value.toFixed(2);
    if (value < 10) return value.toFixed(1);
    return Math.round(value * 10) / 10 + "";
  };

  const formatTimeAgo = (timestamp: Date): string => {
    const now = new Date();
    const diffMs = now.getTime() - timestamp.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins} minute${diffMins === 1 ? '' : 's'} ago`;
    
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours} hour${diffHours === 1 ? '' : 's'} ago`;
    
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} day${diffDays === 1 ? '' : 's'} ago`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-primary p-2 rounded-lg">
                <Scale className="text-primary-foreground text-xl h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Kitchen Converter</h1>
                <p className="text-sm text-gray-500">Accurate ingredient conversions</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Conversion Form */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Convert Ingredients</h2>
              <p className="text-gray-600 text-sm">Enter an amount and select your ingredient to convert between units</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2">Ingredient</Label>
                  <Select value={selectedIngredient} onValueChange={setSelectedIngredient}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select an ingredient..." />
                    </SelectTrigger>
                    <SelectContent>
                      {staticIngredients.map((ingredient) => (
                        <SelectItem key={ingredient.key} value={ingredient.key}>
                          {ingredient.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2">Amount</Label>
                    <Input
                      type="number"
                      placeholder="0"
                      step="0.01"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="font-mono text-lg"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-2">From Unit</Label>
                    <Select value={fromUnit} onValueChange={setFromUnit}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="grams">Grams (g)</SelectItem>
                        <SelectItem value="cups">Cups</SelectItem>
                        <SelectItem value="ounces">Ounces (oz)</SelectItem>
                        <SelectItem value="teaspoons">Teaspoons (tsp)</SelectItem>
                        <SelectItem value="tablespoons">Tablespoons (tbsp)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  onClick={() => handleConvert()}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <Calculator className="mr-2 h-4 w-4" />
                  Convert
                </Button>
              </div>

              {/* Results Section */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-medium text-gray-900 mb-4 flex items-center">
                  <Calculator className="mr-2 h-5 w-5 text-primary" />
                  Conversion Results
                </h3>
                
                <div className="space-y-3">
                  {conversionResult ? (
                    <>
                      {fromUnit !== 'cups' && (
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Cups</span>
                            <span className="font-mono text-lg font-semibold text-gray-900">
                              {formatValue(conversionResult.cups)}
                            </span>
                          </div>
                        </div>
                      )}
                      {fromUnit !== 'ounces' && (
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Ounces</span>
                            <span className="font-mono text-lg font-semibold text-gray-900">
                              {formatValue(conversionResult.ounces)}
                            </span>
                          </div>
                        </div>
                      )}
                      {fromUnit !== 'teaspoons' && (
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Teaspoons</span>
                            <span className="font-mono text-lg font-semibold text-gray-900">
                              {formatValue(conversionResult.teaspoons)}
                            </span>
                          </div>
                        </div>
                      )}
                      {fromUnit !== 'tablespoons' && (
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Tablespoons</span>
                            <span className="font-mono text-lg font-semibold text-gray-900">
                              {formatValue(conversionResult.tablespoons)}
                            </span>
                          </div>
                        </div>
                      )}
                      {fromUnit !== 'grams' && (
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Grams</span>
                            <span className="font-mono text-lg font-semibold text-gray-900">
                              {formatValue(conversionResult.grams)}
                            </span>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Calculator className="mx-auto h-12 w-12 mb-4 opacity-50" />
                      <p>Select an ingredient and enter an amount to see conversions</p>
                    </div>
                  )}
                </div>

                {conversionResult && (
                  <div className="mt-4 text-xs text-gray-500 flex items-center">
                    <Info className="mr-1 h-3 w-3" />
                    Based on standard grams per ounce ratio
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Conversions */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Conversions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickConversions.map((conversion, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200">
                  <div className="text-sm font-medium text-gray-900">{conversion.text}</div>
                  <div className="text-xs text-gray-600 mt-1">{conversion.detail}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Conversion History */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <History className="mr-2 h-5 w-5" />
                Recent Conversions
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearHistory}
                disabled={history.length === 0}
                className="text-primary hover:text-primary/80"
              >
                Clear History
              </Button>
            </div>
            
            <div className="space-y-3">
              {history.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <History className="mx-auto h-12 w-12 mb-4 opacity-50" />
                  <p>No conversions yet</p>
                  <p className="text-sm">Your conversion history will appear here</p>
                </div>
              ) : (
                history.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">
                        {item.amount} {item.fromUnit} {item.ingredient}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {formatTimeAgo(item.timestamp)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900">
                        ≈ {formatValue(item.result)}g
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="ml-3 text-gray-400 hover:text-gray-600 p-1"
                      onClick={() => {
                        setAmount(item.amount.toString());
                        setFromUnit(item.fromUnit);
                        const ingredient = staticIngredients.find(ing => ing.name === item.ingredient);
                        if (ingredient) {
                          setSelectedIngredient(ingredient.key);
                        }
                      }}
                    >
                      <RotateCcw className="h-3 w-3" />
                    </Button>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">About Kitchen Converter</h4>
              <p className="text-sm text-gray-600">
                Accurate ingredient conversions for all your cooking and baking needs. 
                Convert between grams, cups, ounces, teaspoons, and tablespoons with confidence.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Conversion Tips</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• All conversions are based on standard ratios</li>
                <li>• Different ingredients may have varying densities</li>
                <li>• For best results, use a kitchen scale when possible</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Measuring Tips</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Level dry ingredients</li>
                <li>• Use liquid measuring cups for liquids</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500">
            <p>&copy; 2024 Kitchen Converter. Built for accurate cooking conversions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}