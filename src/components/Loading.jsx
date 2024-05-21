import React from 'react';
import giphy from '/Loading.gif';

const Loading = () => {
  return (
    <div className='flex w-full justify-center items-center h-screen bg-zinc-900'>
      <img className='' src={giphy} alt="Loading..." />
    </div>
  );
};

export default Loading;