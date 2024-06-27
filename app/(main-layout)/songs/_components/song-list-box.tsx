import { useGetSongList } from "@/hook/song/use-get-song-list";
import React from "react";
import SongCard from "./song-card";

const SongListBox = () => {
  const res = useGetSongList();
  if (!res) return;

  return (
    <div className="body1-16-r p-5">
      <p className="text-black/60">{`Total (${res.length})`}</p>
      {res.map((song) => (
        <SongCard key={song.id} data={song} />
      ))}
    </div>
  );
};

export default SongListBox;
