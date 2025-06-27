// import React, { useState } from "react";
// import { GoSidebarCollapse } from "react-icons/go";
// import { FaChevronDown } from "react-icons/fa";
// import filter from "../assets/filter.png";

// const Section = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const toggleDrawer = () => {
//     setIsOpen((prev) => !prev);
//   };
//   return (
//     <div>
//       <div
//         className={`drawer ${
//           isOpen ? "lg:drawer-open" : ""
//         } w-[389px] h-[1424px] ml-[50px] shadow-[#00000026]`}
//       >
//         <input
//           id="my-drawer-2"
//           type="checkbox"
//           className="drawer-toggle"
//           checked={isOpen}
//           onChange={toggleDrawer}
//         />
//         <div className="drawer-content p-4 flex items-center gap-4">
//           <button onClick={toggleDrawer} className="btn btn-primary lg:hidden">
//             {isOpen ? "Yopish" : "Ochish"}
//           </button>
//           <button onClick={toggleDrawer}>
//             <GoSidebarCollapse className="text-2xl -mt-[680px] text-white cursor-pointer transition-transform duration-900 ease-in-out  hover:rotate-180" />
//           </button>
//         </div>
//         <div className="drawer-side">
//           <label
//             htmlFor="my-drawer-2"
//             aria-label="close sidebar"
//             className="drawer-overlay"
//           ></label>
//           <ul className="menu bg-[#FFFFFF1A] shadow-md w-[389px] text-base-content min-h-full p-4 space-y-4">
//             <li>
//               <button onClick={toggleDrawer}>
//                 <img src={filter} alt="" />
//                 <h2 className="font-bold text-2xl">Filters</h2>
//               </button>
//             </li>
//             <li>
//               <a className="flex items-center justify-between font-medium text-sm">
//                 Status <FaChevronDown className="w-4 h-4" />
//               </a>
//               <hr style={{ borderColor: "#FFFFFF4D" }} />
//             </li>
//             <li>
//               <a className="flex items-center justify-between font-medium text-sm">
//                 Price <FaChevronDown className="w-4 h-4" />
//               </a>
//               <hr style={{ borderColor: "#FFFFFF4D" }} />
//             </li>

//             <li>
//               <a className="flex items-center justify-between font-medium text-sm">
//                 Collections <FaChevronDown className="w-4 h-4" />
//               </a>
//               <hr style={{ borderColor: "#FFFFFF4D" }} />
//             </li>

//             <li>
//               <a className="flex items-center justify-between font-medium text-sm">
//                 Chains <FaChevronDown className="w-4 h-4" />
//               </a>
//               <hr style={{ borderColor: "#FFFFFF4D" }} />
//             </li>
//           </ul>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Section;
