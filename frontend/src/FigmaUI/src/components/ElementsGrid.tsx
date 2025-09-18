import { useState } from "react";
import { ElementCard } from "./ElementCard";
import { ElementModal } from "./ElementModal";
import { elements, ElementData, categoryColors } from "../data/elements";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

export function ElementsGrid() {
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleElementClick = (element: ElementData) => {
    setSelectedElement(element);
    setIsModalOpen(true);
  };

  const filteredElements = elements.filter(element =>
    element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    element.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    element.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Chemical Elements</h1>
        <p className="text-muted-foreground mb-6">Explore the building blocks of matter</p>
        
        {/* Search */}
        <div className="relative max-w-md mx-auto mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search elements..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Legend */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3">Element Categories</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {Object.entries(categoryColors).map(([category, color]) => (
            <Badge 
              key={category} 
              variant="secondary" 
              className={`${color} text-white capitalize`}
            >
              {category.replace('-', ' ')}
            </Badge>
          ))}
        </div>
      </div>

      {/* Elements Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filteredElements.map((element) => (
          <ElementCard
            key={element.atomicNumber}
            element={element}
            onClick={() => handleElementClick(element)}
          />
        ))}
      </div>

      {filteredElements.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No elements found matching your search.</p>
        </div>
      )}

      <ElementModal
        element={selectedElement}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
}