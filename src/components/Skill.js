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
            <li>ES6+, TypeScript</li>
            <li>React, jQuery</li>
            <li>CSS3, Tailwind CSS, Material UI</li>
            <li>Npm, Webpack, Recoil, Lodash</li>
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
            <li>Java</li>
            <li>Spring MVC, Spring Security, eGov</li>
            <li>Junit</li>
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
            <li>Oracle, MySQL, MariaDB, Firestore</li>
            <li>Tomcat, JEUS, WebLogic</li>
            <li>Firebase</li>
            <li>Windows, Linux</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skill;
