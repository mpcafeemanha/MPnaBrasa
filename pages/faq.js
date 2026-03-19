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

  // Configuração local CHURRASCO
  const localConfig = {
    businessName: "MP na Brasa",
    slogan: "Você chama a galera, a gente resolve o churrasco.",
    city: "Joanópolis",
    state: "SP",
    phone: "(11) 96918-0048",
    whatsapp: "5511969180048",
    address: "Rua do Churrasco, 123 - Centro",
    cep: "12980-000",
    openingHours: "Funcionamento: quinta a domingo | Pedidos até 10h | Entrega em até 1h após confirmação"
  };

  // Paleta de cores GOURMET
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

  // Criar arrays separados para o schema (texto puro) e para o display (com JSX)
  const faqsForSchema = [
    {
      pergunta: "Quais regiões o MP na Brasa atende?",
      resposta: "Atendemos toda a cidade de Joanópolis e região metropolitana. Entrega agendada para seu churrasco perfeito!"
    },
    {
      pergunta: "Qual o prazo de entrega dos kits de churrasco?",
      resposta: "Entregamos com agendamento prévio. Recomendamos encomendar com 24h de antecedência para garantir disponibilidade e qualidade."
    },
    {
      pergunta: "O MP na Brasa trabalha com quais tipos de produtos?",
      resposta: "Somos especializados em kits de churrasco gourmet: carnes premium (picanha, costela, linguiças), acompanhamentos especiais, utensílios e kits completos para diferentes tamanhos de eventos."
    },
    {
      pergunta: "Qual o valor mínimo para pedido?",
      resposta: "Trabalhamos com pedidos a partir de R$ 80,00 para entrega em Joanópolis. Entrega grátis"
    },
    {
      pergunta: "Como faço para fazer um pedido?",
      resposta: "Acesse nossa página de produtos em /mp, escolha os kits ou itens, adicione ao carrinho e finalize o pedido. É rápido e fácil!"
    },
    {
      pergunta: "Aceitam quais formas de pagamento?",
      resposta: "Trabalhamos com pagamento à vista: cartão de crédito/débito, dinheiro ou PIX. Pague no ato da entrega, não aceitamos pagamento antecipado."
    },
    {
      pergunta: "As carnes são de qualidade premium?",
      resposta: "Sim! Trabalhamos apenas com carnes selecionadas, provenientes de fornecedores certificados. Qualidade e procedência garantidas!"
    },
    {
      pergunta: "Fazem kits para empresas e eventos?",
      resposta: "Sim! Especializados em churrascos corporativos. Montamos kits especiais para empresas, reuniões, festas e eventos em Joanópolis."
    },
    {
      pergunta: "Quais são os horários de funcionamento?",
      resposta: "Atendemos com encomendas até 24h antes do evento. Entrega agendada conforme disponibilidade."
    },
    {
      pergunta: "Como posso entrar em contato?",
      resposta: `Você pode entrar em contato pelo WhatsApp ${localConfig.phone} ou acessar nossa página de produtos para fazer pedidos diretamente.`
    }
  ];

  // Array para display com JSX (botões, links, etc.)
  const faqsForDisplay = [
    {
      pergunta: "Quais regiões o MP na Brasa atende?",
      resposta: "Atendemos toda a cidade de Joanópolis e região metropolitana. Entrega agendada para seu churrasco perfeito!"
    },
    {
      pergunta: "Qual o prazo de entrega dos kits de churrasco?",
      resposta: "Entregamos com agendamento prévio. Recomendamos encomendar com 24h de antecedência para garantir disponibilidade e qualidade."
    },
    {
      pergunta: "O MP na Brasa trabalha com quais tipos de produtos?",
      resposta: (
        <div>
          <p>Somos especializados em kits de churrasco gourmet: carnes premium (picanha, costela, linguiças), acompanhamentos especiais, utensílios e kits completos para diferentes tamanhos de eventos.</p>
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
                🥩 Ver todos os kits disponíveis →
              </a>
            </Link>
          </div>
        </div>
      )
    },
    {
      pergunta: "Qual o valor mínimo para pedido?",
      resposta: "Trabalhamos com pedidos a partir de R$ 80,00 para entrega em Joanópolis. Entrega grátis"
    },
    {
      pergunta: "Como faço para fazer um pedido?",
      resposta: (
        <div>
          <p>Acesse nossa página de produtos em /mp, escolha os kits ou itens, adicione ao carrinho e finalize o pedido. É rápido e fácil!</p>
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
                🔥 Montar meu kit agora →
              </a>
            </Link>
            
            <a 
              href={`https://wa.me/${localConfig.whatsapp}?text=Olá! Gostaria de fazer um pedido no MP na Brasa.`} 
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
      resposta: "Trabalhamos com pagamento à vista: cartão de crédito/débito, dinheiro ou PIX. Pague no ato da entrega, não aceitamos pagamento antecipado."
    },
    {
      pergunta: "As carnes são de qualidade premium?",
      resposta: "Sim! Trabalhamos apenas com carnes selecionadas, provenientes de fornecedores certificados. Qualidade e procedência garantidas!"
    },
    {
      pergunta: "Fazem kits para empresas e eventos?",
      resposta: "Sim! Especializados em churrascos corporativos. Montamos kits especiais para empresas, reuniões, festas e eventos em Joanópolis. Entre em contato para orçamento personalizado."
    },
    {
      pergunta: "Quais são os horários de funcionamento?",
      resposta: "Atendemos com encomendas até 24h antes do evento. Entrega agendada conforme disponibilidade."
    },
    {
      pergunta: "Posso personalizar meu kit de churrasco?",
      resposta: "Sim! Oferecemos opções de personalização dos kits. Entre em contato pelo WhatsApp para montarmos o kit perfeito para sua ocasião."
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
                🥩 Ver kits disponíveis
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
        <title>Perguntas Frequentes - MP na Brasa | Kits de Churrasco em Joanópolis-SP</title>
        <meta name="description" content="Tire suas dúvidas sobre o MP na Brasa. Kits de churrasco gourmet, entregas em Joanópolis, prazos, produtos, formas de pagamento e mais. Churrasco premium." />
        <meta name="keywords" content="MP na Brasa dúvidas, perguntas frequentes churrasco Joanópolis, kit churrasco delivery, entrega carnes premium, churrasqueira Joanópolis SP" />
        <meta property="og:title" content="Perguntas Frequentes - MP na Brasa | Kits de Churrasco Premium" />
        <meta property="og:description" content="Tire suas dúvidas sobre o MP na Brasa. Kits de churrasco gourmet com entrega em Joanópolis-SP." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mpnabrasa.com/faq" />
        <meta property="og:image" content="/Logo MP cafe.png" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://www.mpnabrasa.com/faq" />
        
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
        minHeight: '100vh',
        fontFamily: "'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif"
      }}>
        {/* Cabeçalho com Logo */}
        <div style={{ 
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          {/* LOGO SEM BORDA E SEM FUNDO BRANCO */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: isMobile ? '200px' : '250px',
            height: isMobile ? '80px' : '100px',
            margin: '0 auto 15px auto'
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
            {localConfig.slogan}
          </p>
          <p style={{ 
            fontSize: isMobile ? '14px' : '16px',
            color: colorPalette.accent,
            maxWidth: '600px',
            margin: '10px auto 0 auto',
            fontStyle: 'italic'
          }}>
            Tire suas dúvidas sobre nossos kits de churrasco gourmet
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
                backgroundColor: colorPalette.white,
                boxShadow: '0 2px 8px rgba(139, 0, 0, 0.05)'
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
                  {index + 1}. {faq.pergunta}
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

        {/* CTA Section */}
        <div style={{
          backgroundColor: colorPalette.white,
          padding: '30px',
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '40px',
          border: `1px solid ${colorPalette.secondary}`,
          boxShadow: '0 4px 15px rgba(139, 0, 0, 0.08)'
        }}>
          <h2 style={{
            color: colorPalette.primary,
            fontSize: isMobile ? '20px' : '24px',
            marginBottom: '15px',
            fontWeight: '600'
          }}>
            Não encontrou sua dúvida?
          </h2>
          <p style={{
            color: colorPalette.text,
            fontSize: isMobile ? '15px' : '16px',
            marginBottom: '25px',
            lineHeight: '1.6'
          }}>
            Entre em contato diretamente conosco! Estamos aqui para ajudar a montar o churrasco perfeito para você.
          </p>
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
                color: colorPalette.white,
                backgroundColor: colorPalette.primary,
                textAlign: 'center',
                fontSize: '16px',
                fontWeight: '600',
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
                🔥 Ver Kits de Churrasco
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
                color: 'white',
                backgroundColor: '#25D366',
                textAlign: 'center',
                fontSize: '16px',
                fontWeight: '600',
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
                💬 Falar no WhatsApp
              </a>
          </div>
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
          borderRadius: '12px',
          boxShadow: '0 -2px 10px rgba(139, 0, 0, 0.1)'
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
                fontSize: isMobile ? '13px' : '14px',
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
                fontSize: isMobile ? '13px' : '14px',
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
                fontSize: isMobile ? '13px' : '14px',
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
                fontSize: isMobile ? '13px' : '14px',
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
              <strong>{localConfig.businessName}</strong> - Especialistas em churrasco gourmet em <strong>{localConfig.city}-{localConfig.state}</strong>. 
              Kits completos com carnes selecionadas, acompanhamentos premium e tudo que você precisa para um churrasco perfeito.
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
