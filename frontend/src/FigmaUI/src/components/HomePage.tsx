import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Atom, BeakerIcon, FlaskConical } from 'lucide-react';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="mx-auto mb-6 w-20 h-20 text-blue-600"
        >
          <Atom className="w-full h-full" />
        </motion.div>
        
        <h1 className="mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
          Interactive Periodic Table
        </h1>
        
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Explore the fascinating world of chemistry with our interactive periodic table. 
          Discover the properties, history, and relationships between all 118 elements.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl w-full"
      >
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <BeakerIcon className="w-12 h-12 mx-auto text-green-600 mb-2" />
            <CardTitle>118 Elements</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Complete periodic table with all discovered elements and their properties
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <FlaskConical className="w-12 h-12 mx-auto text-purple-600 mb-2" />
            <CardTitle>Interactive Design</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Hover and click elements to explore detailed information and relationships
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <Atom className="w-12 h-12 mx-auto text-blue-600 mb-2" />
            <CardTitle>Color Coded</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Elements grouped by type with standard chemistry colors for easy identification
            </CardDescription>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Button
          onClick={() => navigate('/periodic-table')}
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
        >
          Explore Periodic Table
        </Button>
      </motion.div>
    </div>
  );
}