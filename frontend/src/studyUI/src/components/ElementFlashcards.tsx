import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

const elements = [
  { symbol: "H", name: "Hydrogen", atomicNumber: 1, atomicMass: "1.008" },
  { symbol: "He", name: "Helium", atomicNumber: 2, atomicMass: "4.003" },
  { symbol: "Li", name: "Lithium", atomicNumber: 3, atomicMass: "6.941" },
  { symbol: "Be", name: "Beryllium", atomicNumber: 4, atomicMass: "9.012" },
  { symbol: "B", name: "Boron", atomicNumber: 5, atomicMass: "10.811" },
  { symbol: "C", name: "Carbon", atomicNumber: 6, atomicMass: "12.011" },
  { symbol: "N", name: "Nitrogen", atomicNumber: 7, atomicMass: "14.007" },
  { symbol: "O", name: "Oxygen", atomicNumber: 8, atomicMass: "15.999" },
];

export function ElementFlashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  
  const currentElement = elements[currentIndex];
  
  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % elements.length);
    setShowAnswer(false);
  };
  
  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + elements.length) % elements.length);
    setShowAnswer(false);
  };
  
  const flipCard = () => {
    setShowAnswer(!showAnswer);
  };
  
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3>Element Flashcards</h3>
        <span className="text-sm text-muted-foreground">
          {currentIndex + 1} of {elements.length}
        </span>
      </div>
      
      <div className="mb-6">
        <Card 
          className="h-48 flex items-center justify-center cursor-pointer transition-all hover:shadow-md"
          onClick={flipCard}
        >
          {!showAnswer ? (
            <div className="text-center">
              <div className="text-6xl font-bold mb-2">{currentElement.symbol}</div>
              <div className="text-sm text-muted-foreground">Click to reveal details</div>
            </div>
          ) : (
            <div className="text-center">
              <h4 className="mb-2">{currentElement.name}</h4>
              <p className="text-sm text-muted-foreground mb-1">
                Atomic Number: {currentElement.atomicNumber}
              </p>
              <p className="text-sm text-muted-foreground">
                Atomic Mass: {currentElement.atomicMass}
              </p>
            </div>
          )}
        </Card>
      </div>
      
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={prevCard}>
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>
        
        <Button variant="outline" onClick={flipCard}>
          <RotateCcw className="w-4 h-4 mr-2" />
          Flip
        </Button>
        
        <Button variant="outline" onClick={nextCard}>
          Next
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </Card>
  );
}