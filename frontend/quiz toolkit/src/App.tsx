import { useState, useEffect } from "react";
import { QuizHeader } from "./components/quiz-header";
import { QuestionCard } from "./components/question-card";
import { QuizResults } from "./components/quiz-results";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { periodicTableQuiz } from "./components/quiz-data";
import { ArrowRight, Play } from "lucide-react";

interface QuizState {
  currentQuestionIndex: number;
  selectedAnswers: Record<string, string>;
  showResult: boolean;
  isCompleted: boolean;
  score: number;
  startTime: number;
  timeSpent: number;
}

export default function App() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    selectedAnswers: {},
    showResult: false,
    isCompleted: false,
    score: 0,
    startTime: 0,
    timeSpent: 0
  });

  const [timeRemaining, setTimeRemaining] = useState<number>(600); // 10 minutes
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

  const selectAnswer = (optionId: string) => {
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
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-8 text-center space-y-6">
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Play className="w-8 h-8 text-primary" />
            </div>
            <h1>Periodic Table Quiz</h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Test your knowledge of the periodic table! Answer {periodicTableQuiz.length} questions 
              about elements, their properties, and chemical symbols.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
            <div className="text-center">
              <div className="font-bold text-xl text-primary">{periodicTableQuiz.length}</div>
              <div className="text-sm text-muted-foreground">Questions</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl text-primary">10</div>
              <div className="text-sm text-muted-foreground">Minutes</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl text-primary">Multiple</div>
              <div className="text-sm text-muted-foreground">Choice</div>
            </div>
          </div>

          <Button onClick={startQuiz} size="lg" className="gap-2">
            <Play className="w-4 h-4" />
            Start Quiz
          </Button>
        </Card>
      </div>
    );
  }

  if (quizState.isCompleted) {
    return (
      <div className="min-h-screen bg-background p-4 py-8">
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
    <div className="min-h-screen bg-background p-4 py-8">
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
          <div className="text-sm text-muted-foreground">
            {quizState.showResult && currentQuestion.explanation && (
              <div className="bg-muted p-3 rounded-lg max-w-md">
                <strong>Explanation: </strong>{currentQuestion.explanation}
              </div>
            )}
          </div>
          
          <div className="flex gap-3">
            {!quizState.showResult && hasAnswer && (
              <Button onClick={showQuestionResult} variant="outline">
                Show Answer
              </Button>
            )}
            
            {quizState.showResult && (
              <Button onClick={nextQuestion} className="gap-2">
                {isLastQuestion ? "Finish Quiz" : "Next Question"}
                <ArrowRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}