/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'freesvg.org',
                port: '',
                pathname: '/img/abstract-user-flat-1.png'
            },
            {
                protocol: 'https',
                hostname: 'cdn.nordigen.com',
                port: '',
                pathname: '/ais/**'
            },
            {
                protocol: 'https',
                hostname: 'storage.googleapis.com',
                port: '',
                pathname: '/gc-prd-institution_icons-production/**'
            }
        ]
    }
}

module.exports = nextConfig
