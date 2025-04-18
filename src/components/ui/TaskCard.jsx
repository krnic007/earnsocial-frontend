import React from 'react';
import { DollarSign } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const TaskCard = ({ task, onComplete }) => {
  const { language } = useLanguage();
  
  return (
    <div className="flex items-center justify-between border-b pb-2 last:border-0">
      <div>
        <p className="font-medium">
          {language === 'en' ? task.title : task.titleHindi || task.title}
        </p>
        <p className="text-sm text-gray-500">
          {language === 'en' ? task.description : task.descriptionHindi || task.description}
        </p>
        <div className="flex items-center mt-1">
          <div className="text-yellow-500 flex items-center text-sm">
            <DollarSign className="h-3 w-3 mr-1" />
            <span>{task.reward} {language === 'en' ? 'coins' : 'कॉइन्स'}</span>
          </div>
          <span className="text-xs ml-2 px-2 py-0.5 rounded-full bg-gray-100">
            {language === 'en' ? task.difficulty : task.difficultyHindi || task.difficulty}
          </span>
        </div>
      </div>
      <button 
        onClick={() => onComplete(task.id)}
        className={`px-3 py-1 rounded-md text-sm ${
          task.completed 
            ? 'bg-green-100 text-green-700' 
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
        disabled={task.completed}
      >
        {task.completed ? 
          (language === 'en' ? 'Completed' : 'पूरा हुआ') : 
          (language === 'en' ? 'Complete' : 'पूरा करें')}
      </button>
    </div>
  );
};

export default TaskCard;