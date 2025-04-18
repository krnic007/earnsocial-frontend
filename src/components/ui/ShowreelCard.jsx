import React from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ShowreelCard = ({ video }) => {
  const { language } = useLanguage();
  
  return (
    <div className="rounded-lg overflow-hidden bg-gray-100">
      <div className="relative">
        <img src={video.thumbnail} alt="Video thumbnail" className="w-full h-auto" />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-1 py-0.5 rounded">
          {video.duration}
        </div>
      </div>
      <div className="p-2">
        <p className="text-xs font-medium line-clamp-2">
          {language === 'en' ? video.description : video.descriptionHindi || video.description}
        </p>
        <p className="text-xs text-gray-500 mt-0.5">
          {video.user.name} • {language === 'en' ? video.user.profession : video.user.professionHindi || video.user.profession}
        </p>
        <div className="flex items-center mt-1 text-xs text-gray-500">
          <span>{video.views} {language === 'en' ? "views" : "व्यूज"}</span>
          <span className="mx-1">•</span>
          <div className="flex items-center">
            <Heart size={10} className="mr-0.5" />
            <span>{video.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowreelCard;