import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { CompatibilityModule } from './CompatibilityModule';
import { TroubleshootModule } from './TroubleshootModule';
import { 
  PlusCircle, 
  Upload, 
  Users, 
  BarChart3, 
  Settings, 
  FileText,
  Gamepad2,
  Brain,
  Monitor,
  BookOpen,
  Target,
  Clock,
  CheckCircle,
  AlertCircle,
  HelpCircle
} from 'lucide-react';

interface TeacherDashboardProps {
  user: any;
  language: string;
  isOffline: boolean;
  isLiteMode: boolean;
  onLiteModeToggle: (enabled: boolean) => void;
}

export function TeacherDashboard({ user, language, isOffline, isLiteMode, onLiteModeToggle }: TeacherDashboardProps) {
  const [activeModule, setActiveModule] = useState('sandbox');

  const translations = {
    en: {
      sandbox: 'Sandbox Module',
      analytics: 'Student Analytics',
      content: 'Content Management',
      classes: 'My Classes',
      createGame: 'Create New Game',
      uploadContent: 'Upload Content',
      aiConverter: 'AI Game Converter',
      templates: 'Game Templates',
      activeStudents: 'Active Students',
      completedGames: 'Games Completed',
      avgScore: 'Average Score',
      engagement: 'Engagement Rate',
      class: 'Class',
      students: 'students',
      progress: 'Progress',
      performance: 'Performance',
      compatibility: 'Compatibility',
      troubleshoot: 'Troubleshoot'
    },
    hi: {
      sandbox: 'सैंडबॉक्स मॉड्यूल',
      analytics: 'छात्र विश्लेषण',
      content: 'सामग्री प्रबंधन',
      classes: 'मेरी कक्षाएं',
      createGame: 'नया गेम बनाएं',
      uploadContent: 'सामग्री अपलोड करें',
      aiConverter: 'एआई गेम कनवर्टर',
      templates: 'गेम टेम्प्लेट',
      activeStudents: 'सक्रिय छात्र',
      completedGames: 'पूर्ण गेम',
      avgScore: 'औसत स्कोर',
      engagement: 'सहभागिता दर',
      class: 'कक्षा',
      students: 'छात्र',
      progress: 'प्रगति',
      performance: 'प्रदर्शन',
      compatibility: 'संगतता',
      troubleshoot: 'समस्या निवारण'
    },
    ta: {
      sandbox: 'சோதனை தொகுதி',
      analytics: 'மாணவர் विश्लेषण',
      content: 'உள்ளடக்க நிர्வाహம்',
      classes: 'என் வகுप்पुகள்',
      createGame: 'புதிய விளையाட्टு உருவாक्கु',
      uploadContent: 'உள्ளடक்கम் பதिவேற்று',
      aiConverter: 'AI விளையাட்டु மாற்றी',
      templates: 'விளையाட்டு வார्पुகள्',
      activeStudents: 'सक्रिय माणवर्गล्',
      completedGames: 'पूर्ण विळायाट्टुगल्',
      avgScore: 'सरासरी अङ्कम्',
      engagement: 'सहभागिता दर',
      class: 'वगुप्पु',
      students: 'मাणवर्गल्',
      progress: 'मुन्नेट्रम्',
      performance: 'सेयल्तिறन्',
      compatibility: 'पोरुत्तम्',
      troubleshoot: 'पिरच्चनै तीर्वु'
    },
    es: {
      sandbox: 'Módulo Sandbox',
      analytics: 'Análisis de Estudiantes',
      content: 'Gestión de Contenido',
      classes: 'Mis Clases',
      createGame: 'Crear Nuevo Juego',
      uploadContent: 'Subir Contenido',
      aiConverter: 'Convertidor AI de Juegos',
      templates: 'Plantillas de Juegos',
      activeStudents: 'Estudiantes Activos',
      completedGames: 'Juegos Completados',
      avgScore: 'Puntuación Promedio',
      engagement: 'Tasa de Compromiso',
      class: 'Clase',
      students: 'estudiantes',
      progress: 'Progreso',
      performance: 'Rendimiento',
      compatibility: 'Compatibilidad',
      troubleshoot: 'Solución de Problemas'
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const teacherStats = [
    { label: t.activeStudents, value: '127', icon: Users, color: 'text-blue-600' },
    { label: t.completedGames, value: '43', icon: CheckCircle, color: 'text-green-600' },
    { label: t.avgScore, value: '78%', icon: Target, color: 'text-purple-600' },
    { label: t.engagement, value: '92%', icon: BarChart3, color: 'text-orange-600' },
  ];

  const gameTemplates = [
    {
      id: 1,
      name: 'Math Quiz Challenge',
      type: 'Quiz',
      subject: 'Mathematics',
      difficulty: 'Medium',
      icon: Gamepad2,
      color: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'Physics Simulation',
      type: 'Simulation',
      subject: 'Physics',
      difficulty: 'Hard',
      icon: Monitor,
      color: 'bg-purple-500'
    },
    {
      id: 3,
      name: 'Chemistry Lab',
      type: 'Interactive',
      subject: 'Chemistry',
      difficulty: 'Easy',
      icon: Brain,
      color: 'bg-green-500'
    }
  ];

  const classes = [
    {
      id: 1,
      name: 'Grade 8 Science',
      students: 32,
      progress: 75,
      lastActive: '2 hours ago',
      status: 'active'
    },
    {
      id: 2,
      name: 'Grade 10 Math',
      students: 28,
      progress: 60,
      lastActive: '1 day ago',
      status: 'active'
    },
    {
      id: 3,
      name: 'Grade 12 Physics',
      students: 24,
      progress: 45,
      lastActive: '3 days ago',
      status: 'inactive'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Teacher Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {teacherStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-700 border-2 border-purple-200 dark:border-gray-600">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <IconComponent className={`w-5 h-5 ${stat.color}`} />
                  <span className="text-sm text-gray-600">{stat.label}</span>
                </div>
                <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Teacher Modules */}
      <Tabs value={activeModule} onValueChange={setActiveModule} className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-gray-600">
          <TabsTrigger value="sandbox" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
            <Settings className="w-4 h-4 mr-1" />
            <span className="hidden sm:inline">{t.sandbox}</span>
          </TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
            <BarChart3 className="w-4 h-4 mr-1" />
            <span className="hidden sm:inline">{t.analytics}</span>
          </TabsTrigger>
          <TabsTrigger value="content" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
            <FileText className="w-4 h-4 mr-1" />
            <span className="hidden sm:inline">{t.content}</span>
          </TabsTrigger>
          <TabsTrigger value="compatibility" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
            <Monitor className="w-4 h-4 mr-1" />
            <span className="hidden sm:inline">{t.compatibility}</span>
          </TabsTrigger>
          <TabsTrigger value="troubleshoot" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
            <HelpCircle className="w-4 h-4 mr-1" />
            <span className="hidden sm:inline">{t.troubleshoot}</span>
          </TabsTrigger>
        </TabsList>

        {/* Sandbox Module */}
        <TabsContent value="sandbox" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Create New Game */}
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <PlusCircle className="w-6 h-6" />
                  {t.createGame}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  <Gamepad2 className="w-4 h-4 mr-2" />
                  Start from Template
                </Button>
                <Button variant="outline" className="w-full border-2 border-blue-200">
                  <Brain className="w-4 h-4 mr-2" />
                  Custom Game Builder
                </Button>
              </CardContent>
            </Card>

            {/* AI Content Converter */}
            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-900">
                  <Brain className="w-6 h-6" />
                  {t.aiConverter}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  disabled={isOffline}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {t.uploadContent}
                </Button>
                {isOffline && (
                  <p className="text-sm text-orange-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    AI features require internet connection
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Game Templates */}
          <Card className="border-2 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-900">
                <BookOpen className="w-6 h-6" />
                {t.templates}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {gameTemplates.map((template) => {
                  const IconComponent = template.icon;
                  return (
                    <Card key={template.id} className="border-2 border-gray-200 hover:border-purple-300 transition-colors cursor-pointer">
                      <CardContent className="p-4">
                        <div className={`w-12 h-12 ${template.color} rounded-lg flex items-center justify-center mb-3`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold mb-2">{template.name}</h3>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p>Type: {template.type}</p>
                          <p>Subject: {template.subject}</p>
                          <Badge variant="outline">{template.difficulty}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics Module */}
        <TabsContent value="analytics" className="space-y-6">
          <Card className="border-2 border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-900">
                <Users className="w-6 h-6" />
                {t.classes}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {classes.map((classItem) => (
                  <Card key={classItem.id} className="border border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-bold">{classItem.name}</h3>
                          <p className="text-sm text-gray-600">{classItem.students} {t.students}</p>
                        </div>
                        <Badge 
                          variant={classItem.status === 'active' ? 'default' : 'secondary'}
                          className={classItem.status === 'active' ? 'bg-green-500' : ''}
                        >
                          {classItem.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{t.progress}</span>
                          <span>{classItem.progress}%</span>
                        </div>
                        <Progress value={classItem.progress} className="h-2" />
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Last active: {classItem.lastActive}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Content Management */}
        <TabsContent value="content" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-pink-900">
                  <FileText className="w-6 h-6" />
                  Content Library
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                    <span className="font-medium">Math Games Collection</span>
                    <Badge>12 games</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                    <span className="font-medium">Physics Simulations</span>
                    <Badge>8 games</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                    <span className="font-medium">Chemistry Labs</span>
                    <Badge>6 games</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-indigo-900">
                  <Monitor className="w-6 h-6" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload New Content
                </Button>
                <Button variant="outline" className="w-full border-2 border-indigo-200">
                  <FileText className="w-4 h-4 mr-2" />
                  Manage Existing
                </Button>
                <Button variant="outline" className="w-full border-2 border-indigo-200">
                  <Settings className="w-4 h-4 mr-2" />
                  Content Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Compatibility Module */}
        <TabsContent value="compatibility">
          <CompatibilityModule
            language={language}
            userRole="teacher"
            onLiteModeToggle={onLiteModeToggle}
            isLiteMode={isLiteMode}
          />
        </TabsContent>

        {/* Troubleshoot Module */}
        <TabsContent value="troubleshoot">
          <TroubleshootModule
            language={language}
            userRole="teacher"
            isOffline={isOffline}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}