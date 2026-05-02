import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',           // 정적 내보내기 (필수)
  images: { unoptimized: true }, // GH Pages에서 이미지 로더 미지원
  trailingSlash: true,        // /about/index.html 형태로 생성
  // 개인 사이트(username.github.io)는 basePath 불필요!
}

export default nextConfig
