import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import useTrackUser from '../hook/useTrackUser';
import { supabase } from '../lib/supabaseClient';

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

  // ========== HOOK DE RASTREAMENTO ========== //
  useTrackUser(); // Adicione esta linha aqui!
  
  // ========== CONFIGURAÇÃO CHURRASCO ========== //
  const localConfig = {
    businessName: "MP na Brasa",
    businessType: "Kits de Churrasco Gourmet",
    city: "Joanópolis",
    state: "SP",
    address: "Rua Capitão Antonio Mathias, 720 - Centro",
    cep: "12980-000",
    phone: "(11) 96918-0048",
    whatsapp: "5511969180048",
    description: "Kits completos de churrasco gourmet com carnes premium, acompanhamentos selecionados e utensílios de qualidade para um churrasco perfeito.",
    deliveryArea: "Joanópolis e região",
    email: "mpcafeemanha@gmail.com",
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
    text: '#333333'
  };

  return (
    <>
      <Head>
        <title>Quem Somos - MP na Brasa | Kits de Churrasco Gourmet em Joanópolis-SP</title>
        <meta 
          name="description" 
          content="Conheça o MP na Brasa. Especialistas em kits de churrasco gourmet em Joanópolis-SP. Carnes premium, acompanhamentos selecionados e utensílios de qualidade." 
        />
        <meta 
          name="keywords" 
          content="MP na Brasa, quem somos, churrasco Joanópolis, kits churrasco, carnes premium, história MP na Brasa, churrasco gourmet SP, entrega churrasco Joanópolis" 
        />
        <meta property="og:title" content="Quem Somos - MP na Brasa" />
        <meta 
          property="og:description" 
          content="Conheça a história do MP na Brasa. Especialistas em kits de churrasco gourmet em Joanópolis-SP." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mpnabrasa.com/quem-somos" />
        <meta property="og:image" content="/Logo MP cafe.png" />
        <meta property="og:site_name" content="MP na Brasa" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mpnabrasa.com/quem-somos" />
        
        {/* Schema.org para FoodEstablishment */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodEstablishment",
              "name": "MP na Brasa",
              "image": "/Logo MP cafe.png",
              "description": "Especialistas em kits de churrasco gourmet em Joanópolis-SP. Carnes premium, acompanhamentos selecionados e utensílios de qualidade.",
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
              "priceRange": "$$$",
              "openingHours": "Mo-Su 08:00-20:00",
              "servesCuisine": "Brazilian Barbecue",
              "paymentAccepted": ["Cartão de Crédito", "Cartão de Débito", "Dinheiro", "PIX"],
              "areaServed": {
                "@type": "City",
                "name": "Joanópolis",
                "description": "Kits de churrasco gourmet entregues em Joanópolis e região"
              },
              "sameAs": [
                "https://mpnabrasa.com"
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
              alt={`Logo ${localConfig.businessName} - Kits de Churrasco em ${localConfig.city}-${localConfig.state}`} 
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
            Conheça o MP na Brasa
          </h1>
          <p style={{ 
            color: colorPalette.text, 
            fontSize: isMobile ? '1rem' : '1.1rem',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Especialistas em kits de churrasco gourmet em {localConfig.city}-{localConfig.state}. Você chama a galera, a gente resolve o churrasco.
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
            boxShadow: '0 2px 10px rgba(139, 0, 0, 0.05)',
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
                <span>🔥</span> Nossa História
              </h2>
              <p style={{ 
                color: colorPalette.text, 
                lineHeight: '1.6',
                marginBottom: '15px',
                fontSize: isMobile ? '0.95rem' : '1rem'
              }}>
                O <strong>{localConfig.businessName}</strong> nasceu da paixão por <strong>churrascos de qualidade</strong> e do desejo de simplificar a vida de quem adora reunir amigos e família ao redor de uma boa churrasqueira.
              </p>
              <p style={{ 
                color: colorPalette.text, 
                lineHeight: '1.6',
                marginBottom: '15px',
                fontSize: isMobile ? '0.95rem' : '1rem'
              }}>
                Percebemos que muitas pessoas amam a ideia de fazer um churrasco, mas se perdem na hora de escolher as carnes, calcular quantidades, preparar acompanhamentos e garantir que tudo saia perfeito.
              </p>
              <p style={{ 
                color: colorPalette.text, 
                lineHeight: '1.6',
                marginBottom: '15px',
                fontSize: isMobile ? '0.95rem' : '1rem'
              }}>
                Foi assim que criamos os <strong>kits completos de churrasco gourmet</strong>: tudo o que você precisa em uma única entrega, com qualidade premium e praticidade total.
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
                  "Acreditamos que um bom churrasco vai além da comida: é sobre reunir pessoas, criar memórias e compartilhar momentos especiais. Nós cuidamos de tudo, você só precisa chamar os amigos."
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
                Simplificar a experiência do churrasco, oferecendo kits completos que garantem qualidade, praticidade e resultados excepcionais.
              </p>
              <p style={{ 
                color: colorPalette.text, 
                lineHeight: '1.6',
                marginBottom: '15px',
                fontSize: isMobile ? '0.95rem' : '1rem'
              }}>
                Queremos que qualquer pessoa, mesmo sem experiência, consiga fazer um churrasco digno de churrascaria premium na comodidade de sua casa.
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
                  backgroundColor: '#ffeaea',
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
                    <span>🥩</span> Qualidade Premium
                  </h3>
                  <p style={{
                    color: colorPalette.text,
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    lineHeight: '1.5'
                  }}>
                    Selecionamos apenas as melhores carnes e ingredientes para garantir o sabor excepcional.
                  </p>
                </div>

                {/* Valor 2 */}
                <div style={{
                  backgroundColor: '#f0f0f0',
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
                    <span>⏱️</span> Praticidade
                  </h3>
                  <p style={{
                    color: colorPalette.text,
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    lineHeight: '1.5'
                  }}>
                    Tudo calculado e preparado para você: só abrir, preparar e aproveitar com os amigos.
                  </p>
                </div>

                {/* Valor 3 */}
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
                    <span>🤝</span> Atendimento Personalizado
                  </h3>
                  <p style={{
                    color: colorPalette.text,
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    lineHeight: '1.5'
                  }}>
                    Ajudamos a escolher o kit ideal e damos dicas para um churrasco perfeito.
                  </p>
                </div>

                {/* Valor 4 */}
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
                    <span>🏙️</span> Comunidade Local
                  </h3>
                  <p style={{
                    color: colorPalette.text,
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    lineHeight: '1.5'
                  }}>
                    Apoiamos produtores locais e fortalecemos a comunidade de {localConfig.city}.
                  </p>
                </div>
              </div>
            </section>

            {/* Seção Nossos Kits */}
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
                <span>📦</span> Nossos Kits
              </h2>
              <p style={{ 
                color: colorPalette.text, 
                lineHeight: '1.6',
                marginBottom: '15px',
                fontSize: isMobile ? '0.95rem' : '1rem'
              }}>
                Desenvolvemos kits pensados para diferentes ocasiões e tamanhos de grupos:
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                gap: '15px',
                marginTop: '15px'
              }}>
                {/* Kit 1 */}
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
                    👨‍👩‍👧‍👦
                  </div>
                  <h3 style={{
                    color: colorPalette.primary,
                    fontSize: isMobile ? '1rem' : '1.1rem',
                    marginBottom: '5px',
                    fontWeight: '600'
                  }}>
                    Kit Familiar
                  </h3>
                  <p style={{
                    color: colorPalette.text,
                    fontSize: isMobile ? '0.8rem' : '0.85rem'
                  }}>
                    Para 4-6 pessoas, ideal para famílias e pequenas reuniões
                  </p>
                </div>

                {/* Kit 2 */}
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
                    👥
                  </div>
                  <h3 style={{
                    color: colorPalette.primary,
                    fontSize: isMobile ? '1rem' : '1.1rem',
                    marginBottom: '5px',
                    fontWeight: '600'
                  }}>
                    Kit Premium
                  </h3>
                  <p style={{
                    color: colorPalette.text,
                    fontSize: isMobile ? '0.8rem' : '0.85rem'
                  }}>
                    Para 8-10 pessoas, perfeito para amigos e comemorações
                  </p>
                </div>

                {/* Kit 3 */}
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
                    🎉
                  </div>
                  <h3 style={{
                    color: colorPalette.primary,
                    fontSize: isMobile ? '1rem' : '1.1rem',
                    marginBottom: '5px',
                    fontWeight: '600'
                  }}>
                    Kit Mega
                  </h3>
                  <p style={{
                    color: colorPalette.text,
                    fontSize: isMobile ? '0.8rem' : '0.85rem'
                  }}>
                    Para 15-20 pessoas, ideal para festas e eventos grandes
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
                Entregamos tudo pronto na sua porta: carnes embaladas a vácuo, acompanhamentos frescos e até utensílios se necessário. <strong>Tudo refrigerado</strong> e pronto para usar.
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
                  <span>⚡</span> Entrega Expressa
                </h3>
                <p style={{
                  color: colorPalette.dark,
                  fontSize: isMobile ? '0.9rem' : '0.95rem',
                  lineHeight: '1.5'
                }}>
                  Em até 1h após confirmação do pedido. Kits chegam refrigerados e com todas as instruções.
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
            boxShadow: '0 2px 10px rgba(139, 0, 0, 0.05)',
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
                🔥
              </div>
              <h3 style={{
                fontSize: isMobile ? '1.1rem' : '1.3rem',
                marginBottom: '10px',
                fontWeight: '600'
              }}>
                Especialistas em Churrasco
              </h3>
              <p style={{
                fontSize: isMobile ? '0.85rem' : '0.9rem',
                opacity: '0.9'
              }}>
                Do planejamento à churrasqueira
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
                  Quinta a domingo<br />
                  Pedidos até 10h<br />
                  Entrega em até 1h após confirmação
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
                  <li style={{ marginBottom: '5px' }}>Joanópolis - Todos os bairros</li>
                  <li style={{ marginBottom: '5px' }}>Região de Joanópolis</li>
                  <li>Entregas rápidas e refrigeradas</li>
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
          <h1>MP na Brasa - Quem Somos</h1>
          <h2>História do MP na Brasa - Kits de Churrasco Gourmet em Joanópolis-SP</h2>
          <p>
            MP na Brasa é uma empresa especializada em kits de churrasco gourmet em Joanópolis-SP. 
            Localizada na Rua Capitão Antonio Mathias, 720 - Centro, oferecemos kits completos com 
            carnes premium, acompanhamentos selecionados e utensílios de qualidade para um churrasco perfeito.
          </p>
          <p>
            Nosso negócio nasceu da paixão por churrascos de qualidade e do desejo de simplificar a 
            vida de quem adora reunir amigos e família ao redor de uma boa churrasqueira. Desenvolvemos 
            kits pensados para diferentes ocasiões: Kit Familiar (4-6 pessoas), Kit Premium (8-10 pessoas) 
            e Kit Mega (15-20 pessoas).
          </p>
          <h3>Produtos do MP na Brasa</h3>
          <p>
            Trabalhamos com carnes premium como Picanha Angus, Costela Bovino, Linguicinha Toscana e 
            Coração de Frango. Nossos kits incluem acompanhamentos como Farofa Especial, Vinagrete Premium 
            e Pão de Alho Recheado, além de utensílios como Churrasqueiras Portáteis e Kits de Facas Profissionais.
          </p>
          <h3>Serviço de Entrega MP na Brasa</h3>
          <p>
            Oferecemos entrega expressa em até 1h após confirmação do pedido em toda a região de 
            Joanópolis-SP. Todos os kits são entregues refrigerados e com todas as instruções necessárias.
          </p>
          <h3>Valores MP na Brasa</h3>
          <p>
            Trabalhamos com qualidade premium, praticidade, atendimento personalizado e compromisso com 
            a comunidade de Joanópolis. Valorizamos cada cliente e buscamos tornar a experiência do 
            churrasco algo simples e memorável.
          </p>
          <h3>Localização MP na Brasa Joanópolis</h3>
          <p>
            Estamos localizados no centro de Joanópolis-SP. Atendemos de quinta a domingo, com pedidos 
            até 10h e entrega em até 1h após confirmação, prontos para levar o melhor churrasco gourmet 
            até sua casa.
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
            © {new Date().getFullYear()} {localConfig.businessName}. Todos os direitos reservados.<br />
            {localConfig.address} • {localConfig.city}-{localConfig.state} • CEP: {localConfig.cep}
          </p>
          <p style={{ 
            marginTop: '8px', 
            color: colorPalette.text,
            fontSize: isMobile ? '0.7rem' : '0.75rem',
            fontStyle: 'italic'
          }}>
            Você chama a galera, a gente resolve o churrasco.
          </p>
        </footer>
      </div>
    </>
  );
}
