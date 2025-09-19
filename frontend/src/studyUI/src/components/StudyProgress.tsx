import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { BookOpen, Brain, Target, Award } from "lucide-react";

export function StudyProgress() {
  return (
    <Card className="p-6">
      <h3 className="mb-4">Study Progress</h3>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-500" />
              <span>Elements Learned</span>
            </div>
            <span className="text-sm text-muted-foreground">12/118</span>
          </div>
          <Progress value={10} className="mb-2" />
          <p className="text-xs text-muted-foreground">Keep studying to unlock more elements!</p>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-green-500" />
              <span>Quiz Accuracy</span>
            </div>
            <span className="text-sm text-muted-foreground">85%</span>
          </div>
          <Progress value={85} className="mb-2" />
          <p className="text-xs text-muted-foreground">Great job! You're getting most questions right.</p>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-orange-500" />
              <span>Daily Goal</span>
            </div>
            <span className="text-sm text-muted-foreground">3/5 activities</span>
          </div>
          <Progress value={60} className="mb-2" />
          <p className="text-xs text-muted-foreground">Complete 2 more activities to reach your daily goal.</p>
        </div>
        
        <div>
          <h4 className="mb-3 flex items-center gap-2">
            <Award className="w-4 h-4 text-yellow-500" />
            Achievements
          </h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">First Quiz ✅</Badge>
            <Badge variant="secondary">10 Elements 🧪</Badge>
            <Badge variant="outline">Perfect Score 🎯</Badge>
            <Badge variant="outline">Study Streak 🔥</Badge>
          </div>
        </div>
        
        <div className="pt-4 border-t">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-500">7</div>
              <div className="text-xs text-muted-foreground">Days Streak</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-500">42</div>
              <div className="text-xs text-muted-foreground">Total Points</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}