import React, {useState, useEffect, useContext} from 'react';
//import icons
import { RiWallet3Line, RiArrowUpSLine, RiArrowDownSLine, RiMapPinLine } from 'react-icons/ri';

//import headlines  ui
import { Menu } from '@headlessui/react';

//import house context
import { HouseContext } from './HouseContext';


const PriceRangeDropdown = () => {
  const {price, setPrice } = useContext(HouseContext);  // Destructuring values from HouseContext
  const [isOpen, setIsOpen] = useState(false);  // useState for dropdown open/close state
     
   const prices = [
     {
       value:'price range (any)',
     },
     {
       value:'100000 - 130000',
     },
     {
      value:'130000 - 160000',
    },
    {
      value:'160000 - 190000',
    },
    {
      value:'190000 - 220000',
    },
    {
      value:'10000 - 30000',
    },
    {
      value:'30000 - 40000',
    },
   ];


  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div> {/* Display selected country */}
          <div className='text-[13px]'>Choose price range</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine 
          className='dropdown-icon-secondary' />
          ) : (
          <RiArrowDownSLine 
          className='dropdown-icon-secondary' />
          )}
      </Menu.Button>

      {/* Dropdown menu */}
      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => setPrice(price.value)}  // Set the selected country
              className='cursor-pointer hover:text-violet-700 transition'
              as='li'
              key={index}  // Use correct key syntax
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
