import { FC, useState } from 'react';
import { AddOutline } from 'react-ionicons';
import { useHistory } from 'react-router-dom';

const Library: FC = () => {
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
            className='h-28 grid mb-4 border border-gray-200 rounded overflow-hidden shadow-sm'
            style={{ gridTemplateColumns: 'auto 1fr auto' }}
          >
            <div className='flex h-full w-full'>
              <div className='w-20 h-full'>
                <img className='h-full w-20' src={book.cover} alt={book.name} />
              </div>
            </div>
            <div className='p-2 pl-4'>
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
