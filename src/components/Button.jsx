import React from 'react';
import TopRightArrow from '../assets/icons/top-right-arrow.svg';

const Button = ({ children, className = '', onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center gap-3 bg-brandGreen text-white p-2 pl-7 rounded-full hover:bg-green-800 transition ${className}`}>
      <span className="text-lg mb-0.5">{children}</span>

      {/* Circle Icon */}
      <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17L17 7M17 7H9M17 7V15"
          />
        </svg>
        <img src={TopRightArrow} alt="Arrow" />
      </span>
    </button>
  );
};

export default Button;
