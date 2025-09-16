import { motion } from 'motion/react';
import { Element, elementCategories } from '../data/elements';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface ElementCardProps {
  element: Element;
  onClick?: (element: Element) => void;
  index: number;
}

export function ElementCard({ element, onClick, index }: ElementCardProps) {
  const category = elementCategories[element.category as keyof typeof elementCategories];
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.02,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Card 
        className="relative cursor-pointer border-2 transition-all duration-300 hover:border-opacity-80 min-h-[120px] flex flex-col justify-between p-3"
        style={{ 
          backgroundColor: category?.color + '20',
          borderColor: category?.color
        }}
        onClick={() => onClick?.(element)}
      >
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-medium text-muted-foreground">
            {element.number}
          </span>
          <Badge 
            variant="secondary" 
            className="text-xs px-1 py-0"
            style={{ backgroundColor: category?.color + '40' }}
          >
            {element.phase.charAt(0).toUpperCase()}
          </Badge>
        </div>
        
        <div className="text-center flex-1 flex flex-col justify-center">
          <div 
            className="text-2xl mb-1"
            style={{ color: category?.color }}
          >
            {element.symbol}
          </div>
          <div className="text-xs text-muted-foreground leading-tight">
            {element.name}
          </div>
        </div>
        
        <div className="text-xs text-center text-muted-foreground mt-2">
          {element.atomicMass.toFixed(element.atomicMass % 1 === 0 ? 0 : 2)}
        </div>
      </Card>
    </motion.div>
  );
}