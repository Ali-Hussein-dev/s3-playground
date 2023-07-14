/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useS3Upload } from "next-s3-upload";

export default function UploadComponent() {
  const [imageUrl, setImageUrl] = useState();
    const { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

  const handleFileChange = async file => {
    const { url } = await uploadToS3(file);
    setImageUrl(url);
  };

  return (
    <div>
      <FileInput onChange={handleFileChange} />

      <button onClick={openFileDialog}>Upload file</button>

      {imageUrl && <img src={imageUrl} />}
    </div>
  );
}