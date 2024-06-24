// "use client";

// import TestVideo from "@/components/atoms/test-video";

// const TestPage = () => {
//   return (
//     <div>
//       TestPage
//       <TestVideo />
//     </div>
//   );
// };

// export default TestPage;

"use client";
import React, { useState } from "react";
import axios from "axios";
import axiosInstance from "@/axiosInstance/axiosInstance";

const OCRUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [text, setText] = useState("");

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = String(reader.result)
        .replace("data:", "")
        .replace(/^.+,/, "");

      // Convert base64 to byte array
      const byteCharacters = atob(base64String);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      console.log("aa", byteArray);
      try {
        const response = await axiosInstance.post(
          "/ocr/extract",
          {
            data: byteArray,
          },
          // {
          //   headers: {
          //     "Content-Type": "application/octet-stream",
          //   },
          // },
        );
        const { data } = response;
        setText(data.map((detection: any) => detection.description).join("\n"));
      } catch (error) {
        console.error("Error processing image:", error);
      }
    };
    reader.readAsDataURL(selectedFile);
  };

  return (
    <div>
      <h1>OCR with Google Vision API</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload and Analyze</button>
      </form>
      <div>
        <h2>Detected Text:</h2>
        <pre>{text}</pre>
      </div>
    </div>
  );
};

export default OCRUploader;
