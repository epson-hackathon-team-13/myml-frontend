import { useGetWordExam } from "@/hook/song/use-get-word-exam";
import QuestionCard from "./question-card";
import Loading from "@/components/molecules/loading";
import { Song } from "@/apis/dto/song";

const QuestionBox = ({ word, songInfo }: { word: string; songInfo: Song }) => {
  const res = useGetWordExam(word);
  if (!res) return;

  return (
    <Loading>
      <QuestionCard songInfo={songInfo} word={word} res={res} />
    </Loading>
  );
};

export default QuestionBox;
