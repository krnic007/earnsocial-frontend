import React from 'react';
import { Home, Map, Video, DollarSign } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const { language } = useLanguage();
  
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="flex overflow-x-auto">
        <button 
          onClick={() => setActiveTab('home')} 
          className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
            activeTab === 'home' ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-500'
          }`}
        >
          {language === 'en' ? 'Home' : 'होम'}
        </button>
        <button 
          onClick={() => setActiveTab('map')}
          className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
            activeTab === 'map' ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-500'
          }`}
        >
          <div className="flex items-center">
            <Map size={16} className="mr-1" />
            {language === 'en' ? 'Nearby' : 'आस-पास'}
          </div>
        </button>
        <button 
          onClick={() => setActiveTab('showreel')}
          className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
            activeTab === 'showreel' ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-500'
          }`}
        >
          <div className="flex items-center">
            <Video size={16} className="mr-1" />
            {language === 'en' ? 'Showreel' : 'शोरील'}
          </div>
        </button>
        <button 
          onClick={() => setActiveTab('earn')}
          className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
            activeTab === 'earn' ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-500'
          }`}
        >
          <div className="flex items-center">
            <DollarSign size={16} className="mr-1" />
            {language === 'en' ? 'Earn' : 'कमाई'}
          </div>
        </button>
      </div>
    </div>
  );
};

export default TabNavigation;