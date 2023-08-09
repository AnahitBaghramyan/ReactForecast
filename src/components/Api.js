// import { useEffect, useState } from "react";

// const Api = () => {
//   const [searchResult, setSearchResult] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=443e3be54b3662d424e848a16479f65f"
//         );
//         const jsonData = await response.json();
//         setSearchResult(jsonData);
//         console.log(jsonData);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };

//     fetchData();
//   }, []); // Specify an empty array to run the effect only once

//   return (
//     <div>
//       {Object.entries(searchResult).map(
//         (name, idx) => console.log(searchResult[name])
//         // <h1 key={idx}>{searchResult[name]}</h1>
//       )}
//     </div>
//   );
// };

// export default Api;
