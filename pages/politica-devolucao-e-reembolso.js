import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PoliticaDevolucao() {
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

  // Paleta de cores do MP na Brasa
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

  const localConfig = {
    businessName: "MP na Brasa",
    slogan: "Você chama a galera, a gente resolve o churrasco.",
    address: "Rua Capitão Antonio Mathias , 720 - Centro",
    city: "Joanópolis",
    state: "SP",
    cep: "12980-000",
    phone: "(11) 96918-0048",
    email: "mpcafeemanha@gmail.com",
    whatsapp: "5511913572902",
    openingHours: "Funcionamento: quinta a domingo | Pedidos até 10h | Entrega em até 1h após confirmação"
  };

  return (
    <>
      <Head>
        <title>Política de Devolução e Reembolso - MP na Brasa | Kits de Churrasco Joanópolis</title>
        <meta 
          name="description" 
          content="Política de Devolução e Reembolso do MP na Brasa. Saiba como proceder em caso de produtos com defeito, entrega incorreta ou problemas com kits de churrasco." 
        />
        <meta 
          name="keywords" 
          content="política devolução MP na Brasa, reembolso kits churrasco, troca carnes premium, garantia churrasco, devolução carnes Joanópolis" 
        />
        <meta property="og:title" content="Política de Devolução e Reembolso - MP na Brasa" />
        <meta 
          property="og:description" 
          content="Conheça nossa política de devolução e reembolso para garantir sua satisfação total com nossos kits de churrasco gourmet." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mpnabrasa.com/politica-devolucao-e-reembolso" />
        <meta property="og:image" content="/Logo MP cafe.png" />
        <meta property="og:site_name" content="MP na Brasa" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mpnabrasa.com/politica-devolucao-e-reembolso" />
        
        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Política de Devolução e Reembolso - MP na Brasa",
              "description": "Política de devolução, troca e reembolso de kits de churrasco do MP na Brasa",
              "publisher": {
                "@type": "Organization",
                "name": "MP na Brasa",
                "logo": {
                  "@type": "ImageObject",
                  "url": "/Logo MP cafe.png"
                }
              },
              "mainEntity": {
                "@type": "ReturnPolicy",
                "name": "Política de Devolução e Reembolso",
                "applicableCountry": "BR",
                "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                "merchantReturnDays": 1,
                "returnMethod": "https://schema.org/ReturnInStore",
                "returnFees": "https://schema.org/FreeReturn",
                "customerRemorseReturnFees": "https://schema.org/FreeReturn",
                "returnPolicySeasonalOverride": "Devolução apenas no ato da entrega"
              }
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
            {/* LOGO SEM BORDA E SEM FUNDO BRANCO */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: isMobile ? '150px' : '200px',
              height: isMobile ? '60px' : '80px',
              margin: '0 auto 20px auto'
            }}>
              <img 
                src="/Logo MP cafe.png" 
                alt={`Logo ${localConfig.businessName} - Kits de Churrasco Gourmet`} 
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block'
                }} 
              />
            </div>
          </Link>
          <h1 style={{ 
            color: colorPalette.primary, 
            fontSize: isMobile ? '1.8rem' : '2.5rem',
            marginBottom: '10px',
            fontWeight: '700'
          }}>
            Política de Devolução e Reembolso
          </h1>
          <p style={{ 
            color: colorPalette.dark, 
            fontSize: isMobile ? '1rem' : '1.1rem',
            maxWidth: '800px',
            margin: '0 auto 10px auto',
            lineHeight: '1.6',
            fontStyle: 'italic'
          }}>
            {localConfig.slogan}
          </p>
          <p style={{ 
            color: colorPalette.text, 
            fontSize: isMobile ? '0.9rem' : '1rem',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Nossa prioridade é sua total satisfação com nossos kits de churrasco gourmet
          </p>
        </header>

        {/* Container Principal */}
        <div style={{
          backgroundColor: colorPalette.white,
          borderRadius: '10px',
          padding: isMobile ? '20px' : '30px',
          boxShadow: '0 2px 10px rgba(139, 0, 0, 0.05)',
          marginBottom: '50px',
          border: `1px solid ${colorPalette.secondary}`
        }}>
          {/* Aviso Importante */}
          <div style={{
            backgroundColor: '#fff8e1',
            borderLeft: `4px solid ${colorPalette.accent}`,
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '30px'
          }}>
            <h3 style={{ 
              color: colorPalette.dark, 
              fontSize: isMobile ? '1.1rem' : '1.2rem',
              marginBottom: '10px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span>⚠️</span> Atenção Importante
            </h3>
            <p style={{ 
              color: colorPalette.dark, 
              lineHeight: '1.6',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Por se tratar de produtos alimentícios <strong>perecíveis</strong> e de <strong>alta qualidade</strong>, nossa política de devolução segue normas específicas de segurança alimentar. As devoluções devem ser realizadas <strong>imediatamente no ato da entrega</strong>.
            </p>
          </div>

          {/* Seção 1 */}
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
              <span>✅</span> 1. Quando Você Pode Solicitar Devolução
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Aceitamos devoluções nas seguintes situações:
            </p>
            <ul style={{ 
              color: colorPalette.text,
              paddingLeft: '20px',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              <li style={{ marginBottom: '8px' }}>
                <strong>Qualidade comprometida:</strong> carnes com aspecto não apropriado, cor alterada ou odor estranho
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Temperatura inadequada:</strong> produtos que chegam fora da temperatura ideal de conservação
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Entrega incorreta:</strong> kit ou item diferente do solicitado
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Quantidade errada:</strong> falta ou excesso de itens no kit
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Prazo de validade:</strong> produto próximo ou fora do prazo de validade
              </li>
            </ul>
          </section>

          {/* Seção 2 */}
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
              <span>❌</span> 2. Quando Não Aceitamos Devolução
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Por questões de segurança alimentar, <strong>não aceitamos devoluções</strong> nos seguintes casos:
            </p>
            <ul style={{ 
              color: colorPalette.text,
              paddingLeft: '20px',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              <li style={{ marginBottom: '8px' }}>Carnes já temperadas, preparadas ou parcialmente consumidas</li>
              <li style={{ marginBottom: '8px' }}>Produtos que foram congelados e descongelados após a entrega</li>
              <li style={{ marginBottom: '8px' }}>Embalagens abertas ou violadas</li>
              <li style={{ marginBottom: '8px' }}>Mudança de ideia após a entrega do kit</li>
              <li style={{ marginBottom: '8px' }}>Produtos armazenados incorretamente após a entrega (fora da refrigeração adequada)</li>
              <li style={{ marginBottom: '8px' }}>Prazo de validade vencido por mau armazenamento do cliente</li>
            </ul>
          </section>

          {/* Seção 3 */}
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
              <span>⏰</span> 3. Prazo para Devolução
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              <strong>IMPORTANTE:</strong> Devido à natureza perecível dos nossos produtos premium, as devoluções devem ser solicitadas:
            </p>
            <div style={{
              backgroundColor: colorPalette.light,
              padding: '20px',
              borderRadius: '8px',
              marginTop: '15px',
              border: `1px solid ${colorPalette.secondary}`,
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: isMobile ? '2rem' : '2.5rem',
                marginBottom: '10px',
                color: colorPalette.primary
              }}>
                🕐
              </div>
              <h3 style={{
                color: colorPalette.primary,
                fontSize: isMobile ? '1.2rem' : '1.4rem',
                marginBottom: '10px',
                fontWeight: '600'
              }}>
                No Ato da Entrega
              </h3>
              <p style={{
                color: colorPalette.text,
                fontSize: isMobile ? '0.9rem' : '1rem',
                marginBottom: '10px'
              }}>
                Verifique o kit <strong>imediatamente ao receber</strong>. Avalie:
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '15px',
                marginTop: '10px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>🥩</div>
                  <div style={{ fontSize: '0.85rem' }}>Qualidade das carnes</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>🌡️</div>
                  <div style={{ fontSize: '0.85rem' }}>Temperatura</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>📦</div>
                  <div style={{ fontSize: '0.85rem' }}>Itens do kit</div>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 4 */}
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
              <span>🔄</span> 4. Processo de Devolução
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Se identificar qualquer problema com seu kit de churrasco:
            </p>
            <ol style={{ 
              color: colorPalette.text,
              paddingLeft: '20px',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              <li style={{ marginBottom: '12px' }}>
                <strong>Não assine o comprovante de entrega</strong>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Comunique imediatamente ao entregador</strong> sobre o problema específico
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Tire fotos</strong> do produto para documentação
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>O entregador entrará em contato</strong> conosco para verificar a situação
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Providenciaremos a troca</strong> do kit ou o estorno do valor
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Assine o comprovante</strong> apenas após a resolução completa
              </li>
            </ol>
          </section>

          {/* Seção 5 */}
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
              <span>💳</span> 5. Reembolsos
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Caso seja necessário realizar um reembolso:
            </p>
            <div style={{
              backgroundColor: '#f0f9f0',
              padding: '20px',
              borderRadius: '8px',
              marginTop: '15px',
              border: `1px solid ${colorPalette.success}`
            }}>
              <h3 style={{
                color: colorPalette.success,
                fontSize: isMobile ? '1.1rem' : '1.2rem',
                marginBottom: '15px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>💰</span> Formas de Reembolso
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                gap: '15px',
                marginBottom: '15px'
              }}>
                <div style={{
                  backgroundColor: colorPalette.white,
                  padding: '15px',
                  borderRadius: '6px',
                  textAlign: 'center',
                  border: `1px solid ${colorPalette.secondary}`
                }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '8px', color: colorPalette.success }}>💸</div>
                  <h4 style={{ margin: '0 0 5px 0', color: colorPalette.dark }}>PIX</h4>
                  <p style={{ margin: '0', fontSize: '0.85rem' }}>Reembolso em até 24 horas úteis</p>
                </div>
                <div style={{
                  backgroundColor: colorPalette.white,
                  padding: '15px',
                  borderRadius: '6px',
                  textAlign: 'center',
                  border: `1px solid ${colorPalette.secondary}`
                }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '8px', color: colorPalette.success }}>💳</div>
                  <h4 style={{ margin: '0 0 5px 0', color: colorPalette.dark }}>Cartão de crédito</h4>
                  <p style={{ margin: '0', fontSize: '0.85rem' }}>Estorno em até 7 dias úteis</p>
                </div>
                <div style={{
                  backgroundColor: colorPalette.white,
                  padding: '15px',
                  borderRadius: '6px',
                  textAlign: 'center',
                  border: `1px solid ${colorPalette.secondary}`
                }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '8px', color: colorPalette.success }}>💵</div>
                  <h4 style={{ margin: '0 0 5px 0', color: colorPalette.dark }}>Dinheiro</h4>
                  <p style={{ margin: '0', fontSize: '0.85rem' }}>Devolução imediata no ato da entrega</p>
                </div>
              </div>
              <p style={{ 
                color: colorPalette.text, 
                fontSize: '0.9rem',
                fontStyle: 'italic',
                textAlign: 'center',
                margin: '10px 0 0 0'
              }}>
                O prazo do reembolso pode variar de acordo com a instituição financeira.
              </p>
            </div>
          </section>

          {/* Seção 6 */}
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
              <span>📦</span> 6. Produtos Danificados no Transporte
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Caso o kit de churrasco chegue danificado devido ao transporte:
            </p>
            <ul style={{ 
              color: colorPalette.text,
              paddingLeft: '20px',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              <li style={{ marginBottom: '8px' }}>Recuse a entrega imediatamente</li>
              <li style={{ marginBottom: '8px' }}>Documente com fotos claras do problema</li>
              <li style={{ marginBottom: '8px' }}>Entre em contato conosco pelo WhatsApp para reagendamento</li>
              <li style={{ marginBottom: '8px' }}>Enviaremos um novo kit sem custo adicional</li>
              <li style={{ marginBottom: '8px' }}>Para eventos, garantimos entrega emergencial se necessário</li>
            </ul>
          </section>

          {/* Seção 7 */}
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
              <span>📞</span> 7. Contato e Suporte
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Para questões sobre devoluções, reembolsos ou problemas com kits de churrasco:
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
                marginBottom: '15px',
                fontWeight: '500',
                fontSize: isMobile ? '0.95rem' : '1rem'
              }}>
                <strong>Atendimento ao Cliente {localConfig.businessName}</strong>
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ color: colorPalette.primary, fontSize: '1.2rem' }}>📱</span>
                <a 
                  href={`https://wa.me/${localConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: colorPalette.primary,
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: isMobile ? '0.95rem' : '1rem'
                  }}
                >
                  WhatsApp: {localConfig.phone}
                </a>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ color: colorPalette.primary, fontSize: '1.2rem' }}>📞</span>
                <span style={{ color: colorPalette.text, fontSize: isMobile ? '0.95rem' : '1rem' }}>
                  Telefone: {localConfig.phone}
                </span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: colorPalette.primary, fontSize: '1.2rem' }}>✉️</span>
                <a 
                  href={`mailto:${localConfig.email}`}
                  style={{
                    color: colorPalette.primary,
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: isMobile ? '0.95rem' : '1rem'
                  }}
                >
                  E-mail: {localConfig.email}
                </a>
              </div>

              <p style={{ 
                color: colorPalette.text, 
                marginTop: '15px',
                fontSize: isMobile ? '0.9rem' : '0.95rem',
                fontStyle: 'italic'
              }}>
                ⚡ <strong>Para urgências em eventos:</strong> Priorizamos atendimento imediato via WhatsApp.
              </p>
              
              <button
                onClick={() => window.open(`https://wa.me/${localConfig.whatsapp}`, '_blank')}
                style={{
                  width: '100%',
                  marginTop: '15px',
                  padding: isMobile ? '12px' : '14px',
                  backgroundColor: colorPalette.primary,
                  color: colorPalette.white,
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = colorPalette.accent}
                onMouseOut={(e) => e.target.style.backgroundColor = colorPalette.primary}
              >
                <span>💬</span> Falar com Atendimento Agora
              </button>
            </div>
          </section>

          {/* Seção 8 */}
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
              <span>⚖️</span> 8. Direitos do Consumidor
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Esta política está de acordo com o <strong>Código de Defesa do Consumidor (Lei 8.078/90)</strong> e as normas de segurança alimentar da Vigilância Sanitária para produtos cárneos.
            </p>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Em caso de dúvidas sobre seus direitos, consulte o <a href="https://www.gov.br/procon" target="_blank" rel="noopener noreferrer" style={{ color: colorPalette.primary, fontWeight: '500' }}>PROCON</a>, a <a href="https://www.gov.br/anvisa" target="_blank" rel="noopener noreferrer" style={{ color: colorPalette.primary, fontWeight: '500' }}>ANVISA</a> ou o <a href="https://www.gov.br/agricultura" target="_blank" rel="noopener noreferrer" style={{ color: colorPalette.primary, fontWeight: '500' }}>Ministério da Agricultura</a>.
            </p>
            <div style={{
              backgroundColor: '#e8f4f8',
              padding: '15px',
              borderRadius: '8px',
              marginTop: '20px',
              border: '1px solid #87CEEB'
            }}>
              <p style={{ 
                color: colorPalette.dark, 
                margin: 0,
                fontSize: isMobile ? '0.85rem' : '0.9rem',
                fontStyle: 'italic',
                textAlign: 'center'
              }}>
                🔥 <strong>Compromisso {localConfig.businessName}:</strong> Garantimos qualidade premium em todos os nossos kits e estamos comprometidos com sua satisfação total no churrasco.
              </p>
            </div>
          </section>
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
            marginBottom: '20px'
          }}>
            <Link 
              href="/termos" 
              style={{ 
                color: colorPalette.primary, 
                textDecoration: 'none',
                fontWeight: '500',
                padding: '8px 12px',
                borderRadius: '6px',
                transition: 'all 0.3s',
                fontSize: isMobile ? '0.85rem' : '0.9rem',
                border: `1px solid ${colorPalette.secondary}`,
                backgroundColor: colorPalette.white,
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
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
              📄 Termos de Uso
            </Link>
            
            <Link 
              href="/politica-de-privacidade"
              style={{ 
                color: colorPalette.white, 
                textDecoration: 'none',
                fontWeight: '500',
                padding: '8px 12px',
                borderRadius: '6px',
                transition: 'all 0.3s',
                fontSize: isMobile ? '0.85rem' : '0.9rem',
                backgroundColor: colorPalette.primary,
                border: `1px solid ${colorPalette.primary}`,
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
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
              🔒 Política de Privacidade
            </Link>
            
            <Link 
              href="/politica-devolucao-e-reembolso"
              style={{ 
                color: colorPalette.primary, 
                textDecoration: 'none',
                fontWeight: '500',
                padding: '8px 12px',
                borderRadius: '6px',
                transition: 'all 0.3s',
                fontSize: isMobile ? '0.85rem' : '0.9rem',
                border: `1px solid ${colorPalette.secondary}`,
                backgroundColor: colorPalette.white,
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
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
              🔄 Política de Devolução
            </Link>
            
            <Link 
              href="/quem-somos"
              style={{ 
                color: colorPalette.primary, 
                textDecoration: 'none',
                fontWeight: '500',
                padding: '8px 12px',
                borderRadius: '6px',
                transition: 'all 0.3s',
                fontSize: isMobile ? '0.85rem' : '0.9rem',
                border: `1px solid ${colorPalette.secondary}`,
                backgroundColor: colorPalette.white,
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
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
              👥 Quem Somos
            </Link>
            
            <Link 
              href="/faq"
              style={{ 
                color: colorPalette.primary, 
                textDecoration: 'none',
                fontWeight: '500',
                padding: '8px 12px',
                borderRadius: '6px',
                transition: 'all 0.3s',
                fontSize: isMobile ? '0.85rem' : '0.9rem',
                border: `1px solid ${colorPalette.secondary}`,
                backgroundColor: colorPalette.white,
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
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
              ❓ Perguntas Frequentes
            </Link>
            
            <Link 
              href="/"
              style={{ 
                color: colorPalette.primary, 
                textDecoration: 'none',
                fontWeight: '500',
                padding: '8px 12px',
                borderRadius: '6px',
                transition: 'all 0.3s',
                fontSize: isMobile ? '0.85rem' : '0.9rem',
                border: `1px solid ${colorPalette.secondary}`,
                backgroundColor: colorPalette.white,
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
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
              🏠 Voltar ao Início
            </Link>
          </div>
          
          <div style={{
            marginTop: '15px', 
            color: colorPalette.dark,
            fontSize: isMobile ? '0.75rem' : '0.8rem',
            lineHeight: '1.6'
          }}>
            <p style={{ margin: '0 0 5px 0' }}>
              © {new Date().getFullYear()} <strong>{localConfig.businessName}</strong>. Todos os direitos reservados.
            </p>
            <p style={{ margin: '0 0 5px 0' }}>
              {localConfig.address} • {localConfig.city}-{localConfig.state} • CEP: {localConfig.cep}
            </p>
            <p style={{ margin: '0 0 5px 0' }}>
              📞 {localConfig.phone} • 🕐 {localConfig.openingHours}
            </p>
            <p style={{ 
              margin: '10px 0 0 0',
              fontSize: isMobile ? '0.7rem' : '0.75rem',
              color: '#666',
              fontStyle: 'italic'
            }}>
              Kits de Churrasco Gourmet • Qualidade Premium • Entrega Agendada
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
