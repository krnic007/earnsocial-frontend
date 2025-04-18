import React from 'react';
import { Home, Map, Video, DollarSign, User } from 'lucide-react';

const BottomNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <div className="md:hidden bg-white shadow-md border-t">
      <div className="flex justify-around p-2">
        <button 
          onClick={() => setActiveTab('home')}
          className={`p-2 rounded-md ${activeTab === 'home' ? 'text-blue-500' : 'text-gray-500'}`}
        >
          <Home size={24} />
        </button>
        <button 
          onClick={() => setActiveTab('map')}
          className={`p-2 rounded-md ${activeTab === 'map' ? 'text-blue-500' : 'text-gray-500'}`}
        >
          <Map size={24} />
        </button>
        <button 
          onClick={() => setActiveTab('showreel')}
          className={`p-2 rounded-md ${activeTab === 'showreel' ? 'text-blue-500' : 'text-gray-500'}`}
        >
          <Video size={24} />
        </button>
        <button 
          onClick={() => setActiveTab('earn')}
          className={`p-2 rounded-md ${activeTab === 'earn' ? 'text-blue-500' : 'text-gray-500'}`}
        >
          <DollarSign size={24} />
        </button>
        <button 
          onClick={() => setActiveTab('profile')}
          className={`p-2 rounded-md ${activeTab === 'profile' ? 'text-blue-500' : 'text-gray-500'}`}
        >
          <User size={24} />
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;