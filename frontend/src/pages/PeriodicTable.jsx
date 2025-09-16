import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { elements, elementCategories } from '../data/elements';
import ElementCard from '../components/ElementCard';
import ElementDetails from '../components/ElementDetails';
import Button from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ArrowLeft } from 'lucide-react';

const PeriodicTable = () => {
  const navigate = useNavigate();
  const [selectedElement, setSelectedElement] = useState(null);
  const [highlightedCategory, setHighlightedCategory] = useState(null);

  // Add keyboard event listener for Escape key
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        setHighlightedCategory(null);
        setSelectedElement(null);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Back</span>
            </Button>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Periodic Table of Elements</h1>
              <p className="text-sm sm:text-base text-gray-600">Click on any element to explore its properties</p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Element Categories</CardTitle>
            <p className="text-sm text-gray-600">
              Click on a category to highlight elements in the table
              {highlightedCategory && (
                <span className="ml-2 font-medium text-blue-600">
                  ({elements.filter(el => el.category === highlightedCategory).length} elements highlighted)
                </span>
              )}
              {highlightedCategory === null && (
                <span className="ml-2 text-gray-500">All elements visible</span>
              )}
              <span className="ml-2 text-xs text-gray-400">(Press Esc to clear)</span>
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Badge
                variant={highlightedCategory === null ? "default" : "outline"}
                className="px-2 py-1 text-xs sm:text-sm cursor-pointer transition-all hover:scale-105"
                onClick={() => setHighlightedCategory(null)}
                style={{
                  backgroundColor: highlightedCategory === null ? '#3B82F6' : '#F3F4F6',
                  borderColor: highlightedCategory === null ? '#3B82F6' : '#D1D5DB',
                  color: highlightedCategory === null ? 'white' : '#6B7280'
                }}
              >
                Show All
              </Badge>
              {Object.entries(elementCategories).map(([key, category]) => {
                const elementCount = elements.filter(el => el.category === key).length;
                return (
                  <Badge
                    key={key}
                    variant="outline"
                    className="px-2 py-1 text-xs sm:text-sm cursor-pointer transition-all hover:scale-105"
                    style={{
                      backgroundColor: highlightedCategory === key ? category.color + '40' : category.color + '20',
                      borderColor: category.color,
                      color: category.color,
                      borderWidth: highlightedCategory === key ? '2px' : '1px',
                      transform: highlightedCategory === key ? 'scale(1.05)' : 'scale(1)'
                    }}
                    onClick={() => setHighlightedCategory(highlightedCategory === key ? null : key)}
                  >
                    {category.name} ({elementCount})
                  </Badge>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Main Periodic Table */}
        <div className="mb-8">
          <div className="text-center mb-2 sm:hidden">
            <p className="text-sm text-gray-500">← Scroll horizontally to see all elements →</p>
          </div>
          <div className="overflow-x-auto">
            <motion.div 
              className="grid gap-1 mx-auto"
              style={{
                gridTemplateColumns: 'repeat(18, minmax(60px, 1fr))',
                gridTemplateRows: 'repeat(7, auto)',
                maxWidth: 'fit-content',
                minWidth: '1080px' // Minimum width to ensure proper layout
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
            {elements.filter(el => el.category !== 'lanthanide' && el.category !== 'actinide').map((element, index) => (
              <div
                key={element.number}
                style={{
                  gridColumn: element.group,
                  gridRow: element.period
                }}
              >
                <ElementCard
                  element={element}
                  onClick={setSelectedElement}
                  index={index}
                  isHighlighted={highlightedCategory === null || highlightedCategory === element.category}
                />
              </div>
            ))}
            </motion.div>
          </div>
        </div>

        {/* Lanthanides and Actinides */}
        <div className="space-y-6">
          {/* Lanthanides */}
          <div>
            <h3 className="mb-3 text-center text-lg sm:text-xl font-semibold text-gray-800">Lanthanides</h3>
            <div className="text-center mb-2 sm:hidden">
              <p className="text-sm text-gray-500">← Scroll horizontally →</p>
            </div>
            <div className="overflow-x-auto">
              <motion.div 
                className="grid gap-1 mx-auto"
                style={{
                  gridTemplateColumns: 'repeat(15, minmax(60px, 1fr))',
                  maxWidth: 'fit-content',
                  minWidth: '900px' // Minimum width for lanthanides
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {elements.filter(el => el.category === 'lanthanide').map((element, index) => (
                  <ElementCard
                    key={element.number}
                    element={element}
                    onClick={setSelectedElement}
                    index={index + elements.filter(el => el.category !== 'lanthanide' && el.category !== 'actinide').length}
                    isHighlighted={highlightedCategory === null || highlightedCategory === element.category}
                  />
                ))}
              </motion.div>
            </div>
          </div>

          {/* Actinides */}
          <div>
            <h3 className="mb-3 text-center text-lg sm:text-xl font-semibold text-gray-800">Actinides</h3>
            <div className="text-center mb-2 sm:hidden">
              <p className="text-sm text-gray-500">← Scroll horizontally →</p>
            </div>
            <div className="overflow-x-auto">
              <motion.div 
                className="grid gap-1 mx-auto"
                style={{
                  gridTemplateColumns: 'repeat(15, minmax(60px, 1fr))',
                  maxWidth: 'fit-content',
                  minWidth: '900px' // Minimum width for actinides
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {elements.filter(el => el.category === 'actinide').map((element, index) => (
                  <ElementCard
                    key={element.number}
                    element={element}
                    onClick={setSelectedElement}
                    index={index + elements.filter(el => el.category !== 'actinide').length}
                    isHighlighted={highlightedCategory === null || highlightedCategory === element.category}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Element Details Modal */}
        <ElementDetails
          element={selectedElement}
          isOpen={!!selectedElement}
          onClose={() => setSelectedElement(null)}
        />
      </motion.div>
    </div>
  );
};

export default PeriodicTable;
