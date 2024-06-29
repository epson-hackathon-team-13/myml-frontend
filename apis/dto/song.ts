import { AuthLoginRes } from "./auth";

export type Song = {
  gender: "MALE" | "FEMALE";
  artist: string;
  title: string;
  imageUrl: string;
  lyricKr: string;
  lyricEn: string;
  lyricKrPro: string;
  startTime: string[];
  id: string;
  youtubeId: string;
  startAt: string;
};

export type SongList = Song[];

export type SongWordPostReq = {
  word: string;
  transWord: string;
  description: string;
  musicId: number;
  gender: "MALE" | "FEMALE";
  artist: string;
  title: string;
  imageUrl: string;
};

export type MySongWordRes = SongWordPostReq & AuthLoginRes;
