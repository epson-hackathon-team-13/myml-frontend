import { useGetSongList } from "@/hook/song/use-get-song-list";
import React, { useEffect, useState } from "react";
import SongCard from "./song-card";
import { useSearchParams } from "next/navigation";
import { Song } from "@/apis/dto/song";

const SongListBox = () => {
  const res = useGetSongList();
  const gender = useSearchParams().get("tab");
  const [songs, setSongs] = useState<Song[] | null>(null);

  // 성별 필터링
  useEffect(() => {
    if (!res || !gender) return;
    let filteredSongs;
    if (gender === "all") {
      filteredSongs = res;
    } else if (gender === "girl") {
      filteredSongs = res.filter((song) => song.gender === "FEMALE");
    } else if (gender === "boy") {
      filteredSongs = res.filter((song) => song.gender === "MALE");
    } else filteredSongs = null;
    setSongs(filteredSongs);
  }, [res, gender]);

  if (!songs) return;

  return (
    <div className="body1-16-r p-5">
      <p className="text-black/60">{`Total (${songs.length})`}</p>
      {songs.map((song) => (
        <SongCard key={song.id} data={song} />
      ))}
    </div>
  );
};

export default SongListBox;
