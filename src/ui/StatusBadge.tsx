import React from 'react';

interface StatusBadgeProps {
  status: 'completed' | 'pending'; 
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  let badgeColorClass = '';
  let badgeContent = status;

  switch (status) {
    case 'completed':
      badgeColorClass = 'bg-[#28A745] text-white'; 
      break;
    case 'pending':
      badgeColorClass = 'bg-[#FFC107] text-white';
      break;
    default:
      badgeColorClass = 'bg-gray-100 text-gray-800';
  }

  return (
    <div>
      <span className={`me-2 px-2 py-1 rounded ${badgeColorClass}`}>
        {badgeContent}
      </span>
    </div>
  );
};

export default StatusBadge;
