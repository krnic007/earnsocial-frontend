import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const NewPostBox = ({ onCreatePost }) => {
  const [text, setText] = useState('');
  const { language } = useLanguage();
  
  const handleSubmit = () => {
    if (text.trim() === '') return;
    onCreatePost(text);
    setText('');
  };
  
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex space-x-3">
        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
          <img src="/placeholder/40/40" alt="Profile" />
        </div>
        <div className="flex-1">
          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows="3"
            placeholder={language === 'en' ? "What would you like to share today?" : "आज आप क्या शेयर करना चाहते हैं?"}
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div className="flex justify-between mt-3">
            <div className="flex space-x-2">
              <button className="text-gray-500 px-2 py-1 rounded-md hover:bg-gray-100">
                🖼️ {language === 'en' ? "Photo" : "फोटो"}
              </button>
              <button className="text-gray-500 px-2 py-1 rounded-md hover:bg-gray-100">
                🎥 {language === 'en' ? "Video" : "वीडियो"}
              </button>
              <button className="text-gray-500 px-2 py-1 rounded-md hover:bg-gray-100">
                📌 {language === 'en' ? "Location" : "लोकेशन"}
              </button>
            </div>
            <button 
              onClick={handleSubmit}
              className={`px-4 py-2 rounded-md text-white ${
                text.trim() === '' 
                  ? 'bg-blue-300' 
                  : 'bg-blue-500 hover:bg-blue-600'
              }`}
              disabled={text.trim() === ''}
            >
              {language === 'en' ? "Post" : "पोस्ट करें"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPostBox;