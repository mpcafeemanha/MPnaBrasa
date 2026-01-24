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
        <title>Política de Devolução e Reembolso - MP Café & Manhã | Padaria Joanópolis</title>
        <meta 
          name="description" 
          content="Política de Devolução e Reembolso do MP Café & Manhã. Saiba como proceder em caso de produtos com defeito ou entregas incorretas." 
        />
        <meta 
          name="keywords" 
          content="política devolução MP Café, reembolso padaria Joanópolis, troca produtos, garantia MP Café, devolução alimentos" 
        />
        <meta property="og:title" content="Política de Devolução e Reembolso - MP Café & Manhã" />
        <meta 
          property="og:description" 
          content="Conheça nossa política de devolução e reembolso para garantir sua satisfação total com nossos produtos." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mpcafemanha.com/politica-devolucao-e-reembolso" />
        <meta property="og:image" content="/Logo MP cafe.png" />
        <meta property="og:site_name" content="MP Café & Manhã" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mpcafemanha.com/politica-devolucao-e-reembolso" />
        
        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Política de Devolução e Reembolso - MP Café & Manhã",
              "description": "Política de devolução, troca e reembolso de produtos do MP Café & Manhã",
              "publisher": {
                "@type": "Organization",
                "name": "MP Café & Manhã",
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
            Política de Devolução e Reembolso
          </h1>
          <p style={{ 
            color: colorPalette.text, 
            fontSize: isMobile ? '1rem' : '1.1rem',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Nossa prioridade é sua total satisfação com nossos produtos e serviços
          </p>
        </header>

        {/* Container Principal */}
        <div style={{
          backgroundColor: colorPalette.white,
          borderRadius: '10px',
          padding: isMobile ? '20px' : '30px',
          boxShadow: '0 2px 10px rgba(139, 69, 19, 0.05)',
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
              Por se tratar de produtos alimentícios <strong>perecíveis</strong>, nossa política de devolução segue normas específicas de segurança alimentar. As devoluções devem ser realizadas <strong>imediatamente no ato da entrega</strong>.
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
                <strong>Produto com defeito:</strong> pães duros, bolos secos, produtos fora do prazo de validade
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Entrega incorreta:</strong> produto diferente do solicitado
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Quantidade errada:</strong> falta ou excesso de itens na entrega
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Qualidade comprometida:</strong> produto com aspecto não apropriado para consumo
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
              <li style={{ marginBottom: '8px' }}>Produtos já abertos ou consumidos parcialmente</li>
              <li style={{ marginBottom: '8px' }}>Mudança de ideia após a entrega</li>
              <li style={{ marginBottom: '8px' }}>Produtos armazenados incorretamente após a entrega</li>
              <li style={{ marginBottom: '8px' }}>Produtos congelados que foram descongelados</li>
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
              <strong>IMPORTANTE:</strong> Devido à natureza perecível dos nossos produtos, as devoluções devem ser solicitadas:
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
                fontSize: isMobile ? '0.9rem' : '1rem'
              }}>
                Verifique os produtos <strong>antes de assinar o comprovante de entrega</strong>. Após a assinatura, não serão aceitas devoluções.
              </p>
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
              Se identificar qualquer problema com seu pedido:
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
                <strong>Comunique imediatamente ao entregador</strong> sobre o problema
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>O entregador entrará em contato</strong> conosco para verificar a situação
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Providenciaremos a troca</strong> do produto ou o estorno do valor
              </li>
              <li style={{ marginBottom: '12px' }}>
                <strong>Assine o comprovante</strong> apenas após a resolução
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
                marginBottom: '10px',
                fontWeight: '600'
              }}>
                Formas de Reembolso
              </h3>
              <ul style={{
                color: colorPalette.text,
                paddingLeft: '20px',
                fontSize: isMobile ? '0.95rem' : '1rem'
              }}>
                <li style={{ marginBottom: '8px' }}>
                  <strong>PIX:</strong> reembolso em até 24 horas úteis
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <strong>Cartão de crédito:</strong> estorno em até 7 dias úteis (prazo da operadora)
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <strong>Dinheiro:</strong> devolução imediata no ato da entrega
                </li>
              </ul>
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
              Caso o produto chegue danificado devido ao transporte:
            </p>
            <ul style={{ 
              color: colorPalette.text,
              paddingLeft: '20px',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              <li style={{ marginBottom: '8px' }}>Recuse a entrega imediatamente</li>
              <li style={{ marginBottom: '8px' }}>Tire fotos como comprovação</li>
              <li style={{ marginBottom: '8px' }}>Entre em contato conosco para reagendamento</li>
              <li style={{ marginBottom: '8px' }}>Enviaremos um novo produto sem custo adicional</li>
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
              Para questões sobre devoluções ou reembolsos, entre em contato:
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
                marginBottom: '10px',
                fontWeight: '500',
                fontSize: isMobile ? '0.95rem' : '1rem'
              }}>
                <strong>Atendimento ao Cliente</strong>
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
                <span>💬</span> Falar com Atendimento
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
              Esta política está de acordo com o <strong>Código de Defesa do Consumidor (Lei 8.078/90)</strong> e as normas de segurança alimentar da Vigilância Sanitária.
            </p>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Em caso de dúvidas sobre seus direitos, consulte o <a href="https://www.gov.br/procon" target="_blank" rel="noopener noreferrer" style={{ color: colorPalette.primary, fontWeight: '500' }}>PROCON</a> ou a <a href="https://www.gov.br/anvisa" target="_blank" rel="noopener noreferrer" style={{ color: colorPalette.primary, fontWeight: '500' }}>ANVISA</a>.
            </p>
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
              Política de Devolução
            </Link>
            
            <Link 
              href="/quem-somos"
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