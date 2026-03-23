import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import ShareButtons from '../components/ShareButtons';

// ========== CONFIGURAÇÃO MP NA BRASA ========== //
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
  url: "https://mpnabrasa.shop",
  logo: "/Logo MP cafe.png"
};

// ========== PALETA DE CORES ========== //
const colorPalette = {
  primary: '#8B0000',
  secondary: '#CCCCCC',
  accent: '#B22222',
  light: '#F8F8F8',
  dark: '#1A1A1A',
  white: '#FFFFFF',
  success: '#228B22',
  text: '#333333'
};

// ========== FUNÇÃO PARA CRIAR SLUGS ========== //
function gerarSlug(texto) {
  if (!texto) return '';
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
    .substring(0, 80);
}

// ========== FUNÇÃO PARA GERAR URL AMIGÁVEL ========== //
function getArticleUrl(article) {
  if (!article || !article.title) return '/brasa-news';
  const slug = gerarSlug(article.title);
  return `/brasa-news/${slug}`;
}

// ========== FUNÇÃO PARA PROCESSAR LINKS NO CONTEÚDO ========== //
function processarLinksConteudo(conteudoHTML, articlesArray) {
  if (!conteudoHTML || !articlesArray || !Array.isArray(articlesArray)) {
    return conteudoHTML;
  }
  
  let conteudoProcessado = conteudoHTML;
  const artigoPorId = {};
  articlesArray.forEach(artigo => {
    artigoPorId[artigo.id] = artigo;
  });
  
  const regexLinks = /href="\/brasa-news\?page=(\d+)(?:#artigo-\d+)?"/gi;
  const matches = [...conteudoHTML.matchAll(regexLinks)];
  
  matches.forEach(match => {
    const idArtigo = parseInt(match[1]);
    const linkCompleto = match[0];
    
    if (artigoPorId[idArtigo]) {
      const urlAmigavel = getArticleUrl(artigoPorId[idArtigo]);
      const novoLink = `href="${urlAmigavel}"`;
      conteudoProcessado = conteudoProcessado.replace(linkCompleto, novoLink);
    }
  });
  
  return conteudoProcessado;
}

// ========== BANCO DE ARTIGOS ========== //
const articles = [
  {
    id: 1,
    title: "Churrasco em Joanópolis: O Guia Completo para um Churrasco Inesquecível",
    description: "Descubra os melhores cortes de carne, acompanhamentos e dicas para fazer um churrasco perfeito em Joanópolis. Aprenda com os especialistas da MP na Brasa!",
    image: "https://i.imgur.com/Evn57fM.png",
    category: "Dicas de Churrasco",
    readTime: "8 min de leitura",
    date: "2026-03-23",
    author: "Equipe MP na Brasa",
    featured: true,
    content: `
      <section style="margin-bottom: 30px;">
        <h1 style="color: #8B0000; font-size: 1.6rem; margin-bottom: 15px;">🔥 Churrasco em Joanópolis: O Guia Completo para um Churrasco Inesquecível</h1>
        <p>Joanópolis, conhecida como a "Capital da Água" e com o clima serrano mais frio da região, é o cenário perfeito para reunir a família e os amigos em volta da brasa. E para que seu churrasco seja inesquecível, a <strong>MP na Brasa</strong> preparou este guia completo com tudo que você precisa saber!</p>
        
        <div style="background: #f0f8f0; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #8B0000; margin: 0 0 10px 0;">🎯 Neste guia você vai aprender:</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li>Os melhores cortes de carne para cada ocasião</li>
            <li>Como escolher o carvão ideal</li>
            <li>Acompanhamentos que fazem a diferença</li>
            <li>Dicas de temperatura e pontos da carne</li>
            <li>Kit completo da MP na Brasa para seu churrasco</li>
          </ul>
        </div>
      </section>

      <section style="margin-bottom: 30px;">
        <div style="text-align: center; margin: 20px 0;">
          <a href="/mp" style="background: #8B0000; color: white; padding: 15px 40px; text-decoration: none; border-radius: 50px; font-weight: 700; font-size: 1.2rem; display: inline-block; margin-bottom: 15px;">
            🛒 VER KITS DE CHURRASCO MP NA BRASA
          </a>
          <p style="margin-top: 10px; font-size: 0.9rem; color: #666;">Entrega em Joanópolis e região em até 1 hora!</p>
        </div>
        <img src="https://i.imgur.com/Evn57fM.png" alt="Churrasco em Joanópolis - MP na Brasa" style="width: 100%; border-radius: 10px; margin: 20px 0;" />
        <p style="text-align: center; color: #666; font-style: italic; font-size: 0.9rem;">Churrasco em Joanópolis - O clima frio pede um bom churrasco!</p>
      </section>

      <section style="margin-bottom: 30px;">
        <h2 style="color: #8B0000; font-size: 1.4rem; margin-bottom: 15px;">🥩 1. Os Melhores Cortes de Carne para Churrasco</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 20px;">
          <div style="background: #f8f8f8; padding: 20px; border-radius: 10px;">
            <h3 style="color: #8B0000; margin: 0 0 10px 0;">🐂 Picanha</h3>
            <p>A rainha do churrasco! Com sua capa de gordura generosa, a picanha é suculenta e saborosa. Na MP na Brasa, oferecemos a <strong>Picanha Bovina Resfriada Tipo A Nosso Beef 1,1kg</strong>.</p>
            <p><strong>Dica:</strong> Asse com a gordura para baixo no início para dourar, depois vire e finalize.</p>
          </div>
          
          <div style="background: #f8f8f8; padding: 20px; border-radius: 10px;">
            <h3 style="color: #8B0000; margin: 0 0 10px 0;">🥩 Contrafilé</h3>
            <p>Corte versátil e macio, perfeito para grelha. O <strong>Contra Filé Bovino com Noix Nosso Beef 4kg</strong> é ideal para servir grandes grupos.</p>
            <p><strong>Dica:</strong> Faça bifes grossos e asse em fogo alto para selar.</p>
          </div>
          
          <div style="background: #f8f8f8; padding: 20px; border-radius: 10px;">
            <h3 style="color: #8B0000; margin: 0 0 10px 0;">🍖 Linguiça Toscana</h3>
            <p>Clássico do churrasco brasileiro. A <strong>Linguiça Toscana Sadia 700g</strong> é suculenta e temperada na medida certa.</p>
            <p><strong>Dica:</strong> Asse em fogo médio, furando levemente para não estourar.</p>
          </div>
        </div>
      </section>

      <section style="margin-bottom: 30px;">
        <h2 style="color: #8B0000; font-size: 1.4rem; margin-bottom: 15px;">🔥 2. Escolhendo o Carvão Ideal</h2>
        <p>O carvão é essencial para um churrasco perfeito. Prefira carvão de qualidade, como o carvão vegetal de eucalipto ou briquetes, que oferecem:</p>
        <ul>
          <li>Brasa uniforme e duradoura</li>
          <li>Menos fumaça</li>
          <li>Temperatura constante</li>
        </ul>
        <p><strong>Dica da MP na Brasa:</strong> Acenda o carvão com 30-40 minutos de antecedência e espere formar brasa antes de colocar as carnes.</p>
      </section>

      <section style="margin-bottom: 30px;">
        <h2 style="color: #8B0000; font-size: 1.4rem; margin-bottom: 15px;">🍽️ 3. Acompanhamentos que Fazem a Diferença</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
          <div style="background: #f8f8f8; padding: 15px; border-radius: 8px;">
            <h4 style="color: #8B0000; margin: 0 0 8px 0;">🥖 Pão de Alho</h4>
            <p><strong>Pão de Alho Resfriado Aurora 340g</strong> - Cremoso e saboroso, não pode faltar!</p>
          </div>
          
          <div style="background: #f8f8f8; padding: 15px; border-radius: 8px;">
            <h4 style="color: #8B0000; margin: 0 0 8px 0;">🧀 Queijo Coalho</h4>
            <p><strong>Queijo Coalho Espeto Lactowal 7un</strong> - Derrete na boca, perfeito no espeto.</p>
          </div>
          
          <div style="background: #f8f8f8; padding: 15px; border-radius: 8px;">
            <h4 style="color: #8B0000; margin: 0 0 8px 0;">🌽 Farofa</h4>
            <p><strong>Farofa de Mandioca Temperada Kisabor 400g</strong> - Acompanhamento clássico.</p>
          </div>
          
          <div style="background: #f8f8f8; padding: 15px; border-radius: 8px;">
            <h4 style="color: #8B0000; margin: 0 0 8px 0;">🧂 Sal Grosso</h4>
            <p><strong>Sal Grosso para Churrasco Master 1kg</strong> - O tempero essencial.</p>
          </div>
        </div>
      </section>

      <section style="margin-bottom: 30px;">
        <h2 style="color: #8B0000; font-size: 1.4rem; margin-bottom: 15px;">🌡️ 4. Temperatura e Pontos da Carne</h2>
        <div style="background: #f8f8f8; padding: 20px; border-radius: 10px;">
          <ul>
            <li><strong>Mal passada (45°C-50°C):</strong> Vermelha por dentro, selada por fora</li>
            <li><strong>Ao ponto (55°C-60°C):</strong> Rosada no centro, mais firme</li>
            <li><strong>Bem passada (65°C-70°C):</strong> Totalmente cozida, sem partes rosadas</li>
          </ul>
          <p><strong>Dica de ouro:</strong> Deixe a carne descansar por 5-10 minutos após assar para os sucos se redistribuírem.</p>
        </div>
      </section>

      <section style="margin-bottom: 30px;">
        <h2 style="color: #8B0000; font-size: 1.4rem; margin-bottom: 15px;">🎁 5. Kits Completos da MP na Brasa</h2>
        <p>Que tal facilitar sua vida e receber tudo pronto para o churrasco? A MP na Brasa oferece kits completos com carnes premium e acompanhamentos selecionados:</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin: 20px 0;">
          <div style="border: 2px solid #8B0000; border-radius: 10px; padding: 20px; text-align: center;">
            <h3 style="color: #8B0000;">Kit Churrasco Raiz</h3>
            <p style="font-size: 1.3rem; font-weight: bold; color: #228B22;">R$ 279,90</p>
            <ul style="text-align: left; margin: 10px 0;">
              <li>Picanha 1,1kg</li>
              <li>Linguiça Toscana 700g</li>
              <li>Pão de Alho 340g</li>
              <li>Queijo Coalho 7un</li>
              <li>Farofa 400g</li>
            </ul>
            <a href="/mp" style="background: #8B0000; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; display: inline-block;">Ver Detalhes</a>
          </div>
          
          <div style="border: 2px solid #8B0000; border-radius: 10px; padding: 20px; text-align: center; background: #FFF5F5;">
            <h3 style="color: #8B0000;">Kit Churrasco Premium</h3>
            <p style="font-size: 1.3rem; font-weight: bold; color: #228B22;">R$ 359,90</p>
            <ul style="text-align: left; margin: 10px 0;">
              <li>Contra Filé 4kg</li>
              <li>Picanha 1,1kg</li>
              <li>Linguiça Toscana 700g</li>
              <li>Pão de Alho 340g</li>
              <li>Queijo Coalho 7un</li>
              <li>Farofa 400g + Sal Grosso</li>
            </ul>
            <a href="/mp" style="background: #8B0000; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; display: inline-block;">Ver Detalhes</a>
          </div>
        </div>
      </section>

      <section style="text-align: center; padding: 30px; background: #8B0000; border-radius: 10px; margin-bottom: 30px;">
        <h3 style="color: white; margin: 0 0 15px 0; font-size: 1.5rem;">📞 Peça seu Churrasco Agora!</h3>
        <p style="color: #FFE0E0; margin: 0 0 20px 0; font-size: 1.1rem;">
          Quer receber um kit completo em Joanópolis? Fale conosco no WhatsApp!
        </p>
        
        <div style="display: inline-block; background: white; padding: 20px; border-radius: 8px; margin-top: 10px;">
          <p style="margin: 0; color: #8B0000; font-weight: 600; font-size: 1.2rem;">
            ✆ WhatsApp Direto:<br>
            <span style="font-size: 1.4rem;">(11) 96918-0048</span>
          </p>
        </div>
      </section>

      <section style="text-align: center; padding: 30px; background: #f8f8f8; border-radius: 10px;">
        <h3 style="color: #8B0000; margin: 0 0 15px 0;">🛒 Acesse Nosso Catálogo Completo</h3>
        <p style="color: #555; margin: 0 0 20px 0;">
          Veja todos os produtos disponíveis para seu churrasco em Joanópolis e região.
        </p>
        <a href="/mp" style="background: #8B0000; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block;">
          👉 ACESSAR CATÁLOGO MP NA BRASA
        </a>
      </section>

      <div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 30px;">
        <p style="margin: 0; font-size: 0.9rem; color: #666;">
          <strong>Palavras-chave:</strong> churrasco joanópolis, kit churrasco joanópolis, churrasco delivery joanópolis, carnes para churrasco, picanha joanópolis, churrasco gourmet, MP na Brasa, churrasco em casa, acompanhamentos para churrasco.
        </p>
      </div>
    `
  }
  // Adicione mais artigos aqui
];

// ========== SERVER SIDE PROPS ========== //
export async function getServerSideProps(context) {
  const { query } = context;
  
  let page = 1;
  const slug = query.slug;
  const pageId = parseInt(query.page) || 1;
  
  if (slug) {
    const artigoEncontrado = articles.find(artigo => 
      gerarSlug(artigo.title) === slug
    );
    
    if (artigoEncontrado) {
      page = artigoEncontrado.id;
    } else {
      page = pageId;
    }
  } else {
    page = pageId;
  }
  
  return {
    props: {
      initialPage: page
    }
  };
}

// ========== COMPONENTE PRINCIPAL ========== //
export default function BrasaNews({ initialPage }) {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isClient, setIsClient] = useState(false);
  const [showIndex, setShowIndex] = useState(true);
  const [activeArticle, setActiveArticle] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [clientData, setClientData] = useState({ name: '', address: '', phone: '' });
  
  const articleRefs = useRef([]);

  useEffect(() => {
    const savedData = localStorage.getItem('mp_brasa_client_data');
    if (savedData) setClientData(JSON.parse(savedData));
  }, []);

  useEffect(() => {
    setIsClient(true);
    
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      
      const atualizarUrlAmigavel = () => {
        const artigoAtual = articles.find(a => a.id === currentPage);
        if (artigoAtual) {
          const urlNova = getArticleUrl(artigoAtual);
          const urlAtual = window.location.pathname + window.location.search;
          
          if (!urlAtual.includes(urlNova) && !urlAtual.includes('slug=')) {
            window.history.replaceState({}, '', urlNova);
          }
        }
      };
      
      const checkScreenSize = () => {
        const mobile = window.innerWidth <= 768;
        setIsMobile(mobile);
        setShowIndex(!mobile);
        setWindowWidth(window.innerWidth);
      };
      
      checkScreenSize();
      atualizarUrlAmigavel();
      window.addEventListener('resize', checkScreenSize);
      
      return () => {
        window.removeEventListener('resize', checkScreenSize);
      };
    }
  }, [currentPage]);

  const totalPages = articles.length;
  const currentArticle = articles.find(article => article.id === currentPage) || articles[0];

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const artigoAtual = articles.find(a => a.id === pageNumber);
    if (artigoAtual && typeof window !== 'undefined') {
      const novaURL = getArticleUrl(artigoAtual);
      window.history.pushState({}, '', novaURL);
    }
  };

  const goToArticle = (articleId) => {
    handlePageChange(articleId);
    if (isMobile) {
      setShowIndex(false);
    }
  };

  // ========== COMPONENTE DE ÍNDICE - SEM STICKY, POSIÇÃO NORMAL ========== //
  const ArticleIndex = () => (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '10px',
      padding: isMobile ? '15px' : '25px',
      margin: isMobile ? '0 8px 25px 8px' : '0 0 25px 0',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      border: `1px solid ${colorPalette.secondary}`,
      overflow: 'hidden'
      // REMOVIDO position: sticky e top
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '12px',
        gap: '8px'
      }}>
        <h2 style={{
          color: colorPalette.primary,
          fontSize: isMobile ? '1rem' : '1.2rem',
          margin: 0,
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <span style={{ fontSize: '1.1em' }}>📚</span>
          Índice ({articles.length})
        </h2>
        
        <button
          onClick={() => setShowIndex(!showIndex)}
          style={{
            backgroundColor: colorPalette.primary,
            color: 'white',
            border: 'none',
            padding: isMobile ? '6px 10px' : '8px 14px',
            borderRadius: '6px',
            fontSize: isMobile ? '0.8rem' : '0.85rem',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            flexShrink: 0
          }}
        >
          {showIndex ? (
            <>
              <span style={{ fontSize: '0.9em' }}>✕</span>
              Fechar
            </>
          ) : (
            <>
              <span style={{ fontSize: '0.9em' }}>📖</span>
              Abrir
            </>
          )}
        </button>
      </div>
      
      {showIndex && (
        <div style={{
          maxHeight: isMobile ? '350px' : '450px',
          overflowY: 'auto',
          paddingRight: '5px',
          transition: 'max-height 0.3s ease'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '8px' : '10px'
          }}>
            {articles.map(article => (
              <a
                key={article.id}
                href={getArticleUrl(article)}
                onClick={(e) => {
                  e.preventDefault();
                  goToArticle(article.id);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '8px' : '10px',
                  padding: isMobile ? '8px' : '10px',
                  backgroundColor: currentPage === article.id ? '#f0f8f0' : '#f8f8f8',
                  border: currentPage === article.id ? `2px solid ${colorPalette.primary}` : `1px solid ${colorPalette.secondary}`,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textAlign: 'left',
                  width: '100%',
                  boxSizing: 'border-box',
                  position: 'relative',
                  minHeight: isMobile ? '65px' : '75px',
                  overflow: 'visible',
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: isMobile ? '-5px' : '-7px',
                  left: isMobile ? '-5px' : '-7px',
                  backgroundColor: colorPalette.primary,
                  color: 'white',
                  width: isMobile ? '22px' : '26px',
                  height: isMobile ? '22px' : '26px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: isMobile ? '0.7rem' : '0.8rem',
                  fontWeight: 'bold',
                  zIndex: 5,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                  border: '2px solid white',
                  aspectRatio: '1 / 1'
                }}>
                  {article.id}
                </div>
                
                <div style={{
                  width: isMobile ? '40px' : '50px',
                  height: isMobile ? '40px' : '50px',
                  flexShrink: 0,
                  borderRadius: '6px',
                  overflow: 'hidden',
                  border: '1px solid #ddd',
                  backgroundColor: '#f0f0f0',
                  position: 'relative',
                  zIndex: 10
                }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                
                <div style={{ 
                  flex: 1, 
                  minWidth: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '3px',
                  position: 'relative',
                  zIndex: 10
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginBottom: '3px',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{
                      backgroundColor: '#f0f8f0',
                      color: colorPalette.primary,
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontSize: isMobile ? '0.6rem' : '0.65rem',
                      fontWeight: '600',
                      whiteSpace: 'nowrap'
                    }}>
                      {article.category}
                    </span>
                    <span style={{ 
                      color: '#666',
                      fontSize: isMobile ? '0.6rem' : '0.65rem',
                      whiteSpace: 'nowrap'
                    }}>
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h4 style={{
                    fontSize: isMobile ? '0.75rem' : '0.85rem',
                    margin: 0,
                    color: '#333',
                    fontWeight: '600',
                    lineHeight: '1.2',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {article.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>
          
          <div style={{
            marginTop: '12px',
            paddingTop: '10px',
            borderTop: `1px solid ${colorPalette.secondary}`,
            textAlign: 'center',
            fontSize: isMobile ? '0.7rem' : '0.8rem',
            color: '#666'
          }}>
            {articles.length} artigos disponíveis
          </div>
        </div>
      )}
    </div>
  );

  // ========== COMPONENTE DE NAVEGAÇÃO RÁPIDA ========== //
  const QuickNavigation = () => {
    const currentIndex = articles.findIndex(a => a.id === currentPage);
    const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
    const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

    return (
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        margin: isMobile ? '20px 8px 0 8px' : '30px 0 0 0',
        padding: isMobile ? '12px' : '18px',
        backgroundColor: colorPalette.light,
        borderRadius: '10px',
        border: `1px solid ${colorPalette.secondary}`,
        gap: isMobile ? '12px' : '15px'
      }}>
        {prevArticle && (
          <a
            href={getArticleUrl(prevArticle)}
            onClick={(e) => {
              e.preventDefault();
              goToArticle(prevArticle.id);
            }}
            style={{
              flex: isMobile ? '0 0 auto' : 1,
              display: 'flex',
              alignItems: 'center',
              gap: isMobile ? '8px' : '12px',
              padding: isMobile ? '10px' : '12px',
              backgroundColor: 'white',
              border: `1px solid ${colorPalette.secondary}`,
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              textAlign: 'left',
              boxSizing: 'border-box',
              minHeight: '70px',
              width: '100%',
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <div style={{ 
              color: colorPalette.primary, 
              fontSize: isMobile ? '1.1rem' : '1.3rem',
              flexShrink: 0 
            }}>
              ←
            </div>
            <div style={{ 
              flex: 1,
              minWidth: 0
            }}>
              <div style={{
                fontSize: isMobile ? '0.7rem' : '0.75rem',
                color: '#666',
                marginBottom: '3px',
                fontWeight: '600'
              }}>
                Artigo anterior
              </div>
              <div style={{
                fontSize: isMobile ? '0.8rem' : '0.85rem',
                fontWeight: '600',
                color: '#333',
                lineHeight: '1.3',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {prevArticle.title}
              </div>
            </div>
          </a>
        )}

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isMobile ? '10px' : '12px',
          backgroundColor: 'white',
          borderRadius: '8px',
          border: `1px solid ${colorPalette.secondary}`,
          minWidth: isMobile ? '100%' : 'auto',
          order: isMobile ? -1 : 0,
          textAlign: 'center',
          gap: '3px'
        }}>
          <div style={{
            fontSize: isMobile ? '0.75rem' : '0.8rem',
            color: '#666',
            fontWeight: '600'
          }}>
            Posição
          </div>
          <div style={{
            fontSize: isMobile ? '1.2rem' : '1.3rem',
            fontWeight: '700',
            color: colorPalette.primary,
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <span style={{ fontSize: '1em' }}>📄</span>
            {currentPage} <span style={{ color: '#999', fontWeight: '400' }}>/</span> {totalPages}
          </div>
          <div style={{
            fontSize: isMobile ? '0.65rem' : '0.7rem',
            color: '#888',
            marginTop: '1px'
          }}>
            Total: {totalPages}
          </div>
        </div>

        {nextArticle && (
          <a
            href={getArticleUrl(nextArticle)}
            onClick={(e) => {
              e.preventDefault();
              goToArticle(nextArticle.id);
            }}
            style={{
              flex: isMobile ? '0 0 auto' : 1,
              display: 'flex',
              alignItems: 'center',
              gap: isMobile ? '8px' : '12px',
              padding: isMobile ? '10px' : '12px',
              backgroundColor: 'white',
              border: `1px solid ${colorPalette.secondary}`,
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              textAlign: 'left',
              boxSizing: 'border-box',
              minHeight: '70px',
              width: '100%',
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <div style={{ 
              flex: 1,
              minWidth: 0,
              textAlign: 'right'
            }}>
              <div style={{
                fontSize: isMobile ? '0.7rem' : '0.75rem',
                color: '#666',
                marginBottom: '3px',
                fontWeight: '600'
              }}>
                Próximo artigo
              </div>
              <div style={{
                fontSize: isMobile ? '0.8rem' : '0.85rem',
                fontWeight: '600',
                color: '#333',
                lineHeight: '1.3',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                textAlign: 'right'
              }}>
                {nextArticle.title}
              </div>
            </div>
            <div style={{ 
              color: colorPalette.primary, 
              fontSize: isMobile ? '1.1rem' : '1.3rem',
              flexShrink: 0 
            }}>
              →
            </div>
          </a>
        )}
      </div>
    );
  };

  return (
    <>
      <Head key={`page-${currentPage}`}>
        <title>{currentArticle ? `${currentArticle.title} | MP na Brasa` : 'Brasa News | MP na Brasa'}</title>
        <meta name="description" content={currentArticle ? currentArticle.description : "Brasa News - Dicas e informações sobre churrasco gourmet em Joanópolis."} />
        <meta property="og:title" content={currentArticle ? currentArticle.title : "Brasa News | MP na Brasa"} />
        <meta property="og:description" content={currentArticle ? currentArticle.description : "Dicas de churrasco em Joanópolis"} />
        <meta property="og:image" content={currentArticle ? currentArticle.image : localConfig.logo} />
        <meta property="og:url" content={`${localConfig.url}${getArticleUrl(currentArticle)}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="MP na Brasa" />
        <link rel="canonical" href={`${localConfig.url}${getArticleUrl(currentArticle)}`} />
      </Head>

      <style jsx global>{`
        * { box-sizing: border-box !important; }
        body { overflow-x: hidden !important; margin: 0; padding: 0; background-color: #ffffff; }
        img { max-width: 100% !important; height: auto !important; }
        @media (max-width: 768px) {
          [style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: ${colorPalette.primary}; border-radius: 2px; }
      `}</style>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '0 8px' : '0 15px',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        fontFamily: "'Segoe UI', Roboto, Arial, sans-serif"
      }}>
        
        {/* HEADER */}
        <header style={{
          textAlign: 'center',
          padding: isMobile ? '15px 0' : '25px 0',
          marginBottom: isMobile ? '10px' : '15px'
        }}>
          
          <Link href="/">
            <img src={localConfig.logo} alt="MP na Brasa" style={{ width: isMobile ? '140px' : '200px', margin: isMobile ? '0 0 10px 0' : '0 0 15px 0', cursor: 'pointer' }} />
          </Link>
          
          <div style={{
            backgroundColor: colorPalette.primary,
            color: 'white',
            padding: windowWidth > 768 ? '10px 15px' : '8px 10px',
            borderRadius: '8px',
            marginBottom: windowWidth > 768 ? '15px' : '10px',
            width: '100%'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '8px',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              <p style={{ fontSize: windowWidth > 768 ? '14px' : '12px', fontWeight: '600', margin: 0, textAlign: 'center' }}>
                {clientData.name ? `Olá ${clientData.name.split(' ')[0]}, seja bem-vindo(a)!` : 'Olá, seja bem-vindo(a)!'}
              </p>
            </div>
            
            <div style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="/" style={{ backgroundColor: 'white', color: colorPalette.primary, border: `1px solid ${colorPalette.primary}`, padding: windowWidth > 768 ? '6px 10px' : '5px 8px', borderRadius: '16px', fontSize: windowWidth > 768 ? '13px' : '11px', fontWeight: '600', cursor: 'pointer', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '4px' }}>
                🏠 Página Inicial
              </a>
              
              <a href="/mp" style={{ backgroundColor: 'white', color: colorPalette.primary, border: `1px solid ${colorPalette.primary}`, padding: windowWidth > 768 ? '6px 10px' : '5px 8px', borderRadius: '16px', fontSize: windowWidth > 768 ? '13px' : '11px', fontWeight: '600', cursor: 'pointer', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '4px' }}>
                🥩 Kits de Churrasco
              </a>
              
              <a href="/faq" style={{ backgroundColor: 'white', color: colorPalette.primary, border: `1px solid ${colorPalette.primary}`, padding: windowWidth > 768 ? '6px 10px' : '5px 8px', borderRadius: '16px', fontSize: windowWidth > 768 ? '13px' : '11px', fontWeight: '600', cursor: 'pointer', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '4px' }}>
                ❓ Perguntas
              </a>
            </div>
          </div>

          <h1 style={{ color: colorPalette.primary, fontSize: isMobile ? '1.2rem' : '1.6rem', margin: '0 0 8px 0', fontWeight: '700', lineHeight: '1.2' }}>
            Brasa News 🔥
          </h1>
          
          <p style={{ color: colorPalette.text, fontSize: isMobile ? '0.85rem' : '1rem', margin: '0 0 15px 0', lineHeight: '1.4' }}>
            Dicas, cortes especiais e tudo sobre churrasco gourmet em Joanópolis
          </p>

          <nav style={{ fontSize: isMobile ? '0.75rem' : '0.85rem', color: '#666' }}>
            <Link href="/" style={{ color: colorPalette.primary, textDecoration: 'none', fontWeight: '600' }}>Home</Link>
            <span style={{ margin: '0 8px', color: '#999' }}>›</span>
            <span>Brasa News</span>
          </nav>
        </header>

        {/* CONTEÚDO PRINCIPAL */}
        <main>
          <ArticleIndex />
          
          {isClient ? (
            articles.map((article, index) => (
              <div key={article.id} ref={el => articleRefs.current[index] = el}>
                <section id={`artigo-${article.id}`} style={{ display: currentPage === article.id ? 'block' : 'none', margin: isMobile ? '20px 0' : '30px 0' }}>
                  <article style={{ background: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 3px 10px rgba(0,0,0,0.08)', border: `1px solid ${colorPalette.secondary}` }}>
                    
                    <div style={{ padding: isMobile ? '20px 15px' : '25px 20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', fontSize: isMobile ? '0.75rem' : '0.85rem', color: '#666', flexWrap: 'wrap', gap: '10px' }}>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <span>{new Date(article.date).toLocaleDateString('pt-BR')}</span>
                          <span style={{ display: isMobile ? 'none' : 'inline' }}>•</span>
                          <span>{article.readTime}</span>
                        </div>
                        <span style={{ backgroundColor: '#f0f8f0', color: colorPalette.primary, padding: '4px 12px', borderRadius: '12px', fontWeight: '600', fontSize: isMobile ? '0.7rem' : '0.8rem' }}>
                          {article.category}
                        </span>
                      </div>

                      <h1 style={{ color: colorPalette.primary, fontSize: isMobile ? '1.3rem' : '1.8rem', fontWeight: '700', margin: '0 0 12px 0', lineHeight: '1.3' }}>
                        {article.title}
                      </h1>
                      
                      <p style={{ color: '#555', fontSize: isMobile ? '0.9rem' : '1rem', lineHeight: '1.5', margin: '0 0 20px 0' }}>
                        {article.description}
                      </p>

                      <ShareButtons articleTitle={article.title} articleId={article.id} articlesPerPage={1} />
                    </div>

                    <div style={{ width: '100%', height: isMobile ? '220px' : '400px', overflow: 'hidden' }}>
                      <img src={article.image} alt={article.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    <div style={{ padding: isMobile ? '20px 15px' : '25px 20px' }}>
                      <div dangerouslySetInnerHTML={{ __html: processarLinksConteudo(article.content, articles) }} style={{ fontSize: isMobile ? '0.9rem' : '1rem', lineHeight: '1.6', color: '#333' }} />
                    </div>
                  </article>
                </section>
              </div>
            ))
          ) : (
            <div style={{ padding: '30px', textAlign: 'center' }}>⏳ Carregando...</div>
          )}

          <QuickNavigation />
        </main>

        {/* RODAPÉ */}
        <footer style={{
          marginTop: '60px',
          padding: isMobile ? '20px 10px' : '30px 15px',
          textAlign: 'center',
          color: '#666',
          fontSize: isMobile ? '12px' : '14px',
          borderTop: `2px solid ${colorPalette.primary}`,
          backgroundColor: colorPalette.light,
          borderRadius: '12px 12px 0 0',
          boxShadow: `0 -2px 10px rgba(139, 0, 0, 0.1)`,
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
            <h3 style={{ color: colorPalette.primary, fontSize: isMobile ? '16px' : '18px', marginBottom: '20px', fontWeight: '600' }}>📋 Informações Legais</h3>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px', marginBottom: '25px', width: '100%' }}>
              <Link href="/politica-de-privacidade" passHref legacyBehavior><a style={{ color: colorPalette.primary, textDecoration: 'none', fontWeight: '600', fontSize: isMobile ? '12px' : '14px', padding: isMobile ? '10px 6px' : '12px 8px', borderRadius: '8px', transition: 'all 0.3s ease', backgroundColor: 'white', border: `1px solid ${colorPalette.secondary}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', minHeight: '45px' }}><span>🔒</span> Privacidade</a></Link>
              <Link href="/politica-devolucao-e-reembolso" passHref legacyBehavior><a style={{ color: colorPalette.primary, textDecoration: 'none', fontWeight: '600', fontSize: isMobile ? '12px' : '14px', padding: isMobile ? '10px 6px' : '12px 8px', borderRadius: '8px', transition: 'all 0.3s ease', backgroundColor: 'white', border: `1px solid ${colorPalette.secondary}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', minHeight: '45px' }}><span>🔄</span> Devolução</a></Link>
              <Link href="/termos" passHref legacyBehavior><a style={{ color: colorPalette.primary, textDecoration: 'none', fontWeight: '600', fontSize: isMobile ? '12px' : '14px', padding: isMobile ? '10px 6px' : '12px 8px', borderRadius: '8px', transition: 'all 0.3s ease', backgroundColor: 'white', border: `1px solid ${colorPalette.secondary}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', minHeight: '45px' }}><span>📄</span> Termos</a></Link>
              <Link href="/quem-somos" passHref legacyBehavior><a style={{ color: colorPalette.primary, textDecoration: 'none', fontWeight: '600', fontSize: isMobile ? '12px' : '14px', padding: isMobile ? '10px 6px' : '12px 8px', borderRadius: '8px', transition: 'all 0.3s ease', backgroundColor: 'white', border: `1px solid ${colorPalette.secondary}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', minHeight: '45px' }}><span>👥</span> Sobre</a></Link>
            </div>
            <div style={{ height: '1px', background: `linear-gradient(90deg, transparent, ${colorPalette.primary}, transparent)`, margin: '20px auto', maxWidth: '300px', width: '100%' }}></div>
            <p>© {new Date().getFullYear()} MP na Brasa. Todos os direitos reservados.</p>
            <p>🕒 Funcionamento: quinta a domingo | Pedidos até 10h | Entrega em até 1 hora</p>
            <p>📍 {localConfig.address} - {localConfig.city}/{localConfig.state} | CEP: {localConfig.cep}</p>
            <p>📞 {localConfig.phone}</p>
          </div>
        </footer>
      </div>
    </>
  );
}