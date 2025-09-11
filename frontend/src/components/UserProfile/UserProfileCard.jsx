import React, { useState } from "react";
import "../../style/master.css";

/**
 * UserProfileCard component displays user profile information in a card format
 * It can be used in various parts of the application where user information is displayed
 */
const UserProfileCard = ({
  username = "Guest",
  balance = 0,
  avatar = null,
  rank = "Beginner",
  onProfileClick = () => {},
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="user-profile-card bg-[#191b24] rounded-lg p-4 shadow-md overflow-hidden transition-all duration-300">
      <div className="flex items-center cursor-pointer" onClick={toggleExpand}>
        <div className="avatar-container w-12 h-12 rounded-full overflow-hidden bg-[#282c3c] mr-3 flex items-center justify-center">
          {avatar ? (
            <img
              src={avatar}
              alt={`${username}'s avatar`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-xl font-bold text-white">
              {username.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        <div className="user-info flex-1">
          <h3 className="text-lg font-semibold text-white">{username}</h3>
          <div className="flex items-center">
            <span className="text-sm text-gray-400 mr-2">{rank}</span>
            <span className="text-sm font-medium text-[#f5a623]">
              {balance.toFixed(2)} Coins
            </span>
          </div>
        </div>

        <div className="expand-icon ml-2">
          <svg
            className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {isExpanded && (
        <div className="expanded-content mt-4 pt-4 border-t border-gray-700 animate__animated animate__fadeIn">
          <div className="stats grid grid-cols-2 gap-2 mb-3">
            <div className="stat p-2 bg-[#222533] rounded">
              <span className="text-xs text-gray-400">Games Played</span>
              <p className="text-white font-medium">127</p>
            </div>
            <div className="stat p-2 bg-[#222533] rounded">
              <span className="text-xs text-gray-400">Win Rate</span>
              <p className="text-white font-medium">54%</p>
            </div>
            <div className="stat p-2 bg-[#222533] rounded">
              <span className="text-xs text-gray-400">Highest Win</span>
              <p className="text-white font-medium">1,245.00</p>
            </div>
            <div className="stat p-2 bg-[#222533] rounded">
              <span className="text-xs text-gray-400">Total Wagered</span>
              <p className="text-white font-medium">12,764.50</p>
            </div>
          </div>

          <button
            className="view-profile-btn w-full py-2 px-4 bg-[#f5a623] hover:bg-[#e69c1f] text-black font-medium rounded transition-colors duration-300"
            onClick={onProfileClick}
          >
            View Full Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfileCard;
