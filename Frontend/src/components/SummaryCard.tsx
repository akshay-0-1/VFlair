import React from 'react';

interface SummaryCardProps {
  title: string;
  content: string;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({ title, content }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};