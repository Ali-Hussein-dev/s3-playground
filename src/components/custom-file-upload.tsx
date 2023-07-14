/* eslint-disable @next/next/no-img-element */
/**
 * S3 Configs
 * 1.
 *
 *
 * S3 Bucket Ops
 * 1. Read from S3 Bucket in Backend
 *
 * 2. Write to S3 Bucket in Backend
 */

import React, { useState } from "react";
import { useS3Upload } from "next-s3-upload";

export default function CustomFileUpload() {
  const [imageUrl, setImageUrl] = useState<string>();
  const { uploadToS3 } = useS3Upload();

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0] as File;
    const { url } = await uploadToS3(file);
    console.log("uploading...", url);

    setImageUrl(url);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {imageUrl && <img src={imageUrl} alt="image" />}
    </div>
  );
}
