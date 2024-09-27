import React from 'react';

interface TruncatedTextProps {
  text: string;
  maxLength: number;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({ text, maxLength }) => {
  return (
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {text.length > maxLength ? `${text.slice(0, maxLength)}...` : text}
    </h5>
  );
};

export default TruncatedText;
