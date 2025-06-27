// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { FaChevronDown } from "react-icons/fa";

// const Main = ({ search }) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [sort, setSort] = useState("default");

//   const Products = [...products] 
//   .filter((product) => 
//     product.title.toLowerCase().includes(search.toLowerCase())
//   )

//   .sort((a, b) => {
//     if (sort === "lowToHigh") {
//       return a.price - b.price;
//     } else if (sort === "highToLow") {
//       return b.price - a.price;
//     }
//   });

//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/products")
//       .then((res) => {
//         setProducts(res.data.products);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log("Error", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen mx-auto">
//         <span className="loading loading-dots w-[50px] h-[50px]"></span>
//       </div>
//     );
//   }

//   return (
//     <div className="text-white px-6 py-4 ml-20 mt-2">
//       <div className="flex items-center gap-20">
//         <p className="text-sm">571,632 items</p>
//         <div className="flex gap-4 ml-140">
//           <button
//             onClick={() => setSort("lowToHigh")}
//             className="w-[178px] h-[42px] bg-transparent rounded-[5px] border border-white flex items-center justify-between px-4"
//           >
//             <span>Low to High</span>
//             <FaChevronDown className="w-4 h-4" />
//           </button>
//           <button
//             onClick={() => setSort("highToLow")}
//             className="w-[178px] h-[42px] bg-transparent rounded-[5px] border border-white flex items-center justify-between px-4"
//           >
//             <span>High to Low</span>
//             <FaChevronDown className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//       {/* ---------------------------------- */}
//       <div className="flex w-[875px] mx-auto justify-between flex-wrap gap-6 px-6 py-6 text-white">
//         {Products.slice(0, 9).map((product) => (
//           <div
//             key={product.id}
//             className="bg-[#ffffff12] rounded-xl p-4 w-[250px] shadow-md flex flex-col justify-between"
//           >
//             <div>
//               <div className="flex justify-between items-center mb-2">
//                 <p className="text-sm text-gray-400">
//                   Categories: {product.category}
//                 </p>
//                 <p className="text-sm text-yellow-400">
//                   Rating: {product.rating}
//                 </p>
//               </div>
//               <img
//                 src={product.thumbnail.replace("http://", "https://")}
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src =
//                     "https://via.placeholder.com/250x150?text=Image+Not+Found";
//                 }}
//                 className="w-full h-[150px] object-contain rounded-md mb-2"
//                 alt={product.title}
//               />
//               <h2 className="font-bold text-lg">{product.title}</h2>
//               <p className="text-sm text-gray-300 mt-1">
//                 {product.description.slice(0, 50)}...
//               </p>
//             </div>

//             <div className="mt-4">
//               <p className="text-right text-lg text-green-400 font-semibold mb-2">
//                 ${product.price}
//               </p>
//               <button className="w-full bg-purple-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-purple-700 transition">
//                 <span className="text-red-400">❤️</span>
//                 <span>Buy now</span>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Main;
