import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PoliticaPrivacidade() {
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
    email: "mpcafeemanha@gmail.com",
    whatsapp: "5511913572902"
  };

  return (
    <>
      <Head>
        <title>Política de Privacidade - MP Café & Manhã | Padaria em Joanópolis-SP</title>
        <meta 
          name="description" 
          content="Política de Privacidade do MP Café & Manhã. Saiba como protegemos seus dados pessoais em nossa padaria e café em Joanópolis-SP." 
        />
        <meta 
          name="keywords" 
          content="política de privacidade MP Café, privacidade padaria Joanópolis, proteção de dados, segurança informações, MP Café & Manhã" 
        />
        <meta property="og:title" content="Política de Privacidade - MP Café & Manhã" />
        <meta 
          property="og:description" 
          content="Conheça nossa política de privacidade e como protegemos suas informações no MP Café & Manhã." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mpcafemanha.com/politica-de-privacidade" />
        <meta property="og:image" content="/Logo MP cafe.png" />
        <meta property="og:site_name" content="MP Café & Manhã" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mpcafemanha.com/politica-de-privacidade" />
        
        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Política de Privacidade - MP Café & Manhã",
              "description": "Política de privacidade e proteção de dados do MP Café & Manhã",
              "publisher": {
                "@type": "Organization",
                "name": "MP Café & Manhã",
                "logo": {
                  "@type": "ImageObject",
                  "url": "/Logo MP cafe.png"
                }
              },
              "mainEntity": {
                "@type": "PrivacyPolicy",
                "name": "Política de Privacidade",
                "url": "https://mpcafemanha.com/politica-de-privacidade"
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
            Política de Privacidade
          </h1>
          <p style={{ 
            color: colorPalette.text, 
            fontSize: isMobile ? '1rem' : '1.1rem',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
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
              <span>🔒</span> 1. Coleta de Informações
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              O <strong>MP Café & Manhã</strong> coleta informações pessoais quando você:
            </p>
            <ul style={{ 
              color: colorPalette.text,
              paddingLeft: '20px',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              <li style={{ marginBottom: '8px' }}>Realiza pedidos através do nosso site</li>
              <li style={{ marginBottom: '8px' }}>Entra em contato conosco via WhatsApp ou telefone</li>
              <li style={{ marginBottom: '8px' }}>Cadastra-se para receber nossas promoções</li>
              <li style={{ marginBottom: '8px' }}>Participa de nossas pesquisas de satisfação</li>
            </ul>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              As informações coletadas podem incluir: nome, telefone, endereço, e-mail e preferências de compra.
            </p>
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
              <span>🎯</span> 2. Uso das Informações
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Utilizamos suas informações pessoais para:
            </p>
            <ul style={{ 
              color: colorPalette.text,
              paddingLeft: '20px',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              <li style={{ marginBottom: '8px' }}>Processar e entregar seus pedidos</li>
              <li style={{ marginBottom: '8px' }}>Melhorar nossos produtos e serviços</li>
              <li style={{ marginBottom: '8px' }}>Enviar promoções e novidades (apenas com sua autorização)</li>
              <li style={{ marginBottom: '8px' }}>Responder suas dúvidas e solicitações</li>
              <li style={{ marginBottom: '8px' }}>Garantir a segurança das transações</li>
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
              <span>🛡️</span> 3. Proteção de Dados
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Adotamos medidas de segurança para proteger suas informações:
            </p>
            <ul style={{ 
              color: colorPalette.text,
              paddingLeft: '20px',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              <li style={{ marginBottom: '8px' }}>Acesso restrito aos dados apenas para funcionários autorizados</li>
              <li style={{ marginBottom: '8px' }}>Armazenamento seguro em servidores protegidos</li>
              <li style={{ marginBottom: '8px' }}>Criptografia em transações sensíveis</li>
              <li style={{ marginBottom: '8px' }}>Procedimentos internos de segurança da informação</li>
            </ul>
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
              <span>🔗</span> 4. Compartilhamento de Dados
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando:
            </p>
            <ul style={{ 
              color: colorPalette.text,
              paddingLeft: '20px',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              <li style={{ marginBottom: '8px' }}>Necessário para processar sua entrega (dados de endereço com entregadores)</li>
              <li style={{ marginBottom: '8px' }}>Exigido por lei ou processo judicial</li>
              <li style={{ marginBottom: '8px' }}>Para proteger direitos, propriedade ou segurança do MP Café & Manhã</li>
            </ul>
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
              <span>📝</span> 5. Seus Direitos
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              De acordo com a LGPD, você tem direito a:
            </p>
            <ul style={{ 
              color: colorPalette.text,
              paddingLeft: '20px',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              <li style={{ marginBottom: '8px' }}>Confirmar a existência de tratamento de seus dados</li>
              <li style={{ marginBottom: '8px' }}>Acessar seus dados pessoais</li>
              <li style={{ marginBottom: '8px' }}>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li style={{ marginBottom: '8px' }}>Solicitar a eliminação de dados desnecessários ou excessivos</li>
              <li style={{ marginBottom: '8px' }}>Revogar o consentimento a qualquer momento</li>
            </ul>
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
              <span>🍪</span> 6. Cookies
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Utilizamos cookies para melhorar sua experiência em nosso site. Cookies são pequenos arquivos de texto que ficam armazenados em seu dispositivo. Eles nos ajudam a:
            </p>
            <ul style={{ 
              color: colorPalette.text,
              paddingLeft: '20px',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              <li style={{ marginBottom: '8px' }}>Lembrar suas preferências</li>
              <li style={{ marginBottom: '8px' }}>Manter itens no carrinho de compras</li>
              <li style={{ marginBottom: '8px' }}>Analisar o tráfego do site</li>
              <li style={{ marginBottom: '8px' }}>Personalizar conteúdo</li>
            </ul>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
            </p>
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
              <span>📞</span> 7. Contato
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Para exercer seus direitos ou tirar dúvidas sobre nossa política de privacidade, entre em contato:
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
                <strong>MP Café & Manhã</strong>
              </p>
              <p style={{ 
                color: colorPalette.text, 
                marginBottom: '5px',
                fontSize: isMobile ? '0.9rem' : '0.95rem'
              }}>
                📍 {localConfig.address}
              </p>
              <p style={{ 
                color: colorPalette.text, 
                marginBottom: '5px',
                fontSize: isMobile ? '0.9rem' : '0.95rem'
              }}>
                📞 {localConfig.phone}
              </p>
              <p style={{ 
                color: colorPalette.text, 
                marginBottom: '5px',
                fontSize: isMobile ? '0.9rem' : '0.95rem'
              }}>
                ✉️ {localConfig.email}
              </p>
              <p style={{ 
                color: colorPalette.text, 
                fontSize: isMobile ? '0.9rem' : '0.95rem'
              }}>
                🕐 Horário de atendimento: Segunda a Domingo, 6h às 18h
              </p>
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
              <span>📅</span> 8. Alterações na Política
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente estará sempre disponível nesta página. Recomendamos que você revise esta política regularmente para se manter informado sobre como protegemos suas informações.
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