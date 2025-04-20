import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";  // Importing hamburger icon
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling navbar
  const navigate = useNavigate();

  // Toggle the navbar visibility
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <div className="w-full flex justify-between items-center font-semibold p-4">
        <div className="flex items-center gap-2">
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt="Left Arrow"
            onClick={() => navigate(-1)}
          />
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt="Right Arrow"
            onClick={() => navigate(+1)}
          />
        </div>

        {/* Toggle Button for Mobile */}
        <div className="flex items-center gap-4">
          {/* Hamburger icon (visible on small screens) */}
          <button
            className="lg:hidden p-2 bg-black rounded-2xl text-white"
            onClick={handleToggle}
          >
            <FaBars className="w-6 h-6" />
          </button>

          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
            Install App
          </p>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer">
            B
          </p>
        </div>
      </div>

      {/* Dropdown Navbar for Mobile */}
      {isOpen && (
        <div className="lg:hidden bg-[#121212] p-4 flex flex-col gap-4">
          <p className="bg-[#242424] px-4 py-2 rounded-2xl cursor-pointer">All</p>
          <p className="bg-[#242424] px-4 py-2 rounded-2xl cursor-pointer">Music</p>
          <p className="bg-[#242424] px-4 py-2 rounded-2xl cursor-pointer">Podcasts</p>
        </div>
      )}

      {/* Desktop Navbar (visible on medium and large screens) */}
      <div className="hidden lg:flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl">All</p>
        <p className="bg-[#242424] cursor-pointer  px-4 py-1 rounded-2xl">Music</p>
        <p className="bg-[#242424] cursor-pointer  px-4 py-1 rounded-2xl">Podcasts</p>
      </div>
    </>
  );
};

export default Navbar;
