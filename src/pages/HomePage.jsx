import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import TabNavigation from '../components/layout/TabNavigation';
import BottomNavigation from '../components/layout/BottomNavigation';
import NewPostBox from '../components/common/NewPostBox';
import PostCard from '../components/ui/PostCard';
import OpportunityCard from '../components/ui/OpportunityCard';
import { useLanguage } from '../contexts/LanguageContext';
import { tasks as initialTasks } from '../data/tasks';
import { posts as initialPosts } from '../data/posts';
import { opportunities as initialOpportunities } from '../data/opportunities';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [posts, setPosts] = useState(initialPosts);
  const [tasks, setTasks] = useState(initialTasks);
  const [opportunities, setOpportunities] = useState(initialOpportunities);
  const [userCoins, setUserCoins] = useState(120);
  const { language } = useLanguage();

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.hasLiked ? post.likes - 1 : post.likes + 1,
          hasLiked: !post.hasLiked
        };
      }
      return post;
    }));
  };

  const handleCreatePost = (text) => {
    const newPost = {
      id: Date.now(),
      user: {
        name: 'You',
        avatar: '/placeholder/40/40',
        username: '@youruser',
        isVerified: false,
        profession: 'Your Profession',
        location: 'Your Location'
      },
      content: text,
      contentHindi: text, // In a real app, this would use translation API
      likes: 0,
      comments: 0,
      shares: 0,
      time: 'Just now',
      hasLiked: false
    };
    
    setPosts([newPost, ...posts]);
    
    // Complete "First Post" task if not already done
    const postTask = tasks.find(task => task.id === 2 && !task.completed);
    if (postTask) {
      handleCompleteTask(2);
    }
  };

  const handleCompleteTask = (taskId) => {
    const task = tasks.find(t => t.id === taskId);
    if (task && !task.completed) {
      setUserCoins(prevCoins => prevCoins + task.reward);
      setTasks(tasks.map(t => 
        t.id === taskId ? { ...t, completed: true } : t
      ));
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      
      <main className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {/* Sidebar */}
          <div className="hidden md:block">
            <Sidebar 
              tasks={tasks}
              onCompleteTask={handleCompleteTask}
            />
          </div>
          
          <div className="md:col-span-2 space-y-4">
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            
            {activeTab === 'home' && (
              <>
                <NewPostBox onCreatePost={handleCreatePost} />

                {/* Featured Opportunities */}
                <div className="bg-white rounded-lg shadow p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="font-bold text-lg">
                      {language === 'en' ? 'Featured Opportunities' : 'फीचर्ड अवसर'}
                    </h2>
                    <button className="text-blue-500 text-sm">
                      {language === 'en' ? 'View All' : 'सभी देखें'}
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {opportunities.slice(0, 2).map(opportunity => (
                      <OpportunityCard key={opportunity.id} opportunity={opportunity} />
                    ))}
                  </div>
                </div>

                {/* Posts Feed */}
                <div className="space-y-4">
                  {posts.map(post => (
                    <PostCard 
                      key={post.id} 
                      post={post} 
                      onLike={handleLike} 
                    />
                  ))}
                </div>
              </>
            )}
            
            {activeTab === 'map' && (
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="font-bold text-lg mb-3">
                  {language === 'en' ? 'Nearby Service Providers' : 'आस-पास के सेवा प्रदाता'}
                </h2>
                <div className="bg-blue-50 h-40 rounded-lg flex items-center justify-center mb-3">
                  <p className="text-blue-500">
                    {language === 'en' ? 'Map View Coming Soon' : 'मैप व्यू जल्द आ रहा है'}
                  </p>
                </div>
              </div>
            )}
            
            {/* Other tab content would go here */}
          </div>
        </div>
      </main>
      
      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default HomePage;