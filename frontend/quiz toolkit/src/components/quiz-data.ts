export interface QuizQuestion {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation?: string;
}

export const periodicTableQuiz: QuizQuestion[] = [
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