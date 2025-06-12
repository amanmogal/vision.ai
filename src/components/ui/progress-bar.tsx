
import React from 'react';

interface ProgressBarProps {
  progress: number;
  className?: string;
  showPercentage?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  className = '', 
  showPercentage = false 
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        {showPercentage && (
          <span className="text-sm font-medium text-muted-foreground">
            {progress}%
          </span>
        )}
      </div>
      <div className="w-full bg-pulse-100 rounded-full h-2 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-pulse-500 to-pulse-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
