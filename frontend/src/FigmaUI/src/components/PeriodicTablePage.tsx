import { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { elements, Element, elementCategories } from '../data/elements';
import { ElementCard } from './ElementCard';
import { ElementDetails } from './ElementDetails';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft } from 'lucide-react';

export function PeriodicTablePage() {
  const navigate = useNavigate();
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  // Create a grid layout for the periodic table
  const getGridPosition = (element: Element) => {
    // Handle lanthanides and actinides separately
    if (element.category === 'lanthanide') {
      return {
        gridColumn: element.number - 54, // Adjust for lanthanide series
        gridRow: 8
      };
    }
    if (element.category === 'actinide') {
      return {
        gridColumn: element.number - 86, // Adjust for actinide series
        gridRow: 9
      };
    }
    
    return {
      gridColumn: element.group,
      gridRow: element.period
    };
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <div>
              <h1>Periodic Table of Elements</h1>
              <p className="text-muted-foreground">Click on any element to explore its properties</p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Element Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {Object.entries(elementCategories).map(([key, category]) => (
                <Badge
                  key={key}
                  variant="outline"
                  className="px-3 py-1"
                  style={{
                    backgroundColor: category.color + '20',
                    borderColor: category.color,
                    color: category.color
                  }}
                >
                  {category.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Periodic Table */}
        <div className="mb-8">
          <motion.div 
            className="grid gap-1 max-w-fit mx-auto"
            style={{
              gridTemplateColumns: 'repeat(18, minmax(80px, 1fr))',
              gridTemplateRows: 'repeat(7, auto)'
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
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Lanthanides and Actinides */}
        <div className="space-y-6">
          {/* Lanthanides */}
          <div>
            <h3 className="mb-3 text-center">Lanthanides</h3>
            <motion.div 
              className="grid gap-1 max-w-fit mx-auto"
              style={{
                gridTemplateColumns: 'repeat(15, minmax(80px, 1fr))'
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
                />
              ))}
            </motion.div>
          </div>

          {/* Actinides */}
          <div>
            <h3 className="mb-3 text-center">Actinides</h3>
            <motion.div 
              className="grid gap-1 max-w-fit mx-auto"
              style={{
                gridTemplateColumns: 'repeat(15, minmax(80px, 1fr))'
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
                />
              ))}
            </motion.div>
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
}