import React, { useState, useContext } from 'react';

// Import icons
import { RiHome5Line, RiArrowUpSLine, RiArrowDownSLine, RiMapPinLine } from 'react-icons/ri'; // Added RiArrowDownSLine here

// Import headlines UI
import { Menu } from '@headlessui/react';

// Import house context
import { HouseContext } from './HouseContext';

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext); // Destructuring values from HouseContext
  const [isOpen, setIsOpen] = useState(false); // useState for dropdown open/close state

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiHome5Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{property}</div> {/* Display selected property */}
          <div className='text-[13px]'>Select your place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      {/* Dropdown menu */}
      <Menu.Items className='dropdown-menu'>
        {properties.map((property, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(property)} // Set the selected property
              className='cursor-pointer hover:text-violet-700 transition'
              as='li'
              key={index} // Use correct key syntax
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;



















// import React, {useState, useEffect, useContext} 
// from 'react';

// //import icons
// import { RiHome5Line, RiArrowUpSLine, RiMapPinLine } from 'react-icons/ri';

// //import headlines  ui
// import { Menu } from '@headlessui/react';

// //import house context
// import { HouseContext } from './HouseContext';


// // const PropertyDropdown = () => {
// //   return <div>PropertyDropdown</div>;
// // };

// // export default PropertyDropdown;




// // import React, { useContext, useState } from 'react';




// const PropertyDropdown = () => {
//   const {property, setProperty, properties } = useContext(HouseContext);  // Destructuring values from HouseContext
//   const [isOpen, setIsOpen] = useState(false);  // useState for dropdown open/close state

//   return (
//     <Menu as='div' className='dropdown relative'>
//       <Menu.Button
//         onClick={() => setIsOpen(!isOpen)}
//         className='dropdown-btn w-full text-left'
//       >
//         <RiHome5Line className='dropdown-icon-primary' />
//         <div>
//           <div className='text-[15px] font-medium leading-tight'>{property}</div> {/* Display selected country */}
//           <div className='text-[13px]'>Select your place</div>
//         </div>
//         {isOpen ? (
//           <RiArrowUpSLine 
//           className='dropdown-icon-secondary' />
//           ) : (
//           <RiArrowDownSLine 
//           className='dropdown-icon-secondary' />
//           )}
//       </Menu.Button>

//       {/* Dropdown menu */}
//       <Menu.Items className='dropdown-menu'>
//         {properties.map((property, index) => {
//           return (
//             <Menu.Item
//               onClick={() => setProperty(property)}  // Set the selected country
//               className='cursor-pointer hover:text-violet-700 transition'
//               as='li'
//               key={index}  // Use correct key syntax
//             >
//               {property}
//             </Menu.Item>
//           );
//         })}
//       </Menu.Items>
//     </Menu>
//   );
// };

// export default PropertyDropdown;
