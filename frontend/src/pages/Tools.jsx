import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calculator, 
  Beaker, 
  Atom, 
  Thermometer, 
  Zap,
  BookOpen,
  Target,
  Lightbulb,
  TestTube,
  Microscope,
  TrendingUp,
  BarChart3,
  Gauge,
  Layers,
  Sparkles,
  ChevronRight,
  Star,
  Clock,
  Users,
  Award
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs'
import ToolsWindow from '../components/ToolsWindow'

const Tools = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [showToolsWindow, setShowToolsWindow] = useState(false)

  const toolCategories = [
    { id: 'all', name: 'All Tools', icon: Sparkles, count: 24 },
    { id: 'calculators', name: 'Calculators', icon: Calculator, count: 8 },
    { id: 'converters', name: 'Converters', icon: Zap, count: 6 },
    { id: 'references', name: 'References', icon: BookOpen, count: 5 },
    { id: 'analysis', name: 'Analysis', icon: BarChart3, count: 5 }
  ]

  const featuredTools = [
    {
      id: 'molarity',
      title: 'Molarity Calculator',
      description: 'Calculate molarity from moles and volume with step-by-step solutions',
      icon: Beaker,
      category: 'calculators',
      difficulty: 'Beginner',
      usage: '15k+ uses',
      rating: 4.9,
      features: ['Real-time calculation', 'Step-by-step guide', 'Unit conversion']
    },
    {
      id: 'gas-laws',
      title: 'Gas Law Calculator',
      description: 'Solve ideal gas law problems with PV=nRT calculations',
      icon: Gauge,
      category: 'calculators',
      difficulty: 'Intermediate',
      usage: '12k+ uses',
      rating: 4.8,
      features: ['Multiple gas laws', 'Interactive graphs', 'Problem solver']
    },
    {
      id: 'temperature',
      title: 'Temperature Converter',
      description: 'Convert between Celsius, Fahrenheit, and Kelvin instantly',
      icon: Thermometer,
      category: 'converters',
      difficulty: 'Beginner',
      usage: '25k+ uses',
      rating: 5.0,
      features: ['Instant conversion', 'Multiple scales', 'Scientific precision']
    },
    {
      id: 'periodic-trends',
      title: 'Periodic Trends',
      description: 'Explore atomic radius, ionization energy, and electronegativity trends',
      icon: TrendingUp,
      category: 'references',
      difficulty: 'Advanced',
      usage: '8k+ uses',
      rating: 4.7,
      features: ['Interactive charts', 'Trend analysis', 'Element comparison']
    },
    {
      id: 'equation-balancer',
      title: 'Equation Balancer',
      description: 'Balance chemical equations automatically with detailed explanations',
      icon: Layers,
      category: 'analysis',
      difficulty: 'Intermediate',
      usage: '18k+ uses',
      rating: 4.9,
      features: ['Auto-balancing', 'Step explanation', 'Reaction types']
    },
    {
      id: 'electron-config',
      title: 'Electron Configuration',
      description: 'Generate electron configurations for any element',
      icon: Atom,
      category: 'analysis',
      difficulty: 'Intermediate',
      usage: '10k+ uses',
      rating: 4.6,
      features: ['Visual orbitals', 'Noble gas notation', 'Quantum numbers']
    }
  ]

  const quickActions = [
    {
      title: 'Launch Calculator Suite',
      description: 'Access all chemistry calculators in one place',
      icon: Calculator,
      color: 'from-blue-500 to-blue-600',
      action: () => setShowToolsWindow(true)
    },
    {
      title: 'Periodic Table Explorer',
      description: 'Interactive periodic table with element details',
      icon: Atom,
      color: 'from-purple-500 to-purple-600',
      action: () => window.location.href = '/periodic-table'
    },
    {
      title: 'Study Resources',
      description: 'Comprehensive chemistry study materials',
      icon: BookOpen,
      color: 'from-green-500 to-green-600',
      action: () => console.log('Study resources')
    },
    {
      title: 'Lab Simulations',
      description: 'Virtual chemistry laboratory experiments',
      icon: TestTube,
      color: 'from-orange-500 to-orange-600',
      action: () => console.log('Lab simulations')
    }
  ]

  const stats = [
    { label: 'Active Users', value: '50K+', icon: Users, color: 'text-blue-600' },
    { label: 'Tools Available', value: '24', icon: Calculator, color: 'text-purple-600' },
    { label: 'Problems Solved', value: '1M+', icon: Target, color: 'text-green-600' },
    { label: 'Success Rate', value: '98%', icon: Award, color: 'text-orange-600' }
  ]

  const filteredTools = activeCategory === 'all' 
    ? featuredTools 
    : featuredTools.filter(tool => tool.category === activeCategory)

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (showToolsWindow) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <ToolsWindow onClose={() => setShowToolsWindow(false)} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white py-20"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3Ccircle cx='53' cy='7' r='7'/%3E%3Ccircle cx='7' cy='53' r='7'/%3E%3Ccircle cx='53' cy='53' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                <Calculator className="w-10 h-10 text-blue-300" />
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Chemistry <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Tools Suite</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-blue-100 mb-8 leading-relaxed"
            >
              Professional-grade chemistry calculators, converters, and analysis tools. 
              Trusted by students, educators, and researchers worldwide.
            </motion.p>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Quick Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {quickActions.map((action, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={action.action}
                  className={`bg-gradient-to-br ${action.color} p-6 rounded-2xl text-left hover:shadow-xl transition-all duration-300`}
                >
                  <action.icon className="w-8 h-8 text-white mb-3" />
                  <h3 className="font-semibold text-white mb-2">{action.title}</h3>
                  <p className="text-sm text-white/80">{action.description}</p>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-purple-400/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 bg-blue-300/20 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
      </motion.section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore Tools by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {toolCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeCategory === category.id ? 'bg-white/20' : 'bg-gray-100'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Featured Tools Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <tool.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{tool.title}</CardTitle>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(tool.difficulty)}`}>
                              {tool.difficulty}
                            </span>
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3 text-yellow-500 fill-current" />
                              <span className="text-xs text-gray-600">{tool.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="mt-3">{tool.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{tool.usage}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>Updated recently</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-700">Key Features:</h4>
                        <ul className="space-y-1">
                          {tool.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                              <ChevronRight className="w-3 h-3 text-green-500" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowToolsWindow(true)}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>Launch Tool</span>
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Additional Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Chemistry Tools?</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Built by chemistry educators and used by thousands of students worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Accurate & Reliable</h3>
                <p className="text-gray-600">All calculations verified by chemistry professionals and extensively tested</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Educational Focus</h3>
                <p className="text-gray-600">Step-by-step explanations help you understand the concepts behind calculations</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Always Updated</h3>
                <p className="text-gray-600">Regular updates with new tools and improved functionality based on user feedback</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Tools
