import { motion } from 'framer-motion';
import { elementCategories } from '../data/elements';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

const ElementCard = ({ element, onClick, index, isHighlighted = false }) => {
  const category = elementCategories[element.category];
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isHighlighted ? 1 : 0.7, 
        scale: 1,
        backgroundColor: isHighlighted ? category?.color + '40' : category?.color + '20'
      }}
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
        className={`relative cursor-pointer border-2 transition-all duration-300 hover:border-opacity-80 min-h-[100px] flex flex-col justify-between p-2 ${
          isHighlighted ? 'ring-2 ring-offset-2 shadow-lg' : ''
        }`}
        style={{ 
          backgroundColor: isHighlighted ? category?.color + '40' : category?.color + '20',
          borderColor: category?.color,
          ringColor: isHighlighted ? category?.color : 'transparent',
          opacity: isHighlighted ? 1 : 0.7
        }}
        onClick={() => onClick?.(element)}
      >
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-medium text-gray-600">
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
            className="text-lg mb-1 font-bold"
            style={{ color: category?.color }}
          >
            {element.symbol}
          </div>
          <div className="text-xs text-gray-600 leading-tight">
            {element.name}
          </div>
        </div>
        
        <div className="text-xs text-center text-gray-500 mt-2">
          {element.atomicMass.toFixed(element.atomicMass % 1 === 0 ? 0 : 2)}
        </div>
      </Card>
    </motion.div>
  );
};

export default ElementCard;
