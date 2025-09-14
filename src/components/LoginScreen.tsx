import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  BookOpen, 
  GraduationCap, 
  User, 
  Shield, 
  Eye, 
  EyeOff,
  LogIn,
  UserPlus,
  Sparkles
} from 'lucide-react';

interface LoginScreenProps {
  language: string;
  onLogin: (user: any, role: 'student' | 'teacher' | 'admin') => void;
}

export function LoginScreen({ language, onLogin }: LoginScreenProps) {
  const [selectedRole, setSelectedRole] = useState<'student' | 'teacher' | 'admin' | null>(null);
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    schoolCode: '',
    grade: ''
  });

  const translations = {
    en: {
      appTitle: 'EduGameHub',
      welcome: 'Welcome to',
      subtitle: 'Gamified Learning for Rural Schools',
      selectRole: 'Select Your Role',
      student: 'Student',
      teacher: 'Teacher',
      admin: 'Administrator',
      studentDesc: 'Learn through interactive games and adventures',
      teacherDesc: 'Create and manage educational content',
      adminDesc: 'Oversee the platform and user management',
      login: 'Login',
      signup: 'Sign Up',
      username: 'Username',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      schoolCode: 'School Code',
      grade: 'Grade',
      loginBtn: 'Login',
      signupBtn: 'Create Account',
      backToRoles: 'Back to Role Selection',
      switchToSignup: "Don't have an account? Sign up",
      switchToLogin: 'Already have an account? Login',
      forgotPassword: 'Forgot Password?',
      rememberMe: 'Remember me',
      demoCredentials: 'Demo Credentials',
      demoStudent: 'student / demo123',
      demoTeacher: 'teacher / demo123',
      demoAdmin: 'admin / demo123'
    },
    hi: {
      appTitle: 'एडुगेमहब',
      welcome: 'स्वागत है',
      subtitle: 'ग्रामीण स्कूलों के लिए गेमिफाइड शिक्षा',
      selectRole: 'अपनी भूमिका चुनें',
      student: 'छात्र',
      teacher: 'शिक्षक',
      admin: 'प्रशासक',
      studentDesc: 'इंटरैक्टिव गेम्स और एडवेंचर के माध्यम से सीखें',
      teacherDesc: 'शैक्षिक सामग्री बनाएं और प्रबंधित करें',
      adminDesc: 'प्लेटफॉर्म और उपयोगकर्ता प्रबंधन की निगरानी करें',
      login: 'लॉगिन',
      signup: 'साइन अप',
      username: 'उपयोगकर्ता नाम',
      password: 'पासवर्ड',
      confirmPassword: 'पासवर्ड की पुष्टि करें',
      schoolCode: 'स्कूल कोड',
      grade: 'कक्षा',
      loginBtn: 'लॉगिन करें',
      signupBtn: 'खाता बनाएं',
      backToRoles: 'भूमिका चयन पर वापस जाएं',
      switchToSignup: 'खाता नहीं है? साइन अप करें',
      switchToLogin: 'पहले से खाता है? लॉगिन करें',
      forgotPassword: 'पासवर्ड भूल गए?',
      rememberMe: 'मुझे याद रखें',
      demoCredentials: 'डेमो क्रेडेंशियल',
      demoStudent: 'student / demo123',
      demoTeacher: 'teacher / demo123',
      demoAdmin: 'admin / demo123'
    },
    ta: {
      appTitle: 'கற்றல் கேம் மையம்',
      welcome: 'வரவேற்கிறோம்',
      subtitle: 'கிராமப்புற பள்ளிகளுக்கான விளையாட்டு கற்றல்',
      selectRole: 'உங்கள் பாத்திரத்தை தேர்ந்தெடுக்கவும்',
      student: 'மாணவர்',
      teacher: 'ஆசிரியர்',
      admin: 'நிர்வாகி',
      studentDesc: 'ஊடாடும் விளையாட்டுகள் மற்றும் சாகசங்கள் மூலம் கற்றுக்கொள்ளுங்கள்',
      teacherDesc: 'கல்வி உள்ளடக்கத்தை உருவாக்கி நிர்வகிக்கவும்',
      adminDesc: 'தளம் மற்றும் பயனர் நிர்வாகத்தை மேற்பார்வையிடவும்',
      login: 'உள்நுழைவு',
      signup: 'பதிவு செய்யவும்',
      username: 'பயனர் பெயர்',
      password: 'கடவுச்சொல்',
      confirmPassword: 'கடவுச்சொல்லை உறுதிப்படுத்தவும்',
      schoolCode: 'பள்ளி குறியீடு',
      grade: 'வகுப்பு',
      loginBtn: 'உள்நுழைக',
      signupBtn: 'கணக்கை உருவாக்கவும்',
      backToRoles: 'பாத்திர தேர்வுக்கு திரும்பவும்',
      switchToSignup: 'கணக்கு இல்லையா? பதிவு செய்யவும்',
      switchToLogin: 'ஏற்கனவே கணக்கு உள்ளதா? உள்நுழைக',
      forgotPassword: 'கடவுச்சொல்லை மறந்துவிட்டீர்களா?',
      rememberMe: 'என்னை நினைவில் வைத்துக்கொள்ளுங்கள்',
      demoCredentials: 'டெமோ நற்சான்றிதழ்கள்',
      demoStudent: 'student / demo123',
      demoTeacher: 'teacher / demo123',
      demoAdmin: 'admin / demo123'
    },
    es: {
      appTitle: 'EduGameHub',
      welcome: 'Bienvenido a',
      subtitle: 'Aprendizaje Gamificado para Escuelas Rurales',
      selectRole: 'Selecciona tu Rol',
      student: 'Estudiante',
      teacher: 'Profesor',
      admin: 'Administrador',
      studentDesc: 'Aprende a través de juegos interactivos y aventuras',
      teacherDesc: 'Crea y gestiona contenido educativo',
      adminDesc: 'Supervisa la plataforma y gestión de usuarios',
      login: 'Iniciar Sesión',
      signup: 'Registrarse',
      username: 'Nombre de Usuario',
      password: 'Contraseña',
      confirmPassword: 'Confirmar Contraseña',
      schoolCode: 'Código de Escuela',
      grade: 'Grado',
      loginBtn: 'Iniciar Sesión',
      signupBtn: 'Crear Cuenta',
      backToRoles: 'Volver a Selección de Rol',
      switchToSignup: '¿No tienes cuenta? Regístrate',
      switchToLogin: '¿Ya tienes cuenta? Inicia sesión',
      forgotPassword: '¿Olvidaste tu contraseña?',
      rememberMe: 'Recordarme',
      demoCredentials: 'Credenciales Demo',
      demoStudent: 'student / demo123',
      demoTeacher: 'teacher / demo123',
      demoAdmin: 'admin / demo123'
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const roles = [
    {
      type: 'student' as const,
      icon: GraduationCap,
      title: t.student,
      description: t.studentDesc,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      type: 'teacher' as const,
      icon: User,
      title: t.teacher,
      description: t.teacherDesc,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      type: 'admin' as const,
      icon: Shield,
      title: t.admin,
      description: t.adminDesc,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo authentication logic
    const demoUsers = {
      student: { id: 1, name: 'Alex Kumar', level: 12, xp: 2450, badges: 8, rank: 'Science Explorer' },
      teacher: { id: 2, name: 'Dr. Priya Singh', level: 25, xp: 8500, badges: 15, rank: 'Master Educator' },
      admin: { id: 3, name: 'Rajesh Gupta', level: 30, xp: 12000, badges: 20, rank: 'Platform Guardian' }
    };

    if (formData.username === selectedRole && formData.password === 'demo123') {
      onLogin(demoUsers[selectedRole!], selectedRole!);
    } else {
      alert('Invalid credentials. Use demo credentials for testing.');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!selectedRole) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              {t.welcome} {t.appTitle}
            </h1>
            <p className="text-xl text-gray-600">{t.subtitle}</p>
          </div>

          {/* Role Selection */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">{t.selectRole}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {roles.map((role) => {
                const IconComponent = role.icon;
                return (
                  <Card 
                    key={role.type}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${role.bgColor} ${role.borderColor} border-2`}
                    onClick={() => setSelectedRole(role.type)}
                  >
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${role.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{role.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{role.description}</p>
                      <Button className={`mt-4 bg-gradient-to-r ${role.color} text-white hover:opacity-90`}>
                        <UserPlus className="w-4 h-4 mr-2" />
                        {t.selectRole}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Demo Credentials Info */}
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-green-600" />
                <h3 className="font-bold text-green-800">{t.demoCredentials}</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <Badge className="bg-blue-100 text-blue-800 justify-center py-2">
                  {t.student}: {t.demoStudent}
                </Badge>
                <Badge className="bg-purple-100 text-purple-800 justify-center py-2">
                  {t.teacher}: {t.demoTeacher}
                </Badge>
                <Badge className="bg-orange-100 text-orange-800 justify-center py-2">
                  {t.admin}: {t.demoAdmin}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const selectedRoleData = roles.find(r => r.type === selectedRole)!;
  const IconComponent = selectedRoleData.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Card className={`${selectedRoleData.bgColor} ${selectedRoleData.borderColor} border-2`}>
          <CardHeader className="text-center pb-4">
            <div className={`w-16 h-16 bg-gradient-to-r ${selectedRoleData.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800">
              {isLogin ? t.login : t.signup} - {selectedRoleData.title}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="username" className="text-black">{t.username}</Label>
                <Input
                  id="username"
                  type="text"
                  value={formData.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                  className="mt-1 text-[rgba(250,250,250,1)]"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-black">{t.password}</Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-auto p-1"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              {!isLogin && (
                <>
                  <div>
                    <Label htmlFor="confirmPassword">{t.confirmPassword}</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>

                  {selectedRole === 'student' && (
                    <>
                      <div>
                        <Label htmlFor="schoolCode">{t.schoolCode}</Label>
                        <Input
                          id="schoolCode"
                          type="text"
                          value={formData.schoolCode}
                          onChange={(e) => handleInputChange('schoolCode', e.target.value)}
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="grade">{t.grade}</Label>
                        <Input
                          id="grade"
                          type="text"
                          value={formData.grade}
                          onChange={(e) => handleInputChange('grade', e.target.value)}
                          className="mt-1"
                          placeholder="6-12"
                          required
                        />
                      </div>
                    </>
                  )}
                </>
              )}

              <Button 
                type="submit" 
                className={`w-full bg-gradient-to-r ${selectedRoleData.color} text-white hover:opacity-90`}
              >
                <LogIn className="w-4 h-4 mr-2" />
                {isLogin ? t.loginBtn : t.signupBtn}
              </Button>
            </form>

            <div className="mt-6 space-y-4">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="w-full text-center text-sm text-muted-foreground hover:text-foreground underline transition-colors"
              >
                {isLogin ? t.switchToSignup : t.switchToLogin}
              </button>

              {isLogin && (
                <button
                  type="button"
                  className="w-full text-center text-sm text-muted-foreground hover:text-foreground underline transition-colors"
                >
                  {t.forgotPassword}
                </button>
              )}

              <Button
                type="button"
                variant="outline"
                onClick={() => setSelectedRole(null)}
                className="w-full border-2"
              >
                {t.backToRoles}
              </Button>

              {/* Demo credentials reminder */}
              <div className="bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 rounded-lg p-3 text-center">
                <p className="text-xs text-green-700 dark:text-green-300 font-medium">
                  {t.demoCredentials}: {selectedRole} / demo123
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}