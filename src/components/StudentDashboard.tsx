import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CompatibilityModule } from './CompatibilityModule';
import { TroubleshootModule } from './TroubleshootModule';
import { 
  Play, 
  Download, 
  Trophy, 
  Star, 
  Target, 
  Zap, 
  BookOpen,
  Calculator,
  Atom,
  Microscope,
  Rocket,
  Brain,
  Award,
  TrendingUp,
  Monitor,
  HelpCircle,
  TreePine,
  Clock
} from 'lucide-react';

interface StudentDashboardProps {
  user: any;
  language: string;
  isOffline: boolean;
  isLiteMode: boolean;
  onLiteModeToggle: (enabled: boolean) => void;
  onGameLaunch: (subject: any) => void;
}

export function StudentDashboard({ user, language, isOffline, isLiteMode, onLiteModeToggle, onGameLaunch }: StudentDashboardProps) {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const translations = {
    en: {
      modules: 'Learning Modules',
      progress: 'Your Progress',
      achievements: 'Achievements',
      leaderboard: 'Leaderboard',
      downloadOffline: 'Download for Offline',
      playNow: 'Play Now',
      downloaded: 'Downloaded',
      mathematics: 'Mathematics',
      physics: 'Physics',
      chemistry: 'Chemistry',
      biology: 'Biology',
      weeklyGoal: 'Weekly Goal',
      dailyStreak: 'Daily Streak',
      totalScore: 'Total Score',
      rank: 'Global Rank',
      compatibility: 'Compatibility',
      troubleshoot: 'Troubleshoot',
      learning: 'Learning',
      history: 'History'
    },
    hi: {
      modules: 'शिक्षण मॉड्यूल',
      progress: 'आपकी प्रगति',
      achievements: 'उपलब्धियां',
      leaderboard: 'लीडरबोर्ड',
      downloadOffline: 'ऑफलाइन डाउनलोड',
      playNow: 'अभी खेलें',
      downloaded: 'डाउनलोड हो गया',
      mathematics: 'गणित',
      physics: 'भौतिकी',
      chemistry: 'रसायन विज्ञान',
      biology: 'जीव विज्ञान',
      weeklyGoal: 'साप्ताहिक लक्ष्य',
      dailyStreak: 'दैनिक लकीर',
      totalScore: 'कुल स्कोर',
      rank: 'वैश्विक रैंक',
      compatibility: 'संगतता',
      troubleshoot: 'समस्या निवारण',
      learning: 'सीखना',
      history: 'इतिहास'
    },
    ta: {
      modules: 'கற்றல் தொகுதிகள்',
      progress: 'உங்கள் முன்னேற்றம்',
      achievements: 'சாதனைகள்',
      leaderboard: 'தலைமை பலகை',
      downloadOffline: 'ஆஃப்லைனுக்கு பதிவிறக்கவும்',
      playNow: 'இப்போது விளையாடு',
      downloaded: 'பதிவிறக்கப்பட்டது',
      mathematics: 'கணிதம்',
      physics: 'இயற்பியல்',
      chemistry: 'வேதியியல்',
      biology: 'உயிரியல்',
      weeklyGoal: 'வாராந்திர இலக்கு',
      dailyStreak: 'தினசரி தொடர்',
      totalScore: 'மொத்த மதிப்பெண்',
      rank: 'உலகளாவிய தரவரிசை',
      compatibility: 'பொருத்தம்',
      troubleshoot: 'பிரச்சனை தீர்வு',
      learning: 'கற்றல்',
      history: 'வரலாறு'
    },
    es: {
      modules: 'Módulos de Aprendizaje',
      progress: 'Tu Progreso',
      achievements: 'Logros',
      leaderboard: 'Tabla de Posiciones',
      downloadOffline: 'Descargar sin Conexión',
      playNow: 'Jugar Ahora',
      downloaded: 'Descargado',
      mathematics: 'Matemáticas',
      physics: 'Física',
      chemistry: 'Química',
      biology: 'Biología',
      weeklyGoal: 'Meta Semanal',
      dailyStreak: 'Racha Diaria',
      totalScore: 'Puntuación Total',
      rank: 'Ranking Global',
      compatibility: 'Compatibilidad',
      troubleshoot: 'Solución de Problemas',
      learning: 'Aprendizaje',
      history: 'Historia'
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const subjects = [
    {
      id: 'math',
      name: t.mathematics,
      icon: Calculator,
      color: 'bg-blue-500',
      progress: 75,
      games: 20,
      downloaded: true,
      image: 'https://images.unsplash.com/photo-1685358268305-c621b38e75d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGVkdWNhdGlvbiUyMGdhbWUlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NTc2MDE3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'physics',
      name: t.physics,
      icon: Atom,
      color: 'bg-purple-500',
      progress: 60,
      games: 20,
      downloaded: false,
      image: 'https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVtJTIwc2NpZW5jZSUyMGVkdWNhdGlvbiUyMGxhYnxlbnwxfHx8fDE3NTc2MDE3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'chemistry',
      name: t.chemistry,
      icon: Microscope,
      color: 'bg-green-500',
      progress: 45,
      games: 20,
      downloaded: true,
      image: 'https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVtJTIwc2NpZW5jZSUyMGVkdWNhdGlvbiUyMGxhYnxlbnwxfHx8fDE3NTc2MDE3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'biology',
      name: t.biology,
      icon: Brain,
      color: 'bg-pink-500',
      progress: 30,
      games: 20,
      downloaded: false,
      image: 'https://images.unsplash.com/photo-1611581719398-08fe2eb020c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMHNjaG9vbCUyMGNoaWxkcmVuJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzU3NjAxNzg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'history',
      name: t.history,
      icon: Clock,
      color: 'bg-orange-500',
      progress: 20,
      games: 20,
      downloaded: false,
      image: 'https://images.unsplash.com/photo-1611581719398-08fe2eb020c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMHNjaG9vbCUyMGNoaWxkcmVuJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzU3NjAxNzg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const achievements = [
    { id: 1, name: 'First Win', icon: Trophy, unlocked: true },
    { id: 2, name: 'Speed Demon', icon: Zap, unlocked: true },
    { id: 3, name: 'Scholar', icon: BookOpen, unlocked: false },
    { id: 4, name: 'Perfectionist', icon: Star, unlocked: false },
  ];

  const stats = [
    { label: t.weeklyGoal, value: '7/10', progress: 70, icon: Target },
    { label: t.dailyStreak, value: '5 days', progress: 83, icon: Zap },
    { label: t.totalScore, value: '2,450', progress: 100, icon: Award },
    { label: t.rank, value: '#42', progress: 95, icon: TrendingUp },
  ];

  return (
    <div className="space-y-6">
      {/* Progress Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 border-2 border-blue-200 dark:border-gray-600">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</span>
                </div>
                <p className="text-xl font-bold text-blue-900 dark:text-blue-100">{stat.value}</p>
                <Progress value={stat.progress} className="mt-2 h-2" />
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Tabbed Interface */}
      <Tabs defaultValue="learning" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="learning" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            {t.learning}
          </TabsTrigger>
          <TabsTrigger value="compatibility" className="flex items-center gap-2">
            <Monitor className="w-4 h-4" />
            {t.compatibility}
          </TabsTrigger>
          <TabsTrigger value="troubleshoot" className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            {t.troubleshoot}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="learning" className="space-y-6">
          {/* Learning Modules */}
          <Card className="border-2 border-blue-200 dark:border-gray-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900 dark:text-blue-100">
                <BookOpen className="w-6 h-6" />
                {t.modules}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {subjects.map((subject) => {
                  const IconComponent = subject.icon;
                  return (
                    <Card 
                      key={subject.id} 
                      className={`relative overflow-hidden border-2 cursor-pointer transition-all hover:scale-105 dark:bg-gray-800 ${
                        selectedSubject === subject.id ? 'border-blue-500 shadow-lg' : 'border-gray-200 dark:border-gray-600'
                      }`}
                      onClick={() => setSelectedSubject(subject.id)}
                    >
                      <div className="relative">
                        {!isLiteMode && (
                          <ImageWithFallback
                            src={subject.image}
                            alt={subject.name}
                            className="w-full h-32 object-cover"
                          />
                        )}
                        <div className={`${!isLiteMode ? 'absolute inset-0' : 'h-32'} ${subject.color} ${!isLiteMode ? 'bg-opacity-80' : ''} flex items-center justify-center`}>
                          <IconComponent className="w-12 h-12 text-white" />
                        </div>
                        {subject.downloaded && (
                          <Badge className="absolute top-2 right-2 bg-green-500 text-white">
                            <Download className="w-3 h-3 mr-1" />
                            {t.downloaded}
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold text-lg mb-2 dark:text-white">{subject.name}</h3>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-gray-600 dark:text-gray-300">{subject.games} questions</span>
                          <span className="text-sm font-medium dark:text-gray-200">{subject.progress}% complete</span>
                        </div>
                        <Progress value={subject.progress} className="mb-3 h-2" />
                        <div className="flex gap-2">
                          <Button 
                            className={`flex-1 ${subject.color} text-white hover:opacity-90`}
                            disabled={isOffline && !subject.downloaded}
                            onClick={(e) => {
                              e.stopPropagation();
                              onGameLaunch(subject);
                            }}
                          >
                            <Play className="w-4 h-4 mr-1" />
                            {t.playNow}
                          </Button>
                          {!subject.downloaded && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              disabled={isOffline}
                              className="border-2 border-blue-200 dark:border-gray-600"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Download className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="border-2 border-purple-200 dark:border-gray-600 bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-900 dark:text-purple-100">
                <Trophy className="w-6 h-6" />
                {t.achievements}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {achievements.map((achievement) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div 
                      key={achievement.id}
                      className={`p-4 rounded-lg border-2 text-center ${
                        achievement.unlocked 
                          ? 'bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 border-yellow-300 dark:border-yellow-600' 
                          : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600'
                      }`}
                    >
                      <IconComponent 
                        className={`w-8 h-8 mx-auto mb-2 ${
                          achievement.unlocked ? 'text-yellow-600 dark:text-yellow-400' : 'text-gray-400'
                        }`} 
                      />
                      <p className={`font-medium text-sm ${
                        achievement.unlocked ? 'text-yellow-800 dark:text-yellow-200' : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        {achievement.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compatibility">
          <CompatibilityModule
            language={language}
            userRole="student"
            onLiteModeToggle={onLiteModeToggle}
            isLiteMode={isLiteMode}
          />
        </TabsContent>

        <TabsContent value="troubleshoot">
          <TroubleshootModule
            language={language}
            userRole="student"
            isOffline={isOffline}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}