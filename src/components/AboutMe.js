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
            2019년부터 웹 개발자로 일하며 금융, 보험, 그룹웨어, 인사시스템
            프로젝트를 경험했습니다. 운영 업무와 신규 개발을 함께 수행하며
            프론트엔드와 백엔드 전반을 이해하고, 서비스 흐름에 맞는 기능을
            안정적으로 구현하는 데 집중합니다.
          </p>
          <p className='break-keep text-left'>
            현재는 보험 시스템 가입설계 파트 운영과 개정 상품 개발을 담당하고
            있으며, AI Agent 연계를 위한 업무 API 개발도 함께 진행하고
            있습니다. <mark>Java</mark>, <mark>Spring Boot</mark>,{' '}
            <mark>Oracle</mark>, <mark>React</mark>, <mark>Next.js</mark>,{' '}
            <mark>TypeScript</mark> 기반의 풀스택 개발 경험이 있습니다.
          </p>
          <p className='break-keep text-left'></p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
