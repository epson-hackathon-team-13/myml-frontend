import { toast } from "@/components/ui/use-toast";
import { SongWordPostReq } from "@/apis/dto/song";
import { postSongWord } from "@/apis/song";

const useAddMyWord = () => {
  const onSubmit = async (data: SongWordPostReq) => {
    try {
      const res = await postSongWord({ ...data });
      toast({
        variant: "default",
        title: "Added to my word list successfully.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Failed to add to the word list. Please try again.",
      });
    }
  };
  return { onSubmit };
};

export default useAddMyWord;
