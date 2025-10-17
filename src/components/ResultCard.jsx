import React from "react";
import AlertTriangle from "../assets/icons/AlertTriangle";
import CheckCircle from "../assets/icons/CheckCircle";
import ExclamationTriangle from "../assets/icons/ExclamationTriangle";

export default function ResultCard({ cmd }) {
  let StatusIcon;
  let statusColor;
  let explanationText = cmd.explanation;

  if (!cmd.violated) {
    StatusIcon = CheckCircle;
    statusColor = "text-green-500";
    // No extra explanation
  } else if (cmd.isPrimaryViolation) {
    StatusIcon = AlertTriangle;
    statusColor = "text-red-500";
    // No extra explanation, just use cmd.explanation
  } else if (cmd.isSecondaryViolation) {
    StatusIcon = ExclamationTriangle;
    statusColor = "text-yellow-500";
    // Add the James 2:10 explanation ONLY for secondary violations
    explanationText = `${cmd.explanation} — James 2:10 teaches that breaking one commandment makes us guilty of all, because love fulfills the law (Romans 13:10).`;
  }

  const bgClass = cmd.violated
    ? cmd.isPrimaryViolation
      ? "bg-red-50 border-red-200"
      : "bg-yellow-50 border-yellow-200"
    : "bg-green-50 border-green-200";

  return (
    <div className={`p-6 rounded-lg border ${bgClass} mb-4 flex items-center`}>
      <StatusIcon className={`w-6 h-6 mr-3 ${statusColor}`} />
      <div>
        <div className="font-semibold">{cmd.text}</div>
        <div className="text-sm text-gray-700">{explanationText}</div>
      </div>
    </div>
  );
}
