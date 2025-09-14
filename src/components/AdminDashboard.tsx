import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { CompatibilityModule } from './CompatibilityModule';
import { TroubleshootModule } from './TroubleshootModule';
import { 
  Users, 
  Database, 
  Activity, 
  Shield, 
  Settings, 
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Clock,
  HardDrive,
  Cpu,
  Wifi,
  Download,
  Upload,
  BarChart3,
  Globe,
  UserPlus,
  FileText,
  Monitor,
  HelpCircle
} from 'lucide-react';

interface AdminDashboardProps {
  user: any;
  language: string;
  isOffline: boolean;
  isLiteMode: boolean;
  onLiteModeToggle: (enabled: boolean) => void;
}

export function AdminDashboard({ user, language, isOffline, isLiteMode, onLiteModeToggle }: AdminDashboardProps) {
  const [activeModule, setActiveModule] = useState('overview');

  const translations = {
    en: {
      overview: 'System Overview',
      users: 'User Management',
      content: 'Content Management',
      updates: 'Update Management',
      troubleshoot: 'Troubleshoot Center',
      totalUsers: 'Total Users',
      activeUsers: 'Active Users',
      systemHealth: 'System Health',
      storageUsed: 'Storage Used',
      cpuUsage: 'CPU Usage',
      memoryUsage: 'Memory Usage',
      networkStatus: 'Network Status',
      lastUpdate: 'Last Update',
      pendingUpdates: 'Pending Updates',
      systemAlerts: 'System Alerts',
      userGrowth: 'User Growth',
      contentLibrary: 'Content Library',
      addUser: 'Add New User',
      managePermissions: 'Manage Permissions',
      viewReports: 'View Reports',
      compatibility: 'Compatibility'
    },
    hi: {
      overview: 'सिस्टम अवलोकन',
      users: 'उपयोगकर्ता प्रबंधन',
      content: 'सामग्री प्रबंधन',
      updates: 'अपडेट प्रबंधन',
      troubleshoot: 'समस्या निवारण केंद्र',
      totalUsers: 'कुल उपयोगकर्ता',
      activeUsers: 'सक्रिय उपयोगकर्ता',
      systemHealth: 'सिस्टम स्वास्थ्य',
      storageUsed: 'उपयोग में स्टोरेज',
      cpuUsage: 'सीपीयू उपयोग',
      memoryUsage: 'मेमोरी उपयोग',
      networkStatus: 'नेटवर्क स्थिति',
      lastUpdate: 'अंतिम अपडेट',
      pendingUpdates: 'लंबित अपडेट',
      systemAlerts: 'सिस्टम चेतावनी',
      userGrowth: 'उपयोगकर्ता वृद्धि',
      contentLibrary: 'सामग्री पुस्तकालय',
      addUser: 'नया उपयोगकर्ता जोड़ें',
      managePermissions: 'अनुमतियां प्रबंधित करें',
      viewReports: 'रिपोर्ट देखें',
      compatibility: 'संगतता'
    },
    ta: {
      overview: 'கணினி மேலோட்டம்',
      users: 'பயனர் நிர்வாகம்',
      content: 'உள்ளடक்க நிர்வாகம்',
      updates: 'புதுப்பிப்பு நிர்வாகம்',
      troubleshoot: 'பிரச்சனை தீர்வு மையம்',
      totalUsers: 'மொத்த பயனர்கள்',
      activeUsers: 'செயலில் உள்ள பயனர்கள்',
      systemHealth: 'கணினி ஆரோக்கியம்',
      storageUsed: 'பயன்படுத்தப்பட்ட சேமிப்பு',
      cpuUsage: 'CPU பயன்பாடு',
      memoryUsage: 'நினைவக பயன்பாடு',
      networkStatus: 'நெட்வொர்க் நிலை',
      lastUpdate: 'கடைசி புதுப்பிப்பு',
      pendingUpdates: 'நிலுவையில் உள்ள புதுப்பிப்புகள்',
      systemAlerts: 'கணினி எச்சரிக்கைகள்',
      userGrowth: 'பயனர் வளர்ச்சி',
      contentLibrary: 'உள்ளடக்க நூலகம்',
      addUser: 'புதிய பயனரைச் சேர்க்கவும்',
      managePermissions: 'அனுமதிகளை நிர்வகிக்கவும்',
      viewReports: 'அறிக்கைகளைப் பார்க்கவும்',
      compatibility: 'பொருத்தம்'
    },
    es: {
      overview: 'Resumen del Sistema',
      users: 'Gestión de Usuarios',
      content: 'Gestión de Contenido',
      updates: 'Gestión de Actualizaciones',
      troubleshoot: 'Centro de Solución de Problemas',
      totalUsers: 'Total de Usuarios',
      activeUsers: 'Usuarios Activos',
      systemHealth: 'Salud del Sistema',
      storageUsed: 'Almacenamiento Usado',
      cpuUsage: 'Uso de CPU',
      memoryUsage: 'Uso de Memoria',
      networkStatus: 'Estado de Red',
      lastUpdate: 'Última Actualización',
      pendingUpdates: 'Actualizaciones Pendientes',
      systemAlerts: 'Alertas del Sistema',
      userGrowth: 'Crecimiento de Usuarios',
      contentLibrary: 'Biblioteca de Contenido',
      addUser: 'Agregar Nuevo Usuario',
      managePermissions: 'Gestionar Permisos',
      viewReports: 'Ver Informes',
      compatibility: 'Compatibilidad'
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const systemStats = [
    { label: t.totalUsers, value: '2,547', change: '+12%', icon: Users, color: 'text-blue-600' },
    { label: t.activeUsers, value: '1,823', change: '+8%', icon: Activity, color: 'text-green-600' },
    { label: t.systemHealth, value: '98.5%', change: '+0.2%', icon: CheckCircle, color: 'text-green-600' },
    { label: t.storageUsed, value: '67%', change: '+3%', icon: HardDrive, color: 'text-orange-600' },
  ];

  const systemMetrics = [
    { label: t.cpuUsage, value: 45, icon: Cpu, color: 'bg-blue-500' },
    { label: t.memoryUsage, value: 62, icon: Database, color: 'bg-purple-500' },
    { label: t.networkStatus, value: 89, icon: Wifi, color: 'bg-green-500' },
  ];

  const systemAlerts = [
    {
      id: 1,
      type: 'warning',
      message: 'Storage usage approaching 70% limit',
      time: '2 hours ago',
      severity: 'medium'
    },
    {
      id: 2,
      type: 'info',
      message: 'System update available (v2.3.1)',
      time: '1 day ago',
      severity: 'low'
    },
    {
      id: 3,
      type: 'success',
      message: 'Backup completed successfully',
      time: '2 days ago',
      severity: 'low'
    }
  ];

  const userStats = [
    { role: 'Students', count: 2245, percentage: 88 },
    { role: 'Teachers', count: 267, percentage: 10 },
    { role: 'Admins', count: 35, percentage: 2 },
  ];

  const contentStats = [
    { type: 'Math Games', count: 145, size: '2.3 GB' },
    { type: 'Science Simulations', count: 89, size: '4.1 GB' },
    { type: 'Language Arts', count: 67, size: '1.8 GB' },
    { type: 'Assessment Tools', count: 234, size: '0.9 GB' },
  ];

  return (
    <div className="space-y-6">
      {/* System Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {systemStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="bg-gradient-to-br from-white to-pink-50 dark:from-gray-800 dark:to-gray-700 border-2 border-pink-200 dark:border-gray-600">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <IconComponent className={`w-5 h-5 ${stat.color}`} />
                  <span className="text-sm text-gray-600">{stat.label}</span>
                </div>
                <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-green-600">{stat.change}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Admin Modules */}
      <Tabs value={activeModule} onValueChange={setActiveModule} className="w-full">
        <TabsList className="grid w-full grid-cols-6 bg-white dark:bg-gray-800 border-2 border-pink-200 dark:border-gray-600">
          <TabsTrigger value="overview" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
            <BarChart3 className="w-4 h-4 mr-1" />
            <span className="hidden lg:inline">{t.overview}</span>
          </TabsTrigger>
          <TabsTrigger value="users" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
            <Users className="w-4 h-4 mr-1" />
            <span className="hidden lg:inline">{t.users}</span>
          </TabsTrigger>
          <TabsTrigger value="content" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
            <FileText className="w-4 h-4 mr-1" />
            <span className="hidden lg:inline">{t.content}</span>
          </TabsTrigger>
          <TabsTrigger value="updates" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
            <RefreshCw className="w-4 h-4 mr-1" />
            <span className="hidden lg:inline">{t.updates}</span>
          </TabsTrigger>
          <TabsTrigger value="compatibility" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
            <Monitor className="w-4 h-4 mr-1" />
            <span className="hidden lg:inline">{t.compatibility}</span>
          </TabsTrigger>
          <TabsTrigger value="troubleshoot" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
            <HelpCircle className="w-4 h-4 mr-1" />
            <span className="hidden lg:inline">{t.troubleshoot}</span>
          </TabsTrigger>
        </TabsList>

        {/* System Overview */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* System Performance */}
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Activity className="w-6 h-6" />
                  System Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {systemMetrics.map((metric, index) => {
                  const IconComponent = metric.icon;
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-medium">{metric.label}</span>
                        <span className="text-sm text-gray-600 ml-auto">{metric.value}%</span>
                      </div>
                      <Progress value={metric.value} className="h-2" />
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* System Alerts */}
            <Card className="border-2 border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-900">
                  <AlertTriangle className="w-6 h-6" />
                  {t.systemAlerts}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {systemAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      alert.type === 'warning' ? 'bg-orange-500' :
                      alert.type === 'info' ? 'bg-blue-500' : 'bg-green-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{alert.message}</p>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                        <Clock className="w-3 h-3" />
                        {alert.time}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* User Management */}
        <TabsContent value="users" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* User Distribution */}
            <Card className="border-2 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-900">
                  <Users className="w-6 h-6" />
                  User Distribution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {userStats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{stat.role}</span>
                      <span className="text-sm text-gray-600">{stat.count}</span>
                    </div>
                    <Progress value={stat.percentage} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-900">
                  <Settings className="w-6 h-6" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                  <UserPlus className="w-4 h-4 mr-2" />
                  {t.addUser}
                </Button>
                <Button variant="outline" className="w-full border-2 border-purple-200">
                  <Shield className="w-4 h-4 mr-2" />
                  {t.managePermissions}
                </Button>
                <Button variant="outline" className="w-full border-2 border-purple-200">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  {t.viewReports}
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Content Management */}
        <TabsContent value="content" className="space-y-6">
          <Card className="border-2 border-indigo-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-indigo-900">
                <Database className="w-6 h-6" />
                {t.contentLibrary}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contentStats.map((content, index) => (
                  <Card key={index} className="border border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{content.type}</h3>
                        <Badge variant="outline">{content.size}</Badge>
                      </div>
                      <p className="text-2xl font-bold text-indigo-600">{content.count}</p>
                      <p className="text-sm text-gray-600">items</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Update Management */}
        <TabsContent value="updates" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-cyan-200 bg-gradient-to-br from-cyan-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-cyan-900">
                  <Download className="w-6 h-6" />
                  Available Updates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-white border rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">System Core v2.3.1</span>
                    <Badge className="bg-cyan-500">Ready</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Security patches and performance improvements</p>
                </div>
                <div className="p-3 bg-white border rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Content Engine v1.8.2</span>
                    <Badge variant="outline">Pending</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Enhanced AI content conversion features</p>
                </div>
                <Button 
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                  disabled={isOffline}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Install Updates
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-900">
                  <Upload className="w-6 h-6" />
                  Update History
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-white border rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="font-medium">v2.3.0</span>
                    <span className="text-sm text-gray-500 ml-auto">3 days ago</span>
                  </div>
                  <p className="text-sm text-gray-600">Successfully installed</p>
                </div>
                <div className="p-3 bg-white border rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="font-medium">v2.2.8</span>
                    <span className="text-sm text-gray-500 ml-auto">1 week ago</span>
                  </div>
                  <p className="text-sm text-gray-600">Successfully installed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Compatibility Module */}
        <TabsContent value="compatibility">
          <CompatibilityModule
            language={language}
            userRole="admin"
            onLiteModeToggle={onLiteModeToggle}
            isLiteMode={isLiteMode}
          />
        </TabsContent>

        {/* Troubleshoot Center */}
        <TabsContent value="troubleshoot">
          <TroubleshootModule
            language={language}
            userRole="admin"
            isOffline={isOffline}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}