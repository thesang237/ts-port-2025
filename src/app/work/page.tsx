'use client';

import { useRevealer } from '@/hooks/useRevealer';
import React from 'react';

const Work = () => {
  useRevealer();
  return (
    <>
      <div className='revealer'></div>
      <div className='work'>
        <h1>selected work</h1>

        <div className='projects'>
          <img src='/img-01.jpg' alt='' />
          <img src='/img-02.jpg' alt='' />
          <img src='/img-03.jpg' alt='' />
        </div>
      </div>
    </>
  );
};

export default Work;
