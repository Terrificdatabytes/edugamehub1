import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { getQuestionsBySubject, Question } from './QuestionBank';
import { 
  ArrowLeft, 
  ArrowUp, 
  ArrowDown, 
  ArrowRight, 
  Trophy,
  Star,
  Zap,
  Heart,
  Sparkles,
  Target,
  Award,
  BookOpen
} from 'lucide-react';

interface PokemonGameProps {
  subject: any;
  language: string;
  isLiteMode?: boolean;
  onExit: () => void;
  onGameComplete: (score: number, xp: number) => void;
}

interface Position {
  x: number;
  y: number;
}

interface GameItem {
  id: string;
  position: Position;
  type: 'question' | 'treasure' | 'npc' | 'obstacle';
  content?: any;
  collected?: boolean;
}



export function PokemonGame({ subject, language, isLiteMode = false, onExit, onGameComplete }: PokemonGameProps) {
  const [playerPos, setPlayerPos] = useState<Position>({ x: 5, y: 5 });
  const [gameItems, setGameItems] = useState<GameItem[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [score, setScore] = useState(0);
  const [health, setHealth] = useState(100);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [treasuresFound, setTreasuresFound] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [playerDirection, setPlayerDirection] = useState<'up' | 'down' | 'left' | 'right'>('down');

  const GRID_SIZE = 15;
  const TOTAL_QUESTIONS = 20;

  const translations = {
    en: {
      health: 'Health',
      score: 'Score',
      questions: 'Questions',
      treasures: 'Treasures',
      moveInstructions: 'Use arrow keys or buttons to move',
      questionFound: 'Question Found!',
      treasureFound: 'Treasure Found!',
      correct: 'Correct! +10 points',
      incorrect: 'Incorrect! -5 health',
      gameComplete: 'Adventure Complete!',
      finalScore: 'Final Score',
      xpEarned: 'XP Earned',
      playAgain: 'Play Again',
      backToDashboard: 'Back to Dashboard',
      excellent: 'Excellent Explorer!',
      good: 'Good Adventure!',
      tryAgain: 'Try Again!',
      submitAnswer: 'Submit Answer',
      nextQuestion: 'Continue Adventure'
    },
    hi: {
      health: 'स्वास्थ्य',
      score: 'स्कोर',
      questions: 'प्रश्न',
      treasures: 'खजाना',
      moveInstructions: 'चलने के लिए तीर कुंजी या बटन का उपयोग करें',
      questionFound: 'प्रश्न मिला!',
      treasureFound: 'खजाना मिला!',
      correct: 'सही! +10 अंक',
      incorrect: 'गलत! -5 स्वास्थ्य',
      gameComplete: 'साहसिक कार्य पूरा!',
      finalScore: 'अंतिम स्कोर',
      xpEarned: 'एक्सपी अर्जित',
      playAgain: 'फिर से खेलें',
      backToDashboard: 'डैशबोर्ड पर वापस',
      excellent: 'उत्कृष्ट खोजकर्ता!',
      good: 'अच्छा साहसिक!',
      tryAgain: 'फिर कोशिश करें!',
      submitAnswer: 'उत्तर जमा करें',
      nextQuestion: 'साहसिक जारी रखें'
    },
    ta: {
      health: 'உடல்நலம்',
      score: 'மதிப்பெண்',
      questions: 'கேள்விகள்',
      treasures: 'புதையல்',
      moveInstructions: 'நகர்ந்த செல்ல அம்பு கீகள் அல்லது பொத்தான்களை பயன்படுத்தவும்',
      questionFound: 'கேள்வி கிடைத்தது!',
      treasureFound: 'புதையல் கிடைத்தது!',
      correct: 'சரி! +10 புள்ளிகள்',
      incorrect: 'தவறு! -5 உடல்நலம்',
      gameComplete: 'சாகசம் முடிந்தது!',
      finalScore: 'இறுதி மதிப்பெண்',
      xpEarned: 'XP பெற்றது',
      playAgain: 'மீண்டும் விளையாடு',
      backToDashboard: 'டேஷ்போர்டுக்கு திரும்பு',
      excellent: 'சிறந்த ஆய்வாளர்!',
      good: 'நல்ல சாகசம்!',
      tryAgain: 'மீண்டும் முயற்சிக்கவும்!',
      submitAnswer: 'பதில் சமர்பிக்கவும்',
      nextQuestion: 'சாகசம் தொடரவும்'
    },
    es: {
      health: 'Salud',
      score: 'Puntuación',
      questions: 'Preguntas',
      treasures: 'Tesoros',
      moveInstructions: 'Usa las teclas de flecha o botones para moverte',
      questionFound: '¡Pregunta Encontrada!',
      treasureFound: '¡Tesoro Encontrado!',
      correct: '¡Correcto! +10 puntos',
      incorrect: '¡Incorrecto! -5 salud',
      gameComplete: '¡Aventura Completa!',
      finalScore: 'Puntuación Final',
      xpEarned: 'XP Ganado',
      playAgain: 'Jugar de Nuevo',
      backToDashboard: 'Volver al Panel',
      excellent: '¡Excelente Explorador!',
      good: '¡Buena Aventura!',
      tryAgain: '¡Inténtalo de Nuevo!',
      submitAnswer: 'Enviar Respuesta',
      nextQuestion: 'Continuar Aventura'
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  // Generate questions based on subject
  const generateQuestions = useCallback((): Question[] => {
    return getQuestionsBySubject(subject.id);
  }, [subject.id]);

  // Initialize game items
  useEffect(() => {
    const questions = generateQuestions();
    const items: GameItem[] = [];

    // Add question items
    questions.forEach((question, index) => {
      let pos: Position;
      do {
        pos = {
          x: Math.floor(Math.random() * GRID_SIZE),
          y: Math.floor(Math.random() * GRID_SIZE)
        };
      } while (
        (pos.x === 5 && pos.y === 5) || // Don't place on starting position
        items.some(item => item.position.x === pos.x && item.position.y === pos.y)
      );

      items.push({
        id: `question-${index}`,
        position: pos,
        type: 'question',
        content: question,
        collected: false
      });
    });

    // Add treasure items
    for (let i = 0; i < 4; i++) {
      let pos: Position;
      do {
        pos = {
          x: Math.floor(Math.random() * GRID_SIZE),
          y: Math.floor(Math.random() * GRID_SIZE)
        };
      } while (
        (pos.x === 5 && pos.y === 5) ||
        items.some(item => item.position.x === pos.x && item.position.y === pos.y)
      );

      items.push({
        id: `treasure-${i}`,
        position: pos,
        type: 'treasure',
        collected: false
      });
    }

    // Add obstacles
    for (let i = 0; i < 8; i++) {
      let pos: Position;
      do {
        pos = {
          x: Math.floor(Math.random() * GRID_SIZE),
          y: Math.floor(Math.random() * GRID_SIZE)
        };
      } while (
        (pos.x === 5 && pos.y === 5) ||
        items.some(item => item.position.x === pos.x && item.position.y === pos.y)
      );

      items.push({
        id: `obstacle-${i}`,
        position: pos,
        type: 'obstacle'
      });
    }

    setGameItems(items);
  }, [generateQuestions]);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (showQuestionModal || gameComplete) return;

      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          movePlayer('up');
          break;
        case 'ArrowDown':
          e.preventDefault();
          movePlayer('down');
          break;
        case 'ArrowLeft':
          e.preventDefault();
          movePlayer('left');
          break;
        case 'ArrowRight':
          e.preventDefault();
          movePlayer('right');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showQuestionModal, gameComplete]);

  const movePlayer = (direction: 'up' | 'down' | 'left' | 'right') => {
    setPlayerDirection(direction);
    setPlayerPos(prev => {
      let newPos = { ...prev };
      
      switch (direction) {
        case 'up':
          newPos.y = Math.max(0, prev.y - 1);
          break;
        case 'down':
          newPos.y = Math.min(GRID_SIZE - 1, prev.y + 1);
          break;
        case 'left':
          newPos.x = Math.max(0, prev.x - 1);
          break;
        case 'right':
          newPos.x = Math.min(GRID_SIZE - 1, prev.x + 1);
          break;
      }

      // Check for collisions with game items
      const itemAtPosition = gameItems.find(
        item => item.position.x === newPos.x && item.position.y === newPos.y && !item.collected
      );

      if (itemAtPosition) {
        handleItemCollision(itemAtPosition);
      }

      return newPos;
    });
  };

  const handleItemCollision = (item: GameItem) => {
    if (item.type === 'question') {
      setCurrentQuestion(item.content);
      setShowQuestionModal(true);
    } else if (item.type === 'treasure') {
      setScore(prev => prev + 20);
      setTreasuresFound(prev => prev + 1);
      setGameItems(prev => 
        prev.map(gameItem => 
          gameItem.id === item.id ? { ...gameItem, collected: true } : gameItem
        )
      );
    } else if (item.type === 'obstacle') {
      setHealth(prev => Math.max(0, prev - 10));
    }
  };

  const handleAnswerSubmit = (answerIndex: number) => {
    if (!currentQuestion) return;

    const isCorrect = answerIndex === currentQuestion.correct;
    
    if (isCorrect) {
      const points = currentQuestion.difficulty === 'hard' ? 20 : currentQuestion.difficulty === 'medium' ? 15 : 10;
      setScore(prev => prev + points);
    } else {
      setHealth(prev => Math.max(0, prev - 5));
    }

    setQuestionsAnswered(prev => prev + 1);
    
    // Mark question as collected
    setGameItems(prev => 
      prev.map(item => 
        item.content?.id === currentQuestion.id ? { ...item, collected: true } : item
      )
    );

    setShowQuestionModal(false);
    setCurrentQuestion(null);

    // Check if game is complete
    if (questionsAnswered + 1 >= TOTAL_QUESTIONS || health <= 5) {
      setTimeout(() => {
        setGameComplete(true);
        const xpEarned = score + (treasuresFound * 10) + (health > 50 ? 50 : 0);
        onGameComplete(score, xpEarned);
      }, 1000);
    }
  };

  const restartGame = () => {
    setPlayerPos({ x: 5, y: 5 });
    setScore(0);
    setHealth(100);
    setQuestionsAnswered(0);
    setTreasuresFound(0);
    setGameComplete(false);
    setCurrentQuestion(null);
    setShowQuestionModal(false);
    setPlayerDirection('down');
    
    // Regenerate items
    const questions = generateQuestions();
    const items: GameItem[] = [];

    questions.forEach((question, index) => {
      let pos: Position;
      do {
        pos = {
          x: Math.floor(Math.random() * GRID_SIZE),
          y: Math.floor(Math.random() * GRID_SIZE)
        };
      } while (
        (pos.x === 5 && pos.y === 5) ||
        items.some(item => item.position.x === pos.x && item.position.y === pos.y)
      );

      items.push({
        id: `question-${index}`,
        position: pos,
        type: 'question',
        content: question,
        collected: false
      });
    });

    setGameItems(items);
  };

  const getPlayerSprite = () => {
    const sprites = {
      up: '🧑‍🎓',
      down: '🧑‍🎓',
      left: '🧑‍🎓',
      right: '🧑‍🎓'
    };
    return sprites[playerDirection];
  };

  const getItemSprite = (item: GameItem) => {
    if (item.collected) return '';
    
    switch (item.type) {
      case 'question': return '❓';
      case 'treasure': return '💎';
      case 'obstacle': return '🌳';
      case 'npc': return '👨‍🏫';
      default: return '';
    }
  };

  if (gameComplete) {
    const percentage = (questionsAnswered / TOTAL_QUESTIONS) * 100;
    const getMessage = () => {
      if (percentage >= 80) return t.excellent;
      if (percentage >= 60) return t.good;
      return t.tryAgain;
    };

    return (
      <div className={`min-h-screen p-4 ${isLiteMode ? 'bg-gray-100 dark:bg-gray-900' : 'bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 dark:from-gray-900 dark:via-green-900 dark:to-blue-900'}`}>
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-yellow-300 bg-gradient-to-br from-yellow-50 to-orange-50">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-yellow-800 mb-2">{t.gameComplete}</h2>
              <p className="text-xl text-yellow-700 mb-6">{getMessage()}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg border-2 border-yellow-200">
                  <Target className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                  <p className="font-medium">{t.finalScore}</p>
                  <p className="text-2xl font-bold text-blue-600">{score}</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-2 border-yellow-200">
                  <BookOpen className="w-5 h-5 text-green-600 mx-auto mb-2" />
                  <p className="font-medium">{t.questions}</p>
                  <p className="text-2xl font-bold text-green-600">{questionsAnswered}/{TOTAL_QUESTIONS}</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-2 border-yellow-200">
                  <Sparkles className="w-5 h-5 text-purple-600 mx-auto mb-2" />
                  <p className="font-medium">{t.treasures}</p>
                  <p className="text-2xl font-bold text-purple-600">{treasuresFound}</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-2 border-yellow-200">
                  <Heart className="w-5 h-5 text-red-600 mx-auto mb-2" />
                  <p className="font-medium">{t.health}</p>
                  <p className="text-2xl font-bold text-red-600">{health}%</p>
                </div>
              </div>
              
              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={restartGame}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90"
                >
                  {t.playAgain}
                </Button>
                <Button 
                  onClick={onExit}
                  variant="outline"
                  className="border-2 border-gray-300"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t.backToDashboard}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen p-4 ${isLiteMode ? 'bg-gray-100 dark:bg-gray-900' : 'bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 dark:from-gray-900 dark:via-green-900 dark:to-blue-900'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <Button 
            onClick={onExit}
            variant="outline"
            className="flex items-center gap-2 border-2 border-gray-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Exit Adventure
          </Button>
          
          <div className="flex items-center gap-4">
            <Badge className="bg-red-500 text-white flex items-center gap-1">
              <Heart className="w-4 h-4" />
              {health}%
            </Badge>
            <Badge className="bg-blue-500 text-white flex items-center gap-1">
              <Star className="w-4 h-4" />
              {score}
            </Badge>
            <Badge className="bg-green-500 text-white flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              {questionsAnswered}/{TOTAL_QUESTIONS}
            </Badge>
            <Badge className="bg-purple-500 text-white flex items-center gap-1">
              <Sparkles className="w-4 h-4" />
              {treasuresFound}
            </Badge>
          </div>
        </div>

        {/* Game Area */}
        <div className="flex gap-4">
          {/* Game Grid */}
          <Card className="flex-1 border-2 border-green-300">
            <CardContent className="p-4">
              <div className="grid grid-cols-15 gap-1 aspect-square bg-green-200 p-2 rounded-lg"
                   style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))` }}>
                {Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, index) => {
                  const x = index % GRID_SIZE;
                  const y = Math.floor(index / GRID_SIZE);
                  const isPlayer = playerPos.x === x && playerPos.y === y;
                  const item = gameItems.find(item => 
                    item.position.x === x && item.position.y === y && !item.collected
                  );

                  return (
                    <div 
                      key={index}
                      className={`aspect-square flex items-center justify-center text-xs sm:text-sm rounded ${
                        isPlayer ? 'bg-yellow-300 border-2 border-yellow-500' : 
                        item ? 'bg-blue-100' : 'bg-green-300'
                      }`}
                    >
                      {isPlayer ? getPlayerSprite() : item ? getItemSprite(item) : ''}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Controls */}
          <div className="w-64">
            <Card className="border-2 border-blue-300 mb-4">
              <CardHeader>
                <CardTitle className="text-lg">Game Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">{t.health}</span>
                    <span className="text-sm font-bold">{health}%</span>
                  </div>
                  <Progress value={health} className="h-2" />
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-blue-50 p-2 rounded">
                    <div className="font-bold text-blue-600">{score}</div>
                    <div className="text-xs">{t.score}</div>
                  </div>
                  <div className="bg-green-50 p-2 rounded">
                    <div className="font-bold text-green-600">{questionsAnswered}/{TOTAL_QUESTIONS}</div>
                    <div className="text-xs">{t.questions}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-300">
              <CardHeader>
                <CardTitle className="text-lg">Controls</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div></div>
                  <Button 
                    onClick={() => movePlayer('up')}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 h-10"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </Button>
                  <div></div>
                  
                  <Button 
                    onClick={() => movePlayer('left')}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 h-10"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                  <div></div>
                  <Button 
                    onClick={() => movePlayer('right')}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 h-10"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  
                  <div></div>
                  <Button 
                    onClick={() => movePlayer('down')}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 h-10"
                  >
                    <ArrowDown className="w-4 h-4" />
                  </Button>
                  <div></div>
                </div>
                
                <p className="text-xs text-gray-600 text-center">{t.moveInstructions}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Question Modal */}
        {showQuestionModal && currentQuestion && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="max-w-md w-full border-4 border-yellow-300 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900">
              <CardHeader>
                <CardTitle className="text-center text-xl text-yellow-800 dark:text-yellow-200">
                  {t.questionFound}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-4 text-gray-800 dark:text-gray-200">{currentQuestion.question}</h3>
                  <div className="space-y-2">
                    {currentQuestion.options.map((option, index) => (
                      <Button
                        key={index}
                        onClick={() => handleAnswerSubmit(index)}
                        variant="outline"
                        className="w-full text-left justify-start p-4 border-2 hover:bg-blue-50 dark:hover:bg-blue-900 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600"
                      >
                        {String.fromCharCode(65 + index)}. {option}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}