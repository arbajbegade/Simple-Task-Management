import React from 'react'

interface FolderProps {
  label: string;
  icon?: React.ReactNode; 
}

const Folder: React.FC<FolderProps> = ({ label, icon }) => {
  return (
    <div className='m-1 flex items-center space-x-2'>
      {icon && (
        <span className='text-[#3D3A89] bg-[#DFDFEE] p-2  rounded-full'>
          {icon}
        </span>
      )}

      <span className='text-sm font-semibold'>{label}</span>
    </div>
  )
}

export default Folder
