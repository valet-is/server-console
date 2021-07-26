import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  Wrapper,
  HomeIcon,
  ResourceIcon,
  DocumentsIcon,
  MediaIcon,
  UsersIcon,
  SettingsIcon,
  LogoutIcon,
  Menu,
  MenuItem,
} from './styled';

const mainMenuItems = [
  {
    to: '/',
    icon: <HomeIcon />,
  },
  { to: '/resources', icon: <ResourceIcon /> },
  {
    to: '/crud',
    icon: <DocumentsIcon />,
  },
  {
    to: '/media',
    icon: <MediaIcon />,
  },
  {
    to: '/users',
    icon: <UsersIcon />,
  },
];

const bottomMenuItems = [
  {
    to: '/settings',
    icon: <SettingsIcon />,
  },
  {
    to: '/logout',
    icon: <LogoutIcon />,
  },
];

export default function Nav() {
  const location = useLocation();

  const [selectedPath, setSelectedPath] = useState('/');

  useEffect(() => {
    const { pathname } = location;
    setSelectedPath(`/${pathname.split('/')[1]}`);
  }, [location]);

  return (
    <Wrapper>
      <Menu>
        {mainMenuItems.map(({ to, icon }) => (
          <MenuItem key={to} active={selectedPath === to}>
            <Link to={to}>{icon}</Link>
          </MenuItem>
        ))}
      </Menu>

      <Menu>
        {bottomMenuItems.map(({ to, icon }) => (
          <MenuItem key={to} active={selectedPath === to}>
            <Link to={to}>{icon}</Link>
          </MenuItem>
        ))}
      </Menu>
    </Wrapper>
  );
}
