import { FC } from 'react';

const Tinder: FC = () => {
  return (
    <div className='h-full relative'>
      <div className='absolute w-full h-2/5 bg-gradient-to-b from-[#fd0e42] to-[#c30f31] rounded-b-[2.5rem]'></div>
      <div className='absolute top-12 w-full px-6 text-white font-semibold text-3xl'>
        Discover
      </div>
      <div className='absolute top-24 w-full px-6'>
        <div className='relative'>
          <div className='aspect-w-3 aspect-h-4 object-cover'>
            <img
              className='rounded-xl shadow-md'
              src='https://cdn2.tieudungplus.vn/media/uploaded/27/2017/07/17/IMG_0735.jpg'
              alt=''
            />
          </div>
          <div className='absolute w-full bottom-0 h-16 flex items-center bg-white rounded-xl'>
            <div className='px-4'>
              <div className='text-lg font-semibold'>
                Sapiens - Lược sử về loài người
              </div>
              <div className='-mt-1 text-gray-400 text-sm font-light'>
                Thanh Xuân, Hà Nội
              </div>
            </div>
          </div>
        </div>
        <div className='mt-4 flex justify-around'>
          <button className='outline-none active:outline-none focus:outline-none active:shadow-sm shadow-md border-gray-200 border rounded-full w-14 h-14'></button>
        </div>
      </div>
    </div>
  );
};

export default Tinder;
