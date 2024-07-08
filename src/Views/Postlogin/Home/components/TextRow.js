import React from 'react';

const HowItWorksItem = (prop) => {
  return (
    <div className='flex gap-2.5 items-start'>
      <img className='relative top-[0.7rem]' width={18} src='/Images/blueRight.svg' alt='icon' />
      <div>
        <div className="text-indigo-500 text-[1.3rem] font-bold font-['Poppins'] capitalize leading-10">
         {prop.h}
        </div>
        <div className="text-neutral-900 text-[0.8rem] font-medium font-['Poppins'] capitalize leading-loose">
        {prop.p}
        </div>
      </div>  
    </div>
  );
};

export default HowItWorksItem;
