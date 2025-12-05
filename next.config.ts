import { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '',
    assetPrefix: ''
};

export default nextConfig;
