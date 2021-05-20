import { FC } from 'react';
import { useHistory } from 'react-router-dom';

const AddBook: FC = () => {
    const history = useHistory();
    const returnLibrary = () => {
        
        history.push('/library');
    };
    const add = () => {
        //xac nhan + them ...
        history.push('/library');
    };

    return (
        <div className='px-8 h-full flex flex-col justify-center'>
            <div className="text-xl font-semibold text-[#272727] flex justify-center pt-12">
                NEW BOOK
            </div>
       
            <input className="w-full p-3 mt-8 border border-gray-200 rounded" type="text" placeholder="Bookname" />

            <input className="w-full p-3 mt-3 border border-gray-200 rounded" type="text" placeholder="Author" />
            <input className="w-full p-3 mt-3 border border-gray-200 rounded" type="text" placeholder="Description" />
            <div className="flex justify-between">

                <button onClick={returnLibrary} className=" mt-12 rounded px-3 py-2 border border-gray-200">
                   Return Library
           </button>
           <button onClick={add} className="bg-blue-500 mt-12 rounded px-3 py-2">
                    Add
          </button>
            </div>
        </div>
    )
}

export default AddBook
