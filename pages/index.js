import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  // ========== BANNERS ========== //
  const banners = [
    { 
      id: 1,
      desktop: '/images/banner-churrasco-1.jpg',
      mobile: '/images/banner-churrasco-1.jpg',
      title: 'Kits de Churrasco Premium'
    },
    { 
      id: 2,
      desktop: '/images/banner-churrasco-2.jpg',
      mobile: '/images/banner-churrasco-2.jpg',
      title: 'Carnes Selecionadas'
    },
    { 
      id: 3,
      desktop: '/images/banner-churrasco-3.jpg',
      mobile: '/images/banner-churrasco-3.jpg',
      title: 'Tudo para Seu Churrasco'
    }
  ];

  // ========== CONFIGURAÇÃO CHURRASCO ========== //
  const localConfig = {
    businessName: "MP na Brasa",
    slogan: "Você chama a galera, a gente resolve o churrasco.",
    businessType: "Kits de Churrasco Gourmet",
    city: "Joanópolis",
    state: "SP",
    address: "Rua do Churrasco, 123 - Centro",
    cep: "12980-000",
    phone: "(11) 91357-2902",
    whatsapp: "5511913572902",
    description: "Kits completos de churrasco gourmet com carnes premium, acompanhamentos selecionados e utensílios de qualidade para um churrasco perfeito.",
    deliveryArea: "Joanópolis e região",
    openingHours: "Funcionamento: quinta a domingo | Pedidos até 10h | Entrega em até 1h após confirmação"
  };

  // ========== PALETA DE CORES GOURMET ========== //
  const colorPalette = {
    primary: '#8B0000', // Vermelho vinho
    secondary: '#2C2C2C', // Preto/cinza escuro
    accent: '#B22222', // Vermelho firebrick
    light: '#F8F8F8', // Cinza muito claro
    dark: '#1A1A1A', // Preto quase puro
    white: '#FFFFFF',
    success: '#228B22',
    text: '#333333',
    warning: '#FF8C00' // Laranja para destaques
  };

  // ========== AVALIAÇÕES CHURRASCO ========== //
  const avaliacoes = [
    // Femininas (8 avaliações)
    { 
      foto: "https://i.imgur.com/R4MCf34.png", 
      nome: "Ana", 
      texto: "O kit familiar foi perfeito para nosso churrasco em família! Carnes de ótima qualidade e tudo muito bem embalado.", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/R4MCf34.png", 
      nome: "Claudia", 
      texto: "Picanha Angus de qualidade premium! Nunca comi uma carne tão saborosa. Recomendo muito!", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/R4MCf34.png", 
      nome: "Fernanda", 
      texto: "Kit completo com tudo que precisávamos. Fizemos um churrasco para 10 pessoas e sobrou elogios!", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/R4MCf34.png", 
      nome: "Juliana", 
      texto: "Farofa especial e vinagrete premium são incríveis! Diferenciais que fazem toda a diferença no churrasco.", 
      estrelas: 4 
    },
    { 
      foto: "https://i.imgur.com/R4MCf34.png", 
      nome: "Patrícia", 
      texto: "Já é minha terceira compra. Sempre que tem visita em casa, encomendo os kits. Qualidade constante!", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/R4MCf34.png", 
      nome: "Camila", 
      texto: "Linguicinha toscana maravilhosa! Sabor autêntico que lembrou as linguiças da serra.", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/R4MCf34.png", 
      nome: "Luana", 
      texto: "Churrasqueira portátil salvou nosso fim de semana! Prática e de ótima qualidade.", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/R4MCf34.png", 
      nome: "Mariana", 
      texto: "Atendimento excelente! Me ajudaram a montar o kit perfeito para 15 pessoas. Tudo perfeito!", 
      estrelas: 5 
    },

    // Masculinas (7 avaliações)
    { 
      foto: "https://i.imgur.com/CL3oucA.png", 
      nome: "Carlos", 
      texto: "Costela bovina sensacional! Ficou macia e saborosa. Meus amigos elogiaram muito.", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/CL3oucA.png", 
      nome: "Ricardo", 
      texto: "Coração de frango no ponto perfeito! Produto de qualidade premium. Recomendo!", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/CL3oucA.png", 
      nome: "Bruno", 
      texto: "Kit facas profissional mudou meu churrasco! Facas afiadas e com ótimo acabamento.", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/CL3oucA.png", 
      nome: "Lucas", 
      texto: "Pão de alho recheado é divino! Melhor que muitos restaurantes. Pedirei sempre!", 
      estrelas: 4 
    },
    { 
      foto: "https://i.imgur.com/CL3oucA.png", 
      nome: "Marcos", 
      texto: "Combo família completo tem tudo! Não precisei me preocupar com nada, só acender a churrasqueira.", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/CL3oucA.png", 
      nome: "Gustavo", 
      texto: "Carvão premium rende muito! Queima uniforme e deixa a carne com sabor especial.", 
      estrelas: 5 
    },
    { 
      foto: "https://i.imgur.com/CL3oucA.png", 
      nome: "Rodrigo", 
      texto: "Entrega pontual e tudo muito bem embalado. Carnes chegaram geladas e frescas.", 
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
    }, 6000); // 6 segundos para cada banner
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
        <title>MP na Brasa - Kits de Churrasco Premium | Joanópolis-SP</title>
        
        {/* Meta Description Otimizada */}
        <meta name="description" content={localConfig.description} />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        
        {/* Charset */}
        <meta charSet="utf-8" />
        
        {/* ========== OPEN GRAPH (Facebook/WhatsApp) ========== */}
        <meta property="og:title" content="MP na Brasa - Kits de Churrasco Premium" />
        <meta property="og:description" content={localConfig.slogan} />
        <meta property="og:image" content="/Logo MP cafe.png" />
        <meta property="og:url" content="https://www.mpnabrasa.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MP na Brasa" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* ========== TWITTER CARD ========== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MP na Brasa - Churrasco Premium" />
        <meta name="twitter:description" content="Kits completos para um churrasco perfeito" />
        <meta name="twitter:image" content="/Logo MP cafe.png" />
        
        {/* ========== SCHEMA.ORG (Google Rich Results) ========== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FoodEstablishment",
            "name": localConfig.businessName,
            "image": "/Logo MP cafe.png",
            "description": localConfig.description,
            "url": "https://www.mpnabrasa.com",
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
            "openingHours": "Mo-Su 08:00-20:00",
            "priceRange": "$$$",
            "areaServed": localConfig.deliveryArea,
            "servesCuisine": "Brazilian Barbecue",
            "sameAs": [
              "https://www.facebook.com",
              "https://www.instagram.com"
            ]
          })}
        </script>
        
        {/* ========== KEYWORDS E OTIMIZAÇÕES EXTRAS ========== */}
        <meta name="keywords" content="churrasco, kit churrasco, picanha, costela, carne premium, barbecue, churrasqueira, MP na Brasa, Joanópolis" />
        <meta name="author" content="MP na Brasa" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.mpnabrasa.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/Logo MP cafe.png" />
        
        {/* Theme Color para Mobile */}
        <meta name="theme-color" content="#8B0000" />
        <meta name="msapplication-TileColor" content="#8B0000" />
        
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
            boxShadow: '0 2px 5px rgba(139, 0, 0, 0.2)'
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
              borderRadius: '10px',
              border: `3px solid ${colorPalette.warning}`,
              backgroundColor: colorPalette.white,
              padding: '5px'
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
            Kits completos de churrasco gourmet com carnes premium, acompanhamentos selecionados e 
            utensílios de qualidade para seu churrasco perfeito em {localConfig.city}-{localConfig.state}.
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
            boxShadow: '0 4px 12px rgba(139, 0, 0, 0.1)',
            height: `${dimensions.height}px`,
            backgroundColor: colorPalette.white,
            border: `2px solid ${colorPalette.primary}`
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
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >
                <img 
                  src={isMobile ? banner.mobile : banner.desktop}
                  alt={`Banner ${banner.title}`}
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
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '0',
                  right: '0',
                  textAlign: 'center',
                  backgroundColor: 'rgba(139, 0, 0, 0.8)',
                  color: 'white',
                  padding: '10px',
                  fontSize: isMobile ? '0.9rem' : '1.1rem',
                  fontWeight: '600'
                }}>
                  {banner.title}
                </div>
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
              boxShadow: '0 2px 5px rgba(139, 0, 0, 0.2)'
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
              boxShadow: '0 2px 5px rgba(139, 0, 0, 0.2)'
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

        {/* Seção de Apresentação */}
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
            Experiência Premium em Cada Churrasco
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
            No MP na Brasa, selecionamos as melhores carnes, desenvolvemos acompanhamentos especiais e oferecemos 
            utensílios de qualidade para transformar seu churrasco em uma experiência gourmet. Cada kit é pensado 
            para proporcionar praticidade, sabor e momentos inesquecíveis.
          </p>
          
          <p style={{
            color: colorPalette.accent,
            fontSize: isMobile ? '0.85rem' : '1rem',
            maxWidth: '600px',
            textAlign: 'center',
            lineHeight: '1.6',
            padding: isMobile ? '0 15px' : '0',
            fontWeight: '600',
            backgroundColor: colorPalette.light,
            padding: '10px 20px',
            borderRadius: '8px',
            border: `1px solid ${colorPalette.secondary}`
          }}>
            🥩 Você se preocupa em reunir os amigos, nós cuidamos de todo o resto!
          </p>
        </section>

        {/* Seção CTA Simplificada */}
        <section style={{
          textAlign: 'center',
          margin: isMobile ? '30px 0' : '50px 0',
          padding: isMobile ? '25px 15px' : '35px 20px',
          backgroundColor: colorPalette.white,
          borderRadius: '12px',
          boxShadow: '0 5px 15px rgba(139, 0, 0, 0.08)',
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
              Monte Seu Churrasco Perfeito!
            </h2>
            
            <p style={{
              color: colorPalette.text,
              fontSize: isMobile ? '1rem' : '1.1rem',
              margin: isMobile ? '0 auto 20px' : '0 auto 30px',
              lineHeight: '1.6',
              maxWidth: '95%'
            }}>
              Escolha entre nossos kits completos, carnes premium, acompanhamentos especiais ou monte seu combo personalizado!
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
              Entrega agendada em {localConfig.city} e região. Pague no ato da entrega!
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
                  boxShadow: '0 2px 8px rgba(139, 0, 0, 0.1)',
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
                boxShadow: '0 2px 6px rgba(139, 0, 0, 0.1)',
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
                boxShadow: '0 2px 6px rgba(139, 0, 0, 0.1)',
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

        {/* Rodapé Premium */}
        <footer style={{
          marginTop: isMobile ? '40px' : '60px',
          padding: isMobile ? '25px 15px' : '40px 20px',
          textAlign: 'center',
          color: '#666',
          fontSize: isMobile ? '0.8rem' : '0.85rem',
          borderTop: `2px solid ${colorPalette.primary}`,
          backgroundColor: colorPalette.light,
          borderRadius: '12px 12px 0 0',
          boxShadow: '0 -2px 10px rgba(139, 0, 0, 0.1)'
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
                e.target.style.boxShadow = '0 4px 8px rgba(139, 0, 0, 0.2)';
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
                e.target.style.boxShadow = '0 4px 8px rgba(139, 0, 0, 0.2)';
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
                e.target.style.boxShadow = '0 4px 8px rgba(139, 0, 0, 0.2)';
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
                e.target.style.boxShadow = '0 4px 8px rgba(139, 0, 0, 0.2)';
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
                <strong>{localConfig.businessName}</strong> - Especialistas em churrasco gourmet em <strong>{localConfig.city}-{localConfig.state}</strong>. 
                Kits completos com carnes selecionadas, acompanhamentos premium e tudo que você precisa para um churrasco perfeito.
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
