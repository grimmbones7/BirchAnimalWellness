/* eslint-disable prettier/prettier */
// components/DownloadButton.tsx
"use client";

import React, { useState } from "react"

const DownloadButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDownload = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/getGoogleSignedUrl");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: { url: string } = await response.json();
      window.open(data.url, "_blank");
    } catch (error) {
      console.error("Error fetching download URL:", error);
      alert("Failed to initiate download. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isLoading}
      className="btn btn-primary text-white font-bold py-2 px-4 rounded"
    >
      {isLoading ? "Loading..." : "Download Document"}
    </button>
  );
};

export default DownloadButton;
