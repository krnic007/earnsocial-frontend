import React from 'react';
import { Heart, MessageSquare, Share2, MoreHorizontal } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const PostCard = ({ post, onLike }) => {
  const { language } = useLanguage();
  const content = language === 'en' ? post.content : post.contentHindi || post.content;
  
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex space-x-3">
        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
          <img src={post.user.avatar} alt={post.user.name} />
        </div>
        <div className="flex-1">
          <div className="flex items-center">
            <h3 className="font-medium mr-1">{post.user.name}</h3>
            {post.user.isVerified && (
              <span className="text-blue-500 text-xs bg-blue-100 px-1.5 py-0.5 rounded-full">
                ✓ {language === 'en' ? "Verified" : "वेरिफाइड"}
              </span>
            )}
            <span className="text-gray-500 text-sm ml-1">{post.user.username}</span>
            <span className="text-gray-400 text-sm ml-2">• {post.time}</span>
          </div>
          <p className="mt-1 text-sm text-gray-500">{post.user.profession} • {post.user.location}</p>
          <p className="mt-2">{content}</p>
          
          {post.media && (
            <div className="mt-3 rounded-lg overflow-hidden">
              {post.mediaType === 'video' ? (
                <div className="relative bg-black">
                  <img src={post.media} alt="Video thumbnail" className="w-full h-auto" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white bg-opacity-75 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-blue-600 border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <img src={post.media} alt="Post media" className="w-full h-auto" />
              )}
            </div>
          )}
          
          <div className="mt-3 flex justify-between">
            <button 
              className={`flex items-center ${
                post.hasLiked ? 'text-red-500' : 'text-gray-500'
              } hover:text-red-500`}
              onClick={() => onLike(post.id)}
            >
              <Heart size={18} className={post.hasLiked ? 'fill-red-500' : ''} />
              <span className="ml-1">{post.likes}</span>
            </button>
            <button className="flex items-center text-gray-500 hover:text-blue-500">
              <MessageSquare size={18} />
              <span className="ml-1">{post.comments}</span>
            </button>
            <button className="flex items-center text-gray-500 hover:text-green-500">
              <Share2 size={18} />
              <span className="ml-1">{post.shares}</span>
            </button>
            <button className="text-gray-500">
              <MoreHorizontal size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;