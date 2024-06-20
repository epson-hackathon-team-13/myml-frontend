import cn from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
const startTimeIndex = [
  4.8, 8.9, 9.9, 11.9, 13.9, 15.2, 17.4, 19.9, 21.9, 23.2, 25.5, 26.7, 28.7,
  30.7, 32.7, 34.9, 37.4, 39.2, 40.7, 42.3, 44.3, 48.3, 51, 52.7, 56.3, 61.2,
  64.9, 66.5, 70.7, 74.7, 78.7, 80.7, 82.7, 84.7, 86.7, 88.7, 89.9, 92.3, 96.3,
  99, 100.7, 104.3, 107, 110.5, 114.5, 116.5, 118.4, 120.4, 122.7, 124.7, 126.7,
  128.7, 130.7, 132.7, 134.7, 136.7, 138.7, 140.7, 144.4, 146.4, 150.4, 152.9,
  154.9, 158.4, 160.8, 162.1, 162.8, 164.8, 165.8, 166.9, 168.3, 169.3, 170.3,
  171.9, 173, 175,
];

const engLyrics = [
  "I'm like some kind of supernova",
  "Watch out",

  "Look at me go",
  "Have some fun",
  "Core of light",
  "So hot, hot",
  "The door opens",
  "Feel each other's presence",
  "Like Discord",
  "Who are you, you who resemble me",
  "(Drop)",

  "The event is approaching ah, oh, ayy",
  "It's growing bigger ah, oh, ayy",
  "That tick, that tick, tick bomb",
  "That tick, that tick, tick bomb",
  "No one dares to touch",
  "That's what everyone says",
  "Inside me now",
  "Su-su-su-supernova",

  "Nova",
  "Can't stop hyperstellar",
  "Searching for the origin",
  "Bring the light of a dying star",
  "Look at my universe I've created",
  "Supernova",
  "Ah Body Bang",
  "Make it feel too right",
];

const lyric =
  "I'm like some kind of Supernova\nWatch out\n\nLook at me go\n재미 좀 볼\n빛의 Core\nSo hot hot\n문이 열려\n서로의 존재를 느껴\n마치 Discord\n날 닮은 너 너 누구야\n(Drop)\n\n사건은 다가와 Ah Oh Ay\n거세게 커져가 Ah Oh Ay\nThat tick that tick tick bomb\nThat tick that tick tick bomb\n감히 건드리지 못할 걸\n(누구도 말이야)\n지금 내 안에선\nSu su su Supernova\n\nNova\nCan't stop hyperstellar\n원초 그걸 찾아\nBring the light of a dying star\n불러낸 내 우주를 봐 봐\nSupernova\n\nAh Body bang\nMake it feel too right\n\n휩쓸린 에너지 It's so special\n잔인한 Queen 이며 Scene 이자 종결\n이토록 거대한 내 안의 Explosion\n내 모든 세포 별로부터 만들어져\n(Under my control Ah)\n\n질문은 계속돼 Ah Oh Ay\n우린 어디서 왔나 Oh Ay\n느껴 내 안에선\nSu su su Supernova\n\nNova\nCan't stop hyperstellar\n원초 그걸 찾아\nBring the light of a dying star\n불러낸 내 우주를 봐 봐\nSupernova\n\n보이지 않는 힘으로\n네게 손 내밀어 볼까\n가능한 모든 가능성\n무한 속의 너를 만나\nIt's about to bang bang\nDon't forget my name\nSu su su Supernova\n\n사건은 다가와 Ah Oh Ay\n거세게 커져가 Ah Oh Ay\n질문은 계속돼 Ah Oh Ay\n우린 어디서 왔나 Oh Ay\n\n사건은 다가와 Ah Oh Ay\n거세게 커져가 Ah Oh Ay\nTell me, tell me, tell me Oh Ay\n우린 어디서 왔나 Oh Ay\n우린 어디서 왔나 Oh Ay\n\nNova\nCan't stop hyperstellar\n원초 그걸 찾아\nBring the light of a dying star\n불러낸 내 우주를 봐 봐\nSupernova\n\n사건은 다가와 Ah Oh Ay\n(Nu star)\n거세게 커져가 Ah Oh Ay\n질문은 계속돼 Ah Oh Ay\n(Nova)\n우린 어디서 왔나 Oh Ay\n\n사건은 다가와 Ah Oh Ay\n거세게 커져가 Ah Oh Ay\n질문은 계속돼 Ah Oh Ay\n(Nova)\nBring the light of a dying star\nSupernova";

const Video = () => {
  const playerRef = useRef<any>(null);
  const lyricRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const [currentTime, setCurrentTime] = useState(0);
  const lyrics = lyric.split("\n").filter((lyric) => lyric !== "");
  const timeByLyrics = lyrics.map((lyric, i) => ({
    lyric: lyric,
    time: startTimeIndex[i],
    engLyric: engLyrics[i],
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        const time = playerRef.current.getCurrentTime();
        setCurrentTime(time);
      }
    }, 500); // Update the current time every half second

    return () => clearInterval(interval);
  }, []);

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    playerRef.current = event.target;
    event.target.playVideo();
  };

  const onPlayerStateChange: YouTubeProps["onStateChange"] = (event) => {
    if (!event.data) {
      const player = event.target;
      player.playVideo();
    }
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "100%",
    playerVars: {},
  };

  const handleSeek = (seconds: number) => {
    if (playerRef.current) {
      playerRef.current.seekTo(seconds, true);
      playerRef.current.playVideo();
    }
  };

  useEffect(() => {
    const currentLyricIndex = timeByLyrics.findIndex(
      (timeByLyric, i) =>
        currentTime >= timeByLyric.time &&
        (i === timeByLyrics.length - 1 ||
          currentTime < timeByLyrics[i + 1].time),
    );

    if (
      currentLyricIndex !== -1 &&
      lyricRefs.current &&
      lyricRefs.current[currentLyricIndex]
    ) {
      lyricRefs.current[currentLyricIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentTime, timeByLyrics]);

  useEffect(() => {
    if (playerRef.current) {
      console.log(playerRef.current.getCurrentTime());
    }
  }, [playerRef.current]);

  return (
    <div className="mb-20 flex gap-1 w-full border">
      <div className="w-[50%]">
        <YouTube
          videoId="phuiiNCxRMg"
          opts={opts}
          onReady={onPlayerReady}
          onStateChange={onPlayerStateChange}
        />
      </div>

      <div className="flex bg-secondary/10 w-[50%] p-5 h-[400px] overflow-y-auto flex-col text-gray-400 gap-3 border">
        {timeByLyrics.map((timeByLyric, i) => (
          <button
            ref={(el) => {
              if (!el) return;
              lyricRefs.current[i] = el;
            }}
            className={cn(
              currentTime >= timeByLyric.time &&
                (i === timeByLyrics.length - 1 ||
                  currentTime < timeByLyrics[i + 1].time)
                ? "bg-secondary/20 lyric-shadow rounded-lg py-10 text-black"
                : "",
            )}
            onClick={() => handleSeek(timeByLyric.time)}
            key={i}
          >
            <p> {timeByLyric.lyric}</p>
            <p>{timeByLyric.engLyric}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Video;
