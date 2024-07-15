// src/CustomArrows.js
import React from 'react';

export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} border-[#A04FC8] border text-black w-10 h-10 rounded-lg flex items-center justify-center`}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 4L16 12L8 20" stroke="#A04FC8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
};

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} border-[#A04FC8] border text-black rounded-lg w-10 h-10 flex items-center justify-center`}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L8 12L16 20" stroke="#A04FC8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
};