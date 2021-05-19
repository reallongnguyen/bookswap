import { FC } from 'react';

const Tinder: FC = () => {
  return (
    <div className='h-full relative'>
      <div className='absolute w-full h-1/2 -top-12 bg-gradient-to-b from-[#fd0e42] to-[#c30f31] rounded-b-[2.5rem]'></div>
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
          <div className='absolute w-full bottom-0 flex items-center bg-white rounded-xl'>
            <div className='px-4 py-3'>
              <div className='text-lg font-semibold'>
                Sapiens - Lược sử về loài người
              </div>
              <div className='text-gray-400 text-sm font-light'>
                Li - Thanh Xuân, Hà Nội
              </div>
            </div>
          </div>
        </div>
        <div className='mt-6'>Tác giả: Yuval Noah Harari</div>
        <div className='mt-2 text-justify pb-4'>
          <p>
            Sapiens, đưa chúng ta vào một chuyến đi kinh ngạc qua toàn bộ lịch
            sử loài người, từ những gốc rễ tiến hóa của nó đến thời đại của chủ
            nghĩa tư bản và kỹ thuật di truyền, để khám phá tại sao chúng ta
            đang trong những điều kiện sinh sống hiện tại.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tinder;
