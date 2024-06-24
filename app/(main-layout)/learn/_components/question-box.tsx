import { useGetWordExam } from "@/hook/learn/use-get-word-exam";
import QuestionCard from "./question-card";
import Loading from "@/components/molecules/loading";

const QuestionBox = ({ word }: { word: string }) => {
  const res = useGetWordExam(word);
  if (!res) return;

  return <QuestionCard word={word} res={res} />;
};

export default QuestionBox;
