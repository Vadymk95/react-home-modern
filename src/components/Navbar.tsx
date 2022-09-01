import { FC, useState } from 'react';

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

export const Navbar: FC = () => {
  const [toggle, setToggle] = useState(false);

  const mappedNavLinks = (classname: string) => {
    return navLinks.map((nav, i) => (
      <li
        className={`hover:underline font-poppins font-normal text-[16px] text-white ${
          i === navLinks.length - 1 ? 'mr-0' : classname
        }`}
        key={nav.id}
      >
        <a href={`#${nav.id}`}>{nav.title}</a>
      </li>
    ));
  };

  const toggleHandler = () => setToggle((prevToggle) => !prevToggle);
  return (
    <nav className="flex w-full py-6 justify-beetwen items-center navbar">
      <img className="w-[124px] h-[32px]" src={logo} alt="hoobank" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {mappedNavLinks('mr-10')}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          onClick={toggleHandler}
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          src={toggle ? close : menu}
          alt="menu"
        />
        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {mappedNavLinks('mb-4')}
          </ul>
        </div>
      </div>
    </nav>
  );
};
