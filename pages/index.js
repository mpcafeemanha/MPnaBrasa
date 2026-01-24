import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  // ========== BANNERS ========== //
  const banners = [
    { 
      id: 1,
      desktop: '/images/banner-pague-no-ato-da-entrega01.jpg',
      mobile: '/images/banner-pague-no-ato-da-entrega01.jpg'
    },
    { 
      id: 2,
      desktop: '/images/banner-obrigado01.jpg',
      mobile: '/images/banner-obrigado01.jpg'
    }
  ];

  // ========== CONFIGURAÇÃO LOCAL ========== //
  const localConfig = {
    businessName: "MP Café & Manhã",
    businessType: "Padaria e Café",
    city: "Joanópolis",
    state: "SP",
    address: "Rua Capitão Antônio Mathias, 720 - Centro",
    cep: "12980-000",
    phone: "(11) 91357-2902",
    whatsapp: "5511913572902",
    description: "Padaria e café especializada em produtos para café da manhã em Joanópolis-SP. Pães frescos, bolos caseiros, salgados, cafés especiais e muito mais.",
    deliveryArea: "Joanópolis e região",
    openingHours: "Funcionamento: quinta a domingo | Pedidos até 10h | Entrega em até 1h após confirmação"
  };

  // ========== PALETA DE CORES ========== //
  const colorPalette = {
    primary: '#8B4513',
    secondary: '#D2B48C',
    accent: '#A0522D',
    light: '#F5F5DC',
    dark: '#654321',
    white: '#FFFFFF',
    success: '#228B22',
    text: '#333333'
  };

  // ========== AVALIAÇÕES ========== //
  const avaliacoes = [
    // Femininas (8 avaliações)
    { 
      foto: "https://i.imgur.com/R4MCf34.png", 
      nome: "Ana", 
      texto: "Os pães são fresquinhos todos os dias e o café é especial. Meu café da manhã favorito em Joanópolis!", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/R4MCf34.png", 
      nome: "Claudia", 
      texto: "Adoro os bolos caseiros! Sempre compro para o café da manhã da família. Qualidade excelente!", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/R4MCf34.png", 
      nome: "Fernanda", 
      texto: "Café especial delicioso e pães que lembram os da fazenda. Recomendo muito!", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/R4MCf34.png", 
      nome: "Juliana", 
      texto: "Kit café completo é uma mão na roda! Produtos de ótima qualidade e entrega pontual.", 
      estrelas: 4 
    },
    { 
      foto: "https://i.imgur.com/R4MCf34.png", 
      nome: "Patrícia", 
      texto: "Já é minha terceira compra e nunca me decepcionou. O croissant recheado é divino!", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/R4MCf34.png", 
      nome: "Camila", 
      texto: "Pão de queijo caseiro e quentinho. Parece que acabou de sair do forno!", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/R4MCf34.png", 
      nome: "Luana", 
      texto: "Adoro a variedade! Encontrar tudo para um café da manhã completo num só lugar.", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/R4MCf34.png", 
      nome: "Mariana", 
      texto: "Preço justo e produto de qualidade. Virei cliente fiel do MP Café & Manhã!", 
      estrelas: 5 
    },

    // Masculinas (7 avaliações)
    { 
      foto: "https://i.imgur.com/CL3oucA.png", 
      nome: "Carlos", 
      texto: "Atendimento excelente! Sempre me ajudam a montar o kit café perfeito para o escritório.", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/CL3oucA.png", 
      nome: "Ricardo", 
      texto: "Café especial de verdade! Notas diferenciadas que você não encontra em qualquer lugar.", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/CL3oucA.png", 
      nome: "Bruno", 
      texto: "Produtos sempre frescos e entregues com cuidado. Muito bem embalados!", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/CL3oucA.png", 
      nome: "Lucas", 
      texto: "Não conhecia mas arrisquei e gostei bastante. Site fácil de usar e produtos de qualidade.", 
      estrelas: 4 
    },
    { 
      foto: "https://i.imgur.com/CL3oucA.png", 
      nome: "Marcos", 
      texto: "Suco de laranja natural é uma delícia! Perfeito para acompanhar o pão francês.", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/CL3oucA.png", 
      nome: "Gustavo", 
      texto: "Ótimo custo-benefício. Já indiquei para vários amigos e vizinhos!", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/CL3oucA.png", 
      nome: "Rodrigo", 
      texto: "Comprei com receio pela internet mas fui surpreendido. Entrega rápida e tudo perfeito!", 
      estrelas: 5 
    }
  ];

  // Estado do carrossel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 400 });
  const slideInterval = useRef(null);
  const carouselRef = useRef(null);
  const avaliacoesRef = useRef(null);

  // Estados para as notificações
  const [showFreteToast, setShowFreteToast] = useState(false);
  const [showWhatsappToast, setShowWhatsappToast] = useState(false);
  const toastTimers = useRef([]);

  // Verifica o tamanho da tela e calcula proporções
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      if (carouselRef.current) {
        const width = carouselRef.current.offsetWidth;
        const height = mobile ? width / 2.5 : Math.min(width / 3, 400);
        setDimensions({ width, height });
      }
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
    }, 8000); // 8 segundos para cada banner
  };

  // Configuração das notificações
  const showToast = (toastType) => {
    if (toastType === 'frete') {
      setShowFreteToast(true);
      const timer = setTimeout(() => {
        setShowFreteToast(false);
      }, 10000);
      toastTimers.current.push(timer);
    } else if (toastType === 'whatsapp') {
      setShowWhatsappToast(true);
      const timer = setTimeout(() => {
        setShowWhatsappToast(false);
      }, 10000);
      toastTimers.current.push(timer);
    }
  };

  const hideToast = (toastType) => {
    if (toastType === 'frete') {
      setShowFreteToast(false);
    } else if (toastType === 'whatsapp') {
      setShowWhatsappToast(false);
    }
  };

  // Iniciar temporizadores das notificações
  useEffect(() => {
    const freteTimer = setTimeout(() => {
      showToast('frete');
    }, 15000);

    const whatsappTimer = setTimeout(() => {
      showToast('whatsapp');
    }, 24000);

    toastTimers.current.push(freteTimer, whatsappTimer);
    startInterval();

    return () => {
      clearInterval(slideInterval.current);
      toastTimers.current.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <>
      <Head>
        {/* Título Otimizado */}
        <title>MP Café & Manhã - Padaria e Café Especializado | Joanópolis-SP</title>
        
        {/* Meta Description Otimizada */}
        <meta name="description" content="Padaria e café especializada em produtos para café da manhã em Joanópolis-SP. Pães frescos, bolos caseiros, salgados, cafés especiais e muito mais." />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        
        {/* Charset */}
        <meta charSet="utf-8" />
        
        {/* ========== OPEN GRAPH (Facebook/WhatsApp) ========== */}
        <meta property="og:title" content="MP Café & Manhã - Padaria e Café Especializado" />
        <meta property="og:description" content="Padaria e café especializada em produtos para café da manhã. Pães frescos, bolos caseiros, cafés especiais em Joanópolis-SP." />
        <meta property="og:image" content="/Logo MP cafe.png" />
        <meta property="og:url" content="https://www.mpcafemanha.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MP Café & Manhã" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* ========== TWITTER CARD ========== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MP Café & Manhã - Padaria e Café" />
        <meta name="twitter:description" content="Especialistas em café da manhã com produtos frescos e de qualidade em Joanópolis-SP." />
        <meta name="twitter:image" content="/Logo MP cafe.png" />
        
        {/* ========== SCHEMA.ORG (Google Rich Results) ========== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Bakery",
            "name": localConfig.businessName,
            "image": "/Logo MP cafe.png",
            "description": localConfig.description,
            "url": "https://www.mpcafemanha.com",
            "telephone": localConfig.phone,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": localConfig.address,
              "addressLocality": localConfig.city,
              "addressRegion": localConfig.state,
              "postalCode": localConfig.cep,
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-22.9311",
              "longitude": "-46.2756"
            },
            "openingHours": "Th-Su 06:00-12:00",
            "priceRange": "$$",
            "areaServed": localConfig.deliveryArea,
            "sameAs": [
              "https://www.facebook.com",
              "https://www.instagram.com"
            ],
            "servesCuisine": "Café da Manhã Brasileiro"
          })}
        </script>
        
        {/* ========== KEYWORDS E OTIMIZAÇÕES EXTRAS ========== */}
        <meta name="keywords" content="padaria, café, joanópolis, pão francês, bolo caseiro, café especial, café da manhã, salgados, croissant, pão de queijo" />
        <meta name="author" content="MP Café & Manhã" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.mpcafemanha.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/Logo MP cafe.png" />
        
        {/* Theme Color para Mobile */}
        <meta name="theme-color" content="#8B4513" />
        <meta name="msapplication-TileColor" content="#8B4513" />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/Logo MP cafe.png" />
      </Head>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '10px' : '20px',
        minHeight: '100vh',
        backgroundColor: colorPalette.light,
        fontFamily: "'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
        position: 'relative'
      }}>
        {/* Cabeçalho Premium - Adaptado para mobile */}
        <header style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: isMobile ? '15px 0' : '30px 0',
          marginBottom: isMobile ? '5px' : '10px'
        }}>
          <div style={{
            backgroundColor: colorPalette.primary,
            padding: isMobile ? '8px 15px' : '10px 25px',
            borderRadius: '30px',
            marginBottom: isMobile ? '10px' : '15px',
            color: 'white',
            fontSize: isMobile ? '0.8rem' : '0.9rem',
            fontWeight: '600',
            boxShadow: '0 2px 5px rgba(139, 69, 19, 0.2)'
          }}>
            {localConfig.businessName}
          </div>
          
          <img 
            src="/Logo MP cafe.png" 
            alt={localConfig.businessName} 
            style={{ 
              width: isMobile ? '180px' : '220px',
              margin: isMobile ? '10px 0' : '15px 0',
              filter: 'drop-shadow(0 3px 5px rgba(0,0,0,0.1))',
              borderRadius: '10px'
            }} 
          />
          
          <h1 style={{ 
            color: colorPalette.primary, 
            fontSize: isMobile ? '1.5rem' : '2rem',
            margin: isMobile ? '5px 0 10px' : '10px 0 15px',
            textAlign: 'center',
            fontWeight: '700',
            lineHeight: '1.3',
            padding: isMobile ? '0 10px' : '0'
          }}>
            Especialistas em <span style={{whiteSpace: 'nowrap'}}>Café da Manhã</span>
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
            Padaria e café especializada com pães frescos, bolos caseiros, salgados e cafés especiais. 
            Tudo para seu café da manhã perfeito em {localConfig.city}-{localConfig.state}.
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
            boxShadow: '0 2px 8px rgba(139, 69, 19, 0.05)',
            border: `1px solid ${colorPalette.secondary}`
          }}>
            <span style={{fontSize: isMobile ? '1.2rem' : '1.5rem', marginRight: isMobile ? '8px' : '10px'}}>🥖</span>
            <div>
              <div style={{fontWeight: '600', fontSize: isMobile ? '0.8rem' : '0.9rem'}}>Pães Frescos</div>
              <div style={{fontSize: isMobile ? '0.7rem' : '0.8rem', color: '#666'}}>Direto da Padaria</div>
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
            boxShadow: '0 2px 8px rgba(139, 69, 19, 0.05)',
            border: `1px solid ${colorPalette.secondary}`
          }}>
            <span style={{fontSize: isMobile ? '1.2rem' : '1.5rem', marginRight: isMobile ? '8px' : '10px'}}>🚚</span>
            <div>
              <div style={{fontWeight: '600', fontSize: isMobile ? '0.8rem' : '0.9rem'}}>Entrega Rápida</div>
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
            boxShadow: '0 2px 8px rgba(139, 69, 19, 0.05)',
            border: `1px solid ${colorPalette.secondary}`
          }}>
            <span style={{fontSize: isMobile ? '1.2rem' : '1.5rem', marginRight: isMobile ? '8px' : '10px'}}>🏷️</span>
            <div>
              <div style={{fontWeight: '600', fontSize: isMobile ? '0.8rem' : '0.9rem'}}>Preço Justo</div>
              <div style={{fontSize: isMobile ? '0.7rem' : '0.8rem', color: '#666'}}>Qualidade garantida</div>
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
            boxShadow: '0 2px 8px rgba(139, 69, 19, 0.05)',
            border: `1px solid ${colorPalette.secondary}`
          }}>
            <span style={{fontSize: isMobile ? '1.2rem' : '1.5rem', marginRight: isMobile ? '8px' : '10px'}}>☕</span>
            <div>
              <div style={{fontWeight: '600', fontSize: isMobile ? '0.8rem' : '0.9rem'}}>Café Especial</div>
              <div style={{fontSize: isMobile ? '0.7rem' : '0.8rem', color: '#666'}}>Grãos selecionados</div>
            </div>
          </div>
        </div>

        {/* Carrossel Otimizado */}
        <div 
          ref={carouselRef}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1200px',
            margin: isMobile ? '20px auto' : '40px auto',
            overflow: 'hidden',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(139, 69, 19, 0.1)',
            height: `${dimensions.height}px`,
            backgroundColor: colorPalette.white
          }}
        >
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
                  justifyContent: 'center'
                }}
              >
                <img 
                  src={isMobile ? banner.mobile : banner.desktop}
                  alt={`Banner ${banner.id}`}
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
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
              left: isMobile ? '5px' : '15px',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.7)',
              border: 'none',
              borderRadius: '50%',
              width: isMobile ? '35px' : '40px',
              height: isMobile ? '35px' : '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              boxShadow: '0 2px 5px rgba(139, 69, 19, 0.2)'
            }}
            aria-label="Slide anterior"
          >
            <span style={{ fontSize: isMobile ? '16px' : '20px', color: colorPalette.primary }}>❮</span>
          </button>
          
          <button 
            onClick={goToNextSlide}
            style={{
              position: 'absolute',
              top: '50%',
              right: isMobile ? '5px' : '15px',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.7)',
              border: 'none',
              borderRadius: '50%',
              width: isMobile ? '35px' : '40px',
              height: isMobile ? '35px' : '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              boxShadow: '0 2px 5px rgba(139, 69, 19, 0.2)'
            }}
            aria-label="Próximo slide"
          >
            <span style={{ fontSize: isMobile ? '16px' : '20px', color: colorPalette.primary }}>❯</span>
          </button>
          
          {/* Indicadores de slide */}
          <div style={{
            position: 'absolute',
            bottom: isMobile ? '10px' : '15px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: isMobile ? '6px' : '8px',
            zIndex: 10
          }}>
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: isMobile ? '8px' : '10px',
                  height: isMobile ? '8px' : '10px',
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

        {/* Seção de Apresentação SEM VÍDEO */}
        <section style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: isMobile ? '30px 0' : '60px 0',
          padding: isMobile ? '0 10px' : '0 20px'
        }}>
          <h2 style={{
            color: colorPalette.dark,
            fontSize: isMobile ? '1.2rem' : '1.8rem',
            fontWeight: '600',
            marginBottom: isMobile ? '15px' : '30px',
            textAlign: 'center',
            padding: isMobile ? '0 10px' : '0'
          }}>
            Tradição e Qualidade em Cada Produto
          </h2>
          
          <p style={{
            color: colorPalette.text,
            fontSize: isMobile ? '0.9rem' : '1.05rem',
            maxWidth: '800px',
            textAlign: 'center',
            lineHeight: '1.6',
            marginBottom: isMobile ? '20px' : '30px',
            padding: isMobile ? '0 15px' : '0'
          }}>
            Na MP Café & Manhã, transformamos ingredientes selecionados em experiências memoráveis para seu café da manhã. 
            Cada pão é assado com cuidado, cada bolo é preparado com receitas tradicionais, e nosso café é escolhido entre 
            as melhores safras para garantir sabor e aroma inigualáveis.
          </p>
          
          <p style={{
            color: colorPalette.accent,
            fontSize: isMobile ? '0.85rem' : '1rem',
            maxWidth: '600px',
            textAlign: 'center',
            lineHeight: '1.6',
            padding: isMobile ? '0 15px' : '0'
          }}>
            Nossa paixão por café da manhã se reflete em cada detalhe dos nossos produtos.
          </p>
        </section>

        {/* Seção CTA Simplificada */}
        <section style={{
          textAlign: 'center',
          margin: isMobile ? '30px 0' : '50px 0',
          padding: isMobile ? '25px 15px' : '35px 20px',
          backgroundColor: colorPalette.white,
          borderRadius: '12px',
          boxShadow: '0 5px 15px rgba(139, 69, 19, 0.08)',
          width: '100%',
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
              Peça Agora e Receba em Casa!
            </h2>
            
            <p style={{
              color: colorPalette.text,
              fontSize: isMobile ? '1rem' : '1.1rem',
              margin: isMobile ? '0 auto 20px' : '0 auto 30px',
              lineHeight: '1.6',
              maxWidth: '95%'
            }}>
              Seu café da manhã perfeito a poucos cliques de distância. Pães frescos, bolos caseiros, cafés especiais e muito mais!
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
                  boxShadow: `0 4px 12px rgba(139, 69, 19, 0.3)`,
                  marginBottom: '15px'
                }}
              >
                🛒 COMPRE AGORA →
              </a>
            </Link>

            <p style={{
              color: colorPalette.accent,
              fontSize: isMobile ? '0.8rem' : '0.9rem',
              fontStyle: 'italic',
              margin: '10px 0 0 0'
            }}>
              Entrega rápida em {localConfig.city} e região. Pague no ato da entrega!
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
            O que nossos clientes dizem
          </h2>

          <div style={{
            position: 'relative',
            maxWidth: '100%',
            margin: '0 auto'
          }}>
            <div 
              ref={avaliacoesRef}
              style={{
                display: 'flex',
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                gap: '15px',
                padding: '10px',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                '&::-webkit-scrollbar': {
                  display: 'none'
                }
              }}
            >
              {avaliacoes.map((avaliacao, index) => (
                <div key={index} style={{
                  minWidth: isMobile ? '85vw' : '28vw',
                  maxWidth: isMobile ? '85vw' : '28vw',
                  padding: '20px',
                  background: colorPalette.white,
                  borderRadius: '10px',
                  boxShadow: '0 2px 8px rgba(139, 69, 19, 0.1)',
                  flexShrink: 0,
                  boxSizing: 'border-box',
                  border: `1px solid ${colorPalette.secondary}`
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '12px',
                    flexWrap: 'wrap'
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
                              fontSize: isMobile ? '16px' : '18px',
                              lineHeight: '1'
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
                    margin: 0,
                    wordBreak: 'break-word',
                    hyphens: 'auto'
                  }}>
                    "{avaliacao.texto}"
                  </p>
                </div>
              ))}
            </div>

            {/* Botões de Navegação */}
            <button 
              onClick={() => {
                const scrollAmount = isMobile ? window.innerWidth * 0.85 : window.innerWidth * 0.28;
                avaliacoesRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
              }}
              style={{
                position: 'absolute',
                top: '50%',
                left: isMobile ? '5px' : '10px',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.9)',
                border: `1px solid ${colorPalette.secondary}`,
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(139, 69, 19, 0.1)',
                zIndex: 2,
                color: colorPalette.primary,
                fontSize: '18px',
                fontWeight: 'bold'
              }}
              aria-label="Avaliação anterior"
            >
              ❮
            </button>
            <button 
              onClick={() => {
                const scrollAmount = isMobile ? window.innerWidth * 0.85 : window.innerWidth * 0.28;
                avaliacoesRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
              }}
              style={{
                position: 'absolute',
                top: '50%',
                right: isMobile ? '5px' : '10px',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.9)',
                border: `1px solid ${colorPalette.secondary}`,
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(139, 69, 19, 0.1)',
                zIndex: 2,
                color: colorPalette.primary,
                fontSize: '18px',
                fontWeight: 'bold'
              }}
              aria-label="Próxima avaliação"
            >
              ❯
            </button>
          </div>
        </section>

        {/* Rodapé Premium COM HORÁRIO ATUALIZADO */}
        <footer style={{
          marginTop: isMobile ? '40px' : '60px',
          padding: isMobile ? '25px 15px' : '40px 20px',
          textAlign: 'center',
          color: '#666',
          fontSize: isMobile ? '0.8rem' : '0.85rem',
          borderTop: `2px solid ${colorPalette.primary}`,
          backgroundColor: colorPalette.light,
          borderRadius: '12px 12px 0 0',
          boxShadow: '0 -2px 10px rgba(139, 69, 19, 0.1)'
        }}>
          
          {/* Título do Rodapé */}
          <h3 style={{
            color: colorPalette.primary,
            fontSize: isMobile ? '1rem' : '1.1rem',
            marginBottom: '20px',
            fontWeight: '600'
          }}>
            📋 Informações Legais
          </h3>

          {/* Links Principais em Grid Organizado */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
            gap: isMobile ? '15px' : '20px',
            marginBottom: '25px',
            maxWidth: '600px',
            margin: '0 auto 25px auto'
          }}>
            
            {/* Política de Privacidade */}
            <Link href="/politica-de-privacidade" passHref legacyBehavior>
              <a style={{ 
                color: colorPalette.primary, 
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: isMobile ? '0.8rem' : '0.85rem',
                padding: '12px 8px',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                backgroundColor: colorPalette.white,
                border: `1px solid ${colorPalette.secondary}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = colorPalette.primary;
                e.target.style.color = colorPalette.white;
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 8px rgba(139, 69, 19, 0.2)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = colorPalette.white;
                e.target.style.color = colorPalette.primary;
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
              }}
              title="Política de Privacidade"
              aria-label="Leia nossa Política de Privacidade"
            >
              <span>🔒</span>
              {isMobile ? 'Privacidade' : 'Política de Privacidade'}
            </a>
            </Link>

            {/* Política de Devolução e Reembolso */}
            <Link href="/politica-devolucao-e-reembolso" passHref legacyBehavior>
              <a style={{ 
                color: colorPalette.primary, 
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: isMobile ? '0.8rem' : '0.85rem',
                padding: '12px 8px',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                backgroundColor: colorPalette.white,
                border: `1px solid ${colorPalette.secondary}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = colorPalette.primary;
                e.target.style.color = colorPalette.white;
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 8px rgba(139, 69, 19, 0.2)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = colorPalette.white;
                e.target.style.color = colorPalette.primary;
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
              }}
              title="Política de Devolução e Reembolso"
              aria-label="Leia nossa Política de Devolução e Reembolso"
            >
              <span>🔄</span>
              {isMobile ? 'Devolução' : 'Política de Devolução'}
            </a>
            </Link>

            {/* Termos de Uso */}
            <Link href="/termos" passHref legacyBehavior>
              <a style={{ 
                color: colorPalette.primary, 
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: isMobile ? '0.8rem' : '0.85rem',
                padding: '12px 8px',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                backgroundColor: colorPalette.white,
                border: `1px solid ${colorPalette.secondary}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = colorPalette.primary;
                e.target.style.color = colorPalette.white;
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 8px rgba(139, 69, 19, 0.2)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = colorPalette.white;
                e.target.style.color = colorPalette.primary;
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
              }}
              title="Termos de Uso"
              aria-label="Leia nossos Termos de Uso"
            >
              <span>📄</span>
              {isMobile ? 'Termos' : 'Termos de Uso'}
            </a>
            </Link>

            {/* Quem Somos */}
            <Link href="/quem-somos" passHref legacyBehavior>
              <a style={{ 
                color: colorPalette.primary, 
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: isMobile ? '0.8rem' : '0.85rem',
                padding: '12px 8px',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                backgroundColor: colorPalette.white,
                border: `1px solid ${colorPalette.secondary}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = colorPalette.primary;
                e.target.style.color = colorPalette.white;
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 8px rgba(139, 69, 19, 0.2)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = colorPalette.white;
                e.target.style.color = colorPalette.primary;
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
              }}
              title="Quem Somos"
              aria-label="Conheça mais sobre nós"
            >
              <span>👥</span>
              {isMobile ? 'Sobre' : 'Quem Somos'}
            </a>
            </Link>
          </div>

          {/* Linha Divisa Estilizada */}
          <div style={{
            height: '1px',
            background: `linear-gradient(90deg, transparent, ${colorPalette.primary}, transparent)`,
            margin: '20px auto',
            maxWidth: '300px'
          }}></div>

          {/* Redes Sociais */}
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
                src="https://i.imgur.com/YQtV4Yk.png" 
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
              href="https://www.facebook.com" 
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
                fontStyle: 'italic',
                margin: '0 0 15px 0'
              }}>
                <strong>{localConfig.businessName}</strong> - Especialistas em café da manhã em <strong>{localConfig.city}-{localConfig.state}</strong>. 
                Padaria e café com pães frescos, bolos caseiros, salgados e cafés especiais para começar seu dia com energia.
              </p>
            </div>

            <p style={{ 
              margin: '5px 0', 
              fontSize: isMobile ? '0.8rem' : '0.85rem',
              color: colorPalette.dark
            }}>
              © {new Date().getFullYear()} {localConfig.businessName}. Todos os direitos reservados.
            </p>
            
            <p style={{ 
              margin: '5px 0', 
              fontSize: isMobile ? '0.7rem' : '0.8rem', 
              color: '#888',
              lineHeight: '1.4'
            }}>
              • Endereço: {localConfig.address} • CEP: {localConfig.cep}
            </p>
            
            <p style={{ 
              margin: '5px 0', 
              fontSize: isMobile ? '0.7rem' : '0.8rem', 
              color: '#888'
            }}>
              📞 Telefone: {localConfig.phone}
            </p>
            
            {/* HORÁRIO ATUALIZADO */}
            <p style={{ 
              margin: '5px 0', 
              fontSize: isMobile ? '0.7rem' : '0.8rem', 
              color: '#888',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              flexWrap: 'wrap'
            }}>
              <span>🕒</span>
              {localConfig.openingHours}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}