import { type NextApiRequest, type NextApiResponse } from "next";
import { S3Loader } from "langchain/document_loaders/web/s3";
import { env } from "@/env.mjs"

export default async function S3loaderHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const path = "50_ui_tips.pdf"

  const loader = new S3Loader({
    bucket: env.S3_UPLOAD_BUCKET,
    key: path,
    s3Config: {
      region: env.S3_UPLOAD_REGION,
      credentials: {
        accessKeyId: env.S3_UPLOAD_KEY,
        secretAccessKey: env.S3_UPLOAD_SECRET,
      },
    },
    unstructuredAPIURL: "https://api.unstructured.io/general/v0/general",
    // to run locally use the script `pnpm unstructured`
    // unstructuredAPIURL: "http://localhost:8000/general/v0/general",
    unstructuredAPIKey: env.UNSTRUCTURED_API_Key,
  });
  try {
    console.log("start loading docs...")
    const docs = await loader.load();
    console.log(docs);
    res.status(200).json(docs);
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }

}
