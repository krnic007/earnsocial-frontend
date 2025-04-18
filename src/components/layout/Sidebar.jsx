import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useUser } from '../../contexts/UserContext';
import { DollarSign } from 'lucide-react';
import TaskCard from '../ui/TaskCard';

const Sidebar = ({ tasks, onCompleteTask }) => {
  const { language } = useLanguage();
  const { user } = useUser();
  
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden mb-3">
            <img src={user.avatar} alt="Profile" />
          </div>
          <h2 className="font-bold text-lg">{user.name}</h2>
          <p className="text-gray-500 text-sm mb-1">@{user.username}</p>
          <p className="text-blue-500 text-sm font-medium mb-3">
            {language === 'en' ? user.profession : user.professionHindi || user.profession}
          </p>
          <div className="flex justify-center space-x-3 text-sm text-gray-600 mb-3">
            <div className="text-center">
              <div className="font-bold">{user.followers}</div>
              <div>{language === 'en' ? 'Followers' : 'फॉलोअर्स'}</div>
            </div>
            <div className="text-center">
              <div className="font-bold">{user.following}</div>
              <div>{language === 'en' ? 'Following' : 'फॉलोइंग'}</div>
            </div>
            <div className="text-center">
              <div className="font-bold">{user.coins}</div>
              <div>{language === 'en' ? 'Coins' : 'कॉइन्स'}</div>
            </div>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
            {language === 'en' ? 'View Profile' : 'प्रोफाइल देखें'}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="font-bold text-lg mb-3">
          {language === 'en' ? 'Earning Tasks' : 'कमाई के टास्क'}
        </h2>
        <div className="space-y-3">
          {tasks.map(task => (
            <TaskCard 
              key={task.id} 
              task={task} 
              onComplete={onCompleteTask} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;