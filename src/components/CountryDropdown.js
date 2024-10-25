import React, {useState, useEffect, useContext } from 'react';

//import icons
import { RiArrowDownSLine, RiArrowUpSLine, RiMapPinLine } from 'react-icons/ri';

//import headless ui
import { Menu } from '@headlessui/react';

//import house context
import { HouseContext } from './HouseContext';

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);  // Destructuring values from HouseContext

  const [isOpen, setIsOpen] = useState(false);  // useState for dropdown open/close state

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiMapPinLine className='dropdown-icon-primary' />
        <div>
          <div className='text-[13px] font-medium'>{country}</div> {/* Display selected country */}
          <div className='text-[12px]'>Select your place</div>
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
        {countries.map((country, index) => {
          return (
            <Menu.Item
              onClick={() => setCountry(country)}  // Set the selected country
              className='cursor-pointer hover:text-violet-700 transition'
              as='li'
              key={index}  // Use correct key syntax
            >
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;





































// import React from 'react';

// // const CountryDropdown = () => {
// //   return <div>CountryDropdown</div>;
// // };

// export default CountryDropdown;

// import {Menu} from '@headlessui/react';

// // import house context
// import { HouseContext } from './HouseContext';
// import { RiArrowDownSLine, RiArrowUpSLine, RiMapPinLine } from 'react-icons/ri';

// const CountryDropdown = () => {
//    const {country, setCountry, countries } =
//    useContext(HouseContext);

//    console.log(countries);

//    const [isOpen, setIsOpen] = useState(false);

//    return  (
//     <Menu as ='div' class Name= 'dropdown relative'>
//      <Menu.Button
//      onClick={() => setIsOpen(!isOpen)}
//      className='dropdown-btn w-full text-left' 
//      >
//       <RiMapPinLine
//       className='dropdown-icon-primary' />
//       <div className='text-[13px]'>Select your place</div>
//        </div>
//        {isOpen ? (
//         <RiArrowUpSLine
//         className='dropdown-icon-secondary'/>
//        ) : ( 
//         <RiArrowDownSLine
//         className='dropdown-icon-secondary'/>
//        )}
//        </Menu.Button>

//        <Menu.Items className='dropdown-menu'>
//         {countries.map((country. index) => {
//           return (
//             <Menu.Item
//             onClick-{() => setCountry(country)}
//             className='cursor-pointer
//             hover:text-violet-700 transition'
//             as='li'
//             key=[index]
//              >
//               {country}
//               </Menu.Item>
//           );
//         })}
//    )

// };
