/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enabling static export
    output: 'export', // Tells Next.js to generate static files
    
    // Optional: Add this if your deployment platform needs trailing slashes in URLs
    trailingSlash: true,
  
    // Optional: If deploying to a subpath, e.g., GitHub Pages
    assetPrefix: './',
  };
  
  export default nextConfig;
  