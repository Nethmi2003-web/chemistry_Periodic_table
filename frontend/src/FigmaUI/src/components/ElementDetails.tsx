import { motion } from 'motion/react';
import { Element, elementCategories } from '../data/elements';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

interface ElementDetailsProps {
  element: Element | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ElementDetails({ element, isOpen, onClose }: ElementDetailsProps) {
  if (!element) return null;

  const category = elementCategories[element.category as keyof typeof elementCategories];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-16 h-16 rounded-lg flex items-center justify-center text-3xl text-white"
              style={{ backgroundColor: category?.color }}
            >
              {element.symbol}
            </motion.div>
            <div>
              <h2>{element.name}</h2>
              <p className="text-sm text-muted-foreground">
                Element #{element.number}
              </p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex gap-2">
            <Badge 
              style={{ backgroundColor: category?.color + '20', color: category?.color }}
            >
              {category?.name}
            </Badge>
            <Badge variant="outline">
              {element.phase.charAt(0).toUpperCase() + element.phase.slice(1)}
            </Badge>
          </div>

          <Separator />

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium text-muted-foreground">Atomic Mass</p>
              <p>{element.atomicMass.toFixed(3)} u</p>
            </div>
            <div>
              <p className="font-medium text-muted-foreground">Period</p>
              <p>{element.period}</p>
            </div>
            <div>
              <p className="font-medium text-muted-foreground">Group</p>
              <p>{element.group}</p>
            </div>
            <div>
              <p className="font-medium text-muted-foreground">Phase</p>
              <p className="capitalize">{element.phase}</p>
            </div>
          </div>

          <Separator />

          <div>
            <p className="font-medium text-muted-foreground mb-2">Electron Configuration</p>
            <p className="text-sm font-mono bg-muted p-2 rounded">
              {element.electronConfiguration}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}