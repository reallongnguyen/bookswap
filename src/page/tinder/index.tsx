import { FC, useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Tinder: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const topBGMaxHeight = window.innerHeight * 0.45;
  const [topBGStyle, topBGAnime] = useSpring(() => ({
    height: topBGMaxHeight,
  }));

  useEffect(() => {
    if (!scrollRef.current) {
      return;
    }

    const handleScroll = () => {
      const scrollTop = scrollRef.current?.scrollTop || 0;

      topBGAnime.start({
        height: Math.max(0, topBGMaxHeight - scrollTop * 0.75),
        config: { duration: 75 },
      });
    };

    const scrollEle = scrollRef.current;
    scrollEle.addEventListener('scroll', handleScroll);

    return () => {
      scrollEle.removeEventListener('scroll', handleScroll);
    };
  }, [topBGAnime, topBGMaxHeight]);

  return (
    <div ref={scrollRef} className='h-full relative overflow-y-auto'>
      <animated.div
        className='fixed w-full bg-gradient-to-b from-[#fd0e42] to-[#c30f31] rounded-b-[2.5rem]'
        style={topBGStyle}
      />
      <div className='absolute top-12 w-full px-6 pb-2 text-white font-semibold text-3xl z-30'>
        Discover
      </div>
      <div className='absolute top-24 w-full px-6'>
        <div className='relative'>
          <div className='aspect-w-3 aspect-h-4 object-cover'>
            <img
              className='rounded-xl shadow-around'
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
        <div className='mt-2 text-justify pb-4 tweet'>
          <p>
            Sapiens, đưa chúng ta vào một chuyến đi kinh ngạc qua toàn bộ lịch
            sử loài người, từ những gốc rễ tiến hóa của nó đến thời đại của chủ
            nghĩa tư bản và kỹ thuật di truyền, để khám phá tại sao chúng ta
            đang trong những điều kiện sinh sống hiện tại.
          </p>
          <p>
            Sapiens, đưa chúng ta vào một chuyến đi kinh ngạc qua toàn bộ lịch
            sử loài người, từ những gốc rễ tiến hóa của nó đến thời đại của chủ
            nghĩa tư bản và kỹ thuật di truyền, để khám phá tại sao chúng ta
            đang trong những điều kiện sinh sống hiện tại.
          </p>
          <p>
            Sapiens, đưa chúng ta vào một chuyến đi kinh ngạc qua toàn bộ lịch
            sử loài người, từ những gốc rễ tiến hóa của nó đến thời đại của chủ
            nghĩa tư bản và kỹ thuật di truyền, để khám phá tại sao chúng ta
            đang trong những điều kiện sinh sống hiện tại.
          </p>
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
