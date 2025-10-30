import React from "react";
import tenCommandmentsImage from "../assets/images/outputcomm.jpg";

export default function CommandmentCard({ cmd }) {
  const statusColor = cmd.violated
    ? cmd.isPrimaryViolation
      ? "text-red-500"
      : "text-yellow-500"
    : "text-green-500";

  const bgClass = cmd.violated
    ? cmd.isPrimaryViolation
      ? "bg-red-50 border-red-200"
      : "bg-yellow-50 border-yellow-200"
    : "bg-green-50 border-green-200";

  return (
    <div className={`p-6 rounded-lg border ${bgClass} mb-4 flex items-center`}>
      <img 
        src={tenCommandmentsImage} 
        alt="Commandment" 
        className="w-10 h-10 object-contain mr-3 opacity-80"
      />
      <div>
        <div className="font-semibold">{cmd.text}</div>
        <div className="text-sm text-gray-700">{cmd.explanation}</div>
      </div>
    </div>
  );
}