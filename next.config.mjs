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
      {
        protocol: "https",
        hostname: "flhcfdglalmwmfxnyvhz.supabase.co",
        pathname: "/storage/v1/object/sign/setting/**",
      },
    ],
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
