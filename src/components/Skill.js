import React from 'react';
import HeadLine from '../UI/HeadLine';

const Skill = () => {
  return (
    <section>
      <HeadLine>Skill</HeadLine>
      <div className='container'>
        <div className='inner-left-box'>
          <span className='font-bold text-[1.4rem]'>Frontend</span>
        </div>
        <div className='inner-right-box'>
          <ul>
            <li>JavaScript, TypeScript</li>
            <li>React, Next.js, jQuery, Nexacro</li>
            <li>CSS3, Tailwind CSS, Material UI</li>
            <li>Npm, Webpack</li>
            <li>Visual Studio Code, WebStorm</li>
          </ul>
        </div>
      </div>
      <div className='container'>
        <div className='inner-left-box'>
          <span className='font-bold text-[1.4rem]'>Backend</span>
        </div>
        <div className='inner-right-box'>
          <ul>
            <li>Java 8, Java 17, Java 18</li>
            <li>Spring, Spring Boot, eGov</li>
            <li>REST API, Batch</li>
            <li>Gradle, Maven</li>
          </ul>
        </div>
      </div>
      <div className='container'>
        <div className='inner-left-box'>
          <span className='font-bold text-[1.4rem]'>DevOps</span>
        </div>
        <div className='inner-right-box'>
          <ul>
            <li>Oracle, MySQL, MariaDB</li>
            <li>Tomcat, JEUS, WebLogic</li>
            <li>AWS, Firebase</li>
            <li>goPhish, UiPath</li>
            <li>Windows, Linux</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skill;
