import React from 'react';

export default function AlertTriangle({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M12 17h.01M12 12h.01M12 12l-2 2m0 0l-2-2m2 2l2-2m-2 2l2 2" />
    </svg>
  );
}