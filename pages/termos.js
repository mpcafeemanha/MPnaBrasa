import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function TermosUso() {
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
        <title>Termos de Uso - MP Café & Manhã | Padaria Joanópolis-SP</title>
        <meta 
          name="description" 
          content="Termos de Uso do MP Café & Manhã. Conheça as regras e condições para utilização do nosso site e serviços de padaria em Joanópolis." 
        />
        <meta 
          name="keywords" 
          content="termos de uso MP Café, condições uso site, regras padaria online, MP Café & Manhã termos, site padaria Joanópolis" 
        />
        <meta property="og:title" content="Termos de Uso - MP Café & Manhã" />
        <meta 
          property="og:description" 
          content="Leia os termos e condições para utilização do site e serviços do MP Café & Manhã." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mpcafemanha.com/termos" />
        <meta property="og:image" content="/Logo MP cafe.png" />
        <meta property="og:site_name" content="MP Café & Manhã" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mpcafemanha.com/termos" />
        
        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Termos de Uso - MP Café & Manhã",
              "description": "Termos e condições de uso do site e serviços do MP Café & Manhã",
              "publisher": {
                "@type": "Organization",
                "name": "MP Café & Manhã",
                "logo": {
                  "@type": "ImageObject",
                  "url": "/Logo MP cafe.png"
                }
              },
              "mainEntity": {
                "@type": "TermsAndConditions",
                "name": "Termos de Uso",
                "url": "https://mpcafemanha.com/termos"
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
            Termos de Uso
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
          {/* Introdução */}
          <section style={{ marginBottom: '30px' }}>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Bem-vindo ao <strong>MP Café & Manhã</strong>! Estes Termos de Uso regulam o acesso e utilização de nosso site, aplicativo e serviços relacionados. Ao utilizar nossos serviços, você concorda com estes termos.
            </p>
            <div style={{
              backgroundColor: colorPalette.light,
              padding: '15px',
              borderRadius: '8px',
              borderLeft: `4px solid ${colorPalette.primary}`,
              marginTop: '15px'
            }}>
              <p style={{ 
                color: colorPalette.dark, 
                lineHeight: '1.6',
                fontSize: isMobile ? '0.9rem' : '0.95rem',
                fontWeight: '500'
              }}>
                ⚠️ <strong>Importante:</strong> Estes termos constituem um contrato legal entre você e o MP Café & Manhã. Recomendamos que leia atentamente.
              </p>
            </div>
          </section>

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
              <span>📋</span> 1. Definições
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Para efeito destes Termos:
            </p>
            <ul style={{ 
              color: colorPalette.text,
              paddingLeft: '20px',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              <li style={{ marginBottom: '8px' }}>
                <strong>"Site" ou "Plataforma":</strong> Refere-se ao website mpcafemanha.com e aplicativos relacionados
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>"Serviços":</strong> Inclui pedidos online, entrega, atendimento e produtos oferecidos
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>"Usuário" ou "Cliente":</strong> Qualquer pessoa que utilize nossos serviços
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>"Produtos":</strong> Itens alimentícios disponíveis para venda em nossa plataforma
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>"Área de Entrega":</strong> Região de Joanópolis e arredores onde realizamos entregas
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
              <span>👤</span> 2. Cadastro e Conta do Usuário
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Para realizar pedidos, você precisará criar uma conta fornecendo informações verdadeiras e atualizadas:
            </p>
            <ul style={{ 
              color: colorPalette.text,
              paddingLeft: '20px',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              <li style={{ marginBottom: '8px' }}>Nome completo</li>
              <li style={{ marginBottom: '8px' }}>Endereço de entrega válido</li>
              <li style={{ marginBottom: '8px' }}>Número de telefone ativo</li>
              <li style={{ marginBottom: '8px' }}>E-mail válido</li>
            </ul>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Você é responsável por manter a confidencialidade de sua conta e por todas as atividades realizadas através dela.
            </p>
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
              <span>🛒</span> 3. Pedidos e Pagamentos
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Ao realizar um pedido, você concorda com as seguintes condições:
            </p>
            <ul style={{ 
              color: colorPalette.text,
              paddingLeft: '20px',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              <li style={{ marginBottom: '8px' }}>
                <strong>Preços:</strong> Podem sofrer alterações sem aviso prévio. O preço válido é o exibido no momento do pedido
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Disponibilidade:</strong> Produtos estão sujeitos à disponibilidade em estoque
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Pagamento:</strong> Aceitamos PIX, cartão de crédito/débito e dinheiro na entrega
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Confirmação:</strong> O pedido só é considerado confirmado após nossa confirmação
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Entrega:</strong> Prazos são estimativas e podem variar conforme condições de trânsito
              </li>
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
              <span>🚚</span> 4. Entrega e Recebimento
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Condições para entrega de produtos:
            </p>
            <div style={{
              backgroundColor: '#e8f4f8',
              padding: '20px',
              borderRadius: '8px',
              marginTop: '15px',
              border: `1px solid #b3e0ff`
            }}>
              <h3 style={{
                color: colorPalette.primary,
                fontSize: isMobile ? '1.1rem' : '1.2rem',
                marginBottom: '10px',
                fontWeight: '600'
              }}>
                Responsabilidades do Cliente na Entrega
              </h3>
              <ul style={{
                color: colorPalette.text,
                paddingLeft: '20px',
                fontSize: isMobile ? '0.95rem' : '1rem'
              }}>
                <li style={{ marginBottom: '8px' }}>Fornecer endereço correto e completo</li>
                <li style={{ marginBottom: '8px' }}>Estar disponível no horário combinado</li>
                <li style={{ marginBottom: '8px' }}>Verificar produtos antes de assinar o comprovante</li>
                <li style={{ marginBottom: '8px' }}>Informar alterações de endereço com antecedência</li>
                <li style={{ marginBottom: '8px' }}>Garantir acesso ao local de entrega</li>
              </ul>
            </div>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginTop: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Caso não haja ninguém para receber a entrega no endereço fornecido, o pedido será reagendado com taxa adicional.
            </p>
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
              <span>⚖️</span> 5. Responsabilidades
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: '20px',
              marginTop: '15px'
            }}>
              {/* Responsabilidades do MP Café */}
              <div style={{
                backgroundColor: '#f0f9f0',
                padding: '20px',
                borderRadius: '8px',
                border: `1px solid ${colorPalette.success}`
              }}>
                <h3 style={{
                  color: colorPalette.success,
                  fontSize: isMobile ? '1.1rem' : '1.2rem',
                  marginBottom: '10px',
                  fontWeight: '600'
                }}>
                  Nossas Responsabilidades
                </h3>
                <ul style={{
                  color: colorPalette.text,
                  paddingLeft: '20px',
                  fontSize: isMobile ? '0.9rem' : '0.95rem'
                }}>
                  <li style={{ marginBottom: '8px' }}>Fornecer produtos de qualidade</li>
                  <li style={{ marginBottom: '8px' }}>Garantir informações corretas no site</li>
                  <li style={{ marginBottom: '8px' }}>Processar pedidos com eficiência</li>
                  <li style={{ marginBottom: '8px' }}>Manter segurança dos dados</li>
                  <li style={{ marginBottom: '8px' }}>Oferecer atendimento adequado</li>
                </ul>
              </div>

              {/* Responsabilidades do Cliente */}
              <div style={{
                backgroundColor: '#fff3e0',
                padding: '20px',
                borderRadius: '8px',
                border: `1px solid ${colorPalette.accent}`
              }}>
                <h3 style={{
                  color: colorPalette.accent,
                  fontSize: isMobile ? '1.1rem' : '1.2rem',
                  marginBottom: '10px',
                  fontWeight: '600'
                }}>
                  Suas Responsabilidades
                </h3>
                <ul style={{
                  color: colorPalette.text,
                  paddingLeft: '20px',
                  fontSize: isMobile ? '0.9rem' : '0.95rem'
                }}>
                  <li style={{ marginBottom: '8px' }}>Fornecer informações verdadeiras</li>
                  <li style={{ marginBottom: '8px' }}>Armazenar produtos adequadamente</li>
                  <li style={{ marginBottom: '8px' }}>Verificar produtos na entrega</li>
                  <li style={{ marginBottom: '8px' }}>Respeitar prazos de pagamento</li>
                  <li style={{ marginBottom: '8px' }}>Utilizar serviços conforme regras</li>
                </ul>
              </div>
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
              <span>📱</span> 6. Uso Aceitável da Plataforma
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Você concorda em não utilizar nossa plataforma para:
            </p>
            <ul style={{ 
              color: colorPalette.text,
              paddingLeft: '20px',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              <li style={{ marginBottom: '8px' }}>Realizar atividades ilegais ou fraudulentas</li>
              <li style={{ marginBottom: '8px' }}>Enviar conteúdo ofensivo ou inadequado</li>
              <li style={{ marginBottom: '8px' }}>Tentar acessar contas de outros usuários</li>
              <li style={{ marginBottom: '8px' }}>Interferir no funcionamento da plataforma</li>
              <li style={{ marginBottom: '8px' }}>Realizar pedidos falsos ou de má-fé</li>
              <li style={{ marginBottom: '8px' }}>Compartilhar informações falsas sobre produtos</li>
            </ul>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Reservamo-nos o direito de suspender ou cancelar contas que violarem estas regras.
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
              <span>🔧</span> 7. Propriedade Intelectual
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Todo o conteúdo da plataforma, incluindo logotipos, textos, imagens, design e software, são propriedade do <strong>MP Café & Manhã</strong> ou de seus licenciadores e estão protegidos por leis de propriedade intelectual.
            </p>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Você não pode reproduzir, distribuir, modificar ou criar obras derivadas sem nossa autorização prévia por escrito.
            </p>
          </section>

          {/* Seção 8 */}
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
              <span>🛡️</span> 8. Limitação de Responsabilidade
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              O <strong>MP Café & Manhã</strong> não será responsável por:
            </p>
            <ul style={{ 
              color: colorPalette.text,
              paddingLeft: '20px',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              <li style={{ marginBottom: '8px' }}>Danos decorrentes de uso inadequado dos produtos</li>
              <li style={{ marginBottom: '8px' }}>Problemas de entrega causados por informações incorretas fornecidas pelo cliente</li>
              <li style={{ marginBottom: '8px' }}>Atrasos devido a fatores externos como trânsito, clima ou eventos de força maior</li>
              <li style={{ marginBottom: '8px' }}>Alergias ou intolerâncias não informadas pelo cliente</li>
              <li style={{ marginBottom: '8px' }}>Mau armazenamento dos produtos após a entrega</li>
            </ul>
          </section>

          {/* Seção 9 */}
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
              <span>📅</span> 9. Alterações nos Termos
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no site. O uso continuado de nossos serviços após alterações constitui aceitação dos novos termos.
            </p>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Recomendamos que você revise periodicamente esta página para se manter informado sobre possíveis alterações.
            </p>
          </section>

          {/* Seção 10 */}
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
              <span>⚖️</span> 10. Legislação Aplicável
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Estes Termos são regidos pelas leis da República Federativa do Brasil. Quaisquer disputas serão resolvidas no foro da comarca de Joanópolis-SP.
            </p>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Estes Termos de Uso estão em conformidade com o <strong>Código de Defesa do Consumidor (Lei 8.078/90)</strong>.
            </p>
          </section>

          {/* Seção 11 */}
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
              <span>📞</span> 11. Contato
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Para dúvidas sobre estes Termos de Uso, entre em contato:
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
                🕒 Funcionamento: quinta a domingo | Pedidos até 10h | Entrega em até 1h após confirmação
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
            marginBottom: '15px'
          }}>
            <Link 
              href="/termos" 
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