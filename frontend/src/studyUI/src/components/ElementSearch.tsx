import { useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Search } from "lucide-react";

const elements = [
  { symbol: "H", name: "Hydrogen", atomicNumber: 1, category: "Nonmetal", period: 1, group: 1 },
  { symbol: "He", name: "Helium", atomicNumber: 2, category: "Noble Gas", period: 1, group: 18 },
  { symbol: "Li", name: "Lithium", atomicNumber: 3, category: "Alkali Metal", period: 2, group: 1 },
  { symbol: "Be", name: "Beryllium", atomicNumber: 4, category: "Alkaline Earth Metal", period: 2, group: 2 },
  { symbol: "B", name: "Boron", atomicNumber: 5, category: "Metalloid", period: 2, group: 13 },
  { symbol: "C", name: "Carbon", atomicNumber: 6, category: "Nonmetal", period: 2, group: 14 },
  { symbol: "N", name: "Nitrogen", atomicNumber: 7, category: "Nonmetal", period: 2, group: 15 },
  { symbol: "O", name: "Oxygen", atomicNumber: 8, category: "Nonmetal", period: 2, group: 16 },
  { symbol: "F", name: "Fluorine", atomicNumber: 9, category: "Halogen", period: 2, group: 17 },
  { symbol: "Ne", name: "Neon", atomicNumber: 10, category: "Noble Gas", period: 2, group: 18 },
  { symbol: "Na", name: "Sodium", atomicNumber: 11, category: "Alkali Metal", period: 3, group: 1 },
  { symbol: "Mg", name: "Magnesium", atomicNumber: 12, category: "Alkaline Earth Metal", period: 3, group: 2 },
];

const categoryColors = {
  "Alkali Metal": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  "Alkaline Earth Metal": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  "Transition Metal": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "Metalloid": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  "Nonmetal": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "Halogen": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  "Noble Gas": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
};

export function ElementSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredElements = elements.filter(element =>
    element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    element.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    element.atomicNumber.toString().includes(searchTerm) ||
    element.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <Card className="p-6">
      <h3 className="mb-4">Element Search</h3>
      
      <div className="relative mb-4">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by name, symbol, atomic number, or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-9"
        />
      </div>
      
      <div className="grid gap-3 max-h-96 overflow-y-auto">
        {filteredElements.length > 0 ? (
          filteredElements.map((element) => (
            <Card key={element.symbol} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                    <span className="font-bold">{element.symbol}</span>
                  </div>
                  <div>
                    <h4>{element.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      Atomic Number: {element.atomicNumber} | Period: {element.period} | Group: {element.group}
                    </p>
                  </div>
                </div>
                <Badge className={categoryColors[element.category as keyof typeof categoryColors]}>
                  {element.category}
                </Badge>
              </div>
            </Card>
          ))
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            No elements found matching "{searchTerm}"
          </div>
        )}
      </div>
    </Card>
  );
}