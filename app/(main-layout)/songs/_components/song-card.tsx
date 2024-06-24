import { Song } from "@/apis/dto/song";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SongCard = ({ data }: { data: Song }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/learn/${data.id}`)}
      className="hover:bg-black/10 border-b w-full p-5 flex gap-4 items-center"
    >
      <Image
        src={`/png/song/${data.artist}/${data.imageUrl}.png`}
        alt={`${data.artist}의 ${data.title}`}
        width={80}
        height={80}
      />
      <div>
        <p className="h3-24-b">{data.title}</p>
        <p className="body1-16-r text-left text-black/50">{data.artist}</p>
      </div>
    </button>
  );
};

export default SongCard;
