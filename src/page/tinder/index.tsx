import { FC, useEffect, useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useSprings } from '@react-spring/core';
import { useDrag } from '@use-gesture/react';

const Tinder: FC = () => {
  const [books] = useState([
    {
      name: 'Sapiens - Lược sử về loài người',
      author: 'Yuval Noah Harari',
      cover:
        'https://cdn2.tieudungplus.vn/media/uploaded/27/2017/07/17/IMG_0735.jpg',
      tweet: `
        <p>Sapiens, đưa chúng ta vào một chuyến đi kinh ngạc qua toàn bộ lịch
        sử loài người, từ những gốc rễ tiến hóa của nó đến thời đại của chủ
        nghĩa tư bản và kỹ thuật di truyền, để khám phá tại sao chúng ta
        đang trong những điều kiện sinh sống hiện tại.</p>
      `,
      owner: {
        name: 'Li',
        address: 'Ứng Hoà, Hà Nội',
      },
    },
    {
      name: 'Sapiens - Lược sử về loài người 2',
      author: 'Yuval Noah Harari',
      cover:
        'https://cdn2.tieudungplus.vn/media/uploaded/27/2017/07/17/IMG_0735.jpg',
      tweet: `
        <p>Sapiens, đưa chúng ta vào một chuyến đi kinh ngạc qua toàn bộ lịch
        sử loài người, từ những gốc rễ tiến hóa của nó đến thời đại của chủ
        nghĩa tư bản và kỹ thuật di truyền, để khám phá tại sao chúng ta
        đang trong những điều kiện sinh sống hiện tại.</p>
      `,
      owner: {
        name: 'Li',
        address: 'Ứng Hoà, Hà Nội',
      },
    },
    {
      name: 'Sapiens - Lược sử về loài người 3',
      author: 'Yuval Noah Harari',
      cover:
        'https://cdn2.tieudungplus.vn/media/uploaded/27/2017/07/17/IMG_0735.jpg',
      tweet: `
        <p>Sapiens, đưa chúng ta vào một chuyến đi kinh ngạc qua toàn bộ lịch
        sử loài người, từ những gốc rễ tiến hóa của nó đến thời đại của chủ
        nghĩa tư bản và kỹ thuật di truyền, để khám phá tại sao chúng ta
        đang trong những điều kiện sinh sống hiện tại.</p>
      `,
      owner: {
        name: 'Li',
        address: 'Ứng Hoà, Hà Nội',
      },
    },
    {
      name: 'Sapiens - Lược sử về loài người 4',
      author: 'Yuval Noah Harari',
      cover:
        'https://cdn2.tieudungplus.vn/media/uploaded/27/2017/07/17/IMG_0735.jpg',
      tweet: `
        <p>Sapiens, đưa chúng ta vào một chuyến đi kinh ngạc qua toàn bộ lịch
        sử loài người, từ những gốc rễ tiến hóa của nó đến thời đại của chủ
        nghĩa tư bản và kỹ thuật di truyền, để khám phá tại sao chúng ta
        đang trong những điều kiện sinh sống hiện tại.</p>
      `,
      owner: {
        name: 'Li',
        address: 'Ứng Hoà, Hà Nội',
      },
    },
    {
      name: 'Sapiens - Lược sử về loài người 5',
      author: 'Yuval Noah Harari',
      cover:
        'https://cdn2.tieudungplus.vn/media/uploaded/27/2017/07/17/IMG_0735.jpg',
      tweet: `
        <p>Sapiens, đưa chúng ta vào một chuyến đi kinh ngạc qua toàn bộ lịch
        sử loài người, từ những gốc rễ tiến hóa của nó đến thời đại của chủ
        nghĩa tư bản và kỹ thuật di truyền, để khám phá tại sao chúng ta
        đang trong những điều kiện sinh sống hiện tại.</p>
      `,
      owner: {
        name: 'Li',
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
    touchAction: 'none',
    display: 'block',
    config: { duration: 300 },
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
            config: { duration: 300 },
          };
        }
        if (i === books.length - 1) {
          return {
            left: -width,
            display: 'block',
            config: { duration: 300 },
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

      if (active && Math.abs(mx) > width * 0.5) {
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
          config: { duration: 300 },
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
                className='rounded-xl shadow-around'
                src={getBookAt(i).cover}
                alt={getBookAt(i).name}
              />
            </div>
            <div className='absolute w-full bottom-0 flex items-center bg-white rounded-xl'>
              <div className='px-4 py-3'>
                <div className='text-lg font-semibold'>{getBookAt(i).name}</div>
                <div className='text-gray-400 text-sm font-light'>
                  {getBookAt(i).owner.name} - {getBookAt(i).owner.address}
                </div>
              </div>
            </div>
          </div>
          <div className='mt-6'>Tác giả: {getBookAt(i).author}</div>
          <div
            className='mt-2 text-justify pb-4 tweet'
            dangerouslySetInnerHTML={{
              __html: getBookAt(i).tweet,
            }}
          ></div>
        </animated.div>
      ))}
    </div>
  );
};

export default Tinder;
