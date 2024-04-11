// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import Archives from "./pages/Archives";
// import OurStory from "./pages/OurStory";
// import Home from "./pages/Home";
// import TeleRadio from "./pages/Teleradio";

// import "./output.css";
// import { useState } from "react";

// function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   }

//   const onLoginButtonClick = () => {
//     console.log("Login button clicked!");
//   }

//   return (
//       <div>
//         <Router>
//           <Header onLoginButtonClick={toggleModal}/>
//           <Home />
//           <Routes>
//             <Route path="/Home" element={<Home />} />
//             <Route path="/TeleRadio" element={<TeleRadio />} />
//             <Route path="/OurStory" element={<OurStory />} />
//             <Route path="/Archives" element={<Archives />} />
//           </Routes>
//         </Router>
//         <Footer />
//       </div>
//   );
// }
// export default App;

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Archives from "./pages/Archives";
import OurStory from "./pages/OurStory";
import Home from "./pages/Home";
import TeleRadio from "./pages/Teleradio";

import "./output.css";
import { useState } from "react";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const onLoginButtonClick = () => {
        console.log("Login button clicked!");
    };

    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/TeleRadio" element={<TeleRadio />} />
                    <Route path="/OurStory" element={<OurStory />} />
                    <Route path="/Archives" element={<Archives />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
