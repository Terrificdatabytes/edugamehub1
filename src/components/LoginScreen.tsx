import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { BookOpen, GraduationCap, User, Shield, Eye, EyeOff, LogIn, UserPlus, Sparkles } from 'lucide-react';

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
      bgColor: 'bg-blue-50 dark:bg-gray-800',
      borderColor: 'border-blue-200 dark:border-gray-700'
    },
    {
      type: 'teacher' as const,
      icon: User,
      title: t.teacher,
      description: t.teacherDesc,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-gray-800',
      borderColor: 'border-purple-200 dark:border-gray-700'
    },
    {
      type: 'admin' as const,
      icon: Shield,
      title: t.admin,
      description: t.adminDesc,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-gray-800',
      borderColor: 'border-orange-200 dark:border-gray-700'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              {t.welcome} {t.appTitle}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t.subtitle}</p>
          </div>
        </div>
      </div>
    );
  }

  const selectedRoleData = roles.find(r => r.type === selectedRole)!;
  const IconComponent = selectedRoleData.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Card className={`${selectedRoleData.bgColor} ${selectedRoleData.borderColor} border-2`}>
          <CardHeader className="text-center pb-4">
            <div className={`w-16 h-16 bg-gradient-to-r ${selectedRoleData.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">
              {isLogin ? t.login : t.signup} - {selectedRoleData.title}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="username" className="text-black dark:text-white">{t.username}</Label>
                <Input
                  id="username"
                  type="text"
                  value={formData.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                  className="mt-1 text-black dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-black dark:text-white">{t.password}</Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="text-black dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
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
                    <Label htmlFor="confirmPassword" className="text-black dark:text-white">{t.confirmPassword}</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      className="mt-1 text-black dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                      required
                    />
                  </div>

                  {selectedRole === 'student' && (
                    <>
                      <div>
                        <Label htmlFor="schoolCode" className="text-black dark:text-white">{t.schoolCode}</Label>
                        <Input
                          id="schoolCode"
                          type="text"
                          value={formData.schoolCode}
                          onChange={(e) => handleInputChange('schoolCode', e.target.value)}
                          className="mt-1 text-black dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="grade" className="text-black dark:text-white">{t.grade}</Label>
                        <Input
                          id="grade"
                          type="text"
                          value={formData.grade}
                          onChange={(e) => handleInputChange('grade', e.target.value)}
                          className="mt-1 text-black dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
