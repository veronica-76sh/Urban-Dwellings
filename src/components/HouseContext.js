import React, { useState, useEffect, createContext } from 'react';

// Import data
import { housesData } from '../data'; // Ensure this path is correct and the data export is valid.

// Create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]); // Define properties state
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false); // Should be a boolean, not a string.

  // Return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => house.country);

    // Remove duplicates
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];

    // Set countries state
    setCountries(uniqueCountries);
  }, [houses]);

  // Return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => house.type);

    // Remove duplicates
    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];

    // Set properties state
    setProperties(uniqueProperties); // Fixed reference to setProperties
  }, [houses]);

  const handleClick = () => {
    setLoading(true);

    const isDefault = (str) => str.includes('(any)');

    const minPrice = parseInt(price.split(' ')[0], 10);
    const maxPrice = parseInt(price.split(' ')[2], 10);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price, 10);

      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }

      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        return housePrice >= minPrice && housePrice <= maxPrice;
      }

      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        return house.country === country && housePrice >= minPrice && housePrice <= maxPrice;
      }

      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        return house.type === property && housePrice >= minPrice && housePrice <= maxPrice;
      }

      return null;
    });

    setTimeout(() => {
      setHouses(newHouses.length < 1 ? [] : newHouses);
      setLoading(false);
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider; // Corrected the typo



































































































































































// import React, { useState, useInsertionEffect, createContext } 
// from 'react';

// // import data

// import{ houseData } from '../data'

// //create context;
// export const HouseContext = createContext();

// const HouseContextProvider = ({children}) => {
//     const [houses, setHouses] = useState(housesData);
//     const [country, setCountry] = useState('Location (any)');

//     const[countries, setCountries] = useState([]); 
//     const[property , setProperty] = useState('Property type (any)'); 

//     const[price, setPrice] = useState('Price range (any)'); 
//     const[loading , setLoading] = useState('false'); 
     
//     // return all countries
//     useEffect(() => {
//       const allCountries = houses.map((house)=> { 
//             return house.country;
//       });

//        // remove duplicate
       
//        const uniqueCountries = ['Location (any)', ...
//        new Set(allCountries)]

       
     
//        //set countries state
//        setCountries(uniqueCountries)
//     }, []);
//       // return all properties
//     useEffect(() => {
//       const allProperties = houses.map((house)=> { 
//             return house.type;
//       });

//        // remove duplicate
       
//        const uniqueProperties = ['Location (any)', ...
//        new Set(allProperties)];

       
     
//        //set properties state
//        setProperties(uniqueProperties)
//     }, []);
//     const  handleClick = ()=> {
//            // set loading 
//           //  console.log(country, property, price);

//            //create a function that checks if the string includes '(any)'
//            const isDefault= (str) => {
//              return str.split('').include('(any)');
//         };

//         console.log(price);
//         //get first value of price and parse oit to number
//         const minPrice = parseInt(price.split(' ')[0]); 
//         // get second value of price  which is the maximum price is prase it to number

//         const maxPrice = parseInt(price.split(' ')[2]);
//         console.log(maxPrice);
        
        
//         const newHouses = housesData.filter((house)=> {
//             const housePrice =  parseInt(house.price);

//             //if all values are selected
//             if(house.country === country && 
//               house.type === property && 
//               housePrice >= minPrice && 
//               housePrice <= maxPrice
//             ) {
//               return house;
//             }

//             //if all values are default
//             if(isDefault(conutry) && isDefault(property) && isDefault(price)) 
//               {
//               return house;
//              }

//              //if ocuntry is not default
//              if(!isDefault(country) && isDefault(property) 
//             && isDefault(pirce))  {
//                return house.country === country;
//             }


//             //if property is not default
//             if(!DefaultContext(property) && isDefault(country)
//                 && Default(price)) {
//               return house.type === property;
//             }

//             // if price is not default 
//             if(!isDefault(price) && isDefault(country) && isDefault(property)) {
//               if(housePrice >= minPrice && housePrice <= maxPrice) {
//                  return house;
//               }
//             }

//             // if country  & property is not default
//             if(!isDefault(country) && !isDefault(property) && isDefault(price)) {
//                return house.country === country && house.type === property;
//             }

//             // if country and price is not default
//             if(!isDefault(country) && isDefault(property)
//              && !isDefault(price)) {
//             if(housePrice >= minPrice  && housePrice  <= maxPrice) {
//                 return house.country === country;
//             }
//           }

//           //property and price is not default
//           if(isDefault(country) &&  !isDefault(property) && !isDefault(price)) {
//               if(housePrice >= minPrice && housePrice <= maxPrice) {
//                   return house.type === property;
//               }
//             }
//         });
//             setTimeout(() => {
//               return newHouses.length < 1 ? setHouses([]) :
//               setHouses(newHouses),
//               setLoading(false);
//             }, 1000);
//     };
//   return (
//      <HouseContext.Provider 
//      value={{

//     country,
//     setCountry,
//     countries,
//     property,
//     setProperty,
//     properties,
//     price,
//     setPrice,
//     houses,
//     loading,
//     handleClick,
//     loading,
//   }}
//   >
//   {children}</HouseContext.Provider>
//   );
// };

// export default HouseContextPorvider;
