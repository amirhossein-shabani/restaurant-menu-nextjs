/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flhcfdglalmwmfxnyvhz.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/categorie-images/**",
      },
      {
        protocol: "https",
        hostname: "flhcfdglalmwmfxnyvhz.supabase.co",
        pathname: "/storage/v1/object/public/setting/**",
      },
      {
        protocol: "https",
        hostname: "flhcfdglalmwmfxnyvhz.supabase.co",
        pathname: "/storage/v1/object/public/items-images/**",
      },
    ],
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
