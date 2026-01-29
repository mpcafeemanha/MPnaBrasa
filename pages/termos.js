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
    phone: "(11) 91357-2902",
    email: "mpcafeemanha@gmail.com",
    whatsapp: "5511913572902",
    openingHours: "Funcionamento: quinta a domingo | Pedidos até 10h | Entrega em até 1h após confirmação"
  };

  return (
    <>
      <Head>
        <title>Termos de Uso - MP na Brasa | Kits de Churrasco Joanópolis-SP</title>
        <meta 
          name="description" 
          content="Termos de Uso do MP na Brasa. Conheça as regras e condições para utilização do nosso site e serviços de kits de churrasco em Joanópolis." 
        />
        <meta 
          name="keywords" 
          content="termos de uso MP na Brasa, condições uso site churrasco, regras kits churrasco online, MP na Brasa termos, site churrasco Joanópolis" 
        />
        <meta property="og:title" content="Termos de Uso - MP na Brasa" />
        <meta 
          property="og:description" 
          content="Leia os termos e condições para utilização do site e serviços de kits de churrasco do MP na Brasa." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mpnabrasa.com/termos" />
        <meta property="og:image" content="/Logo MP cafe.png" />
        <meta property="og:site_name" content="MP na Brasa" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mpnabrasa.com/termos" />
        
        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Termos de Uso - MP na Brasa",
              "description": "Termos e condições de uso do site e serviços de kits de churrasco do MP na Brasa",
              "publisher": {
                "@type": "Organization",
                "name": "MP na Brasa",
                "logo": {
                  "@type": "ImageObject",
                  "url": "/Logo MP cafe.png"
                }
              },
              "mainEntity": {
                "@type": "TermsAndConditions",
                "name": "Termos de Uso",
                "url": "https://mpnabrasa.com/termos"
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
            Termos de Uso
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
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
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
          {/* Introdução */}
          <section style={{ marginBottom: '30px' }}>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Bem-vindo ao <strong>{localConfig.businessName}</strong>! Estes Termos de Uso regulam o acesso e utilização de nosso site, aplicativo e serviços relacionados de kits de churrasco gourmet. Ao utilizar nossos serviços, você concorda com estes termos.
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
                ⚠️ <strong>Importante:</strong> Estes termos constituem um contrato legal entre você e o {localConfig.businessName}. Recomendamos que leia atentamente antes de realizar qualquer pedido.
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
                <strong>"Site" ou "Plataforma":</strong> Refere-se ao website mpnabrasa.com e aplicativos relacionados
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>"Serviços":</strong> Inclui encomendas de kits de churrasco, entrega agendada, atendimento personalizado e produtos oferecidos
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>"Usuário" ou "Cliente":</strong> Qualquer pessoa que utilize nossos serviços de churrasco
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>"Kits de Churrasco":</strong> Combinações de carnes premium, acompanhamentos e utensílios disponíveis para venda
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>"Área de Entrega":</strong> Região de Joanópolis e arredores onde realizamos entregas de kits
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>"Evento":</strong> Ocasão para a qual o kit de churrasco está sendo encomendado
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
              Para realizar encomendas de kits de churrasco, você precisará fornecer informações verdadeiras e atualizadas:
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
              <li style={{ marginBottom: '8px' }}>Informações do evento (data, horário, quantidade de pessoas)</li>
            </ul>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Você é responsável por manter a confidencialidade de suas informações e por todas as atividades realizadas através de sua conta.
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
              <span>🛒</span> 3. Encomendas e Pagamentos
            </h2>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Ao realizar uma encomenda de kit de churrasco, você concorda com as seguintes condições:
            </p>
            <ul style={{ 
              color: colorPalette.text,
              paddingLeft: '20px',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              <li style={{ marginBottom: '8px' }}>
                <strong>Preços:</strong> Podem sofrer alterações sem aviso prévio. O preço válido é o exibido no momento da encomenda
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Disponibilidade:</strong> Kits estão sujeitos à disponibilidade de carnes premium e produtos selecionados
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Pagamento:</strong> Aceitamos PIX, cartão de crédito/débito e dinheiro na entrega
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Confirmação:</strong> A encomenda só é considerada confirmada após nossa confirmação e agendamento
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Agendamento:</strong> Recomendamos encomendar com 24h de antecedência para eventos
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Personalização:</strong> Kits podem ser personalizados mediante consulta prévia
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
              Condições para entrega de kits de churrasco:
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
                <li style={{ marginBottom: '8px' }}>Fornecer endereço correto e completo para entrega</li>
                <li style={{ marginBottom: '8px' }}>Estar disponível no horário agendado para recebimento</li>
                <li style={{ marginBottom: '8px' }}>Verificar temperatura e qualidade das carnes na chegada</li>
                <li style={{ marginBottom: '8px' }}>Disponibilizar refrigerador para armazenamento imediato</li>
                <li style={{ marginBottom: '8px' }}>Informar alterações de data/horário com antecedência mínima de 12h</li>
                <li style={{ marginBottom: '8px' }}>Garantir acesso adequado para entrega do kit</li>
              </ul>
            </div>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              marginTop: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Caso não haja ninguém para receber a entrega no horário agendado, o kit poderá ser deixado em local seguro mediante autorização prévia, considerando as condições de temperatura.
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
              {/* Responsabilidades do MP na Brasa */}
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
                  <li style={{ marginBottom: '8px' }}>Fornecer carnes premium de qualidade certificada</li>
                  <li style={{ marginBottom: '8px' }}>Garantir entrega no horário agendado</li>
                  <li style={{ marginBottom: '8px' }}>Manter temperatura adequada durante transporte</li>
                  <li style={{ marginBottom: '8px' }}>Oferecer kits completos conforme descrição</li>
                  <li style={{ marginBottom: '8px' }}>Manter segurança e privacidade dos dados</li>
                  <li style={{ marginBottom: '8px' }}>Fornecer atendimento especializado em churrasco</li>
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
                  <li style={{ marginBottom: '8px' }}>Fornecer informações verdadeiras sobre o evento</li>
                  <li style={{ marginBottom: '8px' }}>Armazenar carnes adequadamente após entrega</li>
                  <li style={{ marginBottom: '8px' }}>Verificar produtos imediatamente na chegada</li>
                  <li style={{ marginBottom: '8px' }}>Respeitar prazos de pagamento combinados</li>
                  <li style={{ marginBottom: '8px' }}>Informar alergias ou restrições alimentares</li>
                  <li style={{ marginBottom: '8px' }}>Utilizar produtos dentro do prazo recomendado</li>
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
              <li style={{ marginBottom: '8px' }}>Realizar encomendas falsas ou de má-fé</li>
              <li style={{ marginBottom: '8px' }}>Fornecer informações incorretas sobre eventos</li>
              <li style={{ marginBottom: '8px' }}>Tentar acessar contas de outros usuários</li>
              <li style={{ marginBottom: '8px' }}>Interferir no funcionamento da plataforma</li>
              <li style={{ marginBottom: '8px' }}>Utilizar a plataforma para fins comerciais não autorizados</li>
              <li style={{ marginBottom: '8px' }}>Compartilhar informações falsas sobre produtos ou serviços</li>
              <li style={{ marginBottom: '8px' }}>Realizar pedidos fora da área de entrega estabelecida</li>
            </ul>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Reservamo-nos o direito de suspender ou cancelar contas que violarem estas regras, sem prejuízo de outras medidas legais.
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
              Todo o conteúdo da plataforma, incluindo logotipos, textos, imagens, design, combinações de kits e software, são propriedade do <strong>{localConfig.businessName}</strong> ou de seus licenciadores e estão protegidos por leis de propriedade intelectual.
            </p>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Você não pode reproduzir, distribuir, modificar, criar obras derivadas ou utilizar nossos conceitos de kits de churrasco para fins comerciais sem nossa autorização prévia por escrito.
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
              O <strong>{localConfig.businessName}</strong> não será responsável por:
            </p>
            <ul style={{ 
              color: colorPalette.text,
              paddingLeft: '20px',
              marginBottom: '15px',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              <li style={{ marginBottom: '8px' }}>Danos decorrentes de preparo inadequado dos produtos</li>
              <li style={{ marginBottom: '8px' }}>Problemas de entrega causados por informações incorretas fornecidas pelo cliente</li>
              <li style={{ marginBottom: '8px' }}>Atrasos devido a fatores externos como trânsito, condições climáticas ou eventos de força maior</li>
              <li style={{ marginBottom: '8px' }}>Alergias ou intolerâncias não informadas pelo cliente</li>
              <li style={{ marginBottom: '8px' }}>Mau armazenamento dos produtos após a entrega</li>
              <li style={{ marginBottom: '8px' }}>Quantidade insuficiente devido a cálculo incorreto do cliente</li>
              <li style={{ marginBottom: '8px' }}>Cancelamento ou alteração de eventos por parte do cliente</li>
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
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento para refletir mudanças em nossos serviços de kits de churrasco. As alterações entrarão em vigor imediatamente após sua publicação no site. O uso continuado de nossos serviços após alterações constitui aceitação dos novos termos.
            </p>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Recomendamos que você revise periodicamente esta página para se manter informado sobre possíveis alterações que possam afetar seus pedidos de kits de churrasco.
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
              Estes Termos são regidos pelas leis da República Federativa do Brasil. Quaisquer disputas serão resolvidas no foro da comarca de Joanópolis-SP, com renúncia a qualquer outro, por mais privilegiado que seja.
            </p>
            <p style={{ 
              color: colorPalette.text, 
              lineHeight: '1.6',
              fontSize: isMobile ? '0.95rem' : '1rem'
            }}>
              Estes Termos de Uso estão em conformidade com o <strong>Código de Defesa do Consumidor (Lei 8.078/90)</strong> e as normas específicas para produtos cárneos.
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
              Para dúvidas sobre estes Termos de Uso ou nossos serviços de kits de churrasco, entre em contato:
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
                <strong>{localConfig.businessName}</strong> - {localConfig.slogan}
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
                🕒 {localConfig.openingHours}
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
