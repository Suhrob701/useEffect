// import { FaChevronDown } from "react-icons/fa";
// import logo from "../assets/logo.png";
// import { PiBellRingingBold } from "react-icons/pi";
// import { LuMessageSquareMore } from "react-icons/lu";
// import clickSound from "../assets/click.mp3";

// const Header = ({search, setSearch}) => {
//     const playSound = () => {
//       const audio = new Audio(clickSound);
//       audio.play();
//     }

//   return (
//     <div className="p-10 flex items-center justify-between">
//       <div className="flex items-center gap-10 space-x-4">
//         <img src={logo} alt="Logo" className="h-10" />
//         <div className="relative items-center">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="p-2 pl-10 bg-transparent border border-white rounded-[20px] w-[350px] h-[50px] text-white  focus:outline-none"
//             required
//           />
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 absolute top-1/2 left-3 transform -translate-y-1/2 text-white"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             {" "}
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//             />{" "}
//           </svg>
//         </div>
//         <div className="flex space-x-4 items-center">
//           <a href="#" className="hover:text-gray-300">
//             Home
//           </a>
//           <a href="#" className="hover:text-gray-300 ">
//             Explore
//           </a>
//           <FaChevronDown className="pt-1 pr-3 w-6 h-6" />
//         </div>
//       </div>
//       <div className="flex space-x-4 items-center">
//         <PiBellRingingBold onClick={playSound} className="w-5 h-6" />
//         <LuMessageSquareMore className="w-5 h-6" />
//         <button className="w-[108px] h-[38px] rounded-[5px] bg-transparent border border-white text-white hover:bg-white hover:text-[#984D38] transition-colors duration-200">
//           Wallet
//         </button>

//         <div className="dropdown dropdown-end">
//           <div
//             tabIndex={0}
//             role="button"
//             className="btn btn-ghost btn-circle avatar"
//           >
//                 <FaChevronDown className="" />
//             <div className="w-20 rounded-full ">
//               <img
//                 alt="Tailwind CSS Navbar component"
//                 src="https://pngimg.com/d/elon_musk_PNG23.png"
//               />
//             </div>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//           >
//             <li>
//               <a className="justify-between">
//                 Profile
//                 <span className="badge">New</span>
//               </a>
//             </li>
//             <li>
//               <a>Settings</a>
//             </li>
//             <li>
//               <a>Logout</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
