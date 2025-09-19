import { BookOpen, Target, Trophy } from "lucide-react";
import { Card } from "./ui/card";

export function StudyHeader() {
  return (
    <div className="mb-8">
      <div className="text-center mb-6">
        <h1 className="mb-2">Periodic Table Study Center</h1>
        <p className="text-muted-foreground">Master the elements with interactive activities and tools</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 text-center">
          <BookOpen className="w-8 h-8 mx-auto mb-2 text-blue-500" />
          <h3 className="mb-1">Learn</h3>
          <p className="text-sm text-muted-foreground">Study element properties and trends</p>
        </Card>
        
        <Card className="p-4 text-center">
          <Target className="w-8 h-8 mx-auto mb-2 text-green-500" />
          <h3 className="mb-1">Practice</h3>
          <p className="text-sm text-muted-foreground">Test your knowledge with quizzes</p>
        </Card>
        
        <Card className="p-4 text-center">
          <Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
          <h3 className="mb-1">Master</h3>
          <p className="text-sm text-muted-foreground">Track progress and achievements</p>
        </Card>
      </div>
    </div>
  );
}