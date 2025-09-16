import { motion } from 'framer-motion';
import { elementCategories } from '../data/elements';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from './ui/Dialog';
import { Badge } from './ui/Badge';

const ElementDetails = ({ element, isOpen, onClose }) => {
  if (!element) return null;

  const category = elementCategories[element.category];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogClose onClick={onClose} />
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
              <h2 className="text-xl font-bold">{element.name}</h2>
              <p className="text-sm text-gray-600">
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

          <div className="border-t pt-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-gray-600">Atomic Mass</p>
                <p className="font-semibold">{element.atomicMass.toFixed(3)} u</p>
              </div>
              <div>
                <p className="font-medium text-gray-600">Period</p>
                <p className="font-semibold">{element.period}</p>
              </div>
              <div>
                <p className="font-medium text-gray-600">Group</p>
                <p className="font-semibold">{element.group}</p>
              </div>
              <div>
                <p className="font-medium text-gray-600">Phase</p>
                <p className="font-semibold capitalize">{element.phase}</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <p className="font-medium text-gray-600 mb-2">Electron Configuration</p>
            <p className="text-sm font-mono bg-gray-100 p-2 rounded">
              {element.electronConfiguration}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ElementDetails;
