import { ElementData, categoryColors } from "../data/elements";

interface ElementCardProps {
  element: ElementData;
  onClick: () => void;
}

export function ElementCard({ element, onClick }: ElementCardProps) {
  const categoryColor = categoryColors[element.category as keyof typeof categoryColors] || "bg-gray-500";
  
  return (
    <div
      className={`
        ${categoryColor} 
        cursor-pointer 
        rounded-xl 
        p-4 
        flex 
        flex-col 
        justify-center 
        items-center 
        transition-all 
        duration-300 
        hover:scale-105 
        hover:shadow-xl 
        hover:shadow-black/20
        text-white
        min-h-[120px]
        group
      `}
      onClick={onClick}
    >
      <div className="text-sm opacity-80 mb-1">
        {element.atomicNumber}
      </div>
      <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">
        {element.symbol}
      </div>
      <div className="text-sm text-center leading-tight opacity-90">
        {element.name}
      </div>
      <div className="text-xs opacity-70 mt-1 capitalize">
        {element.category.replace('-', ' ')}
      </div>
    </div>
  );
}