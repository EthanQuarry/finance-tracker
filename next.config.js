/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'freesvg.org',
                port: '',
                pathname: '/img/abstract-user-flat-1.png'
            }
        ]
    }
}

module.exports = nextConfig
