import { FC, useState } from 'react';
import { AppsOutline, FingerPrintOutline, LogOutOutline } from 'react-ionicons';

const Profile: FC = () => {
  const [user] = useState({
    username: 'shizuka',
    profile: {
      name: 'Shizuka',
      address: 'Shinjuku, Tokyo',
    },
  });

  return (
    <div className='h-full'>
      <div className='flex flex-col items-center mt-16'>
        <div className='h-48 w-48 rounded-full border-gray-200 border-2 object-cover'>
          <img
            className='rounded-full'
            src='http://manxins.weebly.com/uploads/5/0/3/4/50342511/4506130_orig.jpg'
            alt=''
          />
        </div>

        <div className='mt-6 text-lg font-semibold'>{user.profile.name}</div>
        <div className='text-gray-500'>{user.profile.address}</div>
      </div>
      <div className='h-2 bg-red-100 mt-8 mb-4' />
      <div className='px-6'>
        <div className='text-xl text-primary-default'>Menu</div>
        <div className='divide-y-2 mt-4'>
          <div className='py-2 flex items-center'>
            <div className='mr-3'>
              <AppsOutline
                width='1.5rem'
                height='1.5rem'
                color='rgb(107, 114, 128)'
              />
            </div>
            <div className='text-lg mr-1'>App version</div>
            <div className='text-lg'>1.0.0</div>
          </div>
          <div className='py-2 flex items-center'>
            <div className='mr-3'>
              <FingerPrintOutline
                width='1.5rem'
                height='1.5rem'
                color='rgb(107, 114, 128)'
              />
            </div>
            <div className='text-lg'>Change password</div>
          </div>
          <div className='py-2 flex items-center'>
            <div className='mr-3'>
              <LogOutOutline
                width='1.5rem'
                height='1.5rem'
                color='rgb(107, 114, 128)'
              />
            </div>
            <div className='text-lg'>Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
