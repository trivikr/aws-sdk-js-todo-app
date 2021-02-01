import { s3Client } from "./s3Client";
import config from "../config.json";
import { PutObjectCommand } from "@aws-sdk/client-s3";

const { FILES_BUCKET } = config;

const putObject = async (file: File) => {
  const Key = `${Date.now()}-${file.name}`;
  await s3Client.send(
    new PutObjectCommand({
      Key,
      Body: file,
      Bucket: FILES_BUCKET,
    })
  );
  return Key;
};

export { putObject };
