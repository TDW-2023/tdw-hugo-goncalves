/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    output: "export",
    experimental: {
        forceSwcTransforms: true,
    },
}

module.exports = nextConfig

