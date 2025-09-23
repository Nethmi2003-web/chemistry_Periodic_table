import { useState, useEffect } from "react";
import { ArrowRight, Play, Trophy, RotateCcw, Target, TrendingUp, Clock, CheckCircle, XCircle } from "lucide-react";

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
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-blue-600" />
          <span className="font-medium text-lg">Periodic Table Quiz</span>
        </div>
        {timeRemaining !== undefined && (
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span className={`font-mono ${timeRemaining < 60 ? 'text-red-500' : ''}`}>
              {formatTime(timeRemaining)}
            </span>
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">
            Question {currentQuestion} of {totalQuestions}
          </span>
          <span className="text-sm font-medium">
            Score: {score}/{totalQuestions}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

// Question Card Component
function QuestionCard({ question, options, selectedAnswer, showResult, onSelectAnswer }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-medium leading-relaxed text-gray-900">{question}</h2>
        
        <div className="grid gap-3">
          {options.map((option) => {
            const isSelected = selectedAnswer === option.id;
            const isCorrect = option.isCorrect;
            
            let buttonClass = "w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ";
            let showIcon = false;
            let iconColor = "";
            
            if (showResult) {
              if (isCorrect) {
                buttonClass += "border-green-500 bg-green-50 text-green-900";
                iconColor = "text-green-600";
                showIcon = true;
              } else if (isSelected && !isCorrect) {
                buttonClass += "border-red-500 bg-red-50 text-red-900";
                iconColor = "text-red-600";
                showIcon = true;
              } else {
                buttonClass += "border-gray-200 bg-gray-50 text-gray-600";
              }
            } else if (isSelected) {
              buttonClass += "border-blue-500 bg-blue-50 text-blue-900";
            } else {
              buttonClass += "border-gray-200 bg-white text-gray-900 hover:border-blue-300 hover:bg-blue-50";
            }
            
            return (
              <button
                key={option.id}
                className={buttonClass}
                onClick={() => !showResult && onSelectAnswer(option.id)}
                disabled={showResult}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="flex-1">{option.text}</span>
                  {showResult && showIcon && (
                    isCorrect ? (
                      <CheckCircle className={`w-5 h-5 ml-2 ${iconColor}`} />
                    ) : isSelected ? (
                      <XCircle className={`w-5 h-5 ml-2 ${iconColor}`} />
                    ) : null
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
    if (percent >= 90) return { grade: 'A+', color: 'text-green-600', message: 'Outstanding!' };
    if (percent >= 80) return { grade: 'A', color: 'text-green-500', message: 'Excellent!' };
    if (percent >= 70) return { grade: 'B', color: 'text-blue-500', message: 'Good job!' };
    if (percent >= 60) return { grade: 'C', color: 'text-yellow-500', message: 'Not bad!' };
    return { grade: 'D', color: 'text-red-500', message: 'Keep studying!' };
  };

  const { grade, color, message } = getGrade(percentage);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg shadow-md p-8 text-center space-y-6">
        <div className="space-y-4">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <Trophy className={`w-8 h-8 ${color}`} />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">Quiz Complete!</h2>
            <p className="text-gray-600">{message}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <Target className="w-5 h-5 text-gray-500" />
              <span className="text-sm text-gray-500">Score</span>
            </div>
            <div className="space-y-1">
              <div className={`text-3xl font-bold ${color}`}>{score}/{totalQuestions}</div>
              <div className={`text-lg ${color}`}>{percentage}%</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <TrendingUp className="w-5 h-5 text-gray-500" />
              <span className="text-sm text-gray-500">Grade</span>
            </div>
            <div className={`text-4xl font-bold ${color}`}>{grade}</div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm text-gray-500">Time</span>
            </div>
            <div className="text-2xl font-bold text-gray-600">
              {formatTime(timeSpent)}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t">
          <button 
            onClick={onRestart}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <RotateCcw className="w-4 h-4" />
            Try Again
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-900">Performance Breakdown</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Correct Answers</span>
            <span className="font-medium text-green-600">{score}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Incorrect Answers</span>
            <span className="font-medium text-red-500">{totalQuestions - score}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Accuracy Rate</span>
            <span className="font-medium">{percentage}%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Time per Question</span>
            <span className="font-medium">{formatTime(Math.round(timeSpent / totalQuestions))}</span>
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-8 text-center space-y-6">
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Play className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Periodic Table Quiz</h1>
            <p className="text-gray-600 max-w-md mx-auto">
              Test your knowledge of the periodic table! Answer {periodicTableQuiz.length} questions 
              about elements, their properties, and chemical symbols.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
            <div className="text-center">
              <div className="font-bold text-xl text-blue-600">{periodicTableQuiz.length}</div>
              <div className="text-sm text-gray-500">Questions</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl text-blue-600">10</div>
              <div className="text-sm text-gray-500">Minutes</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl text-blue-600">Multiple</div>
              <div className="text-sm text-gray-500">Choice</div>
            </div>
          </div>

          <button 
            onClick={startQuiz}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-medium"
          >
            <Play className="w-5 h-5" />
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  if (quizState.isCompleted) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 py-8">
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
    <div className="min-h-screen bg-gray-50 p-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
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

        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            {quizState.showResult && currentQuestion.explanation && (
              <div className="bg-gray-100 p-3 rounded-lg max-w-md">
                <strong>Explanation: </strong>{currentQuestion.explanation}
              </div>
            )}
          </div>
          
          <div className="flex gap-3">
            {!quizState.showResult && hasAnswer && (
              <button 
                onClick={showQuestionResult}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Show Answer
              </button>
            )}
            
            {quizState.showResult && (
              <button 
                onClick={nextQuestion}
                className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                {isLastQuestion ? "Finish Quiz" : "Next Question"}
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
