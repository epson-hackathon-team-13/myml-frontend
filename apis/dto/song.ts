export type Song = {
  gender: string;
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
