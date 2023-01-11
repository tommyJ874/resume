import React from 'react';
import MyAvatar from './../UI/MyAvatar';
import myProfile from '../styles/images/my-profile.png';

const AboutMe = () => {
  return (
    <div className='flex flex-col justify-center max-w-[73.125rem]'>
      <div className='text-3xl text-center border-b-2 border-dashed pb-[0.625rem] mb-10'>
        AboutMe
      </div>
      <div className='flex flex-col justify-center mx-[12.406rem] md:mx-[0.394rem] md:flex-row md:justify-between'>
        <MyAvatar src={myProfile} />
      </div>
    </div>
  );
};

export default AboutMe;
