import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

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
];

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  
  const question = quizQuestions[currentQuestion];
  const isCorrect = selectedAnswer === question.correct.toString();
  
  const handleAnswer = () => {
    if (selectedAnswer === "") return;
    
    setShowResult(true);
    if (isCorrect) {
      setScore(score + 1);
    }
    setAnsweredQuestions(answeredQuestions + 1);
  };
  
  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setShowResult(false);
    }
  };
  
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(0);
  };
  
  const isQuizComplete = currentQuestion === quizQuestions.length - 1 && showResult;
  
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3>Chemistry Quiz</h3>
        <div className="text-sm text-muted-foreground">
          Score: {score}/{answeredQuestions} | Question {currentQuestion + 1}/{quizQuestions.length}
        </div>
      </div>
      
      {!isQuizComplete ? (
        <>
          <div className="mb-6">
            <h4 className="mb-4">{question.question}</h4>
            
            <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem 
                    value={index.toString()} 
                    id={`option-${index}`} 
                    disabled={showResult}
                  />
                  <Label 
                    htmlFor={`option-${index}`}
                    className={`flex-1 cursor-pointer p-2 rounded ${
                      showResult 
                        ? index === question.correct 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : selectedAnswer === index.toString() && !isCorrect
                          ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                          : ''
                        : 'hover:bg-muted'
                    }`}
                  >
                    {option}
                    {showResult && index === question.correct && (
                      <CheckCircle className="w-4 h-4 inline ml-2 text-green-600" />
                    )}
                    {showResult && selectedAnswer === index.toString() && !isCorrect && (
                      <XCircle className="w-4 h-4 inline ml-2 text-red-600" />
                    )}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          
          {showResult && (
            <div className="mb-4 p-4 rounded-lg bg-muted">
              <p className="text-sm">
                <strong>Explanation:</strong> {question.explanation}
              </p>
            </div>
          )}
          
          <div className="flex justify-between">
            <Button variant="outline" onClick={resetQuiz}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset Quiz
            </Button>
            
            {!showResult ? (
              <Button onClick={handleAnswer} disabled={selectedAnswer === ""}>
                Submit Answer
              </Button>
            ) : (
              <Button onClick={nextQuestion}>
                Next Question
              </Button>
            )}
          </div>
        </>
      ) : (
        <div className="text-center py-8">
          <h4 className="mb-4">Quiz Complete!</h4>
          <div className="text-4xl mb-4">
            {score === quizQuestions.length ? "🏆" : score >= quizQuestions.length * 0.7 ? "🎉" : "📚"}
          </div>
          <p className="mb-4">
            You scored {score} out of {quizQuestions.length} questions correctly!
          </p>
          <Button onClick={resetQuiz}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Take Quiz Again
          </Button>
        </div>
      )}
    </Card>
  );
}