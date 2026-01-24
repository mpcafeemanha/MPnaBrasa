import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function QuemSomos() {
  const [isMobile, setIsMobile] = useState(false);
  
  // Detectar tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Paleta de cores do MP Café
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

  const localConfig = {
    businessName: "MP Café & Manhã",
    address: "Rua Capitão Antônio Mathias, 720 - Centro",
    city: "Joanópolis",
    state: "SP",
    cep: "12980-000",
    phone: "(11) 91357-2902",
    whatsapp: "5511913572902",
    email: "mpcafeemanha@gmail.com"
  };

  return (
    <>
      <Head>
        <title>Quem Somos - MP Café & Manhã | Padaria e Café em Joanópolis-SP</title>
        <meta 
          name="description" 
          content="Conheça o MP Café & Manhã. Especialistas em café da manhã em Joanópolis-SP. Pães frescos, bolos caseiros, salgados e cafés especiais." 
        />
        <meta 
          name="keywords" 
          content="MP Café & Manhã, quem somos, padaria Joanópolis, café Joanópolis, história MP Café, padaria SP, café da manhã Joanópolis" 
        />
        <meta property="og:title" content="Quem Somos - MP Café & Manhã" />
        <meta 
          property="og:description" 
          content="Conheça a história do MP Café & Manhã. Especialistas em café da manhã em Joanópolis-SP." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mpcafemanha.com/quem-somos" />
        <meta property="og:image" content="/Logo MP cafe.png" />
        <meta property="og:site_name" content="MP Café & Manhã" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mpcafemanha.com/quem-somos" />
        
        {/* Schema.org para LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              "name": "MP Café & Manhã",
              "image": "/Logo MP cafe.png",
              "description": "Padaria e café especializada em café da manhã em Joanópolis-SP. Pães frescos, bolos caseiros, salgados e cafés especiais.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": localConfig.address,
                "postalCode": localConfig.cep,
                "addressLocality": localConfig.city,
                "addressRegion": localConfig.state,
                "addressCountry": "BR"
              },
              "telephone": `+55-11-91357-2902`,
              "email": localConfig.email,
              "priceRange": "$$",
              "openingHours": "Mo-Su 06:00-18:00",
              "paymentAccepted": ["Cartão de Crédito", "Cartão de Débito", "Dinheiro", "PIX"],
              "areaServed": {
                "@type": "City",
                "name": "Joanópolis",
                "description": "Padaria e café especializado em Joanópolis-SP"
              },
              "sameAs": [
                "https://mpcafemanha.com"
              ]
            })
          }}
        />
      </Head>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '15px' : '30px',
        minHeight: '100vh',
        fontFamily: "'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
        backgroundColor: colorPalette.light,
        position: 'relative'
      }}>
        {/* Cabeçalho */}
        <header style={{ 
          marginBottom: isMobile ? '30px' : '40px', 
          textAlign: 'center',
          position: 'relative'
        }}>
          <Link href="/" style={{ display: 'inline-block' }}>
            <img 
              src="/Logo MP cafe.png" 
              alt="Logo MP Café & Manhã - Padaria e Café em Joanópolis-SP" 
              style={{ 
                width: isMobile ? '120px' : '150px',
                marginBottom: '20px',
                cursor: 'pointer',
                borderRadius: '10px'
              }} 
            />
          </Link>
          <h1 style={{ 
            color: colorPalette.primary, 
            fontSize: isMobile ? '1.8rem' : '2.5rem',
            marginBottom: '15px',
            fontWeight: '700'
          }}>
            Conheça o MP Café & Manhã
          </h1>
          <p style={{ 
            color: colorPalette.text, 
            fontSize: isMobile ? '1rem' : '1.1rem',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Especialistas em café da manhã em {localConfig.city}-{localConfig.state}. Pães frescos, bolos caseiros, salgados e cafés especiais para começar seu dia com energia.
          </p>
        </header>

        {/* Container Principal com Layout Responsivo */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '30px' : '40px',
          marginBottom: '50px'
        }}>
          
          {/* Coluna Esquerda: Conteúdo Principal */}
          <div style={{
            flex: isMobile ? 'none' : 2,
            backgroundColor: colorPalette.white,
            borderRadius: '10px',
            padding: isMobile ? '20px' : '30px',
            boxShadow: '0 2px 10px rgba(139, 69, 19, 0.05)',
            width: '100%',
            border: `1px solid ${colorPalette.secondary}`
          }}>
            {/* Seção Nossa História */}
            <section style={{ marginBottom: '30px' }}>
              <h2 style={{ 
                color: colorPalette.primary, 
                fontSize: isMobile ? '1.3rem' : '1.5rem',
                marginBottom: '15px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>🏪</span> Nossa História
              </h2>
              <p style={{ 
                color: colorPalette.text, 
                lineHeight: '1.6',
                marginBottom: '15px',
                fontSize: isMobile ? '0.95rem' : '1rem'
              }}>
                O <strong>MP Café & Manhã</strong> nasceu da paixão por <strong>café da manhã de qualidade</strong> e do desejo de oferecer aos moradores de <strong>{localConfig.city}</strong> uma experiência única ao começar o dia.
              </p>
              <p style={{ 
                color: colorPalette.text, 
                lineHeight: '1.6',
                marginBottom: '15px',
                fontSize: isMobile ? '0.95rem' : '1rem'
              }}>
                Inspirados nas tradicionais padarias e cafés que fazem parte do cotidiano brasileiro, criamos um espaço onde cada produto é preparado com cuidado, ingredientes selecionados e muito carinho.
              </p>
              <div style={{
                backgroundColor: colorPalette.light,
                padding: '20px',
                borderRadius: '8px',
                marginTop: '15px',
                border: `1px solid ${colorPalette.secondary}`
              }}>
                <p style={{ 
                  color: colorPalette.dark, 
                  lineHeight: '1.6',
                  fontSize: isMobile ? '0.9rem' : '0.95rem',
                  fontStyle: 'italic'
                }}>
                  "Acreditamos que um bom café da manhã não apenas alimenta o corpo, mas também alimenta a alma e prepara o dia para novas conquistas."
                </p>
              </div>
            </section>

            {/* Seção Nossa Missão */}
            <section style={{ marginBottom: '30px' }}>
              <h2 style={{ 
                color: colorPalette.primary, 
                fontSize: isMobile ? '1.3rem' : '1.5rem',
                marginBottom: '15px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>🎯</span> Nossa Missão
              </h2>
              <p style={{ 
                color: colorPalette.text, 
                lineHeight: '1.6',
                marginBottom: '15px',
                fontSize: isMobile ? '0.95rem' : '1rem'
              }}>
                Transformar o café da manhã em um momento especial para nossos clientes, oferecendo produtos frescos, saborosos e preparados com ingredientes de qualidade.
              </p>
              <p style={{ 
                color: colorPalette.text, 
                lineHeight: '1.6',
                marginBottom: '15px',
                fontSize: isMobile ? '0.95rem' : '1rem'
              }}>
                Queremos ser a primeira escolha quando você pensar em <strong>pão fresco</strong>, <strong>bolo caseiro</strong>, <strong>café especial</strong> ou <strong>salgados deliciosos</strong> em {localConfig.city}.
              </p>
            </section>

            {/* Seção Nossos Valores */}
            <section style={{ marginBottom: '30px' }}>
              <h2 style={{ 
                color: colorPalette.primary, 
                fontSize: isMobile ? '1.3rem' : '1.5rem',
                marginBottom: '15px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>⭐</span> Nossos Valores
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: '15px',
                marginTop: '15px'
              }}>
                {/* Valor 1 */}
                <div style={{
                  backgroundColor: '#fff8e1',
                  padding: '15px',
                  borderRadius: '8px',
                  border: `1px solid ${colorPalette.secondary}`
                }}>
                  <h3 style={{
                    color: colorPalette.primary,
                    fontSize: isMobile ? '1rem' : '1.1rem',
                    marginBottom: '8px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span>🥖</span> Qualidade
                  </h3>
                  <p style={{
                    color: colorPalette.text,
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    lineHeight: '1.5'
                  }}>
                    Utilizamos apenas ingredientes selecionados e seguimos rigorosos padrões de preparo.
                  </p>
                </div>

                {/* Valor 2 */}
                <div style={{
                  backgroundColor: '#e8f5e9',
                  padding: '15px',
                  borderRadius: '8px',
                  border: `1px solid ${colorPalette.secondary}`
                }}>
                  <h3 style={{
                    color: colorPalette.primary,
                    fontSize: isMobile ? '1rem' : '1.1rem',
                    marginBottom: '8px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span>❤️</span> Frescor
                  </h3>
                  <p style={{
                    color: colorPalette.text,
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    lineHeight: '1.5'
                  }}>
                    Todos os produtos são preparados diariamente para garantir máximo sabor e qualidade.
                  </p>
                </div>

                {/* Valor 3 */}
                <div style={{
                  backgroundColor: '#e3f2fd',
                  padding: '15px',
                  borderRadius: '8px',
                  border: `1px solid ${colorPalette.secondary}`
                }}>
                  <h3 style={{
                    color: colorPalette.primary,
                    fontSize: isMobile ? '1rem' : '1.1rem',
                    marginBottom: '8px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span>🤝</span> Atendimento
                  </h3>
                  <p style={{
                    color: colorPalette.text,
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    lineHeight: '1.5'
                  }}>
                    Tratamos cada cliente com respeito, atenção e cuidado que merecem.
                  </p>
                </div>

                {/* Valor 4 */}
                <div style={{
                  backgroundColor: '#f3e5f5',
                  padding: '15px',
                  borderRadius: '8px',
                  border: `1px solid ${colorPalette.secondary}`
                }}>
                  <h3 style={{
                    color: colorPalette.primary,
                    fontSize: isMobile ? '1rem' : '1.1rem',
                    marginBottom: '8px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span>🏙️</span> Comunidade
                  </h3>
                  <p style={{
                    color: colorPalette.text,
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    lineHeight: '1.5'
                  }}>
                    Fazemos parte da comunidade de {localConfig.city} e valorizamos cada cliente local.
                  </p>
                </div>
              </div>
            </section>

            {/* Seção Nossos Produtos */}
            <section style={{ marginBottom: '30px' }}>
              <h2 style={{ 
                color: colorPalette.primary, 
                fontSize: isMobile ? '1.3rem' : '1.5rem',
                marginBottom: '15px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>🍞</span> Nossos Produtos
              </h2>
              <p style={{ 
                color: colorPalette.text, 
                lineHeight: '1.6',
                marginBottom: '15px',
                fontSize: isMobile ? '0.95rem' : '1rem'
              }}>
                Especializamo-nos em tudo o que torna o café da manhã especial:
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                gap: '15px',
                marginTop: '15px'
              }}>
                {/* Produto 1 */}
                <div style={{
                  textAlign: 'center',
                  padding: '15px',
                  backgroundColor: colorPalette.light,
                  borderRadius: '8px',
                  border: `1px solid ${colorPalette.secondary}`
                }}>
                  <div style={{
                    fontSize: '2rem',
                    marginBottom: '10px',
                    color: colorPalette.primary
                  }}>
                    🥖
                  </div>
                  <h3 style={{
                    color: colorPalette.primary,
                    fontSize: isMobile ? '1rem' : '1.1rem',
                    marginBottom: '5px',
                    fontWeight: '600'
                  }}>
                    Pães Frescos
                  </h3>
                  <p style={{
                    color: colorPalette.text,
                    fontSize: isMobile ? '0.8rem' : '0.85rem'
                  }}>
                    Francês, de forma, integral e especialidades
                  </p>
                </div>

                {/* Produto 2 */}
                <div style={{
                  textAlign: 'center',
                  padding: '15px',
                  backgroundColor: colorPalette.light,
                  borderRadius: '8px',
                  border: `1px solid ${colorPalette.secondary}`
                }}>
                  <div style={{
                    fontSize: '2rem',
                    marginBottom: '10px',
                    color: colorPalette.primary
                  }}>
                    🍰
                  </div>
                  <h3 style={{
                    color: colorPalette.primary,
                    fontSize: isMobile ? '1rem' : '1.1rem',
                    marginBottom: '5px',
                    fontWeight: '600'
                  }}>
                    Bolos Caseiros
                  </h3>
                  <p style={{
                    color: colorPalette.text,
                    fontSize: isMobile ? '0.8rem' : '0.85rem'
                  }}>
                    Fubá, cenoura, chocolate e sabores especiais
                  </p>
                </div>

                {/* Produto 3 */}
                <div style={{
                  textAlign: 'center',
                  padding: '15px',
                  backgroundColor: colorPalette.light,
                  borderRadius: '8px',
                  border: `1px solid ${colorPalette.secondary}`
                }}>
                  <div style={{
                    fontSize: '2rem',
                    marginBottom: '10px',
                    color: colorPalette.primary
                  }}>
                    ☕
                  </div>
                  <h3 style={{
                    color: colorPalette.primary,
                    fontSize: isMobile ? '1rem' : '1.1rem',
                    marginBottom: '5px',
                    fontWeight: '600'
                  }}>
                    Cafés Especiais
                  </h3>
                  <p style={{
                    color: colorPalette.text,
                    fontSize: isMobile ? '0.8rem' : '0.85rem'
                  }}>
                    Grãos selecionados e preparo cuidadoso
                  </p>
                </div>
              </div>
            </section>

            {/* Seção Serviço de Entrega */}
            <section>
              <h2 style={{ 
                color: colorPalette.primary, 
                fontSize: isMobile ? '1.3rem' : '1.5rem',
                marginBottom: '15px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>🚚</span> Serviço de Entrega
              </h2>
              <p style={{ 
                color: colorPalette.text, 
                lineHeight: '1.6',
                marginBottom: '15px',
                fontSize: isMobile ? '0.95rem' : '1rem'
              }}>
                Entendemos que muitas vezes você quer aproveitar um café da manhã especial sem sair de casa. Por isso, oferecemos <strong>entrega rápida e eficiente</strong> em toda a região de <strong>{localConfig.city}</strong>.
              </p>
              <div style={{
                backgroundColor: '#e8f5e9',
                padding: '20px',
                borderRadius: '8px',
                marginTop: '15px',
                border: `1px solid #a5d6a7`
              }}>
                <h3 style={{
                  color: colorPalette.success,
                  fontSize: isMobile ? '1.1rem' : '1.2rem',
                  marginBottom: '10px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span>⚡</span> Entrega Rápida
                </h3>
                <p style={{
                  color: colorPalette.dark,
                  fontSize: isMobile ? '0.9rem' : '0.95rem',
                  lineHeight: '1.5'
                }}>
                  Seu pedido sai direto da nossa padaria para sua casa, garantindo produtos frescos e quentinhos.
                </p>
              </div>
            </section>
          </div>

          {/* Coluna Direita: Informações Adicionais */}
          <div style={{
            flex: isMobile ? 'none' : 1,
            backgroundColor: colorPalette.white,
            borderRadius: '10px',
            padding: isMobile ? '20px' : '30px',
            boxShadow: '0 2px 10px rgba(139, 69, 19, 0.05)',
            width: '100%',
            border: `1px solid ${colorPalette.secondary}`
          }}>
            {/* Destaque */}
            <div style={{
              backgroundColor: colorPalette.primary,
              color: colorPalette.white,
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '25px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: isMobile ? '2rem' : '2.5rem',
                marginBottom: '10px'
              }}>
                ☕
              </div>
              <h3 style={{
                fontSize: isMobile ? '1.1rem' : '1.3rem',
                marginBottom: '10px',
                fontWeight: '600'
              }}>
                Especialistas em Café da Manhã
              </h3>
              <p style={{
                fontSize: isMobile ? '0.85rem' : '0.9rem',
                opacity: '0.9'
              }}>
                Desde o primeiro pão até o último gole de café
              </p>
            </div>

            {/* Informações de Contato */}
            <div style={{ marginBottom: '25px' }}>
              <h3 style={{ 
                color: colorPalette.primary, 
                fontSize: isMobile ? '1.1rem' : '1.3rem',
                marginBottom: '15px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>📍</span> Nossa Localização
              </h3>
              <div style={{
                backgroundColor: colorPalette.light,
                padding: '15px',
                borderRadius: '8px',
                borderLeft: `4px solid ${colorPalette.primary}`
              }}>
                <p style={{ 
                  color: colorPalette.dark, 
                  marginBottom: '8px',
                  fontWeight: '500',
                  fontSize: isMobile ? '0.9rem' : '1rem'
                }}>
                  <strong>{localConfig.businessName}</strong>
                </p>
                <p style={{ 
                  color: colorPalette.text, 
                  fontSize: isMobile ? '0.85rem' : '0.9rem',
                  marginBottom: '12px',
                  lineHeight: '1.5'
                }}>
                  {localConfig.address}<br />
                  {localConfig.city}-{localConfig.state}<br />
                  CEP: {localConfig.cep}
                </p>
                
                <p style={{ 
                  color: colorPalette.dark, 
                  marginTop: '15px',
                  fontWeight: '500',
                  fontSize: isMobile ? '0.9rem' : '1rem'
                }}>
                  🕐 Horário de Funcionamento:
                </p>
                <p style={{ 
                  color: colorPalette.text, 
                  fontSize: isMobile ? '0.85rem' : '0.9rem',
                  marginBottom: '12px'
                }}>
                 quinta a domingo | Pedidos até 10h | Entrega em até 1h após confirmação<br />
                </p>
              </div>
            </div>

            {/* Área de Entrega */}
            <div style={{ marginBottom: '25px' }}>
              <h3 style={{ 
                color: colorPalette.primary, 
                fontSize: isMobile ? '1.1rem' : '1.3rem',
                marginBottom: '15px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>🚚</span> Área de Entrega
              </h3>
              <div style={{
                backgroundColor: colorPalette.light,
                padding: '15px',
                borderRadius: '8px',
                border: `1px solid ${colorPalette.secondary}`
              }}>
                <p style={{ 
                  color: colorPalette.dark, 
                  marginBottom: '10px',
                  fontWeight: '500',
                  fontSize: isMobile ? '0.9rem' : '1rem'
                }}>
                  Atendemos:
                </p>
                <ul style={{
                  color: colorPalette.text,
                  paddingLeft: '20px',
                  fontSize: isMobile ? '0.85rem' : '0.9rem',
                  lineHeight: '1.5'
                }}>
                  <li style={{ marginBottom: '5px' }}>Joanópolis - Centro</li>
                  <li style={{ marginBottom: '5px' }}>Joanópolis - Bairros</li>
                  <li style={{ marginBottom: '5px' }}>Região de Joanópolis</li>
                  <li>Entregas rápidas e seguras</li>
                </ul>
              </div>
            </div>

            {/* Contato Rápido */}
            <div style={{
              backgroundColor: colorPalette.light,
              padding: '20px',
              borderRadius: '8px',
              border: `1px solid ${colorPalette.secondary}`
            }}>
              <h3 style={{ 
                color: colorPalette.primary, 
                fontSize: isMobile ? '1.1rem' : '1.3rem',
                marginBottom: '15px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>💬</span> Fale Conosco
              </h3>
              
              <div style={{ marginBottom: '15px' }}>
                <p style={{ 
                  color: colorPalette.dark, 
                  marginBottom: '5px',
                  fontWeight: '500',
                  fontSize: isMobile ? '0.9rem' : '1rem'
                }}>
                  📞 WhatsApp e Telefone:
                </p>
                <a 
                  href={`https://wa.me/${localConfig.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    color: colorPalette.primary,
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: isMobile ? '1rem' : '1.1rem'
                  }}
                >
                  {localConfig.phone}
                </a>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <p style={{ 
                  color: colorPalette.dark, 
                  marginBottom: '5px',
                  fontWeight: '500',
                  fontSize: isMobile ? '0.9rem' : '1rem'
                }}>
                  ✉️ E-mail:
                </p>
                <a 
                  href={`mailto:${localConfig.email}`}
                  style={{
                    color: colorPalette.primary,
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: isMobile ? '0.9rem' : '1rem'
                  }}
                >
                  {localConfig.email}
                </a>
              </div>
              
              <button
                onClick={() => window.open(`https://wa.me/${localConfig.whatsapp}`, '_blank')}
                style={{
                  width: '100%',
                  marginTop: '15px',
                  padding: isMobile ? '10px' : '12px',
                  backgroundColor: colorPalette.primary,
                  color: colorPalette.white,
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: isMobile ? '0.9rem' : '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = colorPalette.accent}
                onMouseOut={(e) => e.target.style.backgroundColor = colorPalette.primary}
              >
                <span>💬</span> Pedir pelo WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* SEO Text Oculto (apenas para Google) */}
        <div style={{
          opacity: '0',
          height: '0',
          overflow: 'hidden',
          position: 'absolute'
        }}>
          <h1>MP Café & Manhã - Quem Somos</h1>
          <h2>História do MP Café & Manhã Padaria e Café em Joanópolis-SP</h2>
          <p>
            MP Café & Manhã é uma padaria e café especializada em café da manhã em Joanópolis-SP. 
            Localizada na Rua Capitão Antônio Mathias, 720 - Centro, oferecemos pães frescos, bolos caseiros, 
            salgados e cafés especiais para começar o dia com energia.
          </p>
          <p>
            Nosso estabelecimento nasceu da paixão por café da manhã de qualidade e do desejo de oferecer 
            aos moradores de Joanópolis uma experiência única ao começar o dia. Inspirados nas tradicionais 
            padarias brasileiras, cada produto é preparado com cuidado, ingredientes selecionados e muito carinho.
          </p>
          <h3>Produtos do MP Café & Manhã</h3>
          <p>
            Especializamo-nos em tudo o que torna o café da manhã especial: pães frescos (francês, de forma, integral), 
            bolos caseiros (fubá, cenoura, chocolate), cafés especiais (grãos selecionados), salgados recheados, 
            sucos naturais e muito mais.
          </p>
          <h3>Serviço de Entrega MP Café</h3>
          <p>
            Oferecemos entrega rápida e eficiente em toda a região de Joanópolis-SP. Seu pedido sai direto da nossa 
            padaria para sua casa, garantindo produtos frescos e quentinhos.
          </p>
          <h3>Valores MP Café & Manhã</h3>
          <p>
            Trabalhamos com qualidade, frescor, atendimento personalizado e compromisso com a comunidade de Joanópolis. 
            Valorizamos cada cliente local e buscamos transformar o café da manhã em um momento especial.
          </p>
          <h3>Localização MP Café Joanópolis</h3>
          <p>
            Estamos localizados no centro de Joanópolis-SP, com fácil acesso e estacionamento. Atendemos de segunda a 
            domingo, das 6h às 18h, prontos para servir o melhor café da manhã da região.
          </p>
        </div>

        {/* Rodapé */}
        <footer style={{
          marginTop: isMobile ? '40px' : '50px',
          textAlign: 'center',
          color: colorPalette.text,
          fontSize: isMobile ? '0.8rem' : '0.85rem',
          padding: '20px 0',
          borderTop: `1px solid ${colorPalette.secondary}`
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: isMobile ? '10px' : '15px',
            marginBottom: '15px'
          }}>
            <Link 
              href="/termos" 
              style={{ 
                color: colorPalette.primary, 
                textDecoration: 'none',
                fontWeight: '500',
                padding: '5px 10px',
                borderRadius: '5px',
                transition: 'all 0.3s',
                fontSize: isMobile ? '0.85rem' : '0.9rem',
                border: `1px solid ${colorPalette.secondary}`,
                backgroundColor: colorPalette.white
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = colorPalette.primary;
                e.target.style.color = colorPalette.white;
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = colorPalette.white;
                e.target.style.color = colorPalette.primary;
              }}
            >
              Termos de Uso
            </Link>
            
            <Link 
              href="/politica-de-privacidade"
              style={{ 
                color: colorPalette.primary, 
                textDecoration: 'none',
                fontWeight: '500',
                padding: '5px 10px',
                borderRadius: '5px',
                transition: 'all 0.3s',
                fontSize: isMobile ? '0.85rem' : '0.9rem',
                border: `1px solid ${colorPalette.secondary}`,
                backgroundColor: colorPalette.white
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = colorPalette.primary;
                e.target.style.color = colorPalette.white;
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = colorPalette.white;
                e.target.style.color = colorPalette.primary;
              }}
            >
              Política de Privacidade
            </Link>
            
            <Link 
              href="/politica-devolucao-e-reembolso"
              style={{ 
                color: colorPalette.primary, 
                textDecoration: 'none',
                fontWeight: '500',
                padding: '5px 10px',
                borderRadius: '5px',
                transition: 'all 0.3s',
                fontSize: isMobile ? '0.85rem' : '0.9rem',
                border: `1px solid ${colorPalette.secondary}`,
                backgroundColor: colorPalette.white
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = colorPalette.primary;
                e.target.style.color = colorPalette.white;
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = colorPalette.white;
                e.target.style.color = colorPalette.primary;
              }}
            >
              Política de Devolução
            </Link>
            
            <Link 
              href="/quem-somos"
              style={{ 
                color: colorPalette.white, 
                textDecoration: 'none',
                fontWeight: '500',
                padding: '5px 10px',
                borderRadius: '5px',
                transition: 'all 0.3s',
                fontSize: isMobile ? '0.85rem' : '0.9rem',
                backgroundColor: colorPalette.primary,
                border: `1px solid ${colorPalette.primary}`
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = colorPalette.accent;
                e.target.style.borderColor = colorPalette.accent;
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = colorPalette.primary;
                e.target.style.borderColor = colorPalette.primary;
              }}
            >
              Quem Somos
            </Link>
            
            <Link 
              href="/"
              style={{ 
                color: colorPalette.primary, 
                textDecoration: 'none',
                fontWeight: '500',
                padding: '5px 10px',
                borderRadius: '5px',
                transition: 'all 0.3s',
                fontSize: isMobile ? '0.85rem' : '0.9rem',
                border: `1px solid ${colorPalette.secondary}`,
                backgroundColor: colorPalette.white
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = colorPalette.primary;
                e.target.style.color = colorPalette.white;
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = colorPalette.white;
                e.target.style.color = colorPalette.primary;
              }}
            >
              Voltar ao Início
            </Link>
          </div>
          
          <p style={{ 
            marginTop: '15px', 
            color: colorPalette.dark,
            fontSize: isMobile ? '0.75rem' : '0.8rem'
          }}>
            © {new Date().getFullYear()} MP Café & Manhã. Todos os direitos reservados.<br />
            {localConfig.address} • {localConfig.city}-{localConfig.state} • CEP: {localConfig.cep}
          </p>
        </footer>
      </div>
    </>
  );
}