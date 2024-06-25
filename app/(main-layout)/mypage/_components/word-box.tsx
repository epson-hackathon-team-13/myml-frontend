import { jsPDF } from "jspdf";
import { GODIC } from "@/constants/font/GODIC";
import { useEffect, useState } from "react";
import WordCard from "./word-card";

const WordBox = () => {
  const data = [
    {
      word: "우리",
      transWord: "we",
      description:
        "A pronoun used when the speaker refers to himself/herself and the listener or listeners, or a group of people including the speaker and listener or listeners.",
      musicId: 2,
      title: "Super shy",
      artist: "New Jeans",
    },
    {
      word: "너",
      transWord: "you",
      description: "A pronoun used when the speaker refers to him or her.",
      musicId: 1,
      title: "Supernova",
      artist: "aespa",
    },
    {
      word: "우리",
      transWord: "we",
      description:
        "A pronoun used when the speaker refers to himself/herself and the listener or listeners, or a group of people including the speaker and listener or listeners.",
      musicId: 2,
      title: "Super shy",
      artist: "New Jeans",
    },
    {
      word: "우리",
      transWord: "we",
      description:
        "A pronoun used when the speaker refers to himself/herself and the listener or listeners, or a group of people including the speaker and listener or listeners.",
      musicId: 2,
      title: "Super shy",
      artist: "New Jeans",
    },
    {
      word: "우리",
      transWord: "we",
      description:
        "A pronoun used when the speaker refers to himself/herself and the listener or listeners, or a group of people including the speaker and listener or listeners.",
      musicId: 2,
      title: "Super shy",
      artist: "New Jeans",
    },
    {
      word: "우리",
      transWord: "we",
      description:
        "A pronoun used when the speaker refers to himself/herself and the listener or listeners, or a group of people including the speaker and listener or listeners.",
      musicId: 2,
      title: "Super shy",
      artist: "New Jeans",
    },
    {
      word: "우리",
      transWord: "we",
      description:
        "A pronoun used when the speaker refers to himself/herself and the listener or listeners, or a group of people including the speaker and listener or listeners.",
      musicId: 2,
      title: "Super shy",
      artist: "New Jeans",
    },
  ];
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    const pdf = new jsPDF();

    // Add Korean font
    pdf.addFileToVFS("KoreanFontRegular.ttf", GODIC);
    pdf.addFont("KoreanFontRegular.ttf", "KoreanFont", "normal");
    pdf.setFont("KoreanFont");

    let yOffset = 20; // Initial y offset

    // Iterate through each word card data
    data.forEach((word, index) => {
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
  }, []);

  useEffect(() => {
    console.log(pdfUrl);
  }, [pdfUrl]);

  return (
    <div className="flex flex-col gap-4 py-5">
      <h1>My Words</h1>
      {/* {pdfUrl && (
        <iframe src={pdfUrl} width="500" height="500" title="PDF Preview" />
      )} */}

      {data.map((word, i) => (
        <WordCard key={word.word + String(i)} data={word} />
      ))}
    </div>
  );
};

export default WordBox;
