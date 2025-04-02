import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

interface PostProps {
  username: string;
  userImage: string;
  image: string;
  caption: string;
  likes: number;
}

export default function Post({ username, userImage, image, caption, likes }: PostProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-4">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-3">
          <img src={userImage} alt={username} className="w-8 h-8 rounded-full" />
          <span className="font-semibold">{username}</span>
        </div>
        <MoreHorizontal className="w-5 h-5 cursor-pointer" />
      </div>

      <img src={image} alt="Post" className="w-full" />

      <div className="p-3">
        <div className="flex justify-between items-center mb-3">
          <div className="flex space-x-4">
            <Heart
              className={`w-6 h-6 cursor-pointer ${isLiked ? 'fill-red-500 text-red-500' : ''}`}
              onClick={handleLike}
            />
            <MessageCircle className="w-6 h-6 cursor-pointer" />
            <Send className="w-6 h-6 cursor-pointer" />
          </div>
          <Bookmark className="w-6 h-6 cursor-pointer" />
        </div>

        <p className="font-semibold mb-1">{likesCount.toLocaleString()} likes</p>
        <p>
          <span className="font-semibold mr-2">{username}</span>
          {caption}
        </p>
      </div>
    </div>
  );
}