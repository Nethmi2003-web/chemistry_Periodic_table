import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ElementData, categoryColors } from "../data/elements";

interface ElementModalProps {
  element: ElementData | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ElementModal({ element, open, onOpenChange }: ElementModalProps) {
  if (!element) return null;

  const categoryColor = categoryColors[element.category as keyof typeof categoryColors] || "bg-gray-500";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div 
              className={`
                ${categoryColor} 
                w-20 h-20 
                rounded-xl 
                flex flex-col 
                justify-center 
                items-center 
                text-white 
                shadow-lg
              `}
            >
              <div className="text-xs opacity-90">{element.atomicNumber}</div>
              <div className="text-2xl font-bold">{element.symbol}</div>
            </div>
            <div>
              <DialogTitle className="text-2xl mb-1">{element.name}</DialogTitle>
              <Badge variant="secondary" className="capitalize">
                {element.category.replace('-', ' ')}
              </Badge>
            </div>
          </div>
        </DialogHeader>
        
        <DialogDescription className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Atomic Mass:</strong>
              <p>{element.atomicMass} u</p>
            </div>
            <div>
              <strong>Discovered:</strong>
              <p>{element.yearDiscovered}</p>
            </div>
          </div>

          <div>
            <strong>Discovered by:</strong>
            <p className="text-sm mt-1">{element.discoveredBy}</p>
          </div>

          <div>
            <strong>Electron Configuration:</strong>
            <p className="text-sm mt-1 font-mono">{element.electronConfiguration}</p>
          </div>

          <Separator />

          <div>
            <strong>Description:</strong>
            <p className="text-sm mt-2 leading-relaxed">{element.description}</p>
          </div>

          <div>
            <strong>Common Uses:</strong>
            <p className="text-sm mt-2 leading-relaxed">{element.uses}</p>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}