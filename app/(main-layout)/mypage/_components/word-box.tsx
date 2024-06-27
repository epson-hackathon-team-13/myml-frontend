import { jsPDF } from "jspdf";
import { GODIC } from "@/constants/font/GODIC";
import { useEffect, useState } from "react";
import WordCard from "./word-card";
import { useGetMyWordList } from "@/hook/song/use-get-my-word";
import { Button } from "@/components/ui/button";
import EpsonModal from "./epson-modal";
import EmailModal from "./email-modal";
import useAddPrintFile from "@/hook/epson/use-add-print-file";

const WordBox = () => {
  const words = useGetMyWordList();
  const [pdfUrl, setPdfUrl] = useState("");
  const [modal, setModal] = useState({
    epson: false,
    email: false,
    username: "",
    iframe: false,
  });
  const { onSubmit } = useAddPrintFile();

  // pdf blob url 업데이트
  useEffect(() => {
    if (!words || !modal.iframe) return;
    const pdf = new jsPDF();

    // Add Korean font
    pdf.addFileToVFS("KoreanFontRegular.ttf", GODIC);
    pdf.addFont("KoreanFontRegular.ttf", "KoreanFont", "normal");
    pdf.setFont("KoreanFont");

    let yOffset = 20; // Initial y offset

    // Iterate through each word card data
    words.forEach((word, index) => {
      // Add a rectangle to mimic card background
      pdf.setFillColor(255, 245, 235); // Light beige color
      pdf.rect(10, yOffset, 190, 40, "F");

      // Add Korean word
      pdf.setFontSize(20);
      pdf.setTextColor(0, 0, 0);
      pdf.text(word.word, 15, yOffset + 10);

      // Add vertical bar (|)
      pdf.setFontSize(12);
      pdf.text("|", 40, yOffset + 10);

      // Add English translation
      pdf.setFontSize(20);
      pdf.setTextColor(0, 0, 0);
      pdf.text(word.transWord, 50, yOffset + 10);

      // Add description
      pdf.setFontSize(16);
      pdf.setTextColor(0, 0, 0);
      const descriptionLines = pdf.splitTextToSize(word.description, 180);
      pdf.text(descriptionLines, 15, yOffset + 20);

      yOffset += 50; // Adjust y offset for next card

      // Add new page if needed
      if (yOffset > 270) {
        pdf.addPage();
        yOffset = 20; // Reset y offset for new page
      }
    });

    // Generate PDF as a blob
    const pdfBlob = pdf.output("blob");
    const blobUrl = URL.createObjectURL(pdfBlob);
    setPdfUrl(blobUrl);
  }, [words, modal.iframe]);

  const handlePrintClick = async () => {
    if (!words) return;
    const pdf = new jsPDF();

    // Add Korean font
    pdf.addFileToVFS("KoreanFontRegular.ttf", GODIC);
    pdf.addFont("KoreanFontRegular.ttf", "KoreanFont", "normal");
    pdf.setFont("KoreanFont");

    let yOffset = 20; // Initial y offset

    // Iterate through each word card data
    words.forEach((word, index) => {
      // Add a rectangle to mimic card background
      pdf.setFillColor(255, 245, 235); // Light beige color
      pdf.rect(10, yOffset, 190, 40, "F");

      // Add Korean word
      pdf.setFontSize(20);
      pdf.setTextColor(0, 0, 0);
      pdf.text(word.word, 15, yOffset + 10);

      // Add vertical bar (|)
      pdf.setFontSize(12);
      pdf.text("|", 40, yOffset + 10);

      // Add English translation
      pdf.setFontSize(20);
      pdf.setTextColor(0, 0, 0);
      pdf.text(word.transWord, 50, yOffset + 10);

      // Add description
      pdf.setFontSize(16);
      pdf.setTextColor(0, 0, 0);
      const descriptionLines = pdf.splitTextToSize(word.description, 180);
      pdf.text(descriptionLines, 15, yOffset + 20);

      yOffset += 50; // Adjust y offset for next card

      // Add new page if needed
      if (yOffset > 270) {
        pdf.addPage();
        yOffset = 20; // Reset y offset for new page
      }
    });

    // Generate PDF as a blob
    const pdfBlob = pdf.output("blob");

    const pdfFile = new File([pdfBlob], "words.pdf", {
      type: "application/pdf",
    });

    // Convert PDF Blob to FormData
    const formData = new FormData();
    formData.append("file", pdfFile, "my-word.pdf");
    formData.append("username", modal.username);

    await onSubmit(formData);
  };

  if (!words) return;
  return (
    <div className="flex flex-col gap-4 py-5">
      {modal.epson && <EpsonModal setModal={setModal} />}
      {modal.email && (
        <EmailModal
          handlePrintClick={handlePrintClick}
          setModal={setModal}
          onClickClose={() =>
            setModal({
              epson: false,
              email: false,
              username: "",
              iframe: false,
            })
          }
        />
      )}
      {pdfUrl && modal.iframe && (
        <div className="fixed left-0 right-0 top-0 flex h-screen z-[9999] items-center justify-center bg-black bg-opacity-20">
          <div className="flex flex-col">
            <iframe src={pdfUrl} width="500" height="500" title="PDF Preview" />
            <Button onClick={() => setModal({ ...modal, iframe: false })}>
              Close
            </Button>
          </div>
        </div>
      )}
      <div className="flex justify-between items-center">
        <p className="body1-16-b">{`Total (${words.length})`}</p>
        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setModal({
              epson: true,
              email: false,
              username: modal.username,
              iframe: false,
            });
          }}
          className="max-w-max px-8 ml-auto"
        >
          Print
        </Button>
      </div>
      {words.map((word, i) => (
        <WordCard key={word.word + String(i)} data={word} />
      ))}
    </div>
  );
};

export default WordBox;
