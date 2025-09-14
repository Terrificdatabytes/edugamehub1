import React, { useState, useEffect } from 'react';
import { StudentDashboard } from './components/StudentDashboard';
import { TeacherDashboard } from './components/TeacherDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { PokemonGame } from './components/PokemonGame';
import { LoginScreen } from './components/LoginScreen';
import { LanguageToggle } from './components/LanguageToggle';
import { ThemeToggle } from './components/ThemeToggle';
import { OfflineStatus } from './components/OfflineStatus';
import { 
  BookOpen, 
  LogOut
} from 'lucide-react';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'student' | 'teacher' | 'admin' | null>(null);
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isLiteMode, setIsLiteMode] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [currentGame, setCurrentGame] = useState<any>(null);
  const [gameActive, setGameActive] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  // Mock offline status simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOffline(Math.random() > 0.8);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const translations = {
    en: {
      appTitle: 'EduGameHub',
      logout: 'Logout',
      welcome: 'Welcome back'
    },
    hi: {
      appTitle: 'एडुगेमहब',
      logout: 'लॉगआउट',
      welcome: 'वापसी पर स्वागत'
    },
    ta: {
      appTitle: 'கற்றல் கேம் மையம்',
      logout: 'வெளியேறு',
      welcome: 'மீண்டும் வரவேற்கிறோம்'
    },
    es: {
      appTitle: 'EduGameHub',
      logout: 'Cerrar Sesión',
      welcome: 'Bienvenido de nuevo'
    }
  };

  const t = translations[language as keyof typeof translations];

  // Authentication handlers
  const handleLogin = (user: any, role: 'student' | 'teacher' | 'admin') => {
    setCurrentUser(user);
    setUserRole(role);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setUserRole(null);
    setIsAuthenticated(false);
    setGameActive(false);
    setCurrentGame(null);
  };

  // Game handlers
  const handleGameLaunch = (subject: any) => {
    setCurrentGame(subject);
    setGameActive(true);
  };

  const handleGameExit = () => {
    setCurrentGame(null);
    setGameActive(false);
  };

  const handleGameComplete = (score: number, xp: number) => {
    // Update user stats
    setCurrentUser(prev => ({
      ...prev,
      xp: prev.xp + xp,
      level: Math.floor((prev.xp + xp) / 200) + 1
    }));
  };

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className={`min-h-screen ${isLiteMode ? 'bg-gray-100 dark:bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900'}`}>
        {/* Header for login screen */}
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b-2 border-blue-200 dark:border-gray-600">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {t.appTitle}
                </h1>
              </div>
              
              <div className="flex items-center gap-3">
                <OfflineStatus isOffline={isOffline} />
                <ThemeToggle theme={theme} setTheme={setTheme} />
                <LanguageToggle language={language} setLanguage={setLanguage} />
              </div>
            </div>
          </div>
        </header>

        <LoginScreen language={language} onLogin={handleLogin} />
      </div>
    );
  }

  // Show game interface if game is active
  if (gameActive && currentGame) {
    return (
      <PokemonGame
        subject={currentGame}
        language={language}
        isLiteMode={isLiteMode}
        onExit={handleGameExit}
        onGameComplete={handleGameComplete}
      />
    );
  }

  // Main authenticated app
  return (
    <div className={`min-h-screen ${isLiteMode ? 'bg-gray-100 dark:bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900'}`}>
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b-2 border-blue-200 dark:border-gray-600">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t.appTitle}
              </h1>
              {currentUser && (
                <span className="hidden md:inline text-gray-600 dark:text-gray-300">
                  - {t.welcome}, {currentUser.name}!
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-3">
              <OfflineStatus isOffline={isOffline} />
              <ThemeToggle theme={theme} setTheme={setTheme} />
              <LanguageToggle language={language} setLanguage={setLanguage} />
              
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">{t.logout}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {userRole === 'student' && (
          <StudentDashboard 
            user={currentUser} 
            language={language} 
            isOffline={isOffline}
            isLiteMode={isLiteMode}
            onLiteModeToggle={setIsLiteMode}
            onGameLaunch={handleGameLaunch}
          />
        )}

        {userRole === 'teacher' && (
          <TeacherDashboard 
            user={currentUser} 
            language={language} 
            isOffline={isOffline}
            isLiteMode={isLiteMode}
            onLiteModeToggle={setIsLiteMode}
          />
        )}

        {userRole === 'admin' && (
          <AdminDashboard 
            user={currentUser} 
            language={language} 
            isOffline={isOffline}
            isLiteMode={isLiteMode}
            onLiteModeToggle={setIsLiteMode}
          />
        )}
      </main>
    </div>
  );
}