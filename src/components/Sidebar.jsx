import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Handle the search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search button click (Navigate to search page with query)
  const handleSearchClick = () => {
    if (searchQuery.trim()) {
      // If there's a query, navigate to the search page
      navigate(`/search?query=${searchQuery}`);
    } else {
      alert("Please enter a search term.");
    }
  };

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      {/* Top Navbar */}
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex justify-between items-center p-4">
          <div onClick={() => navigate("/")} className="flex items-center gap-3 cursor-pointer">
            <img className="w-6" src={assets.home_icon} alt="" />
            <p className="font-bold">Home</p>
          </div>
          
          {/* Search Bar */}
          <div className="flex items-center gap-3 w-[70%]">
            <input
              type="text"
              className="w-full p-2 bg-[#242424] text-white rounded focus:outline-none"
              placeholder="Search for songs"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button
              className="px-4 py-2 bg-[#1db954] text-white rounded-full"
              onClick={handleSearchClick}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Content */}
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="stack_icon" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.plus_icon} alt="plus_icon" />
            <img className="w-5" src={assets.arrow_icon} alt="arrow_icon" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create Your First Playlist</h1>
          <p className="font-light">It's easy; we will help you</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Create Playlist</button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
          <h1>Let's Find Some Podcasts to Follow</h1>
          <p className="font-light">We'll keep you updated on new episodes</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Browse Podcasts</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
