import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const FAQPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Configuração local
  const localConfig = {
    businessName: "MP Café & Manhã",
    city: "Joanópolis",
    state: "SP",
    phone: "(11) 91357-2902",
    whatsapp: "5511913572902",
    address: "Rua Capitão Antônio Mathias, 720 - Centro",
    cep: "12980-000",
    openingHours: "Funcionamento: quinta a domingo | Pedidos até 10h | Entrega em até 1h após confirmação"
  };

  // Paleta de cores
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

  // Criar arrays separados para o schema (texto puro) e para o display (com JSX)
  const faqsForSchema = [
    {
      pergunta: "Quais regiões o MP Café & Manhã atende?",
      resposta: "Atendemos toda a cidade de Joanópolis e região metropolitana. Entrega rápida para seu café da manhã perfeito!"
    },
    {
      pergunta: "Qual o prazo de entrega dos produtos?",
      resposta: "Entregamos em até 1 hora após confirmação do pedido em Joanópolis. Pedidos até 10h para entrega no mesmo dia."
    },
    {
      pergunta: "O MP Café & Manhã trabalha com quais tipos de produtos?",
      resposta: "Somos especializados em café da manhã: pães frescos, bolos caseiros, salgados, cafés especiais, sucos naturais, pão de queijo, croissants e muito mais."
    },
    {
      pergunta: "Qual o valor mínimo para pedido?",
      resposta: "Trabalhamos com pedidos a partir de R$ 25,00 para entrega em Joanópolis. Entrega grátis para pedidos acima de R$ 50,00."
    },
    {
      pergunta: "Como faço para fazer um pedido?",
      resposta: "Acesse nossa página de produtos em /mp, escolha os itens, adicione ao carrinho e finalize o pedido. É rápido e fácil!"
    },
    {
      pergunta: "Aceitam quais formas de pagamento?",
      resposta: "Trabalhamos com pagamento á vista: cartão de crédito/débito, dinheiro ou PIX. Pague no ato da entrega, não aceitamos pagamento antecipado."
    },
    {
      pergunta: "Os produtos são frescos?",
      resposta: "Sim! Todos os nossos pães são assados diariamente, bolos feitos no dia e produtos sempre frescos. Qualidade garantida!"
    },
    {
      pergunta: "Fazem entregas para empresas e escritórios?",
      resposta: "Sim! Especializados em café da manhã corporativo. Montamos kits especiais para escritórios, reuniões e eventos em Joanópolis."
    },
    {
      pergunta: "Quais são os horários de funcionamento?",
      resposta: "Funcionamos de quinta a domingo, com pedidos aceitos até 10h. Entrega em até 1h após confirmação."
    },
    {
      pergunta: "Como posso entrar em contato?",
      resposta: `Você pode entrar em contato pelo WhatsApp ${localConfig.phone} ou acessar nossa página de produtos para fazer pedidos diretamente.`
    }
  ];

  // Array para display com JSX (botões, links, etc.)
  const faqsForDisplay = [
    {
      pergunta: "Quais regiões o MP Café & Manhã atende?",
      resposta: "Atendemos toda a cidade de Joanópolis e região metropolitana. Entrega rápida para seu café da manhã perfeito!"
    },
    {
      pergunta: "Qual o prazo de entrega dos produtos?",
      resposta: "Entregamos em até 1 hora após confirmação do pedido em Joanópolis. Pedidos até 10h para entrega no mesmo dia."
    },
    {
      pergunta: "O MP Café & Manhã trabalha com quais tipos de produtos?",
      resposta: (
        <div>
          <p>Somos especializados em café da manhã: pães frescos, bolos caseiros, salgados, cafés especiais, sucos naturais, pão de queijo, croissants e muito mais.</p>
          <div style={{ marginTop: '15px' }}>
            <Link href="/mp" passHref legacyBehavior>
              <a style={{
                display: 'inline-block',
                backgroundColor: colorPalette.primary,
                color: 'white',
                padding: '10px 20px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '14px',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = colorPalette.accent;
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = colorPalette.primary;
                e.target.style.transform = 'translateY(0)';
              }}>
                🥐 Ver todos os produtos disponíveis →
              </a>
            </Link>
          </div>
        </div>
      )
    },
    {
      pergunta: "Qual o valor mínimo para pedido?",
      resposta: "Trabalhamos com pedidos a partir de R$ 25,00 para entrega em Joanópolis. Entrega grátis para pedidos acima de R$ 50,00."
    },
    {
      pergunta: "Como faço para fazer um pedido?",
      resposta: (
        <div>
          <p>Acesse nossa página de produtos em /mp, escolha os itens, adicione ao carrinho e finalize o pedido. É rápido e fácil!</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '15px' }}>
            <Link href="/mp" passHref legacyBehavior>
              <a style={{
                display: 'inline-block',
                backgroundColor: colorPalette.primary,
                color: 'white',
                padding: '10px 20px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '14px',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = colorPalette.accent;
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = colorPalette.primary;
                e.target.style.transform = 'translateY(0)';
              }}>
                🛒 Fazer pedido agora →
              </a>
            </Link>
            
            <a 
              href={`https://wa.me/${localConfig.whatsapp}?text=Olá! Gostaria de fazer um pedido no MP Café & Manhã.`} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#25D366',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '14px',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#1da851';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#25D366';
                e.target.style.transform = 'translateY(0)';
              }}>
              💬 Pedir por WhatsApp
            </a>
          </div>
        </div>
      )
    },
    {
      pergunta: "Aceitam quais formas de pagamento?",
      resposta: "Trabalhamos com pagamento á vista: cartão de crédito/débito, dinheiro ou PIX. Pague no ato da entrega, não aceitamos pagamento antecipado."
    },
    {
      pergunta: "Os produtos são frescos?",
      resposta: "Sim! Todos os nossos pães são assados diariamente, bolos feitos no dia e produtos sempre frescos. Qualidade garantida!"
    },
    {
      pergunta: "Fazem entregas para empresas e escritórios?",
      resposta: "Sim! Especializados em café da manhã corporativo. Montamos kits especiais para escritórios, reuniões e eventos em Joanópolis."
    },
    {
      pergunta: "Quais são os horários de funcionamento?",
      resposta: "Funcionamos de quinta a domingo, com pedidos aceitos até 10h. Entrega em até 1h após confirmação."
    },
    {
      pergunta: "Como posso entrar em contato?",
      resposta: (
        <div>
          <p>Você pode entrar em contato pelo WhatsApp {localConfig.phone} ou acessar nossa página de produtos para fazer pedidos diretamente.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '15px' }}>
            <a 
              href={`https://wa.me/${localConfig.whatsapp}`} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#25D366',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '14px',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#1da851';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#25D366';
                e.target.style.transform = 'translateY(0)';
              }}>
              💬 WhatsApp {localConfig.phone}
            </a>
            
            <Link href="/mp" passHref legacyBehavior>
              <a style={{
                display: 'inline-block',
                backgroundColor: colorPalette.primary,
                color: 'white',
                padding: '10px 20px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '14px',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = colorPalette.accent;
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = colorPalette.primary;
                e.target.style.transform = 'translateY(0)';
              }}>
                ☕ Acessar produtos
              </a>
            </Link>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <Head>
        <title>Perguntas Frequentes - MP Café & Manhã | Padaria e Café em Joanópolis-SP</title>
        <meta name="description" content="Tire suas dúvidas sobre o MP Café & Manhã. Entregas em Joanópolis, prazos, produtos, formas de pagamento e mais. Padaria especializada em café da manhã." />
        <meta name="keywords" content="MP Café & Manhã dúvidas, perguntas frequentes padaria Joanópolis, café da manhã delivery, entrega pães frescos, padaria Joanópolis SP" />
        <meta property="og:title" content="Perguntas Frequentes - MP Café & Manhã | Padaria e Café Joanópolis" />
        <meta property="og:description" content="Tire suas dúvidas sobre o MP Café & Manhã. Padaria e café especializada em café da manhã em Joanópolis-SP." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mpcafemanha.com/faq" />
        <meta property="og:image" content="/Logo MP cafe.png" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://www.mpcafemanha.com/faq" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqsForSchema.map(faq => ({
                "@type": "Question",
                "name": faq.pergunta,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.resposta
                }
              }))
            })
          }}
        />
      </Head>

      <div style={{
        maxWidth: '800px',
        margin: '40px auto',
        padding: isMobile ? '20px' : '40px',
        backgroundColor: colorPalette.light,
        minHeight: '100vh'
      }}>
        {/* Cabeçalho com Logo */}
        <div style={{ 
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <img 
            src="/Logo MP cafe.png" 
            alt={`Logo ${localConfig.businessName} - Padaria e Café Especializado`} 
            style={{ 
              height: isMobile ? '60px' : '80px', 
              marginBottom: '15px',
              borderRadius: '10px'
            }} 
          />
          
          <h1 style={{ 
            color: colorPalette.primary, 
            fontSize: isMobile ? '28px' : '36px',
            marginBottom: '10px',
            fontWeight: '700'
          }}>
            Perguntas Frequentes
          </h1>
          <p style={{ 
            fontSize: isMobile ? '16px' : '18px',
            color: colorPalette.dark,
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Tire suas dúvidas sobre o {localConfig.businessName}
          </p>
        </div>

        {/* Lista de FAQs com Accordion */}
        <div style={{ marginBottom: '50px' }}>
          {faqsForDisplay.map((faq, index) => (
            <div 
              key={index} 
              style={{ 
                marginBottom: '10px',
                border: `1px solid ${colorPalette.secondary}`,
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: colorPalette.white
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  padding: '20px',
                  backgroundColor: openIndex === index ? colorPalette.light : colorPalette.white,
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => {
                  if (openIndex !== index) {
                    e.target.style.backgroundColor = colorPalette.light;
                  }
                }}
                onMouseOut={(e) => {
                  if (openIndex !== index) {
                    e.target.style.backgroundColor = colorPalette.white;
                  }
                }}
              >
                <span style={{ 
                  color: colorPalette.primary,
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: '600',
                  flex: 1,
                  textAlign: 'left'
                }}>
                  {faq.pergunta}
                </span>
                <span style={{
                  color: colorPalette.primary,
                  fontSize: '20px',
                  fontWeight: 'bold',
                  marginLeft: '15px',
                  transition: 'transform 0.3s ease',
                  transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>
                  ▼
                </span>
              </button>
              
              {openIndex === index && (
                <div style={{ 
                  padding: '20px',
                  backgroundColor: colorPalette.light,
                  borderTop: `1px solid ${colorPalette.secondary}`,
                  animation: 'fadeIn 0.3s ease'
                }}>
                  <div style={{ 
                    color: colorPalette.text,
                    lineHeight: '1.6',
                    fontSize: isMobile ? '15px' : '16px',
                    margin: '0'
                  }}>
                    {faq.resposta}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Backlinks Discretos */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '15px',
          marginBottom: '40px'
        }}>
          <Link href="/mp" legacyBehavior>
            <a style={{
              display: 'block',
              padding: '15px',
              borderRadius: '8px',
              textDecoration: 'none',
              color: colorPalette.primary,
              border: `1px solid ${colorPalette.primary}`,
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = colorPalette.primary;
              e.target.style.color = colorPalette.white;
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = colorPalette.white;
              e.target.style.color = colorPalette.primary;
            }}>
              ☕ Acessar Produtos
            </a>
          </Link>

          <a 
            href={`https://wa.me/${localConfig.whatsapp}`} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'block',
              padding: '15px',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#25D366',
              border: '1px solid #25D366',
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#25D366';
              e.target.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = colorPalette.white;
              e.target.style.color = '#25D366';
            }}>
            💬 Falar no WhatsApp
          </a>
        </div>

        {/* Rodapé Igual ao do Site Principal */}
        <footer style={{
          marginTop: '60px',
          paddingTop: '30px',
          borderTop: `2px solid ${colorPalette.primary}`,
          textAlign: 'center',
          color: '#666',
          fontSize: '14px',
          backgroundColor: colorPalette.white,
          padding: '20px',
          borderRadius: '12px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: '15px',
            marginBottom: '30px'
          }}>
            
            <Link href="/politica-de-privacidade" passHref legacyBehavior>
              <a style={{ 
                color: colorPalette.primary, 
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '14px',
                padding: '12px 8px',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                backgroundColor: colorPalette.light,
                border: `1px solid ${colorPalette.secondary}`
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = colorPalette.primary;
                e.target.style.color = colorPalette.white;
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = colorPalette.light;
                e.target.style.color = colorPalette.primary;
              }}>
                🔒 Privacidade
              </a>
            </Link>

            <Link href="/politica-devolucao-e-reembolso" passHref legacyBehavior>
              <a style={{ 
                color: colorPalette.primary, 
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '14px',
                padding: '12px 8px',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                backgroundColor: colorPalette.light,
                border: `1px solid ${colorPalette.secondary}`
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = colorPalette.primary;
                e.target.style.color = colorPalette.white;
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = colorPalette.light;
                e.target.style.color = colorPalette.primary;
              }}>
                🔄 Devolução
              </a>
            </Link>

            <Link href="/termos" passHref legacyBehavior>
              <a style={{ 
                color: colorPalette.primary, 
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '14px',
                padding: '12px 8px',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                backgroundColor: colorPalette.light,
                border: `1px solid ${colorPalette.secondary}`
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = colorPalette.primary;
                e.target.style.color = colorPalette.white;
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = colorPalette.light;
                e.target.style.color = colorPalette.primary;
              }}>
                📄 Termos
              </a>
            </Link>

            <Link href="/quem-somos" passHref legacyBehavior>
              <a style={{ 
                color: colorPalette.primary, 
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '14px',
                padding: '12px 8px',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                backgroundColor: colorPalette.light,
                border: `1px solid ${colorPalette.secondary}`
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = colorPalette.primary;
                e.target.style.color = colorPalette.white;
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = colorPalette.light;
                e.target.style.color = colorPalette.primary;
              }}>
                👥 Quem Somos
              </a>
            </Link>
          </div>

          {/* Informações de Contato e Copyright */}
          <div style={{ 
            textAlign: 'center',
            paddingTop: '15px',
            borderTop: `1px solid ${colorPalette.secondary}`
          }}>
            {/* TEXTO SEO */}
            <p style={{ 
              margin: '0 0 15px 0', 
              fontSize: '11px', 
              color: '#999',
              lineHeight: '1.4',
              fontStyle: 'italic',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
              padding: '0 10px'
            }}>
              <strong>{localConfig.businessName}</strong> - Especialistas em café da manhã em <strong>{localConfig.city}-{localConfig.state}</strong>. 
              Padaria e café com pães frescos, bolos caseiros, salgados e cafés especiais para começar seu dia com energia.
            </p>
            
            {/* INFORMAÇÕES DE CONTATO */}
            <p style={{ 
              margin: '8px 0', 
              fontSize: '14px',
              color: colorPalette.dark,
              lineHeight: '1.5'
            }}>
              © {new Date().getFullYear()} {localConfig.businessName}. Todos os direitos reservados.
            </p>
            <p style={{ 
              margin: '8px 0', 
              fontSize: '12px', 
              color: '#888',
              lineHeight: '1.4'
            }}>
              Endereço: {localConfig.address}
              <br />
              CEP: {localConfig.cep}
            </p>
            <p style={{ 
              margin: '8px 0', 
              fontSize: '12px', 
              color: '#888'
            }}>
              📞 Telefone: {localConfig.phone}
            </p>
            <p style={{ 
              margin: '8px 0', 
              fontSize: '12px', 
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

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @media (max-width: 768px) {
            button:hover {
              background-color: inherit !important;
            }
            a:hover {
              background-color: inherit !important;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default FAQPage;