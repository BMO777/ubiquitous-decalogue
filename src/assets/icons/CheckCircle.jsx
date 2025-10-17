import React from 'react';

export default function CheckCircle({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 6a10 10 0 11-20 0 10 10 0 0120 0z" />
    </svg>
  );
}