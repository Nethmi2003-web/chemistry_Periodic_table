import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { CheckCircle, XCircle } from "lucide-react";

interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface QuestionCardProps {
  question: string;
  options: Option[];
  selectedAnswer: string | null;
  showResult: boolean;
  onSelectAnswer: (optionId: string) => void;
}

export function QuestionCard({ 
  question, 
  options, 
  selectedAnswer, 
  showResult, 
  onSelectAnswer 
}: QuestionCardProps) {
  return (
    <Card className="p-6 space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-medium leading-relaxed">{question}</h2>
        
        <div className="grid gap-3">
          {options.map((option) => {
            const isSelected = selectedAnswer === option.id;
            const isCorrect = option.isCorrect;
            
            let buttonVariant: "default" | "outline" | "destructive" | "secondary" = "outline";
            let iconColor = "";
            let showIcon = false;
            
            if (showResult) {
              if (isCorrect) {
                buttonVariant = "default";
                iconColor = "text-green-600";
                showIcon = true;
              } else if (isSelected && !isCorrect) {
                buttonVariant = "destructive";
                iconColor = "text-destructive-foreground";
                showIcon = true;
              }
            } else if (isSelected) {
              buttonVariant = "default";
            }
            
            return (
              <Button
                key={option.id}
                variant={buttonVariant}
                className="justify-start h-auto p-4 text-left whitespace-normal"
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
              </Button>
            );
          })}
        </div>
      </div>
    </Card>
  );
}