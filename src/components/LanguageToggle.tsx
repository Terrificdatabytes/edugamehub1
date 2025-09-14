import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  language: string;
  setLanguage: (language: string) => void;
}

export function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger className="w-24 bg-white border-2 border-blue-200">
        <div className="flex items-center gap-1">
          <Globe className="w-4 h-4 text-blue-600" />
          <span className="text-sm">{currentLanguage?.flag}</span>
        </div>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            <div className="flex items-center gap-2">
              <span>{lang.flag}</span>
              <span className="text-sm">{lang.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}