import { useState } from "react";
import { Element } from "./Element";
import { ElementModal } from "./ElementModal";
import { elements, ElementData, categoryColors } from "../data/elements";
import { Badge } from "./ui/badge";

export function PeriodicTable() {
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleElementClick = (element: ElementData) => {
    setSelectedElement(element);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Interactive Periodic Table</h1>
        <p className="text-muted-foreground">Click on any element to learn more about it</p>
      </div>

      {/* Legend */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Element Categories</h3>
        <div className="flex flex-wrap gap-2">
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

      {/* Periodic Table Grid */}
      <div 
        className="grid gap-1 w-full overflow-x-auto"
        style={{
          gridTemplateColumns: "repeat(18, minmax(60px, 1fr))",
          gridTemplateRows: "repeat(7, minmax(60px, 1fr))",
        }}
      >
        {elements.map((element) => (
          <Element
            key={element.atomicNumber}
            element={element}
            onClick={() => handleElementClick(element)}
          />
        ))}
        
        {/* Empty cells for spacing - Row 1 */}
        <div style={{ gridRow: 1, gridColumn: "2 / 18" }}></div>
        
        {/* Empty cells for spacing - Row 2 */}
        <div style={{ gridRow: 2, gridColumn: "3 / 13" }}></div>
        
        {/* Empty cells for spacing - Row 3 */}
        <div style={{ gridRow: 3, gridColumn: "3 / 13" }}></div>
      </div>

      <ElementModal
        element={selectedElement}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
}