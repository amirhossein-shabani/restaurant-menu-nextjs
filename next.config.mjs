/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flhcfdglalmwmfxnyvhz.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/categorie-images/**",
      },
    ],
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
