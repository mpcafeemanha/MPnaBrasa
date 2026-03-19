import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  // ========== BANNERS ========== //
  const banners = [
    { 
      id: 1,
      desktop: '/images/banner-churrasco-pagina-inicial-1.png',
      mobile: '/images/banner-churrasco-pagina-inicial-1.png',
    },
    { 
      id: 2,
      desktop: '/images/banner-churrasco-pagina-inicial-2.png',
      mobile: '/images/banner-churrasco-pagina-inicial-2.png',
    },
    { 
      id: 3,
      desktop: '/images/banner-churrasco-pagina-inicial-3.png',
      mobile: '/images/banner-churrasco-pagina-inicial-3.png',
    }
  ];

  // ========== CONFIGURAÇÃO CHURRASCO ========== //
  const localConfig = {
    businessName: "MP na Brasa",
    slogan: "Você chama a galera, a gente resolve o churrasco.",
    businessType: "Kits de Churrasco Gourmet",
    city: "Joanópolis",
    state: "SP",
    address: "Rua Capitão Antonio Mathias , 720 - Centro",
    cep: "12980-000",
    phone: "(11) 96918-0048",
    whatsapp: "5511969180048",
    deliveryArea: "Joanópolis e região",
    openingHours: "Funcionamento: quinta a domingo | Pedidos até 10h | Entrega em até 1h após confirmação",
    url: "https://mpnabrasa.shop",
    logo: "https://mpnabrasa.shop/Logo%20MP%20cafe.png"
  };

  // ========== PALETA DE CORES GOURMET ========== //
  const colorPalette = {
    primary: '#8B0000',
    secondary: '#2C2C2C',
    accent: '#B22222',
    light: '#F8F8F8',
    dark: '#1A1A1A',
    white: '#FFFFFF',
    success: '#228B22',
    text: '#333333',
    warning: '#FF8C00'
  };

  // ========== AVALIAÇÕES SIMPLES ========== //
  const avaliacoes = [
    { 
      foto: "https://i.imgur.com/R4MCf34.png", 
      nome: "Ana", 
      texto: "A picanha é simplesmente incrível! Nunca comi uma carne tão macia e saborosa.", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/R4MCf34.png", 
      nome: "Claudia", 
      texto: "Fraldinha que derrete na boca! Recomendo muito para um churrasco perfeito.", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/R4MCf34.png", 
      nome: "Fernanda", 
      texto: "Maminha de qualidade excepcional! Pedi pelo site e chegou tudo perfeito.", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/R4MCf34.png", 
      nome: "Juliana", 
      texto: "Picanha e maminha maravilhosas! O site facilitou muito minha compra.", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/R4MCf34.png", 
      nome: "Patrícia", 
      texto: "Já é minha terceira compra. Carnes sempre perfeitas: picanha, fraldinha e maminha!", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/R4MCf34.png", 
      nome: "Camila", 
      texto: "Picanha que impressiona! Melhor compra online de carnes que já fiz.", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/R4MCf34.png", 
      nome: "Luana", 
      texto: "Fraldinha e maminha de qualidade! Encontrei tudo que precisava rapidamente.", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/R4MCf34.png", 
      nome: "Mariana", 
      texto: "Atendimento excelente! Comprei picanha e chegou no prazo combinado.", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/CL3oucA.png", 
      nome: "Carlos", 
      texto: "Picanha que impressionou todos! Entrega rápida e carne de primeira.", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/CL3oucA.png", 
      nome: "Ricardo", 
      texto: "Fraldinha no ponto perfeito! Site fácil de usar e carnes chegaram bem embaladas.", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/CL3oucA.png", 
      nome: "Bruno", 
      texto: "Maminha que faz sucesso! Site prático e entrega no horário.", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/CL3oucA.png", 
      nome: "Lucas", 
      texto: "Picanha e fraldinha deliciosas! Site com navegação simples e rápida.", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/CL3oucA.png", 
      nome: "Marcos", 
      texto: "Combo família com picanha! Site excelente, encontrei tudo rapidamente.", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/CL3oucA.png", 
      nome: "Gustavo", 
      texto: "Carnes de qualidade! Fiz o pedido em 5 minutos pelo site.", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/CL3oucA.png", 
      nome: "Rodrigo", 
      texto: "Entrega rápida! Picanha, fraldinha e maminha de primeira qualidade.", 
      estrelas: 5 
    }
  ];

  // ========== FUNÇÃO PARA GERAR SCHEMA.ORG ========== //
  const generateWebsiteSchema = () => {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "name": localConfig.businessName,
          "url": localConfig.url,
          "description": localConfig.slogan,
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${localConfig.url}/mp?search={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "FoodEstablishment",
          "name": localConfig.businessName,
          "description": localConfig.slogan,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": localConfig.address,
            "addressLocality": localConfig.city,
            "addressRegion": localConfig.state,
            "postalCode": localConfig.cep,
            "addressCountry": "BR"
          },
          "telephone": localConfig.phone,
          "servesCuisine": ["Brazilian Barbecue", "Churrasco", "Carnes"],
          "openingHours": "Th-Su 08:00-20:00",
          "priceRange": "$$",
          "image": localConfig.logo,
          "areaServed": {
            "@type": "City",
            "name": localConfig.city
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Kits de Churrasco",
            "itemListElement": [
              {
                "@type": "Product",
                "name": "Kit Churrasco Raiz",
                "description": "Kit completo com carnes selecionadas e acompanhamentos"
              },
              {
                "@type": "Product",
                "name": "Kit Churrasco Premium",
                "description": "Kit especial com carnes premium e acompanhamentos gourmet"
              },
              {
                "@type": "Product",
                "name": "Carnes Premium",
                "description": "Picanha, fraldinha, maminha e cortes especiais"
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": avaliacoes.length,
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": avaliacoes.slice(0, 5).map((avaliacao, index) => ({
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": avaliacao.nome
            },
            "reviewBody": avaliacao.texto,
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": avaliacao.estrelas,
              "bestRating": "5",
              "worstRating": "1"
            },
            "datePublished": "2025-01-15"
          }))
        },
        {
          "@type": "LocalBusiness",
          "name": localConfig.businessName,
          "image": localConfig.logo,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": localConfig.city,
            "addressRegion": localConfig.state,
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-23.1058",
            "longitude": "-46.2758"
          }
        }
      ]
    };
  };

  // Estado do carrossel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const slideInterval = useRef(null);

  // Verifica o tamanho da tela
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Navegação do carrossel
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    resetInterval();
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    resetInterval();
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetInterval();
  };

  // Controle do intervalo automático
  const resetInterval = () => {
    clearInterval(slideInterval.current);
    startInterval();
  };

  const startInterval = () => {
    slideInterval.current = setInterval(() => {
      goToNextSlide();
    }, 6000);
  };

  // Iniciar temporizadores
  useEffect(() => {
    startInterval();
    return () => {
      clearInterval(slideInterval.current);
    };
  }, []);

  return (
    <>
      <Head>
        {/* ===== META TAGS BÁSICAS ===== */}
        <title>{localConfig.businessName} - Kits de Churrasco Gourmet em {localConfig.city}-{localConfig.state}</title>
        <meta name="description" content={`${localConfig.slogan} Kits completos com picanha, fraldinha, maminha e acompanhamentos. Entrega em ${localConfig.deliveryArea}. Monte seu churrasco agora!`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta charSet="utf-8" />
        
        {/* ===== KEYWORDS E AUTORIA ===== */}
        <meta name="keywords" content="churrasco, kit churrasco, picanha, fraldinha, maminha, carne premium, churrasco gourmet, carnes selecionadas, acompanhamentos churrasco, joanópolis, churrasco em casa" />
        <meta name="author" content={localConfig.businessName} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* ===== CANONICAL ===== */}
        <link rel="canonical" href={localConfig.url} />
        
        {/* ===== OPEN GRAPH / FACEBOOK ===== */}
        <meta property="og:title" content={`${localConfig.businessName} - ${localConfig.slogan}`} />
        <meta property="og:description" content={`Kits de churrasco gourmet com carnes premium (picanha, fraldinha, maminha) e acompanhamentos especiais. Entrega em ${localConfig.city} e região. Peça já!`} />
        <meta property="og:image" content={localConfig.logo} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`Logo ${localConfig.businessName} - Kits de Churrasco Gourmet`} />
        <meta property="og:url" content={localConfig.url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={localConfig.businessName} />
        <meta property="og:locale" content="pt_BR" />
        
        {/* ===== TWITTER CARD ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${localConfig.businessName} - Kits de Churrasco Gourmet`} />
        <meta name="twitter:description" content={`${localConfig.slogan} Picanha, fraldinha, maminha e acompanhamentos. Entrega em ${localConfig.city}.`} />
        <meta name="twitter:image" content={localConfig.logo} />
        <meta name="twitter:image:alt" content={`Logo ${localConfig.businessName}`} />
        
        {/* ===== WHATSAPP / MESSENGER ===== */}
        <meta property="og:whatsapp:image" content={localConfig.logo} />
        <meta property="og:whatsapp:title" content={`${localConfig.businessName} - Churrasco Gourmet`} />
        <meta property="og:whatsapp:description" content={`${localConfig.slogan} Peça seu kit agora!`} />
        
        {/* ===== META TAGS ADICIONAIS ===== */}
        <meta name="theme-color" content={colorPalette.primary} />
        <meta name="msapplication-TileColor" content={colorPalette.primary} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* ===== FAVICON ===== */}
        <link rel="icon" href="/Logo MP cafe.png" />
        <link rel="apple-touch-icon" href="/Logo MP cafe.png" />
        
        {/* ===== SCHEMA.ORG (DADOS ESTRUTURADOS) ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteSchema())
          }}
        />
      </Head>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '0' : '20px',
        minHeight: '100vh',
        backgroundColor: colorPalette.light,
        fontFamily: "'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
        position: 'relative'
      }}>
        {/* Cabeçalho */}
        <header style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: isMobile ? '20px 0 0 0' : '30px 0 0 0',
          marginBottom: isMobile ? '5px' : '10px',
          backgroundColor: colorPalette.white
        }}>
          <div style={{
            backgroundColor: colorPalette.primary,
            padding: isMobile ? '8px 20px' : '10px 25px',
            borderRadius: '30px',
            marginBottom: isMobile ? '10px' : '15px',
            color: 'white',
            fontSize: isMobile ? '0.8rem' : '0.9rem',
            fontWeight: '600',
            boxShadow: '0 2px 5px rgba(139, 0, 0, 0.2)'
          }}>
            {localConfig.businessName}
          </div>
          
          {/* LOGO SEM FUNDO BRANCO */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: isMobile ? '420px' : '520px',
            height: isMobile ? '150px' : '180px',
            margin: isMobile ? '3px 0' : '8px 0'
          }}>
            <img 
              src="/Logo MP cafe.png" 
              alt={`${localConfig.businessName} - Logo`} 
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block'
              }} 
            />
          </div>
          
          <h1 style={{ 
            color: colorPalette.primary, 
            fontSize: isMobile ? '1.5rem' : '2rem',
            margin: isMobile ? '5px 0 10px' : '10px 0 15px',
            textAlign: 'center',
            fontWeight: '700',
            lineHeight: '1.3',
            padding: isMobile ? '0 15px' : '0'
          }}>
            {localConfig.slogan}
          </h1>
          
          <p style={{ 
            color: colorPalette.dark, 
            fontSize: isMobile ? '0.9rem' : '1rem',
            maxWidth: '600px',
            textAlign: 'center',
            lineHeight: '1.6',
            marginBottom: isMobile ? '15px' : '20px',
            padding: isMobile ? '0 15px' : '0'
          }}>
            Kits completos de churrasco com carnes selecionadas (picanha, fraldinha, maminha), 
            acompanhamentos especiais e tudo que você precisa para seu churrasco em {localConfig.city}-{localConfig.state}.
          </p>
        </header>

        {/* Destaques de Credibilidade - Adaptado para mobile */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: isMobile ? '10px' : '15px',
          margin: isMobile ? '20px 0' : '30px 0',
          padding: isMobile ? '0 10px' : '0'
        }}>
          <div style={{
            backgroundColor: colorPalette.white,
            padding: isMobile ? '10px 15px' : '15px 20px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            minWidth: isMobile ? 'unset' : '200px',
            flex: isMobile ? '1 1 120px' : '0 0 auto',
            boxShadow: '0 2px 8px rgba(139, 0, 0, 0.05)',
            border: `1px solid ${colorPalette.secondary}`
          }}>
            <span style={{fontSize: isMobile ? '1.2rem' : '1.5rem', marginRight: isMobile ? '8px' : '10px'}}>🥩</span>
            <div>
              <div style={{fontWeight: '600', fontSize: isMobile ? '0.8rem' : '0.9rem'}}>Carnes Premium</div>
              <div style={{fontSize: isMobile ? '0.7rem' : '0.8rem', color: '#666'}}>Selecionadas</div>
            </div>
          </div>
          
          <div style={{
            backgroundColor: colorPalette.white,
            padding: isMobile ? '10px 15px' : '15px 20px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            minWidth: isMobile ? 'unset' : '200px',
            flex: isMobile ? '1 1 120px' : '0 0 auto',
            boxShadow: '0 2px 8px rgba(139, 0, 0, 0.05)',
            border: `1px solid ${colorPalette.secondary}`
          }}>
            <span style={{fontSize: isMobile ? '1.2rem' : '1.5rem', marginRight: isMobile ? '8px' : '10px'}}>🚚</span>
            <div>
              <div style={{fontWeight: '600', fontSize: isMobile ? '0.8rem' : '0.9rem'}}>Entrega Agendada</div>
              <div style={{fontSize: isMobile ? '0.7rem' : '0.8rem', color: '#666'}}>Para toda região</div>
            </div>
          </div>
          
          <div style={{
            backgroundColor: colorPalette.white,
            padding: isMobile ? '10px 15px' : '15px 20px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            minWidth: isMobile ? 'unset' : '200px',
            flex: isMobile ? '1 1 120px' : '0 0 auto',
            boxShadow: '0 2px 8px rgba(139, 0, 0, 0.05)',
            border: `1px solid ${colorPalette.secondary}`
          }}>
            <span style={{fontSize: isMobile ? '1.2rem' : '1.5rem', marginRight: isMobile ? '8px' : '10px'}}>🏷️</span>
            <div>
              <div style={{fontWeight: '600', fontSize: isMobile ? '0.8rem' : '0.9rem'}}>Kits Completos</div>
              <div style={{fontSize: isMobile ? '0.7rem' : '0.8rem', color: '#666'}}>Tudo que precisa</div>
            </div>
          </div>

          <div style={{
            backgroundColor: colorPalette.white,
            padding: isMobile ? '10px 15px' : '15px 20px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            minWidth: isMobile ? 'unset' : '200px',
            flex: isMobile ? '1 1 120px' : '0 0 auto',
            boxShadow: '0 2px 8px rgba(139, 0, 0, 0.05)',
            border: `1px solid ${colorPalette.secondary}`
          }}>
            <span style={{fontSize: isMobile ? '1.2rem' : '1.5rem', marginRight: isMobile ? '8px' : '10px'}}>🔥</span>
            <div>
              <div style={{fontWeight: '600', fontSize: isMobile ? '0.8rem' : '0.9rem'}}>Qualidade Garantida</div>
              <div style={{fontSize: isMobile ? '0.7rem' : '0.8rem', color: '#666'}}>Sabor inigualável</div>
            </div>
          </div>
        </div>

        {/* Carrossel com proporção 1200x400 (3:1) */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1200px',
          margin: isMobile ? '0 auto 20px auto' : '0 auto 40px auto',
          overflow: 'hidden',
          borderRadius: isMobile ? '0' : '8px',
          boxShadow: '0 4px 12px rgba(139, 0, 0, 0.1)',
          height: isMobile ? 'calc(100vw / 3)' : '400px',
          backgroundColor: colorPalette.dark
        }}>
          <div style={{
            display: 'flex',
            transition: 'transform 0.5s ease',
            transform: `translateX(-${currentSlide * 100}%)`,
            height: '100%'
          }}>
            {banners.map((banner) => (
              <div 
                key={banner.id} 
                style={{
                  width: '100%',
                  flexShrink: 0,
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >
                <img 
                  src={isMobile ? banner.mobile : banner.desktop}
                  alt={`Banner ${banner.id} - ${localConfig.businessName}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block'
                  }}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = '/Logo MP cafe.png';
                  }}
                />
              </div>
            ))}
          </div>
          
          {/* Botões de navegação */}
          <button 
            onClick={goToPrevSlide}
            style={{
              position: 'absolute',
              top: '50%',
              left: '10px',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.8)',
              border: 'none',
              borderRadius: '50%',
              width: '35px',
              height: '35px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
            }}
            aria-label="Slide anterior"
          >
            <span style={{ fontSize: '16px', color: colorPalette.primary }}>❮</span>
          </button>
          
          <button 
            onClick={goToNextSlide}
            style={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.8)',
              border: 'none',
              borderRadius: '50%',
              width: '35px',
              height: '35px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
            }}
            aria-label="Próximo slide"
          >
            <span style={{ fontSize: '16px', color: colorPalette.primary }}>❯</span>
          </button>
          
          {/* Indicadores de slide */}
          <div style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '6px',
            zIndex: 10
          }}>
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  backgroundColor: currentSlide === index ? colorPalette.primary : 'rgba(255,255,255,0.5)',
                  transition: 'background-color 0.3s'
                }}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Seção de Apresentação */}
        <section style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: isMobile ? '25px 0' : '40px 0',
          padding: isMobile ? '0 15px' : '0 20px'
        }}>
          <h2 style={{
            color: colorPalette.dark,
            fontSize: isMobile ? '1.3rem' : '1.8rem',
            fontWeight: '600',
            marginBottom: isMobile ? '15px' : '25px',
            textAlign: 'center',
            padding: isMobile ? '0 10px' : '0'
          }}>
            Churrasco Perfeito na Sua Casa
          </h2>
          
          <p style={{
            color: colorPalette.text,
            fontSize: isMobile ? '0.95rem' : '1.1rem',
            maxWidth: '800px',
            textAlign: 'center',
            lineHeight: '1.6',
            marginBottom: isMobile ? '20px' : '30px',
            padding: isMobile ? '0 15px' : '0'
          }}>
            No MP na Brasa, você encontra tudo para seu churrasco: picanha, fraldinha, maminha e muito mais. 
            Monte seu kit completo com acompanhamentos especiais e tenha um churrasco memorável sem complicação.
          </p>
        </section>

        {/* Seção CTA */}
        <section style={{
          textAlign: 'center',
          margin: isMobile ? '25px 15px' : '40px 20px',
          padding: isMobile ? '20px 15px' : '30px 20px',
          backgroundColor: colorPalette.white,
          borderRadius: '12px',
          boxShadow: '0 5px 15px rgba(139, 0, 0, 0.08)',
          width: isMobile ? 'calc(100% - 30px)' : 'calc(100% - 40px)',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
          border: `1px solid ${colorPalette.secondary}`,
          boxSizing: 'border-box'
        }}>
          <div style={{
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <h2 style={{
              color: colorPalette.primary,
              fontSize: isMobile ? '1.4rem' : '1.8rem',
              fontWeight: '700',
              marginBottom: isMobile ? '15px' : '20px',
              lineHeight: '1.3'
            }}>
              Monte Seu Churrasco!
            </h2>
            
            <p style={{
              color: colorPalette.text,
              fontSize: isMobile ? '1rem' : '1.1rem',
              margin: isMobile ? '0 auto 20px' : '0 auto 30px',
              lineHeight: '1.6',
              maxWidth: '95%'
            }}>
              Escolha entre nossos kits completos, carnes selecionadas ou monte seu combo personalizado!
            </p>
            
            <Link href="/mp" passHref legacyBehavior>
              <a 
                style={{
                  display: 'inline-block',
                  padding: isMobile ? '14px 30px' : '16px 40px',
                  backgroundColor: colorPalette.primary,
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontSize: isMobile ? '1.1rem' : '1.2rem',
                  fontWeight: '700',
                  transition: 'all 0.3s ease',
                  boxShadow: `0 4px 12px rgba(139, 0, 0, 0.3)`,
                  marginBottom: '15px'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = colorPalette.accent;
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 15px rgba(139, 0, 0, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = colorPalette.primary;
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 12px rgba(139, 0, 0, 0.3)';
                }}
              >
                🔥 VER KITS DE CHURRASCO →
              </a>
            </Link>

            <p style={{
              color: colorPalette.accent,
              fontSize: isMobile ? '0.8rem' : '0.9rem',
              fontStyle: 'italic',
              margin: '10px 0 0 0'
            }}>
              Entrega em {localConfig.city} e região • Pague na entrega!
            </p>
          </div>
        </section>

        {/* Seção de Avaliações */}
        <section style={{
          margin: isMobile ? '20px 0' : '40px 0',
          padding: isMobile ? '0 10px' : '0 20px',
          width: '100%',
          overflow: 'hidden'
        }}>
          <h2 style={{
            color: colorPalette.primary,
            fontSize: isMobile ? '1.3rem' : '1.5rem',
            fontWeight: '600',
            textAlign: 'center',
            marginBottom: isMobile ? '15px' : '25px',
            padding: '0 15px'
          }}>
            🔥 O que nossos clientes dizem
          </h2>

          <div style={{
            position: 'relative',
            maxWidth: '100%',
            margin: '0 auto'
          }}>
            <div 
              style={{
                display: 'flex',
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                gap: '15px',
                padding: '10px',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {avaliacoes.map((avaliacao, index) => (
                <div key={index} style={{
                  minWidth: isMobile ? '85vw' : '28vw',
                  maxWidth: isMobile ? '85vw' : '28vw',
                  padding: '20px',
                  background: colorPalette.white,
                  borderRadius: '10px',
                  boxShadow: '0 2px 8px rgba(139, 0, 0, 0.1)',
                  flexShrink: 0,
                  boxSizing: 'border-box',
                  border: `1px solid ${colorPalette.secondary}`
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '12px'
                  }}>
                    <img 
                      src={avaliacao.foto} 
                      alt={avaliacao.nome} 
                      style={{ 
                        width: '45px', 
                        height: '45px', 
                        borderRadius: '50%', 
                        objectFit: 'cover',
                        marginRight: '10px'
                      }} 
                    />
                    <div>
                      <h3 style={{ 
                        color: colorPalette.primary, 
                        fontSize: isMobile ? '0.95rem' : '1rem',
                        margin: '0 0 3px 0',
                        fontWeight: '600'
                      }}>
                        {avaliacao.nome}
                      </h3>
                      <div style={{ 
                        display: 'flex',
                        gap: '2px'
                      }}>
                        {[...Array(5)].map((_, i) => (
                          <span 
                            key={i} 
                            style={{ 
                              color: i < avaliacao.estrelas ? '#FFD700' : '#e0e0e0',
                              fontSize: isMobile ? '16px' : '18px'
                            }}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p style={{ 
                    color: colorPalette.text, 
                    fontSize: isMobile ? '0.88rem' : '0.92rem',
                    lineHeight: '1.5',
                    margin: 0
                  }}>
                    "{avaliacao.texto}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rodapé */}
        <footer style={{
          marginTop: isMobile ? '40px' : '60px',
          padding: isMobile ? '25px 15px' : '40px 20px',
          textAlign: 'center',
          color: '#666',
          fontSize: isMobile ? '0.8rem' : '0.85rem',
          borderTop: `2px solid ${colorPalette.primary}`,
          backgroundColor: colorPalette.white,
          borderRadius: '12px 12px 0 0',
          boxShadow: '0 -2px 10px rgba(139, 0, 0, 0.1)'
        }}>
          
          <h3 style={{
            color: colorPalette.primary,
            fontSize: isMobile ? '1rem' : '1.1rem',
            marginBottom: '20px',
            fontWeight: '600'
          }}>
            📋 Informações
          </h3>

          {/* Links */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
            gap: isMobile ? '15px' : '20px',
            marginBottom: '25px',
            maxWidth: '600px',
            margin: '0 auto 25px auto'
          }}>
            
            <Link href="/politica-de-privacidade" passHref legacyBehavior>
              <a style={{ 
                color: colorPalette.primary, 
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: isMobile ? '0.8rem' : '0.85rem',
                padding: '12px 8px',
                borderRadius: '8px',
                backgroundColor: colorPalette.light,
                border: `1px solid ${colorPalette.secondary}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
              <span>🔒</span>
              {isMobile ? 'Privacidade' : 'Privacidade'}
            </a>
            </Link>

            <Link href="/politica-devolucao-e-reembolso" passHref legacyBehavior>
              <a style={{ 
                color: colorPalette.primary, 
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: isMobile ? '0.8rem' : '0.85rem',
                padding: '12px 8px',
                borderRadius: '8px',
                backgroundColor: colorPalette.light,
                border: `1px solid ${colorPalette.secondary}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
              <span>🔄</span>
              {isMobile ? 'Devolução' : 'Devolução'}
            </a>
            </Link>

            <Link href="/termos" passHref legacyBehavior>
              <a style={{ 
                color: colorPalette.primary, 
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: isMobile ? '0.8rem' : '0.85rem',
                padding: '12px 8px',
                borderRadius: '8px',
                backgroundColor: colorPalette.light,
                border: `1px solid ${colorPalette.secondary}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
              <span>📄</span>
              {isMobile ? 'Termos' : 'Termos'}
            </a>
            </Link>

            <Link href="/quem-somos" passHref legacyBehavior>
              <a style={{ 
                color: colorPalette.primary, 
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: isMobile ? '0.8rem' : '0.85rem',
                padding: '12px 8px',
                borderRadius: '8px',
                backgroundColor: colorPalette.light,
                border: `1px solid ${colorPalette.secondary}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
              <span>👥</span>
              {isMobile ? 'Sobre' : 'Sobre'}
            </a>
            </Link>
          </div>

          <div style={{
            height: '1px',
            background: `linear-gradient(90deg, transparent, ${colorPalette.primary}, transparent)`,
            margin: '20px auto',
            maxWidth: '300px'
          }}></div>

          {/* Redes Sociais - VOLTAR COMO ESTAVA */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: isMobile ? '20px' : '25px',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            {/* WhatsApp */}
            <a 
              href={`https://wa.me/${localConfig.whatsapp}`}
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '4px',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                padding: '6px',
                backgroundColor: colorPalette.white,
                border: `1px solid ${colorPalette.secondary}`
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <img 
                src="https://i.imgur.com/62MbxLy.png" 
                alt="WhatsApp" 
                style={{
                  width: '20px',
                  height: '20px',
                  transition: 'all 0.3s ease'
                }}
              />
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '4px',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                padding: '6px',
                backgroundColor: colorPalette.white,
                border: `1px solid ${colorPalette.secondary}`
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <img 
                src="https://i.imgur.com/I0ZZLjG.png" 
                alt="Instagram" 
                style={{
                  width: '20px',
                  height: '20px',
                  transition: 'all 0.3s ease'
                }}
              />
            </a>

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/mpnabrasa" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '4px',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                padding: '6px',
                backgroundColor: colorPalette.white,
                border: `1px solid ${colorPalette.secondary}`
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <img 
                src="https://i.imgur.com/prULUUA.png" 
                alt="Facebook" 
                style={{
                  width: '20px',
                  height: '20px',
                  transition: 'all 0.3s ease'
                }}
              />
            </a>
          </div>

          {/* Informações Finais */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              maxWidth: '800px',
              margin: '15px auto 20px auto',
              padding: '0 15px'
            }}>
              <p style={{
                color: colorPalette.dark,
                fontSize: isMobile ? '0.75rem' : '0.85rem',
                lineHeight: '1.5',
                textAlign: 'center',
                margin: '0 0 15px 0'
              }}>
                <strong>{localConfig.businessName}</strong> - Churrasco completo em <strong>{localConfig.city}-{localConfig.state}</strong>. 
                Kits com carnes selecionadas e tudo que você precisa.
              </p>
            </div>

            <p style={{ 
              margin: '5px 0', 
              fontSize: isMobile ? '0.8rem' : '0.85rem',
              color: colorPalette.dark
            }}>
              © {new Date().getFullYear()} {localConfig.businessName}.
            </p>
            
            <p style={{ 
              margin: '5px 0', 
              fontSize: isMobile ? '0.7rem' : '0.8rem', 
              color: '#888'
            }}>
              📞 {localConfig.phone}
            </p>
            
            <p style={{ 
              margin: '5px 0', 
              fontSize: isMobile ? '0.7rem' : '0.8rem', 
              color: '#888'
            }}>
              🕒 {localConfig.openingHours}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
