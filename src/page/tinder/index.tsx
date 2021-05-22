import { FC, useEffect, useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useSprings } from '@react-spring/core';
import { useDrag } from '@use-gesture/react';

const Tinder: FC = () => {
  const [books] = useState([
    {
      name: 'Sapiens Lược Sử Loài Người',
      author: 'Yuval Noah Harari',
      cover:
        'https://salt.tikicdn.com/ts/product/56/3f/4f/f4e6621e69775643d22604bccef281bf.jpg',
      tweet: `
        Sapiens là một chuyến du hành qua toàn bộ lịch sử loài người. Sách hấp dẫn lắm, mọi người nhớ đọc nha ^^
      `,
      owner: {
        name: 'Long',
        address: 'Ứng Hoà, Hà Nội',
      },
    },
    {
      name: 'Sapiens Lược Sử Loài Người',
      author: 'Yuval Noah Harari',
      cover:
        'https://salt.tikicdn.com/ts/product/56/3f/4f/f4e6621e69775643d22604bccef281bf.jpg',
      tweet: `
        Sapiens là một chuyến du hành qua toàn bộ lịch sử loài người. Sách hấp dẫn lắm, mọi người nhớ đọc nha ^^
      `,
      owner: {
        name: 'Long',
        address: 'Ứng Hoà, Hà Nội',
      },
    },
    {
      name: 'Sapiens Lược Sử Loài Người',
      author: 'Yuval Noah Harari',
      cover:
        'https://salt.tikicdn.com/ts/product/56/3f/4f/f4e6621e69775643d22604bccef281bf.jpg',
      tweet: `
        Sapiens là một chuyến du hành qua toàn bộ lịch sử loài người. Sách hấp dẫn lắm, mọi người nhớ đọc nha ^^
      `,
      owner: {
        name: 'Long',
        address: 'Ứng Hoà, Hà Nội',
      },
    },
    {
      name: 'Sapiens Lược Sử Loài Người',
      author: 'Yuval Noah Harari',
      cover:
        'https://salt.tikicdn.com/ts/product/56/3f/4f/f4e6621e69775643d22604bccef281bf.jpg',
      tweet: `
        Sapiens là một chuyến du hành qua toàn bộ lịch sử loài người. Sách hấp dẫn lắm, mọi người nhớ đọc nha ^^
      `,
      owner: {
        name: 'Long',
        address: 'Ứng Hoà, Hà Nội',
      },
    },
  ]);
  const currentBookIdx = useRef(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const topBGMaxHeight = window.innerHeight * 0.45;
  const [topBGStyle, topBGAnime] = useSpring(() => ({
    height: topBGMaxHeight,
  }));

  const width = window.innerWidth;
  const [styles, booksAnime] = useSprings(books.length, (i) => ({
    left: i * width,
    display: 'block',
    touchAction: 'none',
    config: { duration: 300, easing: (t) => t },
  }));

  const resetBooks = async () => {
    console.log('reset');

    await Promise.all(
      booksAnime.start((i) => {
        if (i === 0) {
          return {
            display: 'block',
            left: width,
            config: { duration: 0 },
          };
        }
      })
    );

    currentBookIdx.current = 0;
    await Promise.all(
      booksAnime.start((i) => {
        if (i === 0) {
          return {
            left: i * width,
            display: 'block',
            config: { duration: 300, easing: (t) => t },
          };
        }
        if (i === books.length - 1) {
          return {
            left: -width,
            display: 'block',
            config: { duration: 300, easing: (t) => t },
          };
        }
      })
    );

    booksAnime.start((i) => {
      const display = i < 2 ? 'block' : 'none';

      return {
        left: i * width,
        display,
        config: { duration: 0 },
      };
    });
  };

  const swipe = useDrag(
    ({ active, movement: [mx], direction: [dirX], cancel }) => {
      if (dirX > 0) {
        cancel();
        return;
      }

      if (active && Math.abs(mx) >= width * 0.08) {
        cancel();
        console.log(currentBookIdx.current);
        if (currentBookIdx.current === books.length - 1) {
          resetBooks();
          return;
        }

        currentBookIdx.current =
          currentBookIdx.current + 1 >= books.length
            ? 0
            : currentBookIdx.current + 1;
        console.log('->', currentBookIdx.current);
      }

      booksAnime.start((i) => {
        if (i < currentBookIdx.current - 1 || i > currentBookIdx.current + 1) {
          return { display: 'none' };
        }

        return {
          left: (i - currentBookIdx.current) * width + (active ? mx : 0),
          display: 'block',
          config: { duration: 300, easing: (t) => t },
        };
      });
    }
  );

  const getBookAt = (index: number) => {
    let idx = index;
    if (idx >= books.length) {
      idx = idx % books.length;
    }
    return books[idx];
  };

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
    <div
      ref={scrollRef}
      className='h-full relative overflow-y-auto overflow-x-hidden'
    >
      <animated.div
        className='fixed w-full bg-gradient-to-b from-[#fd0e42] to-[#c30f31] rounded-b-[2.5rem]'
        style={topBGStyle}
      />
      <div className='absolute top-8 w-full px-6 pb-2 text-white font-semibold text-3xl z-30'>
        Discover
      </div>
      {styles.map((style, i) => (
        <animated.div
          {...swipe()}
          className='absolute top-24 w-full px-6'
          style={style}
          key={i}
        >
          <div className='relative'>
            <div className='aspect-w-3 aspect-h-4 object-cover'>
              <img
                className='rounded-xl shadow-around border-primary-default border-opacity-20 border'
                src={getBookAt(i).cover}
                alt={getBookAt(i).name}
              />
            </div>
            <div className='absolute w-full bottom-0 flex items-center bg-white opacity-95 rounded-b-xl border-primary-default border-opacity-20 border border-t-0'>
              <div className='px-4 py-3'>
                <div className='text-lg font-semibold'>{getBookAt(i).name}</div>
                <div className='text-gray-700 text-sm'>
                  {getBookAt(i).owner.name} - {getBookAt(i).owner.address}
                </div>
              </div>
            </div>
          </div>
          <div className='mt-12 card p-3 rounded-xl relative'>
            <div className='flex items-center bg-gray-50 absolute top-0 transform -translate-y-1/2 px-1'>
              <img
                className='w-8 h-8 rounded-full border-primary-default border-opacity-30 border'
                src='https://i.pinimg.com/originals/32/bd/44/32bd44760c557ad79c089ad6b1ac0331.jpg'
                alt=''
              />
              <div className='ml-2 mr-1 text-lg font-semibold'>
                {getBookAt(i).owner.name}
              </div>
              <div className='bg-green-200 rounded-sm px-1 border-green-400 border text-xs'>
                owner
              </div>
            </div>
            <div
              className='mt-2 text-justify tweet'
              dangerouslySetInnerHTML={{
                __html: getBookAt(i).tweet,
              }}
            ></div>
          </div>
        </animated.div>
      ))}
    </div>
  );
};

export default Tinder;
