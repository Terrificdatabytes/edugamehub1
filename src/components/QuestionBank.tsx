export interface Question {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const QuestionBanks = {
  math: [
    // Easy Questions (1-7)
    {
      id: "math_1",
      question: "What is 15 + 27?",
      options: ["42", "41", "43", "40"],
      correct: 0,
      explanation: "15 + 27 = 42",
      difficulty: 'easy' as const
    },
    {
      id: "math_2",
      question: "What is 9 × 6?",
      options: ["54", "52", "56", "48"],
      correct: 0,
      explanation: "9 × 6 = 54",
      difficulty: 'easy' as const
    },
    {
      id: "math_3",
      question: "What is 100 - 37?",
      options: ["63", "67", "73", "53"],
      correct: 0,
      explanation: "100 - 37 = 63",
      difficulty: 'easy' as const
    },
    {
      id: "math_4",
      question: "What is 8 + 17?",
      options: ["25", "24", "26", "23"],
      correct: 0,
      explanation: "8 + 17 = 25",
      difficulty: 'easy' as const
    },
    {
      id: "math_5",
      question: "What is 7 × 4?",
      options: ["28", "24", "32", "30"],
      correct: 0,
      explanation: "7 × 4 = 28",
      difficulty: 'easy' as const
    },
    {
      id: "math_6",
      question: "What is 45 ÷ 5?",
      options: ["9", "8", "10", "7"],
      correct: 0,
      explanation: "45 ÷ 5 = 9",
      difficulty: 'easy' as const
    },
    {
      id: "math_7",
      question: "What is 12 + 19?",
      options: ["31", "30", "32", "29"],
      correct: 0,
      explanation: "12 + 19 = 31",
      difficulty: 'easy' as const
    },
    
    // Medium Questions (8-14)
    {
      id: "math_8",
      question: "What is 144 ÷ 12?",
      options: ["12", "11", "13", "10"],
      correct: 0,
      explanation: "144 ÷ 12 = 12",
      difficulty: 'medium' as const
    },
    {
      id: "math_9",
      question: "What is 15% of 200?",
      options: ["30", "25", "35", "20"],
      correct: 0,
      explanation: "15% of 200 = 0.15 × 200 = 30",
      difficulty: 'medium' as const
    },
    {
      id: "math_10",
      question: "What is the area of a rectangle 8m × 5m?",
      options: ["40 sq m", "35 sq m", "45 sq m", "30 sq m"],
      correct: 0,
      explanation: "Area = length × width = 8 × 5 = 40 sq m",
      difficulty: 'medium' as const
    },
    {
      id: "math_11",
      question: "If x + 5 = 12, what is x?",
      options: ["7", "6", "8", "5"],
      correct: 0,
      explanation: "x + 5 = 12, so x = 12 - 5 = 7",
      difficulty: 'medium' as const
    },
    {
      id: "math_12",
      question: "What is 3/4 as a decimal?",
      options: ["0.75", "0.70", "0.80", "0.65"],
      correct: 0,
      explanation: "3/4 = 3 ÷ 4 = 0.75",
      difficulty: 'medium' as const
    },
    {
      id: "math_13",
      question: "What is 2³ (2 to the power of 3)?",
      options: ["8", "6", "9", "12"],
      correct: 0,
      explanation: "2³ = 2 × 2 × 2 = 8",
      difficulty: 'medium' as const
    },
    {
      id: "math_14",
      question: "What is the perimeter of a square with side 6 cm?",
      options: ["24 cm", "20 cm", "28 cm", "18 cm"],
      correct: 0,
      explanation: "Perimeter = 4 × side = 4 × 6 = 24 cm",
      difficulty: 'medium' as const
    },
    
    // Hard Questions (15-20)
    {
      id: "math_15",
      question: "What is 8²?",
      options: ["64", "56", "72", "60"],
      correct: 0,
      explanation: "8² = 8 × 8 = 64",
      difficulty: 'hard' as const
    },
    {
      id: "math_16",
      question: "Solve: 2x + 3 = 15",
      options: ["6", "5", "7", "4"],
      correct: 0,
      explanation: "2x + 3 = 15, 2x = 12, x = 6",
      difficulty: 'hard' as const
    },
    {
      id: "math_17",
      question: "What is the square root of 81?",
      options: ["9", "8", "10", "7"],
      correct: 0,
      explanation: "√81 = 9 because 9² = 81",
      difficulty: 'hard' as const
    },
    {
      id: "math_18",
      question: "What is 25% of 80?",
      options: ["20", "15", "25", "18"],
      correct: 0,
      explanation: "25% of 80 = 0.25 × 80 = 20",
      difficulty: 'hard' as const
    },
    {
      id: "math_19",
      question: "If a triangle has angles 60°, 70°, what is the third angle?",
      options: ["50°", "45°", "55°", "40°"],
      correct: 0,
      explanation: "Sum of angles in triangle = 180°, so 180° - 60° - 70° = 50°",
      difficulty: 'hard' as const
    },
    {
      id: "math_20",
      question: "What is 12 × 15?",
      options: ["180", "175", "185", "170"],
      correct: 0,
      explanation: "12 × 15 = (12 × 10) + (12 × 5) = 120 + 60 = 180",
      difficulty: 'hard' as const
    }
  ],
  
  science: [
    // Easy Questions (1-7)
    {
      id: "science_1",
      question: "What planet is closest to the Sun?",
      options: ["Mercury", "Venus", "Earth", "Mars"],
      correct: 0,
      explanation: "Mercury is the closest planet to the Sun",
      difficulty: 'easy' as const
    },
    {
      id: "science_2",
      question: "How many legs does a spider have?",
      options: ["8", "6", "10", "4"],
      correct: 0,
      explanation: "Spiders are arachnids and have 8 legs",
      difficulty: 'easy' as const
    },
    {
      id: "science_3",
      question: "What do plants need from the sun?",
      options: ["Light", "Heat", "Radiation", "Gravity"],
      correct: 0,
      explanation: "Plants need light from the sun for photosynthesis",
      difficulty: 'easy' as const
    },
    {
      id: "science_4",
      question: "What gas do we breathe in?",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"],
      correct: 0,
      explanation: "We breathe in oxygen which our body needs",
      difficulty: 'easy' as const
    },
    {
      id: "science_5",
      question: "What is the largest mammal?",
      options: ["Blue whale", "Elephant", "Giraffe", "Lion"],
      correct: 0,
      explanation: "The blue whale is the largest mammal on Earth",
      difficulty: 'easy' as const
    },
    {
      id: "science_6",
      question: "How many bones are in an adult human body?",
      options: ["206", "200", "210", "195"],
      correct: 0,
      explanation: "An adult human has 206 bones",
      difficulty: 'easy' as const
    },
    {
      id: "science_7",
      question: "What is H2O?",
      options: ["Water", "Oxygen", "Hydrogen", "Carbon dioxide"],
      correct: 0,
      explanation: "H2O is the chemical formula for water",
      difficulty: 'easy' as const
    },
    
    // Medium Questions (8-14)
    {
      id: "science_8",
      question: "What gas do plants absorb from the atmosphere?",
      options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      correct: 0,
      explanation: "Plants absorb CO₂ during photosynthesis",
      difficulty: 'medium' as const
    },
    {
      id: "science_9",
      question: "How many chambers does a human heart have?",
      options: ["4", "3", "2", "5"],
      correct: 0,
      explanation: "The human heart has 4 chambers: 2 atria and 2 ventricles",
      difficulty: 'medium' as const
    },
    {
      id: "science_10",
      question: "What is the speed of light?",
      options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "200,000 km/s"],
      correct: 0,
      explanation: "Light travels at approximately 300,000 kilometers per second",
      difficulty: 'medium' as const
    },
    {
      id: "science_11",
      question: "What type of animal is a dolphin?",
      options: ["Mammal", "Fish", "Reptile", "Amphibian"],
      correct: 0,
      explanation: "Dolphins are marine mammals, not fish",
      difficulty: 'medium' as const
    },
    {
      id: "science_12",
      question: "What causes tides?",
      options: ["Moon's gravity", "Sun's heat", "Earth's rotation", "Wind"],
      correct: 0,
      explanation: "Tides are primarily caused by the Moon's gravitational pull",
      difficulty: 'medium' as const
    },
    {
      id: "science_13",
      question: "What is the hardest natural substance?",
      options: ["Diamond", "Steel", "Quartz", "Iron"],
      correct: 0,
      explanation: "Diamond is the hardest naturally occurring substance",
      difficulty: 'medium' as const
    },
    {
      id: "science_14",
      question: "How long does it take Earth to orbit the Sun?",
      options: ["365 days", "360 days", "370 days", "355 days"],
      correct: 0,
      explanation: "Earth takes approximately 365 days to orbit the Sun",
      difficulty: 'medium' as const
    },
    
    // Hard Questions (15-20)
    {
      id: "science_15",
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Pb", "Fe"],
      correct: 0,
      explanation: "Au comes from the Latin word 'aurum' meaning gold",
      difficulty: 'hard' as const
    },
    {
      id: "science_16",
      question: "What is the pH of pure water?",
      options: ["7", "6", "8", "5"],
      correct: 0,
      explanation: "Pure water has a neutral pH of 7",
      difficulty: 'hard' as const
    },
    {
      id: "science_17",
      question: "Which blood type is known as the universal donor?",
      options: ["O negative", "A positive", "B negative", "AB positive"],
      correct: 0,
      explanation: "O negative blood can be given to anyone, making it the universal donor",
      difficulty: 'hard' as const
    },
    {
      id: "science_18",
      question: "What is the powerhouse of the cell?",
      options: ["Mitochondria", "Nucleus", "Ribosome", "Cytoplasm"],
      correct: 0,
      explanation: "Mitochondria produce energy (ATP) for the cell",
      difficulty: 'hard' as const
    },
    {
      id: "science_19",
      question: "What is the study of earthquakes called?",
      options: ["Seismology", "Geology", "Meteorology", "Oceanography"],
      correct: 0,
      explanation: "Seismology is the scientific study of earthquakes",
      difficulty: 'hard' as const
    },
    {
      id: "science_20",
      question: "What gas makes up about 78% of Earth's atmosphere?",
      options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Argon"],
      correct: 0,
      explanation: "Nitrogen makes up about 78% of Earth's atmosphere",
      difficulty: 'hard' as const
    }
  ],
  
  physics: [
    // Easy Questions (1-7)
    {
      id: "physics_1",
      question: "What is the unit of force?",
      options: ["Newton", "Joule", "Watt", "Pascal"],
      correct: 0,
      explanation: "Newton (N) is the SI unit of force",
      difficulty: 'easy' as const
    },
    {
      id: "physics_2",
      question: "What happens to ice when heated?",
      options: ["It melts", "It freezes", "It evaporates", "Nothing"],
      correct: 0,
      explanation: "Ice melts to become liquid water when heated",
      difficulty: 'easy' as const
    },
    {
      id: "physics_3",
      question: "What is the speed of sound in air approximately?",
      options: ["340 m/s", "300 m/s", "400 m/s", "250 m/s"],
      correct: 0,
      explanation: "Sound travels at approximately 340 meters per second in air",
      difficulty: 'easy' as const
    },
    {
      id: "physics_4",
      question: "What type of energy does a moving car have?",
      options: ["Kinetic", "Potential", "Chemical", "Nuclear"],
      correct: 0,
      explanation: "A moving object has kinetic energy due to its motion",
      difficulty: 'easy' as const
    },
    {
      id: "physics_5",
      question: "What is gravity?",
      options: ["A force", "An energy", "A wave", "A particle"],
      correct: 0,
      explanation: "Gravity is a fundamental force of attraction",
      difficulty: 'easy' as const
    },
    {
      id: "physics_6",
      question: "What color is light made of all colors?",
      options: ["White", "Black", "Red", "Blue"],
      correct: 0,
      explanation: "White light contains all colors of the visible spectrum",
      difficulty: 'easy' as const
    },
    {
      id: "physics_7",
      question: "What happens to metal when heated?",
      options: ["It expands", "It contracts", "It changes color", "Nothing"],
      correct: 0,
      explanation: "Most metals expand when heated due to increased molecular motion",
      difficulty: 'easy' as const
    },
    
    // Medium Questions (8-14)
    {
      id: "physics_8",
      question: "What is Newton's first law of motion?",
      options: ["Law of inertia", "F = ma", "Action-reaction", "Conservation of energy"],
      correct: 0,
      explanation: "Newton's first law states that objects at rest stay at rest, and objects in motion stay in motion",
      difficulty: 'medium' as const
    },
    {
      id: "physics_9",
      question: "What is the acceleration due to gravity on Earth?",
      options: ["9.8 m/s²", "10 m/s²", "8.8 m/s²", "11 m/s²"],
      correct: 0,
      explanation: "The acceleration due to gravity on Earth is approximately 9.8 m/s²",
      difficulty: 'medium' as const
    },
    {
      id: "physics_10",
      question: "What type of wave is light?",
      options: ["Electromagnetic", "Sound", "Mechanical", "Water"],
      correct: 0,
      explanation: "Light is an electromagnetic wave",
      difficulty: 'medium' as const
    },
    {
      id: "physics_11",
      question: "What is the formula for kinetic energy?",
      options: ["½mv²", "mgh", "F = ma", "PV = nRT"],
      correct: 0,
      explanation: "Kinetic energy equals half mass times velocity squared",
      difficulty: 'medium' as const
    },
    {
      id: "physics_12",
      question: "What is the unit of electrical resistance?",
      options: ["Ohm", "Volt", "Ampere", "Watt"],
      correct: 0,
      explanation: "Ohm (Ω) is the unit of electrical resistance",
      difficulty: 'medium' as const
    },
    {
      id: "physics_13",
      question: "What happens to frequency when wavelength increases?",
      options: ["Decreases", "Increases", "Stays same", "Doubles"],
      correct: 0,
      explanation: "For waves, frequency and wavelength are inversely related",
      difficulty: 'medium' as const
    },
    {
      id: "physics_14",
      question: "What is absolute zero in Celsius?",
      options: ["-273°C", "-270°C", "-280°C", "-250°C"],
      correct: 0,
      explanation: "Absolute zero is -273.15°C, the theoretical lowest possible temperature",
      difficulty: 'medium' as const
    },
    
    // Hard Questions (15-20)
    {
      id: "physics_15",
      question: "What is Planck's constant approximately?",
      options: ["6.626 × 10⁻³⁴ J·s", "6.626 × 10⁻²⁴ J·s", "3.14 × 10⁻³⁴ J·s", "1.6 × 10⁻¹⁹ J·s"],
      correct: 0,
      explanation: "Planck's constant is approximately 6.626 × 10⁻³⁴ joule-seconds",
      difficulty: 'hard' as const
    },
    {
      id: "physics_16",
      question: "What principle explains how airplanes fly?",
      options: ["Bernoulli's principle", "Archimedes principle", "Pascal's principle", "Newton's principle"],
      correct: 0,
      explanation: "Bernoulli's principle explains lift generation in aircraft wings",
      difficulty: 'hard' as const
    },
    {
      id: "physics_17",
      question: "What is the uncertainty principle?",
      options: ["Cannot know position and momentum precisely", "Energy cannot be created", "Mass equals energy", "Action equals reaction"],
      correct: 0,
      explanation: "Heisenberg's uncertainty principle states position and momentum cannot be simultaneously determined precisely",
      difficulty: 'hard' as const
    },
    {
      id: "physics_18",
      question: "What is the speed of light in a vacuum?",
      options: ["299,792,458 m/s", "300,000,000 m/s", "299,000,000 m/s", "298,000,000 m/s"],
      correct: 0,
      explanation: "The exact speed of light in vacuum is 299,792,458 meters per second",
      difficulty: 'hard' as const
    },
    {
      id: "physics_19",
      question: "What is wave-particle duality?",
      options: ["Light behaves as both wave and particle", "Matter can be energy", "Waves create particles", "Particles create waves"],
      correct: 0,
      explanation: "Wave-particle duality describes how light and matter exhibit both wave and particle properties",
      difficulty: 'hard' as const
    },
    {
      id: "physics_20",
      question: "What is the strong nuclear force?",
      options: ["Force holding protons and neutrons together", "Electromagnetic force", "Gravitational force", "Weak nuclear force"],
      correct: 0,
      explanation: "The strong nuclear force binds protons and neutrons in atomic nuclei",
      difficulty: 'hard' as const
    }
  ],
  
  chemistry: [
    // Easy Questions (1-7)
    {
      id: "chemistry_1",
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "H2"],
      correct: 0,
      explanation: "Water has the chemical formula H2O (2 hydrogen atoms and 1 oxygen atom)",
      difficulty: 'easy' as const
    },
    {
      id: "chemistry_2",
      question: "What is the most abundant gas in Earth's atmosphere?",
      options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"],
      correct: 0,
      explanation: "Nitrogen makes up about 78% of Earth's atmosphere",
      difficulty: 'easy' as const
    },
    {
      id: "chemistry_3",
      question: "What is the pH of an acid?",
      options: ["Less than 7", "Equal to 7", "Greater than 7", "Always 1"],
      correct: 0,
      explanation: "Acids have a pH less than 7 on the pH scale",
      difficulty: 'easy' as const
    },
    {
      id: "chemistry_4",
      question: "What is salt chemically known as?",
      options: ["Sodium chloride", "Calcium carbonate", "Potassium iodide", "Magnesium sulfate"],
      correct: 0,
      explanation: "Table salt is sodium chloride (NaCl)",
      difficulty: 'easy' as const
    },
    {
      id: "chemistry_5",
      question: "What gas is produced when you mix vinegar and baking soda?",
      options: ["Carbon dioxide", "Oxygen", "Hydrogen", "Nitrogen"],
      correct: 0,
      explanation: "The reaction produces carbon dioxide gas, which causes bubbling",
      difficulty: 'easy' as const
    },
    {
      id: "chemistry_6",
      question: "What is the smallest unit of an element?",
      options: ["Atom", "Molecule", "Compound", "Ion"],
      correct: 0,
      explanation: "An atom is the smallest unit of an element that retains its properties",
      difficulty: 'easy' as const
    },
    {
      id: "chemistry_7",
      question: "What do we call substances that cannot be broken down chemically?",
      options: ["Elements", "Compounds", "Mixtures", "Solutions"],
      correct: 0,
      explanation: "Elements are pure substances that cannot be broken down chemically",
      difficulty: 'easy' as const
    },
    
    // Medium Questions (8-14)
    {
      id: "chemistry_8",
      question: "How many electrons can the first shell of an atom hold?",
      options: ["2", "4", "6", "8"],
      correct: 0,
      explanation: "The first electron shell can hold a maximum of 2 electrons",
      difficulty: 'medium' as const
    },
    {
      id: "chemistry_9",
      question: "What is the atomic number of carbon?",
      options: ["6", "4", "8", "12"],
      correct: 0,
      explanation: "Carbon has 6 protons, so its atomic number is 6",
      difficulty: 'medium' as const
    },
    {
      id: "chemistry_10",
      question: "What type of bond forms between metals and non-metals?",
      options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
      correct: 0,
      explanation: "Ionic bonds form between metals and non-metals through electron transfer",
      difficulty: 'medium' as const
    },
    {
      id: "chemistry_11",
      question: "What is the process of a liquid turning into a gas called?",
      options: ["Evaporation", "Condensation", "Sublimation", "Freezing"],
      correct: 0,
      explanation: "Evaporation is the process where liquid changes to gas at the surface",
      difficulty: 'medium' as const
    },
    {
      id: "chemistry_12",
      question: "What is the chemical formula for methane?",
      options: ["CH4", "C2H6", "CO2", "H2O"],
      correct: 0,
      explanation: "Methane has the formula CH4 (1 carbon and 4 hydrogen atoms)",
      difficulty: 'medium' as const
    },
    {
      id: "chemistry_13",
      question: "What is a catalyst?",
      options: ["Speeds up reactions", "Slows down reactions", "Creates products", "Removes reactants"],
      correct: 0,
      explanation: "A catalyst speeds up chemical reactions without being consumed",
      difficulty: 'medium' as const
    },
    {
      id: "chemistry_14",
      question: "What is the molar mass of water (H2O)?",
      options: ["18 g/mol", "16 g/mol", "20 g/mol", "14 g/mol"],
      correct: 0,
      explanation: "H2O = (2×1) + (1×16) = 18 grams per mole",
      difficulty: 'medium' as const
    },
    
    // Hard Questions (15-20)
    {
      id: "chemistry_15",
      question: "What is Avogadro's number?",
      options: ["6.022 × 10²³", "6.022 × 10²²", "3.14 × 10²³", "1.6 × 10⁻¹⁹"],
      correct: 0,
      explanation: "Avogadro's number is 6.022 × 10²³ particles per mole",
      difficulty: 'hard' as const
    },
    {
      id: "chemistry_16",
      question: "What is the electron configuration of neon?",
      options: ["1s² 2s² 2p⁶", "1s² 2s² 2p⁴", "1s² 2s² 2p⁸", "1s² 2p⁸"],
      correct: 0,
      explanation: "Neon has 10 electrons: 1s² 2s² 2p⁶",
      difficulty: 'hard' as const
    },
    {
      id: "chemistry_17",
      question: "What is the hybridization of carbon in methane?",
      options: ["sp³", "sp²", "sp", "s"],
      correct: 0,
      explanation: "Carbon in methane (CH4) has sp³ hybridization forming tetrahedral geometry",
      difficulty: 'hard' as const
    },
    {
      id: "chemistry_18",
      question: "What is the standard temperature and pressure (STP)?",
      options: ["0°C and 1 atm", "25°C and 1 atm", "0°C and 2 atm", "20°C and 1 atm"],
      correct: 0,
      explanation: "STP is defined as 0°C (273.15 K) and 1 atmosphere pressure",
      difficulty: 'hard' as const
    },
    {
      id: "chemistry_19",
      question: "What is the oxidation state of sulfur in H2SO4?",
      options: ["+6", "+4", "+2", "-2"],
      correct: 0,
      explanation: "In H2SO4, sulfur has an oxidation state of +6",
      difficulty: 'hard' as const
    },
    {
      id: "chemistry_20",
      question: "What is Le Chatelier's principle?",
      options: ["System shifts to counteract changes", "Energy is conserved", "Mass is conserved", "Pressure equals force/area"],
      correct: 0,
      explanation: "Le Chatelier's principle states that systems shift to counteract imposed changes",
      difficulty: 'hard' as const
    }
  ],
  
  biology: [
    // Easy Questions (1-7)
    {
      id: "biology_1",
      question: "What is the basic unit of life?",
      options: ["Cell", "Atom", "Organ", "Tissue"],
      correct: 0,
      explanation: "The cell is the basic structural and functional unit of life",
      difficulty: 'easy' as const
    },
    {
      id: "biology_2",
      question: "What do plants use to make food?",
      options: ["Sunlight", "Moon", "Stars", "Wind"],
      correct: 0,
      explanation: "Plants use sunlight in photosynthesis to make their own food",
      difficulty: 'easy' as const
    },
    {
      id: "biology_3",
      question: "How many limbs do humans have?",
      options: ["4", "2", "6", "8"],
      correct: 0,
      explanation: "Humans have 4 limbs: 2 arms and 2 legs",
      difficulty: 'easy' as const
    },
    {
      id: "biology_4",
      question: "What do we call animals that eat only plants?",
      options: ["Herbivores", "Carnivores", "Omnivores", "Decomposers"],
      correct: 0,
      explanation: "Herbivores are animals that eat only plants",
      difficulty: 'easy' as const
    },
    {
      id: "biology_5",
      question: "Where is DNA found in a cell?",
      options: ["Nucleus", "Cytoplasm", "Cell membrane", "Ribosome"],
      correct: 0,
      explanation: "DNA is primarily found in the nucleus of eukaryotic cells",
      difficulty: 'easy' as const
    },
    {
      id: "biology_6",
      question: "What is the largest organ in the human body?",
      options: ["Skin", "Liver", "Brain", "Lungs"],
      correct: 0,
      explanation: "The skin is the largest organ in the human body",
      difficulty: 'easy' as const
    },
    {
      id: "biology_7",
      question: "What process do plants use to make oxygen?",
      options: ["Photosynthesis", "Respiration", "Digestion", "Circulation"],
      correct: 0,
      explanation: "Plants produce oxygen as a byproduct of photosynthesis",
      difficulty: 'easy' as const
    },
    
    // Medium Questions (8-14)
    {
      id: "biology_8",
      question: "What is the function of red blood cells?",
      options: ["Carry oxygen", "Fight infection", "Clot blood", "Digest food"],
      correct: 0,
      explanation: "Red blood cells carry oxygen from lungs to body tissues",
      difficulty: 'medium' as const
    },
    {
      id: "biology_9",
      question: "How many chromosomes do humans normally have?",
      options: ["46", "44", "48", "42"],
      correct: 0,
      explanation: "Humans normally have 46 chromosomes (23 pairs)",
      difficulty: 'medium' as const
    },
    {
      id: "biology_10",
      question: "What is the process by which cells divide?",
      options: ["Mitosis", "Meiosis", "Photosynthesis", "Metabolism"],
      correct: 0,
      explanation: "Mitosis is the process of cell division for growth and repair",
      difficulty: 'medium' as const
    },
    {
      id: "biology_11",
      question: "What is the scientific name for humans?",
      options: ["Homo sapiens", "Homo erectus", "Pan troglodytes", "Australopithecus"],
      correct: 0,
      explanation: "The scientific name for modern humans is Homo sapiens",
      difficulty: 'medium' as const
    },
    {
      id: "biology_12",
      question: "What organelle produces energy in cells?",
      options: ["Mitochondria", "Nucleus", "Ribosome", "Golgi apparatus"],
      correct: 0,
      explanation: "Mitochondria are the powerhouses that produce ATP energy",
      difficulty: 'medium' as const
    },
    {
      id: "biology_13",
      question: "What is the study of heredity called?",
      options: ["Genetics", "Ecology", "Anatomy", "Physiology"],
      correct: 0,
      explanation: "Genetics is the study of heredity and genetic variation",
      difficulty: 'medium' as const
    },
    {
      id: "biology_14",
      question: "What type of symmetry do humans have?",
      options: ["Bilateral", "Radial", "Asymmetrical", "Spherical"],
      correct: 0,
      explanation: "Humans have bilateral symmetry with left and right halves",
      difficulty: 'medium' as const
    },
    
    // Hard Questions (15-20)
    {
      id: "biology_15",
      question: "What is the difference between DNA and RNA?",
      options: ["RNA has uracil instead of thymine", "DNA is single-stranded", "RNA is more stable", "DNA has ribose sugar"],
      correct: 0,
      explanation: "RNA contains uracil base instead of thymine found in DNA",
      difficulty: 'hard' as const
    },
    {
      id: "biology_16",
      question: "What is the Hardy-Weinberg principle?",
      options: ["Allele frequencies remain constant", "Evolution always occurs", "Mutations are beneficial", "Selection favors fitness"],
      correct: 0,
      explanation: "Hardy-Weinberg principle states allele frequencies remain constant under certain conditions",
      difficulty: 'hard' as const
    },
    {
      id: "biology_17",
      question: "What is the function of ribosomes?",
      options: ["Protein synthesis", "DNA replication", "Lipid production", "Waste removal"],
      correct: 0,
      explanation: "Ribosomes are the sites of protein synthesis in cells",
      difficulty: 'hard' as const
    },
    {
      id: "biology_18",
      question: "What is crossing over in genetics?",
      options: ["Exchange of genetic material", "Cell division", "Protein folding", "Energy production"],
      correct: 0,
      explanation: "Crossing over is the exchange of genetic material between homologous chromosomes",
      difficulty: 'hard' as const
    },
    {
      id: "biology_19",
      question: "What is the function of the endoplasmic reticulum?",
      options: ["Protein and lipid synthesis", "Energy production", "Waste disposal", "DNA storage"],
      correct: 0,
      explanation: "The ER is involved in protein and lipid synthesis and transport",
      difficulty: 'hard' as const
    },
    {
      id: "biology_20",
      question: "What is apoptosis?",
      options: ["Programmed cell death", "Cell division", "Protein synthesis", "Energy production"],
      correct: 0,
      explanation: "Apoptosis is programmed cell death that occurs naturally in organisms",
      difficulty: 'hard' as const
    }
  ],
  
  history: [
    // Easy Questions (1-7)
    {
      id: "history_1",
      question: "Who was the first President of the United States?",
      options: ["George Washington", "Thomas Jefferson", "John Adams", "Benjamin Franklin"],
      correct: 0,
      explanation: "George Washington was the first President of the United States (1789-1797)",
      difficulty: 'easy' as const
    },
    {
      id: "history_2",
      question: "In which year did World War II end?",
      options: ["1945", "1944", "1946", "1943"],
      correct: 0,
      explanation: "World War II ended in 1945 with the surrender of Japan",
      difficulty: 'easy' as const
    },
    {
      id: "history_3",
      question: "Which ancient wonder was located in Egypt?",
      options: ["Great Pyramid of Giza", "Hanging Gardens", "Colossus of Rhodes", "Lighthouse of Alexandria"],
      correct: 0,
      explanation: "The Great Pyramid of Giza is the only surviving ancient wonder",
      difficulty: 'easy' as const
    },
    {
      id: "history_4",
      question: "Who discovered America in 1492?",
      options: ["Christopher Columbus", "Amerigo Vespucci", "Vasco da Gama", "Ferdinand Magellan"],
      correct: 0,
      explanation: "Christopher Columbus reached the Americas in 1492",
      difficulty: 'easy' as const
    },
    {
      id: "history_5",
      question: "Which empire was ruled by Julius Caesar?",
      options: ["Roman Empire", "Greek Empire", "Egyptian Empire", "Persian Empire"],
      correct: 0,
      explanation: "Julius Caesar was a Roman general and dictator",
      difficulty: 'easy' as const
    },
    {
      id: "history_6",
      question: "What was the period called when Europe rediscovered art and learning?",
      options: ["Renaissance", "Medieval", "Baroque", "Enlightenment"],
      correct: 0,
      explanation: "The Renaissance was a period of cultural rebirth in Europe",
      difficulty: 'easy' as const
    },
    {
      id: "history_7",
      question: "Who wrote the Declaration of Independence?",
      options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
      correct: 0,
      explanation: "Thomas Jefferson was the primary author of the Declaration of Independence",
      difficulty: 'easy' as const
    },
    
    // Medium Questions (8-14)
    {
      id: "history_8",
      question: "Which war was fought between the North and South in America?",
      options: ["Civil War", "Revolutionary War", "War of 1812", "Spanish-American War"],
      correct: 0,
      explanation: "The American Civil War (1861-1865) was fought between the Union and Confederacy",
      difficulty: 'medium' as const
    },
    {
      id: "history_9",
      question: "Who was known as the 'Iron Lady'?",
      options: ["Margaret Thatcher", "Queen Elizabeth II", "Indira Gandhi", "Golda Meir"],
      correct: 0,
      explanation: "Margaret Thatcher, UK Prime Minister, was nicknamed the 'Iron Lady'",
      difficulty: 'medium' as const
    },
    {
      id: "history_10",
      question: "What year did the Berlin Wall fall?",
      options: ["1989", "1987", "1991", "1985"],
      correct: 0,
      explanation: "The Berlin Wall fell on November 9, 1989",
      difficulty: 'medium' as const
    },
    {
      id: "history_11",
      question: "Which dynasty ruled China for the longest time?",
      options: ["Zhou Dynasty", "Han Dynasty", "Tang Dynasty", "Ming Dynasty"],
      correct: 0,
      explanation: "The Zhou Dynasty ruled China for about 800 years (1046-256 BC)",
      difficulty: 'medium' as const
    },
    {
      id: "history_12",
      question: "What was the name of the ship that sank in 1912?",
      options: ["Titanic", "Lusitania", "Britannic", "Olympic"],
      correct: 0,
      explanation: "The RMS Titanic sank on April 15, 1912, during its maiden voyage",
      difficulty: 'medium' as const
    },
    {
      id: "history_13",
      question: "Who led the Indian independence movement?",
      options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Sardar Patel"],
      correct: 0,
      explanation: "Mahatma Gandhi led India's non-violent independence movement",
      difficulty: 'medium' as const
    },
    {
      id: "history_14",
      question: "What was the main cause of World War I?",
      options: ["Assassination of Archduke Franz Ferdinand", "Invasion of Poland", "Pearl Harbor attack", "Holocaust"],
      correct: 0,
      explanation: "The assassination of Archduke Franz Ferdinand triggered World War I",
      difficulty: 'medium' as const
    },
    
    // Hard Questions (15-20)
    {
      id: "history_15",
      question: "What was the Treaty of Versailles?",
      options: ["End of WWI treaty", "End of WWII treaty", "Trade agreement", "Military alliance"],
      correct: 0,
      explanation: "The Treaty of Versailles officially ended World War I in 1919",
      difficulty: 'hard' as const
    },
    {
      id: "history_16",
      question: "Who was the first emperor of Rome?",
      options: ["Augustus", "Julius Caesar", "Nero", "Trajan"],
      correct: 0,
      explanation: "Augustus (originally Octavian) was the first Roman Emperor",
      difficulty: 'hard' as const
    },
    {
      id: "history_17",
      question: "What was the Manhattan Project?",
      options: ["Atomic bomb development", "Space program", "Computer development", "Medical research"],
      correct: 0,
      explanation: "The Manhattan Project was the US program to develop atomic weapons during WWII",
      difficulty: 'hard' as const
    },
    {
      id: "history_18",
      question: "Which empire was ruled by Genghis Khan?",
      options: ["Mongol Empire", "Ottoman Empire", "Byzantine Empire", "Chinese Empire"],
      correct: 0,
      explanation: "Genghis Khan founded and ruled the Mongol Empire",
      difficulty: 'hard' as const
    },
    {
      id: "history_19",
      question: "What was the Silk Road?",
      options: ["Trade route network", "Ancient road in China", "Textile factory", "Military highway"],
      correct: 0,
      explanation: "The Silk Road was a network of trade routes connecting East and West",
      difficulty: 'hard' as const
    },
    {
      id: "history_20",
      question: "What was the Industrial Revolution?",
      options: ["Period of mechanization", "Political revolution", "Scientific discovery", "Religious movement"],
      correct: 0,
      explanation: "The Industrial Revolution was a period of major mechanization and technological change",
      difficulty: 'hard' as const
    }
  ]
};

export function getQuestionsBySubject(subjectId: string): Question[] {
  const questionBank = QuestionBanks[subjectId as keyof typeof QuestionBanks];
  return questionBank || QuestionBanks.math; // Fallback to math if subject not found
}