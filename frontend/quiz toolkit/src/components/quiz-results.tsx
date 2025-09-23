import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Trophy, RotateCcw, Target, TrendingUp } from "lucide-react";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  timeSpent: number;
  onRestart: () => void;
}

export function QuizResults({ score, totalQuestions, timeSpent, onRestart }: QuizResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getGrade = (percent: number) => {
    if (percent >= 90) return { grade: 'A+', color: 'text-green-600', message: 'Outstanding!' };
    if (percent >= 80) return { grade: 'A', color: 'text-green-500', message: 'Excellent!' };
    if (percent >= 70) return { grade: 'B', color: 'text-blue-500', message: 'Good job!' };
    if (percent >= 60) return { grade: 'C', color: 'text-yellow-500', message: 'Not bad!' };
    return { grade: 'D', color: 'text-red-500', message: 'Keep studying!' };
  };

  const { grade, color, message } = getGrade(percentage);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card className="p-8 text-center space-y-6">
        <div className="space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Trophy className={`w-8 h-8 ${color}`} />
          </div>
          
          <div className="space-y-2">
            <h2>Quiz Complete!</h2>
            <p className="text-muted-foreground">{message}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <Target className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Score</span>
            </div>
            <div className="space-y-1">
              <div className={`text-3xl font-bold ${color}`}>{score}/{totalQuestions}</div>
              <div className={`text-lg ${color}`}>{percentage}%</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <TrendingUp className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Grade</span>
            </div>
            <div className={`text-4xl font-bold ${color}`}>{grade}</div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm text-muted-foreground">Time</span>
            </div>
            <div className="text-2xl font-bold text-muted-foreground">
              {formatTime(timeSpent)}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t">
          <Button onClick={onRestart} className="gap-2">
            <RotateCcw className="w-4 h-4" />
            Try Again
          </Button>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="mb-4">Performance Breakdown</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span>Correct Answers</span>
            <span className="font-medium text-green-600">{score}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Incorrect Answers</span>
            <span className="font-medium text-red-500">{totalQuestions - score}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Accuracy Rate</span>
            <span className="font-medium">{percentage}%</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Time per Question</span>
            <span className="font-medium">{formatTime(Math.round(timeSpent / totalQuestions))}</span>
          </div>
        </div>
      </Card>
    </div>
  );
}