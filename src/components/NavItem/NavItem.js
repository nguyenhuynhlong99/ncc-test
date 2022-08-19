import React from 'react';

const NavItem = ({ text, active }) => {
  return <div className={active ? 'navItem active' : 'navItem'}>{text}</div>;
};

export default NavItem;
