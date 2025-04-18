import React from 'react';
import { Bell, MessageCircle, DollarSign } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useUser } from '../../contexts/UserContext';
import LanguageSwitcher from '../common/LanguageSwitcher';

const Header = () => {
  const { language } = useLanguage();
  const { user } = useUser();
  
  return (
    <header className="bg-white shadow-sm p-4">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        <div className="flex items-center space-x-2">
          <DollarSign className="text-blue-500" size={28} />
          <h1 className="text-xl font-bold text-blue-600">EarnSocial</h1>
        </div>
        <div className="flex items-center space-x-3">
          <LanguageSwitcher />
          <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
            <DollarSign className="text-yellow-500 h-4 w-4 mr-1" />
            <span className="text-gray-700 font-medium">{user.coins}</span>
          </div>
          <Bell className="text-gray-500 cursor-pointer" />
          <MessageCircle className="text-gray-500 cursor-pointer" />
          <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer overflow-hidden">
            <img src={user.avatar} alt="Profile" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;