// src/components/ResultCard.jsx

import React from 'react';
import AlertTriangle from '../assets/icons/AlertTriangle';
import CheckCircle from '../assets/icons/CheckCircle';
import ExclamationTriangle from '../assets/icons/ExclamationTriangle';

export default function ResultCard({ cmd }) {
  let StatusIcon;
  let statusColor;

  if (!cmd.violated) {
    StatusIcon = CheckCircle;
    statusColor = 'text-green-500';
  } else if (cmd.isPrimaryViolation) {
    StatusIcon = AlertTriangle;
    statusColor = 'text-red-500';
  } else if (cmd.isSecondaryViolation) {
    StatusIcon = ExclamationTriangle;
    statusColor = 'text-yellow-500';
  }

  const bgClass = cmd.violated
    ? cmd.isPrimaryViolation
      ? 'bg-red-50 border-red-200'
      : 'bg-yellow-50 border-yellow-200'
    : 'bg-green-50 border-green-200';

  return (
    <div className={`p-6 rounded-lg border ${bgClass} mb-4`}>
