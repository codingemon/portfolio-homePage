/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 이미지 가져와주기
  images: {
    domains: [
      "www.notion.so",
      "images.unsplash.com",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
