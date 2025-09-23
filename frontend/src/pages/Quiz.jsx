import { useState, useEffect } from "react";
import { ArrowRight, Play, Trophy, RotateCcw, Target, TrendingUp, Clock, CheckCircle, XCircle, Star, Zap, Brain, Award, BookOpen, Sparkles } from "lucide-react";

// Quiz data
const periodicTableQuiz = [
  {
    id: "1",
    question: "What is the chemical symbol for Gold?",
    options: [
      { id: "a", text: "Go", isCorrect: false },
      { id: "b", text: "Au", isCorrect: true },
      { id: "c", text: "Ag", isCorrect: false },
      { id: "d", text: "Gd", isCorrect: false }
    ],
    explanation: "Gold's symbol Au comes from its Latin name 'aurum'."
  },
  {
    id: "2",
    question: "Which element has the atomic number 1?",
    options: [
      { id: "a", text: "Helium", isCorrect: false },
      { id: "b", text: "Hydrogen", isCorrect: true },
      { id: "c", text: "Lithium", isCorrect: false },
      { id: "d", text: "Carbon", isCorrect: false }
    ],
    explanation: "Hydrogen is the first element on the periodic table with one proton."
  },
  {
    id: "3",
    question: "What is the most abundant element in Earth's atmosphere?",
    options: [
      { id: "a", text: "Oxygen", isCorrect: false },
      { id: "b", text: "Carbon Dioxide", isCorrect: false },
      { id: "c", text: "Nitrogen", isCorrect: true },
      { id: "d", text: "Argon", isCorrect: false }
    ],
    explanation: "Nitrogen makes up about 78% of Earth's atmosphere."
  },
  {
    id: "4",
    question: "Which group do the Noble Gases belong to?",
    options: [
      { id: "a", text: "Group 17", isCorrect: false },
      { id: "b", text: "Group 18", isCorrect: true },
      { id: "c", text: "Group 1", isCorrect: false },
      { id: "d", text: "Group 2", isCorrect: false }
    ],
    explanation: "Noble gases are in Group 18 and are chemically inert under normal conditions."
  },
  {
    id: "5",
    question: "What is the heaviest naturally occurring element?",
    options: [
      { id: "a", text: "Plutonium", isCorrect: false },
      { id: "b", text: "Uranium", isCorrect: true },
      { id: "c", text: "Lead", isCorrect: false },
      { id: "d", text: "Radium", isCorrect: false }
    ],
    explanation: "Uranium (atomic number 92) is the heaviest element found naturally on Earth."
  },
  {
    id: "6",
    question: "Which element is known as the 'King of Chemicals'?",
    options: [
      { id: "a", text: "Hydrogen", isCorrect: false },
      { id: "b", text: "Oxygen", isCorrect: false },
      { id: "c", text: "Sulfuric Acid", isCorrect: false },
      { id: "d", text: "Sulfur", isCorrect: true }
    ],
    explanation: "Sulfur is called the 'King of Chemicals' due to its importance in chemical industry."
  },
  {
    id: "7",
    question: "What is the chemical symbol for Silver?",
    options: [
      { id: "a", text: "Si", isCorrect: false },
      { id: "b", text: "Ag", isCorrect: true },
      { id: "c", text: "Au", isCorrect: false },
      { id: "d", text: "S", isCorrect: false }
    ],
    explanation: "Silver's symbol Ag comes from its Latin name 'argentum'."
  },
  {
    id: "8",
    question: "How many periods are there in the modern periodic table?",
    options: [
      { id: "a", text: "6", isCorrect: false },
      { id: "b", text: "7", isCorrect: true },
      { id: "c", text: "8", isCorrect: false },
      { id: "d", text: "9", isCorrect: false }
    ],
    explanation: "The modern periodic table has 7 periods (horizontal rows)."
  },
  {
    id: "9",
    question: "Which element has the highest electronegativity?",
    options: [
      { id: "a", text: "Oxygen", isCorrect: false },
      { id: "b", text: "Fluorine", isCorrect: true },
      { id: "c", text: "Chlorine", isCorrect: false },
      { id: "d", text: "Nitrogen", isCorrect: false }
    ],
    explanation: "Fluorine has the highest electronegativity value of 4.0 on the Pauling scale."
  },
  {
    id: "10",
    question: "What is the atomic number of Carbon?",
    options: [
      { id: "a", text: "4", isCorrect: false },
      { id: "b", text: "6", isCorrect: true },
      { id: "c", text: "8", isCorrect: false },
      { id: "d", text: "12", isCorrect: false }
    ],
    explanation: "Carbon has 6 protons in its nucleus, giving it an atomic number of 6."
  }
];

// Quiz Header Component
function QuizHeader({ currentQuestion, totalQuestions, score, timeRemaining }) {
  const progress = (currentQuestion / totalQuestions) * 100;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-xl">Periodic Table Quiz</h1>
              <p className="text-blue-100 text-sm">Test your chemistry knowledge</p>
            </div>
          </div>
          {timeRemaining !== undefined && (
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
              <Clock className="w-5 h-5" />
              <span className={`font-mono text-lg font-bold ${timeRemaining < 60 ? 'text-red-200' : ''}`}>
                {formatTime(timeRemaining)}
              </span>
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">
              Question {currentQuestion} of {totalQuestions}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-bold text-gray-800">
              Score: {score}/{totalQuestions}
            </span>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Question Card Component
function QuestionCard({ question, options, selectedAnswer, showResult, onSelectAnswer }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 space-y-8 border border-gray-100">
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-md">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-semibold leading-relaxed text-gray-900 flex-1">{question}</h2>
        </div>
        
        <div className="grid gap-4">
          {options.map((option, index) => {
            const isSelected = selectedAnswer === option.id;
            const isCorrect = option.isCorrect;
            
            let buttonClass = "w-full p-5 text-left rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02] ";
            let showIcon = false;
            let iconColor = "";
            let optionLabel = String.fromCharCode(65 + index); // A, B, C, D
            
            if (showResult) {
              if (isCorrect) {
                buttonClass += "border-green-500 bg-gradient-to-r from-green-50 to-green-100 text-green-900 shadow-green-200 shadow-lg";
                iconColor = "text-green-600";
                showIcon = true;
              } else if (isSelected && !isCorrect) {
                buttonClass += "border-red-500 bg-gradient-to-r from-red-50 to-red-100 text-red-900 shadow-red-200 shadow-lg";
                iconColor = "text-red-600";
                showIcon = true;
              } else {
                buttonClass += "border-gray-200 bg-gray-50 text-gray-600";
              }
            } else if (isSelected) {
              buttonClass += "border-blue-500 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-900 shadow-blue-200 shadow-lg";
            } else {
              buttonClass += "border-gray-200 bg-white text-gray-900 hover:border-blue-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-md";
            }
            
            return (
              <button
                key={option.id}
                className={buttonClass}
                onClick={() => !showResult && onSelectAnswer(option.id)}
                disabled={showResult}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      showResult 
                        ? isCorrect 
                          ? 'bg-green-500 text-white' 
                          : isSelected 
                            ? 'bg-red-500 text-white' 
                            : 'bg-gray-300 text-gray-600'
                        : isSelected 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-200 text-gray-600'
                    }`}>
                      {optionLabel}
                    </div>
                    <span className="flex-1 text-lg">{option.text}</span>
                  </div>
                  {showResult && showIcon && (
                    <div className="ml-4">
                      {isCorrect ? (
                        <CheckCircle className={`w-6 h-6 ${iconColor} animate-bounce`} />
                      ) : isSelected ? (
                        <XCircle className={`w-6 h-6 ${iconColor} animate-bounce`} />
                      ) : null}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Quiz Results Component
function QuizResults({ score, totalQuestions, timeSpent, onRestart }) {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getGrade = (percent) => {
    if (percent >= 90) return { 
      grade: 'A+', 
      color: 'text-green-600', 
      bgColor: 'from-green-500 to-emerald-600',
      message: 'Outstanding! You\'re a chemistry genius!',
      icon: Sparkles
    };
    if (percent >= 80) return { 
      grade: 'A', 
      color: 'text-green-500', 
      bgColor: 'from-green-400 to-green-600',
      message: 'Excellent work! You know your chemistry!',
      icon: Award
    };
    if (percent >= 70) return { 
      grade: 'B', 
      color: 'text-blue-500', 
      bgColor: 'from-blue-400 to-blue-600',
      message: 'Good job! Keep up the great work!',
      icon: TrendingUp
    };
    if (percent >= 60) return { 
      grade: 'C', 
      color: 'text-yellow-500', 
      bgColor: 'from-yellow-400 to-orange-500',
      message: 'Not bad! A little more study will help!',
      icon: Target
    };
    return { 
      grade: 'D', 
      color: 'text-red-500', 
      bgColor: 'from-red-400 to-red-600',
      message: 'Keep studying! You can do better!',
      icon: BookOpen
    };
  };

  const { grade, color, bgColor, message, icon: GradeIcon } = getGrade(percentage);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Main Results Card */}
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 text-center space-y-8 border border-gray-200">
        <div className="space-y-6">
          <div className={`mx-auto w-24 h-24 bg-gradient-to-br ${bgColor} rounded-full flex items-center justify-center shadow-lg animate-pulse`}>
            <Trophy className="w-12 h-12 text-white" />
          </div>
          
          <div className="space-y-3">
            <h2 className="text-4xl font-bold text-gray-900">Quiz Complete!</h2>
            <div className="flex items-center justify-center gap-2">
              <GradeIcon className={`w-6 h-6 ${color}`} />
              <p className="text-xl text-gray-700 font-medium">{message}</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Target className="w-6 h-6 text-blue-600" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Score</span>
            </div>
            <div className="space-y-1">
              <div className={`text-4xl font-bold ${color}`}>{score}/{totalQuestions}</div>
              <div className={`text-xl font-semibold ${color}`}>{percentage}%</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center justify-center gap-2 mb-3">
              <TrendingUp className="w-6 h-6 text-purple-600" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Grade</span>
            </div>
            <div className={`text-5xl font-bold ${color} animate-bounce`}>{grade}</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Clock className="w-6 h-6 text-green-600" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Time</span>
            </div>
            <div className="text-3xl font-bold text-gray-800">
              {formatTime(timeSpent)}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-6 border-t border-gray-200">
          <button 
            onClick={onRestart}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold text-lg"
          >
            <RotateCcw className="w-5 h-5" />
            Try Again
          </button>
        </div>
      </div>

      {/* Performance Breakdown */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Performance Breakdown</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl border border-green-200">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium text-gray-700">Correct Answers</span>
              </div>
              <span className="font-bold text-2xl text-green-600">{score}</span>
            </div>
            
            <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl border border-red-200">
              <div className="flex items-center gap-3">
                <XCircle className="w-5 h-5 text-red-600" />
                <span className="font-medium text-gray-700">Incorrect Answers</span>
              </div>
              <span className="font-bold text-2xl text-red-600">{totalQuestions - score}</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-gray-700">Accuracy Rate</span>
              </div>
              <span className="font-bold text-2xl text-blue-600">{percentage}%</span>
            </div>
            
            <div className="flex justify-between items-center p-4 bg-purple-50 rounded-xl border border-purple-200">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-gray-700">Time per Question</span>
              </div>
              <span className="font-bold text-2xl text-purple-600">{formatTime(Math.round(timeSpent / totalQuestions))}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Quiz Component
export default function Quiz() {
  const [quizState, setQuizState] = useState({
    currentQuestionIndex: 0,
    selectedAnswers: {},
    showResult: false,
    isCompleted: false,
    score: 0,
    startTime: 0,
    timeSpent: 0
  });

  const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes
  const [quizStarted, setQuizStarted] = useState(false);

  const currentQuestion = periodicTableQuiz[quizState.currentQuestionIndex];
  const isLastQuestion = quizState.currentQuestionIndex === periodicTableQuiz.length - 1;

  // Timer effect
  useEffect(() => {
    if (!quizStarted || quizState.isCompleted) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          completeQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizStarted, quizState.isCompleted]);

  const startQuiz = () => {
    setQuizStarted(true);
    setQuizState(prev => ({ ...prev, startTime: Date.now() }));
  };

  const selectAnswer = (optionId) => {
    setQuizState(prev => ({
      ...prev,
      selectedAnswers: {
        ...prev.selectedAnswers,
        [currentQuestion.id]: optionId
      }
    }));
  };

  const showQuestionResult = () => {
    setQuizState(prev => ({ ...prev, showResult: true }));
  };

  const nextQuestion = () => {
    if (isLastQuestion) {
      completeQuiz();
    } else {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        showResult: false
      }));
    }
  };

  const completeQuiz = () => {
    const score = calculateScore();
    const timeSpent = Math.floor((Date.now() - quizState.startTime) / 1000);
    
    setQuizState(prev => ({
      ...prev,
      isCompleted: true,
      score,
      timeSpent
    }));
  };

  const calculateScore = () => {
    return periodicTableQuiz.reduce((score, question) => {
      const selectedOptionId = quizState.selectedAnswers[question.id];
      const correctOption = question.options.find(opt => opt.isCorrect);
      return selectedOptionId === correctOption?.id ? score + 1 : score;
    }, 0);
  };

  const restartQuiz = () => {
    setQuizState({
      currentQuestionIndex: 0,
      selectedAnswers: {},
      showResult: false,
      isCompleted: false,
      score: 0,
      startTime: 0,
      timeSpent: 0
    });
    setTimeRemaining(600);
    setQuizStarted(false);
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          {/* Hero Section */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center space-y-8 border border-gray-200">
            <div className="space-y-6">
              <div className="mx-auto w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Brain className="w-12 h-12 text-white" />
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl font-bold text-gray-900">Periodic Table Quiz</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Test your chemistry knowledge with our interactive quiz! Challenge yourself with 
                  {periodicTableQuiz.length} carefully crafted questions about elements, their properties, 
                  and chemical symbols.
                </p>
              </div>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="font-bold text-2xl text-blue-600 mb-2">{periodicTableQuiz.length}</div>
                <div className="text-sm font-medium text-blue-700">Questions</div>
                <div className="text-xs text-blue-600 mt-1">Multiple choice format</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="font-bold text-2xl text-purple-600 mb-2">10</div>
                <div className="text-sm font-medium text-purple-700">Minutes</div>
                <div className="text-xs text-purple-600 mt-1">Time limit</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="font-bold text-2xl text-green-600 mb-2">Instant</div>
                <div className="text-sm font-medium text-green-700">Feedback</div>
                <div className="text-xs text-green-600 mt-1">With explanations</div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4">
              <button 
                onClick={startQuiz}
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold text-xl"
              >
                <Play className="w-6 h-6" />
                Start Quiz
                <Sparkles className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Zap className="w-5 h-5" />
              <span className="text-sm font-medium">Ready to test your chemistry knowledge?</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (quizState.isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 py-8">
        <QuizResults
          score={quizState.score}
          totalQuestions={periodicTableQuiz.length}
          timeSpent={quizState.timeSpent}
          onRestart={restartQuiz}
        />
      </div>
    );
  }

  const currentAnswer = quizState.selectedAnswers[currentQuestion.id];
  const hasAnswer = !!currentAnswer;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 py-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <QuizHeader
          currentQuestion={quizState.currentQuestionIndex + 1}
          totalQuestions={periodicTableQuiz.length}
          score={calculateScore()}
          timeRemaining={timeRemaining}
        />

        <QuestionCard
          question={currentQuestion.question}
          options={currentQuestion.options}
          selectedAnswer={currentAnswer}
          showResult={quizState.showResult}
          onSelectAnswer={selectAnswer}
        />

        {/* Explanation and Actions */}
        <div className="space-y-6">
          {quizState.showResult && currentQuestion.explanation && (
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-900 mb-2">Explanation</h4>
                  <p className="text-blue-800 leading-relaxed">{currentQuestion.explanation}</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-gray-600">
              {!quizState.showResult && hasAnswer && (
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">Answer selected</span>
                </div>
              )}
            </div>
            
            <div className="flex gap-4">
              {!quizState.showResult && hasAnswer && (
                <button 
                  onClick={showQuestionResult}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-200 font-medium"
                >
                  <BookOpen className="w-4 h-4" />
                  Show Answer
                </button>
              )}
              
              {quizState.showResult && (
                <button 
                  onClick={nextQuestion}
                  className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
                >
                  {isLastQuestion ? "Finish Quiz" : "Next Question"}
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
