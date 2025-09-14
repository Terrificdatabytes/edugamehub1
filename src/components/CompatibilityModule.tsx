import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Alert, AlertDescription } from './ui/alert';
import { 
  Smartphone, 
  Monitor, 
  Wifi, 
  WifiOff, 
  Battery, 
  MemoryStick, 
  Cpu,
  HardDrive,
  AlertTriangle,
  CheckCircle,
  Settings,
  Zap
} from 'lucide-react';

interface CompatibilityModuleProps {
  language: string;
  userRole: 'student' | 'teacher';
  onLiteModeToggle: (enabled: boolean) => void;
  isLiteMode: boolean;
}

interface SystemInfo {
  deviceType: string;
  ram: string;
  storage: string;
  network: string;
  battery: number;
  performance: 'high' | 'medium' | 'low';
}

export function CompatibilityModule({ language, userRole, onLiteModeToggle, isLiteMode }: CompatibilityModuleProps) {
  const [systemInfo, setSystemInfo] = useState<SystemInfo | null>(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showDetails, setShowDetails] = useState(false);

  const translations = {
    en: {
      title: 'System Compatibility',
      deviceInfo: 'Device Information',
      performance: 'Performance Level',
      networkStatus: 'Network Status',
      liteMode: 'Lite Mode',
      enableLiteMode: 'Enable Lite Mode',
      disableLiteMode: 'Disable Lite Mode',
      liteModeDesc: 'Reduces graphics and animations for better performance on low-end devices',
      online: 'Online',
      offline: 'Offline',
      deviceType: 'Device Type',
      memory: 'Available Memory',
      storage: 'Storage Space',
      battery: 'Battery Level',
      recommendations: 'Recommendations',
      runTests: 'Run Compatibility Tests',
      viewDetails: 'View Details',
      hideDetails: 'Hide Details',
      optimizeFor: 'Optimize for low-end device',
      enableOfflineMode: 'Enable offline mode',
      clearCache: 'Clear app cache',
      highPerformance: 'High Performance',
      mediumPerformance: 'Medium Performance',
      lowPerformance: 'Low Performance - Lite Mode Recommended'
    },
    hi: {
      title: 'सिस्टम संगतता',
      deviceInfo: 'डिवाइस जानकारी',
      performance: 'प्रदर्शन स्तर',
      networkStatus: 'नेटवर्क स्थिति',
      liteMode: 'लाइट मोड',
      enableLiteMode: 'लाइट मोड चालू करें',
      disableLiteMode: 'लाइट मोड बंद करें',
      liteModeDesc: 'कम-एंड डिवाइस पर बेहतर प्रदर्शन के लिए ग्राफिक्स और एनीमेशन कम करता है',
      online: 'ऑनलाइन',
      offline: 'ऑफ़लाइन',
      deviceType: 'डिवाइस प्रकार',
      memory: 'उपलब्ध मेमोरी',
      storage: 'स्टोरेज स्पेस',
      battery: 'बैटरी स्तर',
      recommendations: 'सुझाव',
      runTests: 'संगतता परीक्षण चलाएं',
      viewDetails: 'विवरण देखें',
      hideDetails: 'विवरण छुपाएं',
      optimizeFor: 'कम-एंड डिवाइस के लिए अनुकूलित करें',
      enableOfflineMode: 'ऑफ़लाइन मोड चालू करें',
      clearCache: 'ऐप कैश साफ़ करें',
      highPerformance: 'उच्च प्रदर्शन',
      mediumPerformance: 'मध्यम प्रदर्शन',
      lowPerformance: 'कम प्रदर्शन - लाइट मोड की सिफारिश'
    },
    ta: {
      title: 'கணினி பொருத்தம்',
      deviceInfo: 'சாதன தகவல்',
      performance: 'செயல்திறன் நிலை',
      networkStatus: 'வலையமைப்பு நிலை',
      liteMode: 'இலகு முறை',
      enableLiteMode: 'இலகு முறையை இயக்கு',
      disableLiteMode: 'இலகு முறையை முடக்கு',
      liteModeDesc: 'குறைந்த அளவிலான சாதனங்களில் சிறந்த செயல்திறனுக்காக கிராபிக்ஸ் மற்றும் அனிமேஷன்களை குறைக்கிறது',
      online: 'ஆன்லைன்',
      offline: 'ஆஃப்லைன்',
      deviceType: 'சாதன வகை',
      memory: 'கிடைக்கக்கூடிய நினைவகம்',
      storage: 'சேமிப்பு இடம்',
      battery: 'பேட்டரி நிலை',
      recommendations: 'பரிந்துரைகள்',
      runTests: 'பொருத்தம் சோதனைகளை இயக்கு',
      viewDetails: 'விவரங்களைப் பார்க்க',
      hideDetails: 'விவரங்களை மறைக்க',
      optimizeFor: 'குறைந்த அளவிலான சாதனத்திற்கு உகப்பாக்கு',
      enableOfflineMode: 'ஆஃப்லைன் முறையை இயக்கு',
      clearCache: 'ஆப்பின் கேஷை அழிக்க',
      highPerformance: 'உயர் செயல்திறன்',
      mediumPerformance: 'நடுத்தர செயல்திறன்',
      lowPerformance: 'குறைந்த செயல்திறன் - இலகு முறை பரிந்துரைக்கப்படுகிறது'
    },
    es: {
      title: 'Compatibilidad del Sistema',
      deviceInfo: 'Información del Dispositivo',
      performance: 'Nivel de Rendimiento',
      networkStatus: 'Estado de la Red',
      liteMode: 'Modo Ligero',
      enableLiteMode: 'Activar Modo Ligero',
      disableLiteMode: 'Desactivar Modo Ligero',
      liteModeDesc: 'Reduce gráficos y animaciones para mejor rendimiento en dispositivos de gama baja',
      online: 'En línea',
      offline: 'Sin conexión',
      deviceType: 'Tipo de Dispositivo',
      memory: 'Memoria Disponible',
      storage: 'Espacio de Almacenamiento',
      battery: 'Nivel de Batería',
      recommendations: 'Recomendaciones',
      runTests: 'Ejecutar Pruebas de Compatibilidad',
      viewDetails: 'Ver Detalles',
      hideDetails: 'Ocultar Detalles',
      optimizeFor: 'Optimizar para dispositivo de gama baja',
      enableOfflineMode: 'Activar modo sin conexión',
      clearCache: 'Limpiar caché de la aplicación',
      highPerformance: 'Alto Rendimiento',
      mediumPerformance: 'Rendimiento Medio',
      lowPerformance: 'Bajo Rendimiento - Se Recomienda Modo Ligero'
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  useEffect(() => {
    const updateOnlineStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    // Simulate system detection
    setTimeout(() => {
      const mockSystemInfo: SystemInfo = {
        deviceType: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        ram: Math.random() > 0.5 ? '4GB' : '2GB',
        storage: Math.random() > 0.5 ? '32GB' : '16GB',
        network: isOnline ? 'WiFi' : 'Offline',
        battery: Math.floor(Math.random() * 100),
        performance: Math.random() > 0.6 ? 'high' : Math.random() > 0.3 ? 'medium' : 'low'
      };
      setSystemInfo(mockSystemInfo);
    }, 1000);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, [isOnline]);

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'high': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getPerformanceIcon = (performance: string) => {
    switch (performance) {
      case 'high': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'medium': return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case 'low': return <AlertTriangle className="w-5 h-5 text-red-600" />;
      default: return <Settings className="w-5 h-5 text-gray-600" />;
    }
  };

  const getPerformanceText = (performance: string) => {
    switch (performance) {
      case 'high': return t.highPerformance;
      case 'medium': return t.mediumPerformance;
      case 'low': return t.lowPerformance;
      default: return 'Unknown';
    }
  };

  const shouldRecommendLiteMode = systemInfo?.performance === 'low' || 
    (systemInfo?.ram === '2GB' || systemInfo?.storage === '16GB');

  return (
    <div className="space-y-6">
      <Card className="border-2 border-blue-200 dark:border-gray-600">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Monitor className="w-5 h-5 text-blue-600" />
            {t.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Lite Mode Toggle */}
          <div className="flex items-center justify-between p-4 bg-yellow-50 dark:bg-gray-800 rounded-lg border-2 border-yellow-200 dark:border-yellow-600">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-yellow-600" />
              <div>
                <h4 className="font-medium">{t.liteMode}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t.liteModeDesc}</p>
              </div>
            </div>
            <Button
              onClick={() => onLiteModeToggle(!isLiteMode)}
              variant={isLiteMode ? "default" : "outline"}
              className={isLiteMode ? "bg-yellow-500 hover:bg-yellow-600" : ""}
            >
              {isLiteMode ? t.disableLiteMode : t.enableLiteMode}
            </Button>
          </div>

          {/* System Status */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border border-gray-200 dark:border-gray-600">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  {isOnline ? <Wifi className="w-4 h-4 text-green-600" /> : <WifiOff className="w-4 h-4 text-red-600" />}
                  <span className="font-medium">{t.networkStatus}</span>
                </div>
                <Badge variant={isOnline ? "default" : "destructive"}>
                  {isOnline ? t.online : t.offline}
                </Badge>
              </CardContent>
            </Card>

            {systemInfo && (
              <>
                <Card className="border border-gray-200 dark:border-gray-600">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      {systemInfo.deviceType === 'Mobile' ? 
                        <Smartphone className="w-4 h-4 text-blue-600" /> : 
                        <Monitor className="w-4 h-4 text-blue-600" />
                      }
                      <span className="font-medium">{t.deviceType}</span>
                    </div>
                    <p className="text-sm">{systemInfo.deviceType}</p>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 dark:border-gray-600">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      {getPerformanceIcon(systemInfo.performance)}
                      <span className="font-medium">{t.performance}</span>
                    </div>
                    <p className={`text-sm ${getPerformanceColor(systemInfo.performance)}`}>
                      {getPerformanceText(systemInfo.performance)}
                    </p>
                  </CardContent>
                </Card>
              </>
            )}
          </div>

          {/* Detailed System Info */}
          {systemInfo && (
            <div>
              <Button
                onClick={() => setShowDetails(!showDetails)}
                variant="outline"
                className="mb-4"
              >
                {showDetails ? t.hideDetails : t.viewDetails}
              </Button>

              {showDetails && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border border-gray-200 dark:border-gray-600">
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <MemoryStick className="w-4 h-4 text-purple-600" />
                          <span className="text-sm">{t.memory}</span>
                        </div>
                        <span className="text-sm font-medium">{systemInfo.ram}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <HardDrive className="w-4 h-4 text-blue-600" />
                          <span className="text-sm">{t.storage}</span>
                        </div>
                        <span className="text-sm font-medium">{systemInfo.storage}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Battery className="w-4 h-4 text-green-600" />
                          <span className="text-sm">{t.battery}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Progress value={systemInfo.battery} className="w-16 h-2" />
                          <span className="text-sm font-medium">{systemInfo.battery}%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recommendations */}
                  <Card className="border border-gray-200 dark:border-gray-600">
                    <CardHeader>
                      <CardTitle className="text-sm">{t.recommendations}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 space-y-2">
                      {shouldRecommendLiteMode && (
                        <Alert>
                          <AlertTriangle className="h-4 w-4" />
                          <AlertDescription className="text-sm">
                            {t.optimizeFor}
                          </AlertDescription>
                        </Alert>
                      )}
                      
                      {!isOnline && (
                        <Alert>
                          <WifiOff className="h-4 w-4" />
                          <AlertDescription className="text-sm">
                            {t.enableOfflineMode}
                          </AlertDescription>
                        </Alert>
                      )}
                      
                      <Alert>
                        <Settings className="h-4 w-4" />
                        <AlertDescription className="text-sm">
                          {t.clearCache}
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}