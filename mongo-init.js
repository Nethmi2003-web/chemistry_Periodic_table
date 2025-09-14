// MongoDB initialization script
db = db.getSiblingDB('chemistry_periodic_table');

// Create collections
db.createCollection('users');
db.createCollection('elements');
db.createCollection('quizzes');
db.createCollection('user_progress');

// Create indexes for better performance
db.users.createIndex({ "email": 1 }, { unique: true });
db.users.createIndex({ "createdAt": -1 });

db.elements.createIndex({ "atomicNumber": 1 }, { unique: true });
db.elements.createIndex({ "symbol": 1 }, { unique: true });
db.elements.createIndex({ "name": 1 });

db.user_progress.createIndex({ "userId": 1, "elementId": 1 }, { unique: true });
db.user_progress.createIndex({ "userId": 1, "createdAt": -1 });

// Insert sample elements data
db.elements.insertMany([
  {
    atomicNumber: 1,
    symbol: "H",
    name: "Hydrogen",
    atomicMass: 1.008,
    category: "nonmetal",
    period: 1,
    group: 1,
    electronConfiguration: "1s1",
    electronegativity: 2.20,
    atomicRadius: 53,
    ionizationEnergy: 1312,
    electronAffinity: 73,
    meltingPoint: 14.01,
    boilingPoint: 20.28,
    density: 0.00008988,
    description: "Hydrogen is the most abundant element in the universe and the lightest element.",
    discoveredBy: "Henry Cavendish",
    discoveredYear: 1766,
    uses: ["Fuel", "Ammonia production", "Hydrogenation", "Rocket fuel"],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    atomicNumber: 2,
    symbol: "He",
    name: "Helium",
    atomicMass: 4.003,
    category: "noble gas",
    period: 1,
    group: 18,
    electronConfiguration: "1s2",
    electronegativity: null,
    atomicRadius: 31,
    ionizationEnergy: 2372,
    electronAffinity: 0,
    meltingPoint: 0.95,
    boilingPoint: 4.22,
    density: 0.0001785,
    description: "Helium is a noble gas that is lighter than air and chemically inert.",
    discoveredBy: "Pierre Janssen",
    discoveredYear: 1868,
    uses: ["Balloons", "Cryogenics", "Breathing gas", "Leak detection"],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    atomicNumber: 6,
    symbol: "C",
    name: "Carbon",
    atomicMass: 12.011,
    category: "nonmetal",
    period: 2,
    group: 14,
    electronConfiguration: "[He] 2s2 2p2",
    electronegativity: 2.55,
    atomicRadius: 67,
    ionizationEnergy: 1086,
    electronAffinity: 122,
    meltingPoint: 3823,
    boilingPoint: 4098,
    density: 2.267,
    description: "Carbon is the basis of all organic compounds and life on Earth.",
    discoveredBy: "Ancient",
    discoveredYear: "Ancient times",
    uses: ["Diamonds", "Graphite", "Coal", "Organic compounds", "Steel production"],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    atomicNumber: 8,
    symbol: "O",
    name: "Oxygen",
    atomicMass: 15.999,
    category: "nonmetal",
    period: 2,
    group: 16,
    electronConfiguration: "[He] 2s2 2p4",
    electronegativity: 3.44,
    atomicRadius: 48,
    ionizationEnergy: 1314,
    electronAffinity: 141,
    meltingPoint: 54.36,
    boilingPoint: 90.20,
    density: 0.001429,
    description: "Oxygen is essential for respiration and combustion processes.",
    discoveredBy: "Carl Wilhelm Scheele",
    discoveredYear: 1772,
    uses: ["Respiration", "Combustion", "Water treatment", "Steel production"],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    atomicNumber: 26,
    symbol: "Fe",
    name: "Iron",
    atomicMass: 55.845,
    category: "transition metal",
    period: 4,
    group: 8,
    electronConfiguration: "[Ar] 3d6 4s2",
    electronegativity: 1.83,
    atomicRadius: 126,
    ionizationEnergy: 762,
    electronAffinity: 15,
    meltingPoint: 1538,
    boilingPoint: 2862,
    density: 7.874,
    description: "Iron is the most abundant metal on Earth and essential for steel production.",
    discoveredBy: "Ancient",
    discoveredYear: "Ancient times",
    uses: ["Steel production", "Construction", "Transportation", "Tools"],
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

print('Database initialized successfully!');
print('Created collections: users, elements, quizzes, user_progress');
print('Inserted sample elements data');
