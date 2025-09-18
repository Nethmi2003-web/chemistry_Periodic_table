export interface ElementData {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: number;
  category: string;
  electronConfiguration: string;
  description: string;
  uses: string;
  discoveredBy: string;
  yearDiscovered: string;
  gridPosition: { row: number; col: number };
}

export const elements: ElementData[] = [
  {
    atomicNumber: 1,
    symbol: "H",
    name: "Hydrogen",
    atomicMass: 1.008,
    category: "nonmetal",
    electronConfiguration: "1s¹",
    description: "The lightest and most abundant element in the universe. Hydrogen is a colorless, odorless, tasteless, and highly flammable gas.",
    uses: "Used in fuel cells, petroleum refining, ammonia production, and as rocket fuel. Essential for life processes.",
    discoveredBy: "Henry Cavendish",
    yearDiscovered: "1766",
    gridPosition: { row: 1, col: 1 }
  },
  {
    atomicNumber: 2,
    symbol: "He",
    name: "Helium",
    atomicMass: 4.003,
    category: "noble-gas",
    electronConfiguration: "1s²",
    description: "A noble gas that is colorless, odorless, tasteless, and completely inert under normal conditions. Second most abundant element in the universe.",
    uses: "Used in balloons, welding, deep-sea breathing apparatus, and cooling systems for superconducting magnets.",
    discoveredBy: "Pierre Janssen & Norman Lockyer",
    yearDiscovered: "1868",
    gridPosition: { row: 1, col: 18 }
  },
  {
    atomicNumber: 3,
    symbol: "Li",
    name: "Lithium",
    atomicMass: 6.94,
    category: "alkali-metal",
    electronConfiguration: "[He] 2s¹",
    description: "The lightest metal and solid element. Highly reactive and flammable, it's soft enough to cut with a knife.",
    uses: "Essential for rechargeable batteries, psychiatric medications, ceramics, and glass production.",
    discoveredBy: "Johan August Arfwedson",
    yearDiscovered: "1817",
    gridPosition: { row: 2, col: 1 }
  },
  {
    atomicNumber: 4,
    symbol: "Be",
    name: "Beryllium",
    atomicMass: 9.012,
    category: "alkaline-earth-metal",
    electronConfiguration: "[He] 2s²",
    description: "A lightweight, strong metal with high melting point. Highly toxic and requires careful handling.",
    uses: "Used in aerospace applications, X-ray windows, nuclear reactors, and electronic components.",
    discoveredBy: "Louis-Nicolas Vauquelin",
    yearDiscovered: "1798",
    gridPosition: { row: 2, col: 2 }
  },
  {
    atomicNumber: 5,
    symbol: "B",
    name: "Boron",
    atomicMass: 10.81,
    category: "metalloid",
    electronConfiguration: "[He] 2s² 2p¹",
    description: "A metalloid that is essential for plant growth. Pure boron is a dark, hard, and brittle crystalline material.",
    uses: "Used in fiberglass, ceramics, agriculture fertilizers, and as a neutron absorber in nuclear reactors.",
    discoveredBy: "Joseph Louis Gay-Lussac & Louis Jacques Thénard",
    yearDiscovered: "1808",
    gridPosition: { row: 2, col: 13 }
  },
  {
    atomicNumber: 6,
    symbol: "C",
    name: "Carbon",
    atomicMass: 12.01,
    category: "nonmetal",
    electronConfiguration: "[He] 2s² 2p²",
    description: "The basis of all organic chemistry and life on Earth. Can form more compounds than any other element.",
    uses: "Found in all living things, used in steel production, diamonds, graphite, and countless organic compounds.",
    discoveredBy: "Known since ancient times",
    yearDiscovered: "Ancient",
    gridPosition: { row: 2, col: 14 }
  },
  {
    atomicNumber: 7,
    symbol: "N",
    name: "Nitrogen",
    atomicMass: 14.01,
    category: "nonmetal",
    electronConfiguration: "[He] 2s² 2p³",
    description: "Makes up about 78% of Earth's atmosphere. Essential for amino acids and proteins in all living organisms.",
    uses: "Used in fertilizers, explosives, food preservation, and creating inert atmospheres for chemical processes.",
    discoveredBy: "Daniel Rutherford",
    yearDiscovered: "1772",
    gridPosition: { row: 2, col: 15 }
  },
  {
    atomicNumber: 8,
    symbol: "O",
    name: "Oxygen",
    atomicMass: 16.00,
    category: "nonmetal",
    electronConfiguration: "[He] 2s² 2p⁴",
    description: "Essential for respiration and combustion. Makes up about 21% of Earth's atmosphere and 89% of water by mass.",
    uses: "Vital for breathing, used in steel production, medical applications, and rocket propulsion.",
    discoveredBy: "Carl Wilhelm Scheele & Joseph Priestley",
    yearDiscovered: "1774",
    gridPosition: { row: 2, col: 16 }
  },
  {
    atomicNumber: 9,
    symbol: "F",
    name: "Fluorine",
    atomicMass: 19.00,
    category: "halogen",
    electronConfiguration: "[He] 2s² 2p⁵",
    description: "The most electronegative and reactive element. A pale yellow, highly toxic gas that attacks almost all materials.",
    uses: "Used in toothpaste, non-stick coatings, refrigerants, and uranium enrichment.",
    discoveredBy: "Henri Moissan",
    yearDiscovered: "1886",
    gridPosition: { row: 2, col: 17 }
  },
  {
    atomicNumber: 10,
    symbol: "Ne",
    name: "Neon",
    atomicMass: 20.18,
    category: "noble-gas",
    electronConfiguration: "[He] 2s² 2p⁶",
    description: "A noble gas that glows orange-red when electrically excited. Completely inert under normal conditions.",
    uses: "Famous for neon signs, also used in high-voltage indicators and lightning arresters.",
    discoveredBy: "William Ramsay & Morris Travers",
    yearDiscovered: "1898",
    gridPosition: { row: 2, col: 18 }
  },
  {
    atomicNumber: 11,
    symbol: "Na",
    name: "Sodium",
    atomicMass: 22.99,
    category: "alkali-metal",
    electronConfiguration: "[Ne] 3s¹",
    description: "A highly reactive metal that burns in air and reacts violently with water. Essential for life processes.",
    uses: "Used in table salt, soap production, street lighting, and as a coolant in nuclear reactors.",
    discoveredBy: "Humphry Davy",
    yearDiscovered: "1807",
    gridPosition: { row: 3, col: 1 }
  },
  {
    atomicNumber: 12,
    symbol: "Mg",
    name: "Magnesium",
    atomicMass: 24.31,
    category: "alkaline-earth-metal",
    electronConfiguration: "[Ne] 3s²",
    description: "A lightweight, strong metal that burns with a brilliant white light. Essential for chlorophyll and many enzymes.",
    uses: "Used in lightweight alloys, fireworks, medicine (antacids), and automotive/aerospace industries.",
    discoveredBy: "Joseph Black",
    yearDiscovered: "1755",
    gridPosition: { row: 3, col: 2 }
  },
  {
    atomicNumber: 13,
    symbol: "Al",
    name: "Aluminum",
    atomicMass: 26.98,
    category: "post-transition-metal",
    electronConfiguration: "[Ne] 3s² 3p¹",
    description: "The most abundant metal in Earth's crust. Lightweight, corrosion-resistant, and highly recyclable.",
    uses: "Used in packaging, transportation, construction, electronics, and kitchen utensils.",
    discoveredBy: "Hans Christian Ørsted",
    yearDiscovered: "1825",
    gridPosition: { row: 3, col: 13 }
  },
  {
    atomicNumber: 14,
    symbol: "Si",
    name: "Silicon",
    atomicMass: 28.09,
    category: "metalloid",
    electronConfiguration: "[Ne] 3s² 3p²",
    description: "The second most abundant element in Earth's crust. Essential for computer chips and modern electronics.",
    uses: "Used in computer processors, solar panels, glass production, and silicone materials.",
    discoveredBy: "Jöns Jacob Berzelius",
    yearDiscovered: "1824",
    gridPosition: { row: 3, col: 14 }
  },
  {
    atomicNumber: 15,
    symbol: "P",
    name: "Phosphorus",
    atomicMass: 30.97,
    category: "nonmetal",
    electronConfiguration: "[Ne] 3s² 3p³",
    description: "Essential for DNA, RNA, and ATP. White phosphorus glows in the dark and is highly flammable.",
    uses: "Used in fertilizers, detergents, matches, and is essential for all living cells.",
    discoveredBy: "Hennig Brand",
    yearDiscovered: "1669",
    gridPosition: { row: 3, col: 15 }
  },
  {
    atomicNumber: 16,
    symbol: "S",
    name: "Sulfur",
    atomicMass: 32.07,
    category: "nonmetal",
    electronConfiguration: "[Ne] 3s² 3p⁴",
    description: "Known since ancient times for its distinctive smell. Essential for proteins and many biological processes.",
    uses: "Used in sulfuric acid production, vulcanizing rubber, fungicides, and gunpowder.",
    discoveredBy: "Known since ancient times",
    yearDiscovered: "Ancient",
    gridPosition: { row: 3, col: 16 }
  },
  {
    atomicNumber: 17,
    symbol: "Cl",
    name: "Chlorine",
    atomicMass: 35.45,
    category: "halogen",
    electronConfiguration: "[Ne] 3s² 3p⁵",
    description: "A yellow-green toxic gas with a sharp odor. Essential for disinfection and many industrial processes.",
    uses: "Used in water purification, bleaching, PVC production, and various cleaning products.",
    discoveredBy: "Carl Wilhelm Scheele",
    yearDiscovered: "1774",
    gridPosition: { row: 3, col: 17 }
  },
  {
    atomicNumber: 18,
    symbol: "Ar",
    name: "Argon",
    atomicMass: 39.95,
    category: "noble-gas",
    electronConfiguration: "[Ne] 3s² 3p⁶",
    description: "Makes up about 1% of Earth's atmosphere. Completely inert and used to create inert atmospheres.",
    uses: "Used in welding, light bulbs, wine preservation, and protecting sensitive materials from oxidation.",
    discoveredBy: "Lord Rayleigh & William Ramsay",
    yearDiscovered: "1894",
    gridPosition: { row: 3, col: 18 }
  },
  {
    atomicNumber: 19,
    symbol: "K",
    name: "Potassium",
    atomicMass: 39.10,
    category: "alkali-metal",
    electronConfiguration: "[Ar] 4s¹",
    description: "Essential for nerve function and muscle contraction. Highly reactive metal that must be stored under oil.",
    uses: "Used in fertilizers, glass production, soap, and is essential for all living organisms.",
    discoveredBy: "Humphry Davy",
    yearDiscovered: "1807",
    gridPosition: { row: 4, col: 1 }
  },
  {
    atomicNumber: 20,
    symbol: "Ca",
    name: "Calcium",
    atomicMass: 40.08,
    category: "alkaline-earth-metal",
    electronConfiguration: "[Ar] 4s²",
    description: "Essential for bones, teeth, and muscle function. The fifth most abundant element in Earth's crust.",
    uses: "Used in cement, plaster, chalk, limestone, and is vital for bone and tooth formation.",
    discoveredBy: "Humphry Davy",
    yearDiscovered: "1808",
    gridPosition: { row: 4, col: 2 }
  }
];

export const categoryColors = {
  "alkali-metal": "bg-red-500",
  "alkaline-earth-metal": "bg-orange-500", 
  "transition-metal": "bg-yellow-500",
  "post-transition-metal": "bg-green-500",
  "metalloid": "bg-blue-500",
  "nonmetal": "bg-purple-500",
  "halogen": "bg-pink-500",
  "noble-gas": "bg-indigo-500",
  "lanthanide": "bg-teal-500",
  "actinide": "bg-cyan-500"
};