import React from 'react';
import { ReactComponent as Kakao } from '../styles/images/kakaotalk.svg';
import { ReactComponent as Github } from '../styles/images/github.svg';

const Header = () => {
  return (
    <header className='flex flex-col justify-between md:flex-row pb-8'>
      <div className='flex flex-col justify-start pt-[0.7rem] pb-1'>
        <div className='text-[2.5rem] font-bold md:text-left'>주진호</div>
        <div className='text-xl md:text-left'>웹 개발자</div>
      </div>
      <div className='flex flex-col justify-center md:justify-end space-y-1'>
        <div className='flex justify-center md:justify-end items-center space-x-3 pb-2'>
          <a
            href='https://github.com/tommyJ874'
            target='_blank'
            rel='noreferrer'
            className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110'
          >
            <Github className='w-[3.7rem] h-[3.7rem]' />
          </a>
          <a
            href='https://open.kakao.com/o/s3szcbVe'
            target='_blank'
            rel='noreferrer'
            className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110'
          >
            <Kakao className='w-[3.5rem] h-[3.5rem]' />
          </a>
        </div>
        <div className='text-sm md:text-right'>
          <span>Email: </span>
          <a
            className='font-semibold underline'
            href='mailto:tommyJ.dev@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            tommyJ.dev@gmail.com
          </a>
        </div>
        <div className='text-sm md:text-right'>
          <span>Web: </span>
          <a
            className='font-semibold underline'
            href='https://tommy874-f1225.web.app'
            target='_blank'
            rel='noreferrer'
          >
            https://tommy874-f1225.web.app
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
