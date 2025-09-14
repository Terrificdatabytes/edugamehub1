import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { 
  HelpCircle, 
  AlertTriangle, 
  CheckCircle, 
  RefreshCw, 
  Wifi, 
  WifiOff, 
  Battery, 
  Volume2, 
  VolumeX,
  Smartphone,
  Monitor,
  Settings,
  Book,
  GamepadIcon,
  Download,
  Upload,
  Trash2
} from 'lucide-react';

interface TroubleshootModuleProps {
  language: string;
  userRole: 'student' | 'teacher';
  isOffline: boolean;
}

interface TroubleshootIssue {
  id: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  category: 'network' | 'performance' | 'audio' | 'game' | 'login' | 'sync';
  solution: string;
  steps: string[];
}

export function TroubleshootModule({ language, userRole, isOffline }: TroubleshootModuleProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [runningDiagnostic, setRunningDiagnostic] = useState(false);
  const [diagnosticResults, setDiagnosticResults] = useState<string[]>([]);

  const translations = {
    en: {
      title: 'Troubleshooting Center',
      commonIssues: 'Common Issues',
      runDiagnostic: 'Run Diagnostic',
      runningDiagnostic: 'Running Diagnostic...',
      category: 'Category',
      all: 'All Issues',
      network: 'Network Problems',
      performance: 'Performance Issues',
      audio: 'Audio Problems',
      game: 'Game Issues',
      login: 'Login Problems',
      sync: 'Sync Issues',
      severity: 'Severity',
      low: 'Low',
      medium: 'Medium',
      high: 'High',
      solution: 'Solution',
      steps: 'Steps to Fix',
      diagnosticComplete: 'Diagnostic Complete',
      noIssuesFound: 'No major issues detected',
      offlineHelp: 'Offline Help Available',
      contactSupport: 'Contact Support',
      clearData: 'Clear App Data',
      resetSettings: 'Reset Settings',
      downloadOfflineHelp: 'Download Offline Help',
      
      // Issue titles
      slowLoading: 'App Loading Slowly',
      noInternet: 'No Internet Connection',
      gameNotStarting: 'Game Not Starting',
      audioNotWorking: 'Audio Not Working',
      loginFailed: 'Cannot Login',
      dataNotSyncing: 'Data Not Syncing',
      gameFreesing: 'Game Freezing',
      soundDelayed: 'Sound Delayed',
      
      // Solutions
      slowLoadingSolution: 'Enable Lite Mode and clear cache',
      noInternetSolution: 'Switch to offline mode or check network',
      gameNotStartingSolution: 'Restart the app and check device storage',
      audioNotWorkingSolution: 'Check device volume and app permissions',
      loginFailedSolution: 'Verify credentials and check network connection',
      dataNotSyncingSolution: 'Check internet connection and retry sync',
      gameFreezingSolution: 'Close other apps and enable Lite Mode',
      soundDelayedSolution: 'Restart app and check audio settings'
    },
    hi: {
      title: 'समस्या निवारण केंद्र',
      commonIssues: 'सामान्य समस्याएं',
      runDiagnostic: 'डायग्नोस्टिक चलाएं',
      runningDiagnostic: 'डायग्नोस्टिक चल रहा है...',
      category: 'श्रेणी',
      all: 'सभी समस्याएं',
      network: 'नेटवर्क समस्याएं',
      performance: 'प्रदर्शन समस्याएं',
      audio: 'ऑडियो समस्याएं',
      game: 'गेम समस्याएं',
      login: 'लॉगिन समस्याएं',
      sync: 'सिंक समस्याएं',
      severity: 'गंभीरता',
      low: 'कम',
      medium: 'मध्यम',
      high: 'उच्च',
      solution: 'समाधान',
      steps: 'सुधारने के चरण',
      diagnosticComplete: 'डायग्नोस्टिक पूरा',
      noIssuesFound: 'कोई बड़ी समस्या नहीं मिली',
      offlineHelp: 'ऑफ़लाइन सहायता उपलब्ध',
      contactSupport: 'सहायता से संपर्क करें',
      clearData: 'ऐप डेटा साफ़ करें',
      resetSettings: 'सेटिंग रीसेट करें',
      downloadOfflineHelp: 'ऑफ़लाइन सहायता डाउनलोड करें',
      
      slowLoading: 'ऐप धीरे लोड हो रहा है',
      noInternet: 'इंटरनेट कनेक्शन नहीं',
      gameNotStarting: 'गेम शुरू नहीं हो रहा',
      audioNotWorking: 'ऑडियो काम नहीं कर रहा',
      loginFailed: 'लॉगिन नहीं हो सकता',
      dataNotSyncing: 'डेटा सिंक नहीं हो रहा',
      gameFreesing: 'गेम फ्रीज हो रहा है',
      soundDelayed: 'साउंड में देरी',
      
      slowLoadingSolution: 'लाइट मोड चालू करें और कैश साफ़ करें',
      noInternetSolution: 'ऑफ़लाइन मोड पर स्विच करें या नेटवर्क जांचें',
      gameNotStartingSolution: 'ऐप पुनः आरंभ करें और डिवाइस स्टोरेज जांचें',
      audioNotWorkingSolution: 'डिवाइस वॉल्यूम और ऐप अनुमतियां जांचें',
      loginFailedSolution: 'क्रेडेंशियल सत्यापित करें और नेटवर्क कनेक्शन जांचें',
      dataNotSyncingSolution: 'इंटरनेट कनेक्शन जांचें और सिंक फिर से कोशिश करें',
      gameFreezingSolution: 'अन्य ऐप्स बंद करें और लाइट मोड चालू करें',
      soundDelayedSolution: 'ऐप पुनः आरंभ करें और ऑडियो सेटिंग जांचें'
    },
    ta: {
      title: 'பிரச்சனை தீர்வு மையம்',
      commonIssues: 'பொதுவான பிரச்சனைகள்',
      runDiagnostic: 'நோய்க்குறி பரிசோதனை இயக்கு',
      runningDiagnostic: 'நோய்க்குறி பரிசோதனை இயங்குகிறது...',
      category: 'வகை',
      all: 'அனைத்து பிரச்சனைகள்',
      network: 'நெட்வொர்க் பிரச்சனைகள்',
      performance: 'செயல்திறன் பிரச்சனைகள்',
      audio: 'ஒலி பிரச்சனைகள்',
      game: 'கேம் பிரச்சனைகள்',
      login: 'உள்நுழைவு பிரச்சனைகள்',
      sync: 'ஒத்திசைவு பிரச்சனைகள்',
      severity: 'தீவிரம்',
      low: 'குறைந்த',
      medium: 'நடுத்தர',
      high: 'உயர்',
      solution: 'தீர்வு',
      steps: 'சரிசெய்யும் படிகள்',
      diagnosticComplete: 'நோய்க்குறி பரிசோதனை முடிந்தது',
      noIssuesFound: 'பெரிய பிரச்சனைகள் எதுவும் கண்டுபிடிக்கப்படவில்லை',
      offlineHelp: 'ஆஃப்லைன் உதவி கிடைக்கிறது',
      contactSupport: 'ஆதரவைத் தொடர்பு கொள்ளுங்கள்',
      clearData: 'ஆப்பின் தரவை அழிக்கவும்',
      resetSettings: 'அமைப்புகளை மீட்டமைக்கவும்',
      downloadOfflineHelp: 'ஆஃப்லைன் உதவியை பதிவிறக்கவும்',
      
      slowLoading: 'ஆப்பு மெதுவாக ஏற்றப்படுகிறது',
      noInternet: 'இணைய இணைப்பு இல்லை',
      gameNotStarting: 'கேம் தொடங்கவில்லை',
      audioNotWorking: 'ஒலி வேலை செய்யவில்லை',
      loginFailed: 'உள்நுழைய முடியவில்லை',
      dataNotSyncing: 'தரவு ஒத்திசைக்கப்படவில்லை',
      gameFreesing: 'கேம் உறைந்து விடுகிறது',
      soundDelayed: 'ஒலி தாமதமாகிறது',
      
      slowLoadingSolution: 'இலகு முறையை இயக்கி கேஷை அழிக்கவும்',
      noInternetSolution: 'ஆஃப்லைன் முறைக்கு மாறவும் அல்லது நெட்வொர்க்கை சரிபார்க்கவும்',
      gameNotStartingSolution: 'ஆப்பை மறுதொடக்கம் செய்து சாதன சேமிப்பகத்தை சரிபார்க்கவும்',
      audioNotWorkingSolution: 'சாதன ஒலியளவு மற்றும் ஆப்பின் அனுமதிகளை சரிபார்க்கவும்',
      loginFailedSolution: 'நற்சான்றிதழ்களை சரிபார்த்து நெட்வொர்க் இணைப்பை சரிபார்க்கவும்',
      dataNotSyncingSolution: 'இணைய இணைப்பை சரிபார்த்து ஒத்திசைவை மீண்டும் முயற்சிக்கவும்',
      gameFreezingSolution: 'மற்ற ஆப்புகளை மூடி இலகு முறையை இயக்கவும்',
      soundDelayedSolution: 'ஆப்பை மறுதொடக்கம் செய்து ஒலி அமைப்புகளை சரிபார்க்கவும்'
    },
    es: {
      title: 'Centro de Solución de Problemas',
      commonIssues: 'Problemas Comunes',
      runDiagnostic: 'Ejecutar Diagnóstico',
      runningDiagnostic: 'Ejecutando Diagnóstico...',
      category: 'Categoría',
      all: 'Todos los Problemas',
      network: 'Problemas de Red',
      performance: 'Problemas de Rendimiento',
      audio: 'Problemas de Audio',
      game: 'Problemas de Juego',
      login: 'Problemas de Inicio de Sesión',
      sync: 'Problemas de Sincronización',
      severity: 'Severidad',
      low: 'Baja',
      medium: 'Media',
      high: 'Alta',
      solution: 'Solución',
      steps: 'Pasos para Solucionar',
      diagnosticComplete: 'Diagnóstico Completo',
      noIssuesFound: 'No se detectaron problemas importantes',
      offlineHelp: 'Ayuda Sin Conexión Disponible',
      contactSupport: 'Contactar Soporte',
      clearData: 'Limpiar Datos de la App',
      resetSettings: 'Restablecer Configuración',
      downloadOfflineHelp: 'Descargar Ayuda Sin Conexión',
      
      slowLoading: 'La App Carga Lentamente',
      noInternet: 'Sin Conexión a Internet',
      gameNotStarting: 'El Juego No Inicia',
      audioNotWorking: 'El Audio No Funciona',
      loginFailed: 'No Puede Iniciar Sesión',
      dataNotSyncing: 'Los Datos No Se Sincronizan',
      gameFreesing: 'El Juego Se Congela',
      soundDelayed: 'Sonido Retrasado',
      
      slowLoadingSolution: 'Activar Modo Ligero y limpiar caché',
      noInternetSolution: 'Cambiar a modo sin conexión o verificar red',
      gameNotStartingSolution: 'Reiniciar la app y verificar almacenamiento del dispositivo',
      audioNotWorkingSolution: 'Verificar volumen del dispositivo y permisos de la app',
      loginFailedSolution: 'Verificar credenciales y conexión de red',
      dataNotSyncingSolution: 'Verificar conexión a internet y reintentar sincronización',
      gameFreezingSolution: 'Cerrar otras apps y activar Modo Ligero',
      soundDelayedSolution: 'Reiniciar app y verificar configuración de audio'
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const commonIssues: TroubleshootIssue[] = [
    {
      id: '1',
      title: t.slowLoading,
      description: 'Application takes too long to load content',
      severity: 'medium',
      category: 'performance',
      solution: t.slowLoadingSolution,
      steps: [
        'Go to Settings > Compatibility',
        'Enable Lite Mode',
        'Clear app cache',
        'Restart the application'
      ]
    },
    {
      id: '2',
      title: t.noInternet,
      description: 'Cannot connect to internet services',
      severity: 'high',
      category: 'network',
      solution: t.noInternetSolution,
      steps: [
        'Check WiFi/mobile data connection',
        'Switch to offline mode',
        'Download offline content',
        'Check network settings'
      ]
    },
    {
      id: '3',
      title: t.gameNotStarting,
      description: 'Pokemon-style adventure games fail to start',
      severity: 'high',
      category: 'game',
      solution: t.gameNotStartingSolution,
      steps: [
        'Restart the application',
        'Check available storage space',
        'Clear app cache',
        'Update to latest version'
      ]
    },
    {
      id: '4',
      title: t.audioNotWorking,
      description: 'No sound during games or interactions',
      severity: 'medium',
      category: 'audio',
      solution: t.audioNotWorkingSolution,
      steps: [
        'Check device volume settings',
        'Verify app audio permissions',
        'Test with headphones',
        'Restart the application'
      ]
    },
    {
      id: '5',
      title: t.loginFailed,
      description: 'Unable to login with correct credentials',
      severity: 'high',
      category: 'login',
      solution: t.loginFailedSolution,
      steps: [
        'Verify username and password',
        'Check network connection',
        'Clear login cache',
        'Contact system administrator'
      ]
    },
    {
      id: '6',
      title: t.dataNotSyncing,
      description: 'User progress not syncing across devices',
      severity: 'medium',
      category: 'sync',
      solution: t.dataNotSyncingSolution,
      steps: [
        'Check internet connection',
        'Manually trigger sync',
        'Verify account permissions',
        'Check server status'
      ]
    }
  ];

  const filteredIssues = selectedCategory === 'all' 
    ? commonIssues 
    : commonIssues.filter(issue => issue.category === selectedCategory);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'network': return <Wifi className="w-4 h-4" />;
      case 'performance': return <Settings className="w-4 h-4" />;
      case 'audio': return <Volume2 className="w-4 h-4" />;
      case 'game': return <GamepadIcon className="w-4 h-4" />;
      case 'login': return <HelpCircle className="w-4 h-4" />;
      case 'sync': return <RefreshCw className="w-4 h-4" />;
      default: return <HelpCircle className="w-4 h-4" />;
    }
  };

  const runDiagnostic = async () => {
    setRunningDiagnostic(true);
    setDiagnosticResults([]);
    
    // Simulate diagnostic process
    const checks = [
      'Checking network connectivity...',
      'Testing app performance...',
      'Verifying audio system...',
      'Checking storage space...',
      'Testing game engine...',
      'Verifying user permissions...'
    ];

    for (let i = 0; i < checks.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setDiagnosticResults(prev => [...prev, checks[i]]);
    }
    
    setRunningDiagnostic(false);
  };

  return (
    <div className="space-y-6">
      <Card className="border-2 border-orange-200 dark:border-gray-600">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-orange-600" />
            {t.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              onClick={runDiagnostic}
              disabled={runningDiagnostic}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${runningDiagnostic ? 'animate-spin' : ''}`} />
              {runningDiagnostic ? t.runningDiagnostic : t.runDiagnostic}
            </Button>
            
            <Button variant="outline" className="border-2">
              <Download className="w-4 h-4 mr-2" />
              {t.downloadOfflineHelp}
            </Button>
            
            <Button variant="outline" className="border-2">
              <Trash2 className="w-4 h-4 mr-2" />
              {t.clearData}
            </Button>
          </div>

          {/* Diagnostic Results */}
          {diagnosticResults.length > 0 && (
            <Card className="border border-blue-200 bg-blue-50 dark:bg-gray-800">
              <CardContent className="p-4">
                <h4 className="font-medium mb-3">{runningDiagnostic ? t.runningDiagnostic : t.diagnosticComplete}</h4>
                <div className="space-y-2">
                  {diagnosticResults.map((result, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>{result}</span>
                    </div>
                  ))}
                  {!runningDiagnostic && (
                    <Alert className="mt-3">
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        {t.noIssuesFound}
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => setSelectedCategory('all')}
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              className="h-8 px-3 text-sm"
            >
              {t.all}
            </Button>
            {['network', 'performance', 'audio', 'game', 'login', 'sync'].map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className="h-8 px-3 text-sm"
              >
                {getCategoryIcon(category)}
                <span className="ml-1">{t[category as keyof typeof t]}</span>
              </Button>
            ))}
          </div>

          {/* Common Issues */}
          <div>
            <h3 className="font-medium mb-4">{t.commonIssues}</h3>
            <Accordion type="single" collapsible className="space-y-2">
              {filteredIssues.map((issue) => (
                <AccordionItem key={issue.id} value={issue.id} className="border border-gray-200 dark:border-gray-600 rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        {getCategoryIcon(issue.category)}
                        <span className="font-medium">{issue.title}</span>
                      </div>
                      <Badge className={`${getSeverityColor(issue.severity)} border`}>
                        {t[issue.severity as keyof typeof t]}
                      </Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600 dark:text-gray-300">{issue.description}</p>
                      
                      <div>
                        <h5 className="font-medium text-sm mb-2">{t.solution}:</h5>
                        <p className="text-sm text-green-700 dark:text-green-400">{issue.solution}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-sm mb-2">{t.steps}:</h5>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                          {issue.steps.map((step, index) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Offline Help Notice */}
          {isOffline && (
            <Alert className="border-blue-200 bg-blue-50 dark:bg-gray-800">
              <Book className="h-4 w-4" />
              <AlertDescription>
                {t.offlineHelp}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
}