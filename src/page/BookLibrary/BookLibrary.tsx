import { FC, useState } from 'react';
import { AddOutline } from 'react-ionicons';
import { useHistory } from 'react-router-dom';

const Library: FC = () => {
  const [books] = useState([
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
        name: 'Li',
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
      cover: 'https://images-na.ssl-images-amazon.com/images/I/71GY0u4xCKL.jpg',
      tweet: `
            <p>友人の死に導かれ夜明けの穴にうずくまる僕。地獄を所有し、安保闘争で傷ついた鷹四。障害児を出産した菜採子。苦渋に満たち登場人物たちが、四国の谷間の村をさして軽快に出発した。万延元年の村の一揆をなぞるように、神話の森に暴動が起る。幕末から現代につなぐ民衆の心をみごとに形象化し、戦後世代の切実な体験と希求を結実させた画期的長編。谷崎賞受賞。</p>
          `,
      owner: {
        name: 'Li',
        address: 'Ứng Hoà, Hà Nội',
      },
    },
    {
      name: '孤島の鬼',
      author: '江戸川乱歩',
      cover: 'https://cdn.kdkw.jp/cover_1000/200901/200901000542.jpg',
      tweet: `
            <p>初代は3歳で親に捨てられた。お守り代わりの古い系図帳だけが初代の身元の手がかりだ。そんな初代にひかれ蓑浦は婚約を決意するが、蓑浦の先輩で同性愛者の諸戸が初代に突然求婚した。諸戸はかつて蓑浦に恋していた男。蓑浦は、諸戸が嫉妬心からわざと初代に求婚したのではないかと疑う。そんなある日自宅で初代が殺された。これは恐ろしく壮大な物語の幕開けに過ぎなかった―。</p>
          `,
      owner: {
        name: 'Li',
        address: 'Ứng Hoà, Hà Nội',
      },
    },
  ]);
  const history = useHistory();
  const addBook = () => {
    history.push('/library/add');
  };

  return (
    <div className='h-full overflow-y-auto'>
      <div className='fixed bottom-24 right-4'>
        <button
          className='w-14 h-14 rounded-full bg-primary-default border border-white grid place-items-center outline-none active:outline-none focus:outline-none shadow-sm'
          onClick={addBook}
        >
          <AddOutline
            width='1.5rem'
            height='1.5rem'
            color='white'
            style={{ fontWeight: 600 }}
          />
        </button>
      </div>
      <div className='p-6'>
        {books.map((book, i) => (
          <div
            key={i}
            className='h-24 grid border-b border-gray-200'
            style={{ gridTemplateColumns: 'auto 1fr auto' }}
          >
            <div className='flex h-full w-full items-center'>
              <img
                className='h-18 w-14 rounded'
                src={book.cover}
                alt={book.name}
              />
            </div>
            <div className='ml-4 pr-2 py-2 h-full'>
              <div className='font-semibold'>{book.name}</div>
              <div className=''>{book.author}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
