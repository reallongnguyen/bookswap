import { FC } from 'react';

const Tinder: FC = () => {
  return (
    <div className='h-full relative'>
      <div className='absolute w-full h-2/5 bg-gradient-to-b from-[#fd0e42] to-[#c30f31] rounded-b-[2.5rem]'></div>
      <div className='absolute top-12 w-full px-6 text-white font-semibold text-3xl'>
        Discover
      </div>
      <div className='absolute top-24 w-full px-6'>
        <div className='aspect-w-3 aspect-h-4 object-cover'>
          <img
            className='rounded-2xl shadow'
            src='https://cdn2.tieudungplus.vn/media/uploaded/27/2017/07/17/IMG_0735.jpg'
            alt=''
          />
        </div>
        <div className='mt-4 text-xl font-semibold'>
          Sapiens - Lược sử về loài người
        </div>
      </div>
    </div>
  );
};

export default Tinder;
