import { FC, useState } from 'react';

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
        <div className='h-48 w-48 rounded-full border-gray-200 border object-cover'>
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
          <div className='py-2'>
            <div className='text-lg'>Change password</div>
          </div>
          <div className='py-2'>
            <div className='text-lg'>Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
