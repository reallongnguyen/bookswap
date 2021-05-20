import { FC } from 'react';

export interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }) => {
  return (
    <div className='h-16 flex items-center'>
      <div className='text-xl px-6'>{title}</div>
    </div>
  );
};

export default Header;
