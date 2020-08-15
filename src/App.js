import React from 'react';
import Navbar from './components/layout/Navbar';
import NavItem from './components/layout/NavItem';
import DropdownMenu from './components/layout/DropdownMenu'
import { ReactComponent as PlusIcon } from './icons/plus.svg'
import { ReactComponent as BellIcon } from './icons/bell.svg'
import { ReactComponent as MessengerIcon } from './icons/messenger.svg'
import { ReactComponent as SettingIcon } from './icons/caret.svg'

function App() {
  return(
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
      <NavItem icon={<SettingIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}


export default App;
