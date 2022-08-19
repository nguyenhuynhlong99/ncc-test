import React from 'react';
import NavItem from '../NavItem/NavItem';

const Sidebar = ({ navMobile }) => {
  return (
    <nav className={navMobile ? 'nav active' : 'nav'}>
      <NavItem text="Home" active />
      <NavItem text="Services" />
      <NavItem text="News" />
      <NavItem text="Blog" />
      <NavItem text="Contact" />
    </nav>
  );
};

export default Sidebar;
