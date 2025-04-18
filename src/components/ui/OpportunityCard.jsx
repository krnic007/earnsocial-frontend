import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const OpportunityCard = ({ opportunity }) => {
  const { language } = useLanguage();
  
  return (
    <div className="border rounded-lg p-3 hover:shadow-md transition">
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-200 mr-3">
          <img src={opportunity.logo} alt={opportunity.company} />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">
                {language === 'en' ? opportunity.title : opportunity.titleHindi || opportunity.title}
              </h3>
              <p className="text-sm text-gray-500">{opportunity.company}</p>
            </div>
            <span className="text-green-600 font-medium text-sm">
              {language === 'en' ? opportunity.reward : opportunity.rewardHindi || opportunity.reward}
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            {language === 'en' ? opportunity.description : opportunity.descriptionHindi || opportunity.description}
          </p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs text-red-500">
              {language === 'en' ? opportunity.deadline : opportunity.deadlineHindi || opportunity.deadline}
            </span>
            <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded-md hover:bg-blue-600">
              {language === 'en' ? "Apply" : "अप्लाई करें"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityCard;