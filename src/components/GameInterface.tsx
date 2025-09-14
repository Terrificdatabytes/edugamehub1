import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  ArrowLeft, 
  Trophy, 
  Clock, 
  Star, 
  Zap, 
  Target,
  CheckCircle,
  XCircle,
  RotateCcw,
  Award
} from 'lucide-react';

interface GameInterfaceProps {
  subject: any;
  language: string;
  onExit: () => void;
  onGameComplete: (score: number, xp: number) => void;
}

export function GameInterface({ subject, language, onExit, onGameComplete }: GameInterfaceProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  const translations = {
    en: {
      question: 'Question',
      of: 'of',
      timeLeft: 'Time Left',
      score: 'Score',
      streak: 'Streak',
      correct: 'Correct!',
      incorrect: 'Incorrect!',
      nextQuestion: 'Next Question',
      gameComplete: 'Game Complete!',
      finalScore: 'Final Score',
      xpEarned: 'XP Earned',
      playAgain: 'Play Again',
      backToDashboard: 'Back to Dashboard',
      excellent: 'Excellent!',
      good: 'Good Job!',
      keepTrying: 'Keep Trying!',
      streakBonus: 'Streak Bonus',
      perfectScore: 'Perfect Score!',
      submitAnswer: 'Submit Answer'
    },
    hi: {
      question: 'प्रश्न',
      of: 'का',
      timeLeft: 'समय बचा',
      score: 'स्कोर',
      streak: 'लकीर',
      correct: 'सही!',
      incorrect: 'गलत!',
      nextQuestion: 'अगला प्रश्न',
      gameComplete: 'खेल पूरा!',
      finalScore: 'अंतिम स्कोर',
      xpEarned: 'एक्सपी अर्जित',
      playAgain: 'फिर से खेलें',
      backToDashboard: 'डैशबोर्ड पर वापस',
      excellent: 'उत्कृष्ट!',
      good: 'अच्छा काम!',
      keepTrying: 'कोशिश करते रहें!',
      streakBonus: 'लकीर बोनस',
      perfectScore: 'परफेक्ट स्कोर!',
      submitAnswer: 'उत्तर जमा करें'
    },
    es: {
      question: 'Pregunta',
      of: 'de',
      timeLeft: 'Tiempo Restante',
      score: 'Puntuación',
      streak: 'Racha',
      correct: '¡Correcto!',
      incorrect: '¡Incorrecto!',
      nextQuestion: 'Siguiente Pregunta',
      gameComplete: '¡Juego Completado!',
      finalScore: 'Puntuación Final',
      xpEarned: 'XP Ganado',
      playAgain: 'Jugar de Nuevo',
      backToDashboard: 'Volver al Panel',
      excellent: '¡Excelente!',
      good: '¡Buen Trabajo!',
      keepTrying: '¡Sigue Intentando!',
      streakBonus: 'Bonus de Racha',
      perfectScore: '¡Puntuación Perfecta!',
      submitAnswer: 'Enviar Respuesta'
    }
  };

  const t = translations[language as keyof typeof translations];

  // Generate math questions based on subject
  const generateQuestions = () => {
    const questions = [];
    for (let i = 0; i < 10; i++) {
      if (subject.id === 'math') {
        const num1 = Math.floor(Math.random() * 20) + 1;
        const num2 = Math.floor(Math.random() * 20) + 1;
        const operations = ['+', '-', '×', '÷'];
        const operation = operations[Math.floor(Math.random() * 4)];
        
        let question, correctAnswer;
        switch (operation) {
          case '+':
            question = `${num1} + ${num2} = ?`;
            correctAnswer = num1 + num2;
            break;
          case '-':
            question = `${Math.max(num1, num2)} - ${Math.min(num1, num2)} = ?`;
            correctAnswer = Math.max(num1, num2) - Math.min(num1, num2);
            break;
          case '×':
            const smallNum1 = Math.floor(Math.random() * 10) + 1;
            const smallNum2 = Math.floor(Math.random() * 10) + 1;
            question = `${smallNum1} × ${smallNum2} = ?`;
            correctAnswer = smallNum1 * smallNum2;
            break;
          case '÷':
            const divisor = Math.floor(Math.random() * 5) + 2;
            const dividend = divisor * (Math.floor(Math.random() * 10) + 1);
            question = `${dividend} ÷ ${divisor} = ?`;
            correctAnswer = dividend / divisor;
            break;
          default:
            question = `${num1} + ${num2} = ?`;
            correctAnswer = num1 + num2;
        }

        // Generate wrong answers
        const wrongAnswers = [];
        for (let j = 0; j < 3; j++) {
          let wrongAnswer;
          do {
            wrongAnswer = correctAnswer + (Math.floor(Math.random() * 10) - 5);
          } while (wrongAnswer === correctAnswer || wrongAnswers.includes(wrongAnswer) || wrongAnswer < 0);
          wrongAnswers.push(wrongAnswer);
        }

        const allAnswers = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
        const correctIndex = allAnswers.indexOf(correctAnswer);

        questions.push({
          question,
          answers: allAnswers,
          correctAnswer: correctIndex,
          explanation: `The correct answer is ${correctAnswer}`
        });
      } else {
        // Physics questions
        const physicsQuestions = [
          {
            question: "What is the unit of force?",
            answers: ["Newton", "Joule", "Watt", "Pascal"],
            correctAnswer: 0,
            explanation: "Force is measured in Newtons (N)"
          },
          {
            question: "Speed of light in vacuum is:",
            answers: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁷ m/s", "3 × 10⁹ m/s"],
            correctAnswer: 0,
            explanation: "The speed of light is approximately 3 × 10⁸ m/s"
          }
        ];
        questions.push(physicsQuestions[i % physicsQuestions.length]);
      }
    }
    return questions;
  };

  const [questions] = useState(() => generateQuestions());

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !showResult && !gameComplete) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleAnswer(-1); // Time up, wrong answer
    }
  }, [timeLeft, showResult, gameComplete]);

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return;

    const isCorrect = answerIndex === questions[currentQuestion].correctAnswer;
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    if (isCorrect) {
      const basePoints = 10;
      const timeBonus = Math.floor(timeLeft / 3);
      const streakBonus = streak * 2;
      const totalPoints = basePoints + timeBonus + streakBonus;
      
      setScore(score + totalPoints);
      setStreak(streak + 1);
      setBestStreak(Math.max(bestStreak, streak + 1));
    } else {
      setStreak(0);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeLeft(30);
    } else {
      // Game complete
      setGameComplete(true);
      const xpEarned = score + (bestStreak * 5);
      onGameComplete(score, xpEarned);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(30);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameComplete(false);
    setStreak(0);
    setBestStreak(0);
  };

  const getScoreMessage = () => {
    const percentage = (score / (questions.length * 10)) * 100;
    if (percentage >= 90) return t.excellent;
    if (percentage >= 70) return t.good;
    return t.keepTrying;
  };

  if (gameComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-yellow-300 bg-gradient-to-br from-yellow-50 to-orange-50">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-yellow-800 mb-2">{t.gameComplete}</h2>
              <p className="text-xl text-yellow-700 mb-6">{getScoreMessage()}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg border-2 border-yellow-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">{t.finalScore}</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-600">{score}</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-2 border-yellow-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-purple-600" />
                    <span className="font-medium">{t.xpEarned}</span>
                  </div>
                  <p className="text-2xl font-bold text-purple-600">{score + (bestStreak * 5)}</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-2 border-yellow-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-orange-600" />
                    <span className="font-medium">Best {t.streak}</span>
                  </div>
                  <p className="text-2xl font-bold text-orange-600">{bestStreak}</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-2 border-yellow-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-green-600" />
                    <span className="font-medium">Accuracy</span>
                  </div>
                  <p className="text-2xl font-bold text-green-600">
                    {Math.round(((score / 10) / questions.length) * 100)}%
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={restartGame}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button 
            onClick={onExit}
            variant="outline"
            className="flex items-center gap-2 border-2 border-gray-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Exit Game
          </Button>
          
          <div className="flex items-center gap-4">
            <Badge className="bg-blue-500 text-white">
              {t.question} {currentQuestion + 1} {t.of} {questions.length}
            </Badge>
            <Badge className="bg-green-500 text-white">
              {t.score}: {score}
            </Badge>
            {streak > 0 && (
              <Badge className="bg-orange-500 text-white">
                {t.streak}: {streak}
              </Badge>
            )}
          </div>
        </div>

        {/* Game Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="border-2 border-blue-200">
            <CardContent className="p-4 text-center">
              <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="font-medium">{t.timeLeft}</p>
              <p className="text-2xl font-bold text-blue-600">{timeLeft}s</p>
              <Progress value={(timeLeft / 30) * 100} className="mt-2 h-2" />
            </CardContent>
          </Card>
          
          <Card className="border-2 border-purple-200">
            <CardContent className="p-4 text-center">
              <Target className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <p className="font-medium">{t.score}</p>
              <p className="text-2xl font-bold text-purple-600">{score}</p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-orange-200">
            <CardContent className="p-4 text-center">
              <Zap className="w-6 h-6 text-orange-600 mx-auto mb-2" />
              <p className="font-medium">{t.streak}</p>
              <p className="text-2xl font-bold text-orange-600">{streak}</p>
            </CardContent>
          </Card>
        </div>

        {/* Question Card */}
        <Card className={`border-2 ${subject.color.replace('bg-', 'border-').replace('500', '300')}`}>
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {questions[currentQuestion].answers.map((answer, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showResult}
                  className={`p-6 text-lg h-auto transition-all ${
                    showResult
                      ? index === questions[currentQuestion].correctAnswer
                        ? 'bg-green-500 text-white border-green-600'
                        : index === selectedAnswer
                        ? 'bg-red-500 text-white border-red-600'
                        : 'bg-gray-100 text-gray-500'
                      : `${subject.color} text-white hover:opacity-90`
                  }`}
                  variant={showResult ? "default" : "outline"}
                >
                  {answer}
                </Button>
              ))}
            </div>

            {showResult && (
              <div className="text-center">
                <div className={`inline-flex items-center gap-2 p-4 rounded-lg mb-4 ${
                  selectedAnswer === questions[currentQuestion].correctAnswer
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {selectedAnswer === questions[currentQuestion].correctAnswer ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <XCircle className="w-6 h-6" />
                  )}
                  <span className="font-bold text-lg">
                    {selectedAnswer === questions[currentQuestion].correctAnswer ? t.correct : t.incorrect}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{questions[currentQuestion].explanation}</p>
                
                <Button 
                  onClick={nextQuestion}
                  className={`${subject.color} text-white hover:opacity-90`}
                >
                  {currentQuestion < questions.length - 1 ? t.nextQuestion : t.gameComplete}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}