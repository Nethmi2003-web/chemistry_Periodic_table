import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Target, 
  Trophy, 
  Brain, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw,
  Search,
  CheckCircle,
  XCircle,
  Sparkles,
  Atom,
  Zap,
  TrendingUp,
  Users,
  Clock,
  Star,
  Lightbulb,
  Flame,
  FlaskConical
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'

const StudyGuide = () => {
  const [currentFlashcard, setCurrentFlashcard] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [currentQuiz, setCurrentQuiz] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showQuizResult, setShowQuizResult] = useState(false)
  const [quizScore, setQuizScore] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [studyStreak, setStudyStreak] = useState(7)
  const [totalPoints, setTotalPoints] = useState(142)

  const flashcards = [
    { symbol: "H", name: "Hydrogen", atomicNumber: 1, atomicMass: "1.008", category: "Nonmetal", color: "from-blue-400 to-cyan-400" },
    { symbol: "He", name: "Helium", atomicNumber: 2, atomicMass: "4.003", category: "Noble Gas", color: "from-purple-400 to-pink-400" },
    { symbol: "Li", name: "Lithium", atomicNumber: 3, atomicMass: "6.941", category: "Alkali Metal", color: "from-red-400 to-orange-400" },
    { symbol: "Be", name: "Beryllium", atomicNumber: 4, atomicMass: "9.012", category: "Alkaline Earth Metal", color: "from-green-400 to-emerald-400" },
    { symbol: "B", name: "Boron", atomicNumber: 5, atomicMass: "10.811", category: "Metalloid", color: "from-yellow-400 to-amber-400" },
    { symbol: "C", name: "Carbon", atomicNumber: 6, atomicMass: "12.011", category: "Nonmetal", color: "from-gray-400 to-slate-400" },
    { symbol: "N", name: "Nitrogen", atomicNumber: 7, atomicMass: "14.007", category: "Nonmetal", color: "from-blue-400 to-indigo-400" },
    { symbol: "O", name: "Oxygen", atomicNumber: 8, atomicMass: "15.999", category: "Nonmetal", color: "from-red-400 to-rose-400" },
  ]

  const quizQuestions = [
    {
      question: "What is the atomic number of Carbon?",
      options: ["4", "6", "8", "12"],
      correct: 1,
      explanation: "Carbon has 6 protons, making its atomic number 6."
    },
    {
      question: "Which element has the symbol 'Au'?",
      options: ["Silver", "Gold", "Aluminum", "Argon"],
      correct: 1,
      explanation: "Au comes from the Latin word 'aurum', meaning gold."
    },
    {
      question: "What is the most abundant element in the universe?",
      options: ["Oxygen", "Carbon", "Hydrogen", "Helium"],
      correct: 2,
      explanation: "Hydrogen makes up about 75% of all matter in the universe."
    },
    {
      question: "Which group contains the noble gases?",
      options: ["Group 1", "Group 17", "Group 18", "Group 2"],
      correct: 2,
      explanation: "Group 18 contains the noble gases like Helium, Neon, and Argon."
    }
  ]

  const elements = [
    { symbol: "H", name: "Hydrogen", atomicNumber: 1, category: "Nonmetal", period: 1, group: 1 },
    { symbol: "He", name: "Helium", atomicNumber: 2, category: "Noble Gas", period: 1, group: 18 },
    { symbol: "Li", name: "Lithium", atomicNumber: 3, category: "Alkali Metal", period: 2, group: 1 },
    { symbol: "Be", name: "Beryllium", atomicNumber: 4, category: "Alkaline Earth Metal", period: 2, group: 2 },
    { symbol: "B", name: "Boron", atomicNumber: 5, category: "Metalloid", period: 2, group: 13 },
    { symbol: "C", name: "Carbon", atomicNumber: 6, category: "Nonmetal", period: 2, group: 14 },
    { symbol: "N", name: "Nitrogen", atomicNumber: 7, category: "Nonmetal", period: 2, group: 15 },
    { symbol: "O", name: "Oxygen", atomicNumber: 8, category: "Nonmetal", period: 2, group: 16 },
    { symbol: "F", name: "Fluorine", atomicNumber: 9, category: "Halogen", period: 2, group: 17 },
    { symbol: "Ne", name: "Neon", atomicNumber: 10, category: "Noble Gas", period: 2, group: 18 },
  ]

  const trends = [
    {
      name: "Atomic Radius",
      description: "Decreases across a period, increases down a group",
      example: "Li > Na > K (down group 1), Li > Be > B (across period 2)",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Ionization Energy",
      description: "Increases across a period, decreases down a group",
      example: "He has highest, Cs has lowest",
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Electronegativity",
      description: "Increases across a period, decreases down a group",
      example: "F is most electronegative (4.0), Cs is least (0.7)",
      icon: Atom,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Metallic Character",
      description: "Decreases across a period, increases down a group",
      example: "Metals on left, nonmetals on right",
      icon: Sparkles,
      color: "from-green-500 to-emerald-500"
    }
  ]

  const categoryColors = {
    "Alkali Metal": "bg-red-100 text-red-800 border-red-200",
    "Alkaline Earth Metal": "bg-orange-100 text-orange-800 border-orange-200",
    "Transition Metal": "bg-blue-100 text-blue-800 border-blue-200",
    "Metalloid": "bg-purple-100 text-purple-800 border-purple-200",
    "Nonmetal": "bg-green-100 text-green-800 border-green-200",
    "Halogen": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "Noble Gas": "bg-indigo-100 text-indigo-800 border-indigo-200",
  }

  const filteredElements = elements.filter(element =>
    element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    element.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    element.atomicNumber.toString().includes(searchTerm) ||
    element.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const nextFlashcard = () => {
    setCurrentFlashcard((prev) => (prev + 1) % flashcards.length)
    setShowAnswer(false)
  }

  const prevFlashcard = () => {
    setCurrentFlashcard((prev) => (prev - 1 + flashcards.length) % flashcards.length)
    setShowAnswer(false)
  }

  const handleQuizAnswer = () => {
    if (selectedAnswer === '') return
    setShowQuizResult(true)
    if (selectedAnswer === quizQuestions[currentQuiz].correct.toString()) {
      setQuizScore(prev => prev + 1)
    }
  }

  const nextQuizQuestion = () => {
    if (currentQuiz < quizQuestions.length - 1) {
      setCurrentQuiz(prev => prev + 1)
      setSelectedAnswer('')
      setShowQuizResult(false)
    }
  }

  const resetQuiz = () => {
    setCurrentQuiz(0)
    setSelectedAnswer('')
    setShowQuizResult(false)
    setQuizScore(0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Header */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-16"
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
                <BookOpen className="w-10 h-10 text-blue-300" />
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Chemistry Study Center
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-blue-100 mb-8 leading-relaxed"
            >
              Master the periodic table with interactive flashcards, quizzes, and comprehensive reference materials
            </motion.p>

            {/* Study Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{studyStreak}</div>
                <div className="text-sm text-blue-200 flex items-center justify-center">
                  <Flame className="w-4 h-4 mr-1" />
                  Day Streak
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{totalPoints}</div>
                <div className="text-sm text-blue-200 flex items-center justify-center">
                  <Star className="w-4 h-4 mr-1" />
                  Total Points
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">85%</div>
                <div className="text-sm text-blue-200 flex items-center justify-center">
                  <Target className="w-4 h-4 mr-1" />
                  Quiz Accuracy
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/118</div>
                <div className="text-sm text-blue-200 flex items-center justify-center">
                  <FlaskConical className="w-4 h-4 mr-1" />
                  Elements Learned
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-purple-400/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 bg-indigo-300/20 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
      </motion.section>

      {/* Study Methods Cards */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <Card className="relative bg-white/90 backdrop-blur-sm border-white/20 p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Learn</h3>
              <p className="text-gray-600">Study element properties and periodic trends with interactive content</p>
            </Card>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <Card className="relative bg-white/90 backdrop-blur-sm border-white/20 p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Practice</h3>
              <p className="text-gray-600">Test your knowledge with interactive quizzes and challenges</p>
            </Card>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <Card className="relative bg-white/90 backdrop-blur-sm border-white/20 p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Master</h3>
              <p className="text-gray-600">Track progress and earn achievements as you learn</p>
            </Card>
          </motion.div>
        </div>

        {/* Main Study Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Interactive Flashcards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-8 bg-white/90 backdrop-blur-sm border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-yellow-500" />
                    Element Flashcards
                  </CardTitle>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {currentFlashcard + 1} of {flashcards.length}
                  </span>
                </div>

                <div className="mb-8">
                  <motion.div
                    key={currentFlashcard}
                    initial={{ rotateY: 180, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className={`relative h-64 rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-2xl bg-gradient-to-br ${flashcards[currentFlashcard].color} flex items-center justify-center overflow-hidden`}
                    onClick={() => setShowAnswer(!showAnswer)}
                  >
                    {/* Card glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                    
                    {!showAnswer ? (
                      <div className="text-center text-white relative z-10">
                        <motion.div 
                          className="text-8xl font-bold mb-4"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {flashcards[currentFlashcard].symbol}
                        </motion.div>
                        <div className="text-lg opacity-80">Click to reveal details</div>
                      </div>
                    ) : (
                      <div className="text-center text-white relative z-10">
                        <h3 className="text-3xl font-bold mb-4">{flashcards[currentFlashcard].name}</h3>
                        <div className="space-y-2 text-lg">
                          <p>Atomic Number: <span className="font-semibold">{flashcards[currentFlashcard].atomicNumber}</span></p>
                          <p>Atomic Mass: <span className="font-semibold">{flashcards[currentFlashcard].atomicMass}</span></p>
                          <Badge className="bg-white/20 text-white border-white/30 mt-3">
                            {flashcards[currentFlashcard].category}
                          </Badge>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>

                <div className="flex items-center justify-between">
                  <Button variant="outline" onClick={prevFlashcard} className="flex items-center gap-2">
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </Button>
                  
                  <Button variant="outline" onClick={() => setShowAnswer(!showAnswer)} className="flex items-center gap-2">
                    <RotateCcw className="w-4 h-4" />
                    Flip Card
                  </Button>
                  
                  <Button variant="outline" onClick={nextFlashcard} className="flex items-center gap-2">
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Interactive Quiz */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="p-8 bg-white/90 backdrop-blur-sm border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <Brain className="w-6 h-6 text-purple-500" />
                    Chemistry Quiz
                  </CardTitle>
                  <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    Score: {quizScore}/{currentQuiz + (showQuizResult ? 1 : 0)} | Question {currentQuiz + 1}/{quizQuestions.length}
                  </div>
                </div>

                {currentQuiz < quizQuestions.length && (
                  <>
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold mb-6">{quizQuestions[currentQuiz].question}</h4>
                      
                      <div className="space-y-3">
                        {quizQuestions[currentQuiz].options.map((option, index) => (
                          <motion.label
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            className={`flex items-center p-4 rounded-xl cursor-pointer transition-all duration-200 border-2 ${
                              showQuizResult 
                                ? index === quizQuestions[currentQuiz].correct 
                                  ? 'bg-green-50 border-green-300 text-green-800'
                                  : selectedAnswer === index.toString() && selectedAnswer !== quizQuestions[currentQuiz].correct.toString()
                                  ? 'bg-red-50 border-red-300 text-red-800'
                                  : 'bg-gray-50 border-gray-200'
                                : selectedAnswer === index.toString()
                                ? 'bg-blue-50 border-blue-300'
                                : 'bg-gray-50 border-gray-200 hover:bg-blue-25 hover:border-blue-200'
                            }`}
                          >
                            <input
                              type="radio"
                              name="quiz-answer"
                              value={index}
                              checked={selectedAnswer === index.toString()}
                              onChange={(e) => setSelectedAnswer(e.target.value)}
                              disabled={showQuizResult}
                              className="mr-3"
                            />
                            <span className="flex-1">{option}</span>
                            {showQuizResult && index === quizQuestions[currentQuiz].correct && (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            )}
                            {showQuizResult && selectedAnswer === index.toString() && selectedAnswer !== quizQuestions[currentQuiz].correct.toString() && (
                              <XCircle className="w-5 h-5 text-red-600" />
                            )}
                          </motion.label>
                        ))}
                      </div>
                    </div>

                    {showQuizResult && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 p-4 rounded-xl bg-blue-50 border border-blue-200"
                      >
                        <p className="text-blue-800">
                          <strong>Explanation:</strong> {quizQuestions[currentQuiz].explanation}
                        </p>
                      </motion.div>
                    )}

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={resetQuiz} className="flex items-center gap-2">
                        <RotateCcw className="w-4 h-4" />
                        Reset Quiz
                      </Button>
                      
                      {!showQuizResult ? (
                        <Button 
                          onClick={handleQuizAnswer} 
                          disabled={selectedAnswer === ""}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        >
                          Submit Answer
                        </Button>
                      ) : currentQuiz < quizQuestions.length - 1 ? (
                        <Button onClick={nextQuizQuestion} className="bg-gradient-to-r from-blue-600 to-purple-600">
                          Next Question
                        </Button>
                      ) : (
                        <div className="text-center">
                          <div className="text-4xl mb-2">
                            {quizScore === quizQuestions.length ? "🏆" : quizScore >= quizQuestions.length * 0.7 ? "🎉" : "📚"}
                          </div>
                          <p className="text-lg font-semibold mb-4">
                            Quiz Complete! You scored {quizScore}/{quizQuestions.length}
                          </p>
                          <Button onClick={resetQuiz} className="bg-gradient-to-r from-green-600 to-emerald-600">
                            Take Quiz Again
                          </Button>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </Card>
            </motion.div>

            {/* Element Search */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="p-8 bg-white/90 backdrop-blur-sm border-white/20">
                <CardTitle className="text-2xl font-bold flex items-center gap-2 mb-6">
                  <Search className="w-6 h-6 text-green-500" />
                  Element Search
                </CardTitle>

                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Search by name, symbol, atomic number, or category..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 py-3 rounded-xl border-2 focus:border-blue-400"
                  />
                </div>

                <div className="grid gap-4 max-h-96 overflow-y-auto">
                  {filteredElements.length > 0 ? (
                    filteredElements.map((element) => (
                      <motion.div
                        key={element.symbol}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                        className="p-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 bg-white"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl flex items-center justify-center font-bold">
                              {element.symbol}
                            </div>
                            <div>
                              <h4 className="font-semibold text-lg">{element.name}</h4>
                              <p className="text-sm text-gray-600">
                                Atomic: {element.atomicNumber} | Period: {element.period} | Group: {element.group}
                              </p>
                            </div>
                          </div>
                          <Badge className={`${categoryColors[element.category]} border`}>
                            {element.category}
                          </Badge>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>No elements found matching "{searchTerm}"</p>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            {/* Study Progress */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-6 bg-white/90 backdrop-blur-sm border-white/20">
                <CardTitle className="text-xl font-bold flex items-center gap-2 mb-6">
                  <Award className="w-5 h-5 text-purple-500" />
                  Study Progress
                </CardTitle>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-medium">Elements Learned</span>
                      </div>
                      <span className="text-sm text-gray-600">24/118</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '20%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Keep studying to unlock more elements!</p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Brain className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-medium">Quiz Accuracy</span>
                      </div>
                      <span className="text-sm text-gray-600">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ duration: 1, delay: 0.7 }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Excellent work! You're getting most questions right.</p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-orange-500" />
                        <span className="text-sm font-medium">Daily Goal</span>
                      </div>
                      <span className="text-sm text-gray-600">3/5 activities</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '60%' }}
                        transition={{ duration: 1, delay: 0.9 }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Complete 2 more activities to reach your goal.</p>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      Recent Achievements
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-green-100 text-green-800 border-green-200">First Quiz ✅</Badge>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">10 Elements 🧪</Badge>
                      <Badge className="bg-gray-100 text-gray-600 border-gray-200">Perfect Score 🎯</Badge>
                      <Badge className="bg-orange-100 text-orange-800 border-orange-200">Study Streak 🔥</Badge>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-orange-500">{studyStreak}</div>
                        <div className="text-xs text-gray-500">Days Streak</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-500">{totalPoints}</div>
                        <div className="text-xs text-gray-500">Total Points</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Periodic Trends Reference */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="p-6 bg-white/90 backdrop-blur-sm border-white/20">
                <CardTitle className="text-xl font-bold flex items-center gap-2 mb-6">
                  <TrendingUp className="w-5 h-5 text-indigo-500" />
                  Periodic Trends
                </CardTitle>

                <div className="space-y-4">
                  {trends.map((trend, index) => (
                    <motion.div
                      key={trend.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${trend.color} flex items-center justify-center flex-shrink-0`}>
                          <trend.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-1">{trend.name}</h4>
                          <p className="text-xs text-gray-600 mb-2">{trend.description}</p>
                          <p className="text-xs text-gray-500">
                            <strong>Example:</strong> {trend.example}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default StudyGuide
