import React from 'react';

export default function ExclamationTriangle({ className }) {
  // Yellow warning triangle with exclamation, solid style
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M9.401 2.027a1.75 1.75 0 013.197 0l7.428 13.285A1.75 1.75 0 0118.447 18H3.553a1.75 1.75 0 01-1.579-2.688L9.401 2.027zM10 7a1 1 0 012 0v4a1 1 0 01-2 0V7zm2 7a1 1 0 10-2 0 1 1 0 002 0z" clipRule="evenodd" />
    </svg>
  );
}