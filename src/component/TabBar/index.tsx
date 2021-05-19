import { FC, HTMLProps } from 'react';
import {
  AlbumsOutline,
  ChatbubbleOutline,
  LibraryOutline,
  PersonOutline,
} from 'react-ionicons';
import { useHistory, useRouteMatch } from 'react-router-dom';

const MenuItem: FC<
  { Icon: FC<any>; active?: boolean } & HTMLProps<HTMLDivElement>
> = ({ Icon, active, onClick }) => (
  <div onClick={onClick}>
    {active ? <Icon color='rgb(37, 99, 235)' /> : <Icon />}
  </div>
);

const TabBar: FC = () => {
  const history = useHistory();
  const match = useRouteMatch();

  const isActive = (path: string) =>
    path === '/' ? path === match.url : match.url.startsWith(path);
  const handleSelectMenu = (path: string) => () => history.push(path);

  return (
    <div className='w-full flex justify-around items-center'>
      <MenuItem
        Icon={AlbumsOutline}
        active={isActive('/')}
        onClick={handleSelectMenu('/')}
      />
      <MenuItem
        Icon={ChatbubbleOutline}
        active={isActive('/messenger')}
        onClick={handleSelectMenu('/messenger')}
      />
      <MenuItem
        Icon={LibraryOutline}
        active={isActive('/library')}
        onClick={handleSelectMenu('/library')}
      />
      <MenuItem
        Icon={PersonOutline}
        active={isActive('/profile')}
        onClick={handleSelectMenu('/profile')}
      />
    </div>
  );
};

export default TabBar;