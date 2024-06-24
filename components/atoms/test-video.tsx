import { Song } from "@/apis/dto/song";
import cn from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

const time = [
  53.8, 55.8, 57.2, 59.0, 60.3, 61.4, 62.2, 64.0, 66.6, 68.6, 70.0, 72.0, 73.2,
  74.2, 75.0, 76.8, 78.8, 80.4, 81.2, 82.0, 82.8, 83.6, 84.4, 85.6, 86.6, 87.6,
  88.6, 89.1, 90.2, 92.4, 95.2, 98.8, 101.6, 103.8, 104.9, 107.0, 108.4, 110.25,
  111.58, 112.9, 113.69, 115.03, 117.96, 119.82, 121.15, 123.28, 124.6, 125.4,
  126.47, 127.79, 131.01, 133.93, 137.12, 138.46, 140.59, 143.51, 145.63, 146.7,
  148.57, 149.88, 150.95, 152.01, 153.34, 156.29, 158.43, 159.76, 161.61,
  162.68, 163.75, 164.8, 166.13, 169.32, 175, 180.7, 182, 189, 192,
];

const lyricKr =
  `I'm super shy, super shy\nBut wait a minute while I\nMake you mine, make you mine\n떨리는 지금도\nYou're on my mind\nAll the time\nI wanna tell you but I'm\nSuper shy, super shy\nI'm super shy, super shy\nBut wait a minute while I\nMake you mine, make you mine\n떨리는 지금도\nYou're on my mind\nAll the time\nI wanna tell you but I'm\nSuper shy, super shy\nAnd I wanna go out with you\nWhere you wanna go (Huh)\nFind a lil spot\nJust sit and talk\nLooking pretty\nFollow me\n우리 둘이 나란히\n보이지 (봐)\n내 눈이 (heh)\n갑자기\n빛나지\nWhen you say\nI'm your dream\nYou don't even know my name\nDo ya\nYou don't even know my name\nDo ya-a\n누구보다도\nI'm super shy, super shy\nBut wait a minute while I\nMake you mine, make you mine\n떨리는 지금도\nYou're on my mind\nAll the time\nI wanna tell you but I'm\nSuper shy, super shy\nI'm super shy, super shy\nBut wait a minute while I\nMake you mine, make you mine\n떨리는 지금도\nYou're on my mind\nAll the time\nI wanna tell you but I'm\nSuper shy, super shy\n나 원래 말도 잘하고 그런데 왜 이런지\nI don't like that\nSomething odd about you\nYeah you're special and you know it\nYou're the top babe\nI'm super shy, super shy\nBut wait a minute while I\nMake you mine, make you mine\n떨리는 지금도\nYou're on my mind\nAll the time\nI wanna tell you but I'm\nSuper shy, super shy\nI'm super shy, super shy\nBut wait a minute while I\nMake you mine, make you mine\n떨리는 지금도\nYou're on my mind\nAll the time\nI wanna tell you but I'm\nSuper shy, super shy\nYou don't even know my name, do ya\nYou don't even know my name, do ya-a\n누구보다도\nYou don't even know my name, do ya\nYou don't even know my name, do ya-a?`
    .split(`\n`)
    .filter((lyric) => lyric !== "");
const lyricEn =
  `I’m super shy, super shy\nBut wait a minute while I\nmake you mine, make you mine\nI’m all nervous ’cause\nyou’re on my mind\nall the time\nI wanna tell you but I’m\nsuper shy, super shy\nI’m super shy, super shy\nBut wait a minute while I\nmake you mine, make you mine\nI’m all nervous ‘cause\nyou’re on my mind\nall the time\nI wanna tell you but I’m\nsuper shy, super shy\nAnd I wanna go out with you\nWhere you wanna go? (Huh?)\nFind a lil’ spot\njust sit and talk\nLooking pretty\nfollow me\nYou and I side by side\nCan’t you see? (Look)\nMy eyes (Heh)\nsuddenly\nsparkle\nWhen you say\nI’m your dream\nYou don’t even know my name\ndo ya?\nYou don’t even know my name\nDo ya-a\nMore than anyone\nI’m super shy, super shy\nBut wait a minute while I\nmake you mine, make you mine\nI’m all nervous ’cause\nyou’re on my mind\nAll the time\nI wanna tell you but I’m\nsuper shy, super shy\nI’m super shy, super shy\nBut wait a minute while I\nmake you mine, make you mine\nI’m all nervous ’cause\nyou’re on my mind\nall the time\nI wanna tell you but I’m\nsuper shy, super shy\nI’m usually pretty talkative, what’s wrong with me?\nI don’t like that\nSomething odd about you\nYeah, you’re special and you know it\nYou’re the top, babe\nI’m super shy, super shy\nBut wait a minute while I\nmake you mine, make you mine\nI’m all nervous ’cause\nyou’re on my mind\nall the time\nI wanna tell you but I’m\nsuper shy, super shy\nI’m super shy, super shy\nBut wait a minute while I\nmake you mine, make you mine\nI’m all nervous ’cause\nyou’re on my mind\nall the time\nI wanna tell you but I’m\nsuper shy, super shy\nYou don’t even know my name, do ya\nYou don’t even know my name, do ya-a\nMore than anyone\nYou don’t even know my name, do ya\nYou don’t even know my name, do ya-a?`
    .split(`\n`)
    .filter((lyric) => lyric !== "");
const lyricKrPro =
  `I'm super shy, super shy\nBut wait a minute while I\nmake you mine, make you mine\nTteollineun jigeumdo,\nyou're on my mind\nall the time\nI wanna tell you but, I'm\nsuper shy, super shy\nI'm super shy, super shy\nBut wait a minute while I\nmake you mine, make you mine\nTteollineun jigeumdo,\nyou're on my mind\nall the time\nI wanna tell you but, I'm\nsuper shy, super shy\nAnd I wanna go out with you\nWhere you wanna go? (Huh?)\nFind a lil spot\njust sit and talk\nLooking pretty\nfollow me\nUri duri naranhi\nBoiji? (Bwa)\nNae nuni (Heh)\nGapjagi\nbinnaji\nWhen you say\nI'm your dream\nYou don't even know my name\ndo ya?\nYou don't even know my name\ndo ya?\nNugubodado\nI'm super shy, super shy\nBut wait a minute while I\nmake you mine, make you mine\nTteollineun jigeumdo\nyou're on my mind\nall the time\nI wanna tell you but, I'm\nsuper shy, super shy\nI'm super shy, super shy\nBut wait a minute while I\nmake you mine, make you mine\nTteollineun jigeumdo\nyou're on my mind\nall the time\nI wanna tell you but, I'm\nsuper shy, super shy\nNa wollae maldo jalhago geureonde wae ireonji\nI don't like that\nSomething odd about you\nYeah, you're special and you know it\nYou're the top, babe\nI'm super shy, super shy\nBut wait a minute while I\nmake you mine, make you mine\nTteollineun jigeumdo\nyou're on my mind\nall the time\nI wanna tell you but, I'm\nsuper shy, super shy\nI'm super shy, super shy\nBut wait a minute while I\nmake you mine, make you mine\nTteollineun jigeumdo\nyou're on my mind\nall the time\nI wanna tell you but, I'm\nsuper shy, super shy\nYou don't even know my name, do ya\nYou don't even know my name, do ya-a\nNugubodado\nYou don't even know my name, do ya\nYou don't even know my name, do ya-a?
`
    .split(`\n`)
    .filter((lyric) => lyric !== "");
const timeByLyrics = lyricKr.map((lyric, i) => ({
  lyric: lyric,
  time: Number(time[i]),
  engLyric: lyricEn[i],
  lyricKrPro: lyricKrPro[i],
}));
const TestVideo = () => {
  const playerRef = useRef<any>(null);
  const lyricRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [currentTime, setCurrentTime] = useState(0);

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

  // const onPlayerStateChange: YouTubeProps["onStateChange"] = (event) => {
  //   if (!event.data) {
  //     const player = event.target;
  //     player.playVideo();
  //   }
  // };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "100%",
    playerVars: {
      loop: false,
      autoplay: false,
    },
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

  return (
    <div className="mb-20 flex gap-1 w-full border">
      <div className="w-[50%]">
        <YouTube
          videoId="ArmDp-zijuc"
          opts={opts}
          onReady={onPlayerReady}
          // onStateChange={onPlayerStateChange}
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
            <p>{timeByLyric.lyricKrPro}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestVideo;
