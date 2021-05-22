import { FC, useEffect, useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useSprings } from '@react-spring/core';
import { useDrag } from '@use-gesture/react';

const Tinder: FC = () => {
  const [books] = useState([
    {
      name: '孤島の鬼',
      author: '江戸川乱歩',
      cover:
        'https://cdn.kdkw.jp/cover_1000/200901/200901000542.jpg',
      tweet: `
        <p>初代は3歳で親に捨てられた。お守り代わりの古い系図帳だけが初代の身元の手がかりだ。そんな初代にひかれ蓑浦は婚約を決意するが、蓑浦の先輩で同性愛者の諸戸が初代に突然求婚した。諸戸はかつて蓑浦に恋していた男。蓑浦は、諸戸が嫉妬心からわざと初代に求婚したのではないかと疑う。そんなある日自宅で初代が殺された。これは恐ろしく壮大な物語の幕開けに過ぎなかった―。</p>
      `,
      owner: {
        name: 'Long',
        address: 'Ứng Hoà, Hà Nội',
      },
    },
    {
      name: '春の雪',
      author: '三島由紀夫',
      cover:
        'https://images-na.ssl-images-amazon.com/images/I/510AADA6GEL._SX349_BO1,204,203,200_.jpg',
      tweet: `
        <p>ともに華族に生まれた松枝清顕と綾倉聡子。互いに惹かれ合うが、自尊心の強さから清顕が聡子を遠ざけると、聡子は皇族との婚約を受け入れてしまう。若い二人の前に、燃えるような禁忌の道が拓かれ、度重なる密会の果て、ついに恐れていた事態を招来する──。三島が己れのすべてを賭し、典雅なる宿命世界を描き尽くしたライフワークたる『豊饒の海』第一巻。</p>
      `,
      owner: {
        name: 'Li',
        address: 'Ứng Hoà, Hà Nội',
      },
    },
    {
      name: '斜陽',
      author: '太宰治',
      cover:
        'https://cdn.readmoo.com/cover/qk/trjkvgk_210x315.jpg?v=1609054497',
      tweet: `
        <p>敗戦直後の没落貴族の家庭にあって、恋と革命に生きようとする娘かず子、「最後の貴婦人」の気品をたもつ母、破滅にむかって突き進む弟直治。滅びゆくものの哀しくも美しい姿を描いた『斜陽』は、昭和22年発表されるや爆発的人気を呼び、「斜陽族」という言葉さえ生み出した。同時期の短篇『おさん』を併収。</p>
      `,
      owner: {
        name: 'Phuong',
        address: 'Ứng Hoà, Hà Nội',
      },
    },
    {
      name: '三四郎',
      author: '夏目漱石',
      cover:
        'https://image.xstt5.com/d/file/waiwen/2eb532d5a72366c34352eecee35a4a58.jpg',
      tweet: `
        <p>熊本の高等学校を卒業して、東京の大学に入学した小川三四郎は、見る物聞く物の総てが目新しい世界の中で、自由気侭な都会の女性里見美禰子に出会い、彼女に強く惹かれてゆく…。青春の一時期において誰もが経験する、学問、友情、恋愛への不安や戸惑いを、三四郎の恋愛から失恋に至る過程の中に描いて「それから」「門」に続く三部作の序曲をなす作品である。</p>
      `,
      owner: {
        name: 'Li',
        address: 'Ứng Hoà, Hà Nội',
      },
    },
    {
      name: '万延元年のフットボール',
      author: '大江健三郎',
      cover:
        'https://images-na.ssl-images-amazon.com/images/I/71GY0u4xCKL.jpg',
      tweet: `
        <p>友人の死に導かれ夜明けの穴にうずくまる僕。地獄を所有し、安保闘争で傷ついた鷹四。障害児を出産した菜採子。苦渋に満たち登場人物たちが、四国の谷間の村をさして軽快に出発した。万延元年の村の一揆をなぞるように、神話の森に暴動が起る。幕末から現代につなぐ民衆の心をみごとに形象化し、戦後世代の切実な体験と希求を結実させた画期的長編。谷崎賞受賞。</p>
      `,
      owner: {
        name: 'Tuan',
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
    config: { duration: 500 },
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
          config: { duration: 500 },
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
      ディスカバー
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
          <div className='mt-6'>筆者: {getBookAt(i).author}</div>
          <div
            className='mt-2 text-justify pb-4 tweet'
            dangerouslySetInnerHTML={{
              __html: getBookAt(i).tweet,
            }}
          />
        </animated.div>
      ))}
    </div>
  );
};

export default Tinder;
