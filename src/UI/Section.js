import React from 'react';

const Section = (props) => {
  return (
    <section className='flex justify-center'>
      <div className='flex flex-col justify-center w-full md:max-w-[73.125rem]'>
        {props.children}
      </div>
    </section>
  );
};

export default Section;
