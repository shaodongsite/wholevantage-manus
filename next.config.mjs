/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // 关闭构建期跳过类型检查：迁移到 Cursor 前暴露真实类型问题。
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  // 根路径重定向到默认语言。原 app/page.tsx 的 redirect 上移到这里，
  // 以便 app/[locale]/layout.tsx 成为唯一的根布局（承载 <html lang>）。
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
