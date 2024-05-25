import { env } from "@/env";
import { S3Client, ListBucketsCommand, ListObjectsV2Command, GetObjectCommand, PutObjectCommand} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
    region: "auto",
    endpoint: `https://${env.CLOUDFARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: env.CLOUDFARE_ACCESS_KEY_ID,
        secretAccessKey: env.CLOUDFARE_SECRET_ACCESS_KEY,
},
});

export async function getSignedUrlForS3Object(key: string, type: string) {
    return await getSignedUrl(
        s3Client,
        new PutObjectCommand({ Bucket: env.BUCKET_NAME, Key: key, ContentType: type}),
        { expiresIn: 3600 }
    )
}
