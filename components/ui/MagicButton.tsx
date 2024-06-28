import React from "react";

const MagicButton = ({title, icon, position, handleClick, otherClasses }: 
  {title: string; icon: React.ReactNode; position: string; handleClick?: () => void; otherClasses?: string}) => {
  return (
    
        // Button code
        <button className={`w-full inline-flex h-12 animate-shimmer items-center justify-center rounded-md border-2 
        border-indigo-400 bg-[linear-gradient(110deg,#000103,45%,indigo,55%,#000103)] bg-[length:200%_100%] px-4 py-7 
        font-medium text-white-400 transition-colors md:w-60 md:mt-10 gap-2 ${otherClasses}`}>
          {position == 'left' && icon}
          {title}
          {position == 'right' && icon}
        </button>  
  );
};

export default MagicButton;
