/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/banner",
        destination: "/apply",
        permanent: false, // allows us to change later
      },
    ];
  },
};

export default nextConfig;