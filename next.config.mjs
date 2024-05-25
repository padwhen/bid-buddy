/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'pub-4a8e0efa39e146768b2daf299ae4099d.r2.dev',
                protocol: 'https',
                port: "",
            }
        ]
    }
};

export default nextConfig;
