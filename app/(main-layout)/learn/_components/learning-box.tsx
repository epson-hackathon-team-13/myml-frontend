import Video from "@/components/atoms/video";
import { useGetSongDetail } from "@/hook/song/use-get-song-detail";
import { usePathname } from "next/navigation";

const LearningBox = () => {
  const id = usePathname().split("/")[2];
  const res = useGetSongDetail(id);
  if (!res) return;

  return (
    <div>
      <Video res={res} />
    </div>
  );
};

export default LearningBox;
