import React from 'react';

const HeadLine = (props) => {
  return (
    <div className='text-3xl text-center border-b-2 border-gray-300 border-dashed pb-[0.625rem] mb-10'>
      {props.children}
    </div>
  );
};

export default HeadLine;
