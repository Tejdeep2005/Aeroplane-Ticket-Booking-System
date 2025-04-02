import React from 'react';

const suggestions = [
  {
    id: 1,
    username: 'tech_enthusiast',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
    relation: 'Followed by user123 + 2 more'
  },
  {
    id: 2,
    username: 'travel_addict',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    relation: 'Followed by jane_doe + 3 more'
  },
  {
    id: 3,
    username: 'food_lover',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
    relation: 'New to Instagram'
  }
];

export default function Suggestions() {
  return (
    <div className="hidden lg:block w-80">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-gray-500">Suggestions For You</span>
        <button className="text-xs font-semibold">See All</button>
      </div>
      
      {suggestions.map((suggestion) => (
        <div key={suggestion.id} className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <img
              src={suggestion.avatar}
              alt={suggestion.username}
              className="w-8 h-8 rounded-full mr-3"
            />
            <div>
              <p className="text-sm font-semibold">{suggestion.username}</p>
              <p className="text-xs text-gray-500">{suggestion.relation}</p>
            </div>
          </div>
          <button className="text-xs font-semibold text-blue-500">Follow</button>
        </div>
      ))}
    </div>
  );
}