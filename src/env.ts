import { createEnv } from "@t3-oss/env-nextjs";
import { z } from 'zod'

export const env = createEnv({
    server: {
        DATABASE_URL: z.string().url(),
        NODE_ENV: z.string().min(1),
        CLOUDFARE_ACCOUNT_ID: z.string().min(1),
        CLOUDFARE_ACCESS_KEY_ID: z.string().min(1),
        CLOUDFARE_SECRET_ACCESS_KEY: z.string().min(1),
        BUCKET_NAME: z.string().min(1)
    },
    client: {
        NEXT_PUBLIC_BUCKET_URL: z.string().url(),
    },
    runtimeEnv: {
        DATABASE_URL: process.env.DATABASE_URL,
        NODE_ENV: process.env.NODE_ENV,
        CLOUDFARE_ACCOUNT_ID: process.env.CLOUDFARE_ACCOUNT_ID,
        CLOUDFARE_ACCESS_KEY_ID: process.env.CLOUDFARE_ACCESS_KEY_ID,
        CLOUDFARE_SECRET_ACCESS_KEY: process.env.CLOUDFARE_SECRET_ACCESS_KEY,
        BUCKET_NAME: process.env.BUCKET_NAME,
        NEXT_PUBLIC_BUCKET_URL: process.env.NEXT_PUBLIC_BUCKET_URL
    }
})