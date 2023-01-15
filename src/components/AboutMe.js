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
            서울에서 웹 개발자로 3년째 일하고 있으며 금융권 SI, SM 프로젝트
            경험이 있습니다. SI 특성상 프로젝트마다 팀원과 개발 환경이 다른
            경우가 많았기 때문에 새로운 환경에 거부감 없이 빠르게 적응합니다.
            능숙한 분야가 아니더라도 적극적으로 탐색하여 최적의 결과를 낼 수
            있도록 노력합니다.
          </p>
          <p className='break-keep text-left'>
            현재는 <strong>Javascript</strong> 기반의 프레임워크에 관심이 많아{' '}
            <mark>React</mark>, <mark>Redux</mark>, <mark>Recoil</mark> 등을
            학습하고 있고 토이 프로젝트를 통해 Typescript 언어도 함께 적용하는
            중입니다.
          </p>
          <p className='break-keep text-left'></p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
