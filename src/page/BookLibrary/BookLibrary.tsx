import { FC } from 'react';
import { useHistory } from 'react-router-dom';

const Library: FC = () => {
    const history = useHistory();
    const addBook = () => {
        
        history.push('/add');
    };
    
    return (
        <div className='px-8 h-full'>
            <div className="text-xl font-semibold text-[#272727] flex justify-center pt-12">
                BOOK LIBRARY
            </div>
                 
            <div className="flex justify-between">

               
           <button onClick={addBook} className="bg-blue-500 mt-12 rounded px-3 py-2 text-4xl">
                    +
          </button>
            </div>
        </div>
    )
}

export default Library
