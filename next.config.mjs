/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Configuração de imagens (se você usar next/image)
  images: {
    domains: ['localhost', 'mpnabrasa.shop'],
    formats: ['image/avif', 'image/webp'],
  },
  
  // ========== REWRITES PARA URLs AMIGÁVEIS ========== //
  async rewrites() {
    return [
      // ========== ROTAS DO BRASA NEWS ========== //
      // URL com slug: /brasa-news/titulo-do-artigo
      {
        source: '/brasa-news/:slug',
        destination: '/brasa-news?slug=:slug',
      },
      // URL com slug e página específica (para casos de paginação)
      {
        source: '/brasa-news/:slug/:id',
        destination: '/brasa-news?slug=:slug&page=:id',
      },
      // URL base do Brasa News
      {
        source: '/brasa-news',
        destination: '/brasa-news',
      },
      
      // ========== ROTAS DO MP NA BRASA (outras páginas) ========== //
      // Página principal
      {
        source: '/',
        destination: '/',
      },
      // Página de produtos/kits
      {
        source: '/mp',
        destination: '/mp',
      },
      // Página de perguntas frequentes
      {
        source: '/faq',
        destination: '/faq',
      },
      // Página quem somos
      {
        source: '/quem-somos',
        destination: '/quem-somos',
      },
      // Política de privacidade
      {
        source: '/politica-de-privacidade',
        destination: '/politica-de-privacidade',
      },
      // Política de devolução
      {
        source: '/politica-devolucao-e-reembolso',
        destination: '/politica-devolucao-e-reembolso',
      },
      // Termos de uso
      {
        source: '/termos',
        destination: '/termos',
      },
    ];
  },
  
  // ========== REDIRECTS (se necessário) ========== //
  async redirects() {
    return [
      // Redirecionar URLs antigas para as novas (se houver)
      // {
      //   source: '/antiga-rota',
      //   destination: '/nova-rota',
      //   permanent: true,
      // },
    ];
  },
  
  // ========== HEADERS (segurança e SEO) ========== //
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/brasa-news/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ];
  },
};

export default nextConfig;