import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface NavigateBreadCrumbsProps {
  children: React.ReactNode;
}

const NavigateBreadCrumbs: React.FC<NavigateBreadCrumbsProps> = ({ children }) => {
  const handleBack = () => {
    window.history.back();
  };

  const childrenArray = React.Children.toArray(children);
  const breadcrumbs = childrenArray.reduce((acc: React.ReactNode[], child, index) => {
    if (index < childrenArray.length - 1) {
      acc.push(child, <NavigateNextIcon fontSize="small" key={index} />);
    } else {
      acc.push(child);
    }
    return acc;
  }, []);

  return (
    <div className="flex items-center space-x-2 text-xs">
      <button onClick={handleBack} className="flex items-center space-x-1">
        <ArrowBackIcon fontSize="small" />
      </button>
      {breadcrumbs}
    </div>
  );
};

export default NavigateBreadCrumbs;
