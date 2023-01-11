import React from 'react';
import MyAvatar from './../UI/MyAvatar';
import myProfile from '../styles/images/my-profile.png';
import HeadLine from '../UI/HeadLine';

const AboutMe = () => {
  return (
    <section className='flex flex-col justify-center pb-8'>
      <HeadLine>About Me</HeadLine>
      <div className='flex flex-col justify-center items-center space-y-5 md:flex-row md:justify-start md:space-y-0'>
        <div className='flex justify-center md:basis-1/4'>
          <MyAvatar src={myProfile} />
        </div>
        <div className='md:basis-3/4'>
          <p className='break-keep text-left'>
            <strong>Javascript</strong> 기반 웹 개발자로 3년 째 일하고 있습니다.
            주로 금융권 프로젝트에 참여하여 최신 기술 기반 웹 개발자로 3년 째
            일하고 있습니다. 주로 금융권 프로젝트에 참여하여 최신 기술 기반 웹
            개발자로 3년 째 일하고 있습니다. 주로 금융권 프로젝트에 참여하여
            최신 기술 프로젝트에 참여하여 최신 기술 기반 웹 개발자로 3년 째
            일하고 있습니다. 주로 금융권 프로젝트에 참여하여 최신 기술
            프로젝트에 참여하여 최신 기술 기반 웹 개발자로 3년 째 일하고
            있습니다. 주로 금융권 프로젝트에 참여하여 최신 기술 프로젝트에
            참여하여 최신 기술 기반 웹 개발자로 3년 째 일하고 있습니다. 주로
            금융권 프로젝트에 참여하여 최신 기술 프로젝트에 참여하여 최신 기술
            기반 웹 개발자로 3년 째 일하고 있습니다. 주로 금융권 프로젝트에
            참여하여 최신 기술
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
