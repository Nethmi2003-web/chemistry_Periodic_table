import { ElementData, categoryColors } from "../data/elements";

interface ElementProps {
  element: ElementData;
  onClick: () => void;
}

export function Element({ element, onClick }: ElementProps) {
  const categoryColor = categoryColors[element.category as keyof typeof categoryColors] || "bg-gray-500";
  
  return (
    <div
      className={`
        ${categoryColor} 
        aspect-square 
        cursor-pointer 
        rounded-lg 
        p-2 
        flex 
        flex-col 
        justify-between 
        items-center 
        transition-all 
        duration-200 
        hover:scale-105 
        hover:shadow-lg 
        hover:z-10 
        relative
        text-white
        min-w-[60px]
        min-h-[60px]
      `}
      onClick={onClick}
      style={{
        gridRow: element.gridPosition.row,
        gridColumn: element.gridPosition.col,
      }}
    >
      <div className="text-xs opacity-90">
        {element.atomicNumber}
      </div>
      <div className="text-lg font-bold leading-none">
        {element.symbol}
      </div>
      <div className="text-xs opacity-90 text-center leading-tight">
        {element.name.length > 8 ? element.name.substring(0, 6) + '..' : element.name}
      </div>
    </div>
  );
}