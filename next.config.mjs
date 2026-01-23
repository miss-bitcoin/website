/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/banner",
        destination: "https://miss-bitcoin.com/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;