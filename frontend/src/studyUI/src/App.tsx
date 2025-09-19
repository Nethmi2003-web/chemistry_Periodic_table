import { StudyHeader } from "./components/StudyHeader";
import { ElementFlashcards } from "./components/ElementFlashcards";
import { QuizSection } from "./components/QuizSection";
import { ElementSearch } from "./components/ElementSearch";
import { StudyProgress } from "./components/StudyProgress";
import { QuickReference } from "./components/QuickReference";

export default function App() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto">
        <StudyHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Study Content */}
          <div className="lg:col-span-2 space-y-6">
            <ElementFlashcards />
            <QuizSection />
            <ElementSearch />
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <StudyProgress />
            <QuickReference />
          </div>
        </div>
      </div>
    </div>
  );
}