import React from 'react';

const MyAvatar = (props) => {
  return (
    <div className='flex justify-center md:justify-start'>
      <div className='h-[12.5rem] w-[12.5rem] min-w-max md:mr-10 '>
        <div className='h-full w-full rounded-full bg-gray-50'>
          <img
            className='h-full w-full rounded-full'
            src={props.src}
            alt='portrait'
          />
        </div>
      </div>
    </div>
  );
};

export default MyAvatar;