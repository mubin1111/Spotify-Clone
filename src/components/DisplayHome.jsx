import { useState } from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const DisplayHome = () => {
  const [playlist, setPlaylist] = useState([]);

  const handleAddToPlaylist = (song) => {
    // Avoid duplicates
    if (!playlist.find((s) => s.id === song.id)) {
      setPlaylist([...playlist, song]);
    }
  };

  return (
    <>
      <Navbar />

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem key={index} {...item} />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today&apos;s Biggest Hits</h1>
        <div className="flex overflow-auto gap-4">
          {songsData.map((item, index) => (
            <div key={index} onClick={() => handleAddToPlaylist(item)} className="cursor-pointer hover:scale-105 transition-transform">
              <SongItem {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* Show Playlist */}
      {playlist.length > 0 && (
        <div className="mt-6 bg-[#1e1e1e] p-4 rounded-lg text-white">
          <h2 className="text-xl font-semibold mb-4">My Playlist</h2>
          <ul className="space-y-3">
            {playlist.map((song) => (
              <li key={song.id} className="flex justify-between items-center bg-[#2a2a2a] p-3 rounded">
                <div className="flex gap-3 items-center">
                  <img src={song.image} alt={song.name} className="w-12 h-12 rounded" />
                  <div>
                    <p className="font-medium">{song.name}</p>
                    <p className="text-sm text-gray-400">{song.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default DisplayHome;
