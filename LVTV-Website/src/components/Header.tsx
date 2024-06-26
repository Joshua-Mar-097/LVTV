// import { NavLink } from "react-router-dom";

// interface HeaderProps {
//   onLoginButtonClick: () => void;
// }

// function Header({onLoginButtonClick}: HeaderProps) {
//   return (
//     <header className="bg-custom">
//       <nav className="flex justify-between items-center 2-[92%] mx-auto">
//         <div>
//           <h1 className="text-white text-4xl font-bold p-8">LVTV</h1>
//         </div>
//         <div>
//           <button className="text-xl text-white px5 py-2 mr-5 hover:text-gray-500" onClick={onLoginButtonClick}>
//             Log In
//           </button>
//           <button className="text-xl rounded-lg bg-yellow-400 text-black px-5 py-2 mr-10 hover:text-white hover:bg-blue-300">
//             Watch Live
//           </button>
//         </div>
//       </nav>
//       <div className="w-full bg-yellow-400 text-black px-10">
//         <div className="flex justify-center">
//           <ul className="flex text-center gap-[4vw]">
//             <li>
//               <NavLink className="text-xl hover:text-white" to="/Home">
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink className="text-xl hover:text-white" to="/TeleRadio">
//                 TeleRadio
//               </NavLink>
//             </li>
//             <li>
//               <NavLink className="text-xl hover:text-white" to="/OurStory">
//                 Our Story
//               </NavLink>
//             </li>
//             <li>
//               <NavLink className="text-xl hover:text-white" to="/Archives">
//                 Archives
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// }
// export default Header;

// import { NavLink } from "react-router-dom";
// import LogIn  from "./LogIn";

// interface HeaderProps {
//     onLoginButtonClick: () => void;
// }

// function Header({ onLoginButtonClick }: HeaderProps) {
//     const handleLoginButtonClick = () => {
//         console.log("Login button clicked!");
//         onLoginButtonClick(); // Call the provided event handler
//     };

//     return (
//         <header className="bg-custom">
//             <nav className="flex justify-between items-center 2-[92%] mx-auto">
//                 <div>
//                     <h1 className="text-white text-4xl font-bold p-8">LVTV</h1>
//                 </div>
//                 <div>
//                     <LogIn/>
//                         {/* // className="text-xl text-white px5 py-2 mr-5 hover:text-gray-500"
//                         // onClick={handleLoginButtonClick}

//                         // Log In */}

//                     <button className="text-xl rounded-lg bg-yellow-400 text-black px-5 py-2 mr-10 hover:text-white hover:bg-blue-300">
//                         Watch Live
//                     </button>
//                 </div>
//             </nav>
//             <div className="w-full bg-yellow-400 text-black px-10">
//                 <div className="flex justify-center">
//                     <ul className="flex text-center gap-[4vw]">
//                         <li>
//                             <NavLink
//                                 className="text-xl hover:text-white"
//                                 to="/Home"
//                             >
//                                 Home
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink
//                                 className="text-xl hover:text-white"
//                                 to="/TeleRadio"
//                             >
//                                 TeleRadio
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink
//                                 className="text-xl hover:text-white"
//                                 to="/OurStory"
//                             >
//                                 Our Story
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink
//                                 className="text-xl hover:text-white"
//                                 to="/Archives"
//                             >
//                                 Archives
//                             </NavLink>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </header>
//     );
// }

// export default Header;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LogIn from "./LogIn";

const Header = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const handleLoginButtonClick = () => {
        setIsLoginModalOpen((prevState) => !prevState); // Toggles the modal state
    };

    const handleCloseLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    return (
        <header className="bg-custom">
            <nav className="flex justify-between items-center 2-[92%] mx-auto">
                <div>
                    <h1 className="text-white text-4xl font-bold p-8">LVTV</h1>
                </div>
                <div>
                    <button
                        className="text-xl rounded-lg bg-yellow-400 text-black px-5 py-2 mr-5 hover:text-white hover:bg-blue-300"
                        onClick={handleLoginButtonClick}
                    >
                        Log In
                    </button>
                    <button className="text-xl rounded-lg bg-yellow-400 text-black px-5 py-2 mr-10 hover:text-white hover:bg-blue-300">
                        Watch Live
                    </button>
                </div>
            </nav>
            <div className="w-full bg-yellow-400 text-black px-10">
                <div className="flex justify-center">
                    <ul className="flex text-center gap-[4vw]">
                        <li>
                            <NavLink
                                className="text-xl hover:text-white"
                                to="/Home"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="text-xl hover:text-white"
                                to="/TeleRadio"
                            >
                                TeleRadio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="text-xl hover:text-white"
                                to="/OurStory"
                            >
                                Our Story
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="text-xl hover:text-white"
                                to="/Archives"
                            >
                                Archives
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            {isLoginModalOpen && (
                <LogIn
                    isOpen={isLoginModalOpen}
                    onClose={handleCloseLoginModal}
                />
            )}
        </header>
    );
};

export default Header;
