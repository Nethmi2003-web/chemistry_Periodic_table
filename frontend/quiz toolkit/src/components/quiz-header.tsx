import { Progress } from "./ui/progress";
import { Clock, Target } from "lucide-react";

interface QuizHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  timeRemaining?: number;
}

export function QuizHeader({ currentQuestion, totalQuestions, score, timeRemaining }: QuizHeaderProps) {
  const progress = (currentQuestion / totalQuestions) * 100;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-primary" />
          <span className="font-medium">Periodic Table Quiz</span>
        </div>
        {timeRemaining !== undefined && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className={`font-mono ${timeRemaining < 60 ? 'text-destructive' : ''}`}>
              {formatTime(timeRemaining)}
            </span>
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">
            Question {currentQuestion} of {totalQuestions}
          </span>
          <span className="text-sm font-medium">
            Score: {score}/{totalQuestions}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
    </div>
  );
}