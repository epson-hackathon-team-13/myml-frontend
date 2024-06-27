import { Song } from "@/apis/dto/song";
import cn from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { Button } from "../ui/button";
import { MessageCircleQuestionIcon, PauseIcon, PlayIcon } from "lucide-react";
import QuestionBox from "@/app/(main-layout)/learn/_components/question-box";
import Loading from "../molecules/loading";

type timeByLyricsType = {
  lyric: string;
  time: number;
  engLyric: string;
  question: string | null;
}[];

const Video = ({ res }: { res: Song }) => {
  const playerRef = useRef<any>(null);
  const lyricRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lyricValue, setLyricValue] = useState<{
    lyrics: string[];
    timeByLyrics: timeByLyricsType;
  }>({
    lyrics: [],
    timeByLyrics: [],
  });
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [questionValue, setQuestionValue] = useState<{
    word: string | null;
    isActive: boolean;
  }>({
    word: "",
    isActive: false,
  });

  useEffect(() => {
    const newLyrics = res.lyricKr.split("\\n").filter((lyric) => lyric !== "");
    const engLyrics = res.lyricEn.split("\\n").filter((lyric) => lyric !== "");
    const timeByLyrics: timeByLyricsType = newLyrics.map((lyric, i) => ({
      lyric: lyric,
      time: Number(res.startTime[i]),
      engLyric: engLyrics[i],
      question: null,
    }));

    // todo : res.questions 로 바꿔야함
    const questions = [
      { index: 3, word: "지금" },
      { index: 11, word: "지금" },
      { index: 22, word: "우리" },
      { index: 24, word: "눈" },
    ];

    questions.forEach((question) => {
      const { index, word } = question;
      if (index >= 0 && index < timeByLyrics.length) {
        timeByLyrics[index].question = word;
      }
    });

    setLyricValue({ lyrics: newLyrics, timeByLyrics: timeByLyrics });
  }, [res]);
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
    if (event.data === 1) {
      setIsPlaying(true);
    } else if (event.data === 2) {
      setIsPlaying(false);
    }
    // if (!event.data) {
    //   const player = event.target;
    //   player.playVideo();
    // }
  };

  const opts: YouTubeProps["opts"] = {
    height: "0px",
    width: "100%",
    playerVars: {
      loop: false,
      autoplay: false,
      start: Number(res.startAt),
      // rel: 0,
    },
  };

  const handleSeek = (seconds: number) => {
    if (playerRef.current) {
      playerRef.current.seekTo(seconds, true);
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    }
  };

  const togglePlayPause = () => {
    if (!playerRef.current) return;
    const player = playerRef.current;
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };

  useEffect(() => {
    const currentLyricIndex = lyricValue.timeByLyrics.findIndex(
      (timeByLyric, i) =>
        currentTime >= timeByLyric.time &&
        (i === lyricValue.timeByLyrics.length - 1 ||
          currentTime < lyricValue.timeByLyrics[i + 1].time),
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
  }, [currentTime, lyricValue.timeByLyrics]);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Loading>
          <div className="flex gap-1 w-full">
            <div className="w-[30%] relative">
              <div className="w-full h-full flex items-center justify-center flex-col gap-3 border">
                <Image
                  className="w-full h-full max-w-[180px] max-h-[180px]"
                  src={`/png/song/${res.artist}/${res.imageUrl}.png`}
                  alt={`${res.title}`}
                  width={150}
                  height={150}
                />
                <Button onClick={togglePlayPause}>
                  {!isPlaying ? <PlayIcon /> : <PauseIcon />}
                </Button>
              </div>
              <div className="absolute top-0 right-0 left-0">
                <YouTube
                  videoId={res.youtubeId}
                  opts={opts}
                  onReady={onPlayerReady}
                  onStateChange={onPlayerStateChange}
                />
              </div>
            </div>

            <div className="flex cursor-pointer bg-secondary/10 w-[70%] p-5 h-[300px] overflow-y-auto flex-col text-gray-400 gap-3 border">
              {lyricValue.timeByLyrics.map((timeByLyric, i) => (
                <div
                  ref={(el) => {
                    if (!el) return;
                    lyricRefs.current[i] = el;
                  }}
                  className={cn(
                    currentTime >= timeByLyric.time &&
                      (i === lyricValue.timeByLyrics.length - 1 ||
                        currentTime < lyricValue.timeByLyrics[i + 1].time)
                      ? "bg-white lyric-shadow rounded-lg py-10 text-black"
                      : "",
                    "flex gap-2 items-start justify-center",
                  )}
                  onClick={() => handleSeek(timeByLyric.time)}
                  key={i}
                >
                  <div>
                    <p> {timeByLyric.lyric}</p>
                    <p>{timeByLyric.engLyric}</p>
                  </div>
                  {timeByLyric.question && (
                    <button
                      className="w-9 h-9 -mt-4"
                      onClick={() => {
                        setQuestionValue({
                          isActive: true,
                          word: timeByLyric.question,
                        });
                      }}
                    >
                      <MessageCircleQuestionIcon className="w-8 h-8" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Loading>
      </div>
      {/* 문제 박스 */}
      {questionValue.isActive && questionValue.word && (
        <div className="relative w-full min-h-[300px] mb-10 p-5">
          <Loading>
            <QuestionBox songInfo={res} word={questionValue.word} />
          </Loading>
        </div>
      )}
    </div>
  );
};

export default Video;
