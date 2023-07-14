import FileUpload from "@/components/file-upload";
import CustomFileUpload from "@/components/custom-file-upload";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>S3 Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-4">
        <FileUpload />
        <CustomFileUpload />
      </main>
    </>
  );
}
