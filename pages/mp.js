import { useState, useEffect } from 'react';
import Head from 'next/head';
import Cart from './Cart';
import Link from 'next/link';

// ========== CONFIGURAÇÃO LOCAL ========== //
const localConfig = {
  businessName: "MP Café & Manhã",
  businessType: "Padaria e Café",
  city: "Joanópolis",
  state: "SP",
  address: "Rua Capitão Antônio Mathias, 720 - Centro",
  cep: "12980-000",
  phone: "(11) 91357-2902",
  whatsapp: "5511913572902",
  description: "Padaria e café especializada em produtos para café da manhã em Joanópolis-SP. Pães frescos, bolos, salgados, cafés especiais e muito mais.",
  deliveryArea: "Joanópolis e região"
};

// ========== PALETA DE CORES ========== //
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

// ========== CATEGORIAS ========== //
const categories = ['Café da Manhã'];

// ========== PRODUTOS COM CATEGORIAS ========== //
const products = [
  { id: 1, name: 'Pão Francês (Dúzia)', category: 'Café da Manhã', price: 12.90, image: '/Logo MP cafe.png' },
  { id: 2, name: 'Bolo de Fubá (Fatia)', category: 'Café da Manhã', price: 6.50, image: '/Logo MP cafe.png' },
  { id: 3, name: 'Café Especial 250g', category: 'Café da Manhã', price: 18.90, image: '/Logo MP cafe.png' },
  { id: 4, name: 'Kit Café Completo', category: 'Café da Manhã', price: 49.90, image: '/Logo MP cafe.png' },
  { id: 5, name: 'Croissant Recheado', category: 'Café da Manhã', price: 8.90, image: '/Logo MP cafe.png' },
  { id: 6, name: 'Suco de Laranja', category: 'Café da Manhã', price: 7.50, image: '/Logo MP cafe.png' },
  { id: 7, name: 'Brigadeiro (6un)', category: 'Café da Manhã', price: 15.90, image: '/Logo MP cafe.png' },
  { id: 8, name: 'Pão de Queijo (Dúzia)', category: 'Café da Manhã', price: 14.90, image: '/Logo MP cafe.png' },
  { id: 9, name: 'Pão de Forma Integral', category: 'Café da Manhã', price: 9.90, image: '/Logo MP cafe.png' },
  { id: 10, name: 'Bolo de Cenoura (Fatia)', category: 'Café da Manhã', price: 7.90, image: '/Logo MP cafe.png' },
  { id: 11, name: 'Café Coado 500g', category: 'Café da Manhã', price: 22.90, image: '/Logo MP cafe.png' },
  { id: 12, name: 'Empada de Frango', category: 'Café da Manhã', price: 5.90, image: '/Logo MP cafe.png' },
];

// ========== RODAPÉ CLEAN - ESTILO PMG ========== //
const FooterClean = ({ isMobile }) => {
  const footerStyle = {
    marginTop: '60px',
    padding: isMobile ? '20px 10px' : '30px 15px',
    textAlign: 'center',
    color: '#666',
    fontSize: isMobile ? '12px' : '14px',
    borderTop: `2px solid ${colorPalette.primary}`,
    backgroundColor: colorPalette.light,
    borderRadius: '12px 12px 0 0',
    boxShadow: '0 -2px 10px rgba(139, 69, 19, 0.1)',
    width: '100%',
    boxSizing: 'border-box'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%'
  };

  const titleStyle = {
    color: colorPalette.primary,
    fontSize: isMobile ? '16px' : '18px',
    marginBottom: isMobile ? '20px' : '25px',
    fontWeight: '600'
  };

  const linksGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: isMobile ? '10px' : '15px',
    marginBottom: isMobile ? '20px' : '30px',
    width: '100%'
  };

  const linkButtonStyle = {
    color: colorPalette.primary, 
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: isMobile ? '12px' : '14px',
    padding: isMobile ? '10px 8px' : '12px 8px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    backgroundColor: colorPalette.white,
    border: `1px solid ${colorPalette.secondary}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    minHeight: isMobile ? '45px' : '50px'
  };

  const socialIconStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: isMobile ? '36px' : '40px',
    height: isMobile ? '36px' : '40px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    backgroundColor: colorPalette.white,
    border: `1px solid ${colorPalette.secondary}`,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const dividerStyle = {
    height: '1px',
    background: `linear-gradient(90deg, transparent, ${colorPalette.primary}, transparent)`,
    margin: isMobile ? '20px auto' : '25px auto',
    maxWidth: isMobile ? '250px' : '300px',
    width: '100%'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        
        {/* TÍTULO */}
        <h3 style={titleStyle}>
          📋 Informações Legais
        </h3>

        {/* LINKS PRINCIPAIS */}
        <div style={linksGridStyle}>
          
          {/* Política de Privacidade */}
          <Link href="/politica-de-privacidade" passHref legacyBehavior>
            <a 
              style={linkButtonStyle}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = colorPalette.primary;
                e.target.style.color = colorPalette.white;
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 8px rgba(139, 69, 19, 0.2)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = colorPalette.white;
                e.target.style.color = colorPalette.primary;
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
              }}
              title="Política de Privacidade"
              aria-label="Leia nossa Política de Privacidade"
            >
              <span>🔒</span>
              Privacidade
            </a>
          </Link>

          {/* Política de Devolução */}
          <Link href="/politica-devolucao-e-reembolso" passHref legacyBehavior>
            <a 
              style={linkButtonStyle}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = colorPalette.primary;
                e.target.style.color = colorPalette.white;
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 8px rgba(139, 69, 19, 0.2)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = colorPalette.white;
                e.target.style.color = colorPalette.primary;
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
              }}
              title="Política de Devolução e Reembolso"
              aria-label="Leia nossa Política de Devolução e Reembolso"
            >
              <span>🔄</span>
              Devolução
            </a>
          </Link>

          {/* Termos de Uso */}
          <Link href="/termos" passHref legacyBehavior>
            <a 
              style={linkButtonStyle}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = colorPalette.primary;
                e.target.style.color = colorPalette.white;
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 8px rgba(139, 69, 19, 0.2)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = colorPalette.white;
                e.target.style.color = colorPalette.primary;
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
              }}
              title="Termos de Uso"
              aria-label="Leia nossos Termos de Uso"
            >
              <span>📄</span>
              Termos
            </a>
          </Link>

          {/* Quem Somos */}
          <Link href="/quem-somos" passHref legacyBehavior>
            <a 
              style={linkButtonStyle}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = colorPalette.primary;
                e.target.style.color = colorPalette.white;
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 8px rgba(139, 69, 19, 0.2)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = colorPalette.white;
                e.target.style.color = colorPalette.primary;
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
              }}
              title="Quem Somos"
              aria-label="Conheça mais sobre nós"
            >
              <span>👥</span>
              Sobre
            </a>
          </Link>
        </div>

        {/* DIVISOR */}
        <div style={dividerStyle}></div>

        {/* REDES SOCIAIS */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{
            color: colorPalette.primary,
            fontSize: isMobile ? '14px' : '16px',
            marginBottom: isMobile ? '12px' : '15px',
            fontWeight: '600'
          }}>
            Siga-nos nas Redes Sociais
          </h4>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: isMobile ? '15px' : '20px',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            {/* Facebook */}
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={socialIconStyle}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
              }}
            >
              <img 
                src="https://i.imgur.com/prULUUA.png" 
                alt="Facebook" 
                style={{ width: isMobile ? '18px' : '20px', height: isMobile ? '18px' : '20px' }}
              />
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={socialIconStyle}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
              }}
            >
              <img 
                src="https://i.imgur.com/I0ZZLjG.png" 
                alt="Instagram" 
                style={{ width: isMobile ? '18px' : '20px', height: isMobile ? '18px' : '20px' }}
              />
            </a>

            {/* WhatsApp */}
            <a 
              href={`https://wa.me/${localConfig.whatsapp}`}
              target="_blank" 
              rel="noopener noreferrer"
              style={socialIconStyle}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
              }}
            >
              <img 
                src="https://i.imgur.com/YQtV4Yk.png" 
                alt="WhatsApp" 
                style={{ width: isMobile ? '18px' : '20px', height: isMobile ? '18px' : '20px' }}
              />
            </a>
          </div>
        </div>

        {/* INFORMAÇÕES FINAIS */}
        <div style={{ 
          textAlign: 'center',
          paddingTop: '15px',
          borderTop: `1px solid ${colorPalette.secondary}`
        }}>
          <p style={{ 
            margin: '0 0 15px 0', 
            fontSize: isMobile ? '10px' : '11px', 
            color: '#999',
            lineHeight: '1.4',
            fontStyle: 'italic',
            maxWidth: isMobile ? '350px' : '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '0 10px'
          }}>
            <strong>MP Café & Manhã</strong> - Especialistas em café da manhã em <strong>Joanópolis-SP</strong>. 
            Padaria e café com pães frescos, bolos caseiros, salgados e cafés especiais para começar seu dia com energia.
          </p>
          
          <p style={{ 
            margin: '8px 0', 
            fontSize: isMobile ? '13px' : '14px',
            color: colorPalette.dark,
            lineHeight: '1.5'
          }}>
            © {new Date().getFullYear()} MP Café & Manhã. Todos os direitos reservados.
          </p>
          <p style={{ 
            margin: '5px 0', 
            fontSize: isMobile ? '11px' : '12px', 
            color: '#888',
            lineHeight: '1.4'
          }}>
            Endereço: {localConfig.address}
            <br />
            CEP: {localConfig.cep}
          </p>
          <p style={{ 
            margin: '5px 0', 
            fontSize: isMobile ? '11px' : '12px', 
            color: '#888'
          }}>
            📞 Telefone: {localConfig.phone}
          </p>
          <p style={{ 
            margin: '5px 0', 
            fontSize: isMobile ? '11px' : '12px', 
            color: '#888'
          }}>
          🕒 Funcionamento: quinta a domingo | Pedidos até 10h | Entrega em até 1h após confirmação
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function MPCafeManha() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // Detectar mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Banner automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex(prev => (prev + 1) % 2);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Carrinho
  useEffect(() => {
    const saved = localStorage.getItem('mp_cafe_cart');
    if (saved) {
      const parsed = JSON.parse(saved);
      setCart(parsed);
      setTotal(parsed.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('mp_cafe_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.findIndex(item => item.id === product.id);
      let newCart;
      
      if (existing !== -1) {
        newCart = [...prev];
        newCart[existing] = {
          ...newCart[existing],
          quantity: (newCart[existing].quantity || 1) + 1
        };
      } else {
        newCart = [...prev, { ...product, quantity: 1 }];
      }
      
      setTotal(newCart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0));
      return newCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const newCart = prevCart.filter(item => item.id !== productId);
      setTotal(newCart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0));
      return newCart;
    });
  };

  // FILTRO E PÁGINAÇÃO
  const productsPerPage = isMobile ? 6 : 8;
  
  const filteredProducts = products.filter(p => {
    const matchesSearch = !searchTerm || 
      p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || 
      p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Estilos inline - APENAS AJUSTES RESPONSIVOS
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '10px' : '20px',
      backgroundColor: colorPalette.light,
      minHeight: '100vh',
      position: 'relative'
    },
    header: {
      textAlign: 'center',
      padding: isMobile ? '20px 15px' : '25px 20px',
      backgroundColor: colorPalette.white,
      borderRadius: isMobile ? '10px' : '15px',
      marginBottom: isMobile ? '20px' : '30px',
      border: `2px solid ${colorPalette.secondary}`,
      boxShadow: '0 4px 12px rgba(139, 69, 19, 0.1)'
    },
    logo: {
      height: isMobile ? '80px' : '110px',
      marginBottom: isMobile ? '12px' : '15px',
      borderRadius: '10px',
      maxWidth: '100%'
    },
    headerButtonsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: isMobile ? '10px' : '15px',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginTop: isMobile ? '15px' : '20px',
      paddingTop: isMobile ? '15px' : '20px',
      borderTop: `1px solid ${colorPalette.secondary}`
    },
    headerButton: {
      backgroundColor: colorPalette.primary,
      color: colorPalette.white,
      border: `1px solid ${colorPalette.primary}`,
      padding: isMobile ? '8px 12px' : '10px 16px',
      borderRadius: '20px',
      fontSize: isMobile ? '13px' : '15px',
      fontWeight: '600',
      cursor: 'pointer',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      transition: 'all 0.3s',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      boxShadow: '0 2px 5px rgba(139, 69, 19, 0.2)',
      ':hover': {
        backgroundColor: colorPalette.white,
        color: colorPalette.primary,
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 10px rgba(139, 69, 19, 0.3)'
      }
    },
    search: {
      width: '100%',
      maxWidth: isMobile ? '90%' : '500px',
      margin: isMobile ? '15px auto' : '20px auto',
      padding: isMobile ? '10px 15px' : '12px 20px',
      borderRadius: '30px',
      border: `2px solid ${colorPalette.secondary}`,
      fontSize: isMobile ? '14px' : '16px',
      display: 'block'
    },
    categories: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: isMobile ? '8px' : '10px',
      margin: isMobile ? '15px 0' : '20px 0',
      padding: isMobile ? '12px' : '15px',
      backgroundColor: colorPalette.white,
      borderRadius: isMobile ? '8px' : '10px',
      boxShadow: '0 2px 10px rgba(139, 69, 19, 0.05)'
    },
    categoryBtn: {
      padding: isMobile ? '8px 16px' : '10px 20px',
      borderRadius: '30px',
      border: 'none',
      backgroundColor: colorPalette.secondary,
      color: colorPalette.dark,
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s',
      fontSize: isMobile ? '13px' : '14px'
    },
    activeCategory: {
      backgroundColor: colorPalette.primary,
      color: colorPalette.white
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: isMobile ? '15px' : '20px',
      margin: isMobile ? '20px 0' : '30px 0'
    },
    productCard: {
      backgroundColor: colorPalette.white,
      borderRadius: isMobile ? '10px' : '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(139, 69, 19, 0.1)',
      border: `1px solid ${colorPalette.secondary}`,
      transition: 'transform 0.3s, box-shadow 0.3s'
    },
    productImage: {
      width: '100%',
      height: isMobile ? '130px' : '180px',
      objectFit: 'cover'
    },
    productInfo: {
      padding: isMobile ? '12px' : '15px'
    },
    productName: {
      fontSize: isMobile ? '14px' : '16px',
      fontWeight: '600',
      marginBottom: '8px',
      color: colorPalette.dark,
      lineHeight: '1.4'
    },
    productPrice: {
      fontSize: isMobile ? '16px' : '20px',
      fontWeight: '700',
      color: colorPalette.success,
      marginBottom: isMobile ? '12px' : '15px'
    },
    addBtn: {
      width: '100%',
      padding: isMobile ? '10px' : '12px',
      backgroundColor: colorPalette.primary,
      color: colorPalette.white,
      border: 'none',
      borderRadius: '6px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      fontSize: isMobile ? '14px' : '15px'
    },
    pagination: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: isMobile ? '25px 0' : '30px 0',
      gap: isMobile ? '8px' : '10px',
      flexWrap: 'wrap'
    },
    pageButton: {
      padding: isMobile ? '7px 12px' : '8px 15px',
      backgroundColor: colorPalette.white,
      border: `1px solid ${colorPalette.secondary}`,
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: isMobile ? '13px' : '14px',
      color: colorPalette.dark
    },
    activePage: {
      backgroundColor: colorPalette.primary,
      color: colorPalette.white,
      borderColor: colorPalette.primary
    },
    bannerContainer: {
      margin: isMobile ? '30px 0' : '40px 0',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(139, 69, 19, 0.1)'
    },
    bannerImage: {
      width: '100%',
      height: isMobile ? '180px' : '300px',
      objectFit: 'cover'
    }
  };

  return (
    <>
      <Head>
        <title>{localConfig.businessName} - Padaria em Joanópolis-SP</title>
        <meta name="description" content={localConfig.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/Logo MP cafe.png" />
        
        {/* Schema.org */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Bakery",
            "name": localConfig.businessName,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": localConfig.address,
              "addressLocality": localConfig.city,
              "addressRegion": localConfig.state,
              "postalCode": localConfig.cep
            },
            "telephone": localConfig.phone,
            "openingHours": "Mo-Su 06:00-18:00"
          })
        }} />
      </Head>

      <div style={styles.container}>
        {/* ========== HEADER UNIFICADO ========== */}
        <header style={styles.header}>
          <img 
            src="/Logo MP cafe.png" 
            alt={localConfig.businessName}
            style={styles.logo}
          />
          <h1 style={{ 
            color: colorPalette.primary, 
            marginBottom: isMobile ? '5px' : '8px',
            fontSize: isMobile ? '22px' : '30px',
            fontWeight: '700'
          }}>
            {localConfig.businessName}
          </h1>
          <p style={{ 
            color: colorPalette.accent,
            fontSize: isMobile ? '14px' : '16px',
            margin: 0,
            fontWeight: '500'
          }}>
            Especialistas em café da manhã - {localConfig.city}-{localConfig.state}
          </p>
          
          {/* BOTÕES DENTRO DO HEADER */}
          <div style={styles.headerButtonsContainer}>
            {/* BOTÃO PÁGINA INICIAL */}
            <a href="/" style={styles.headerButton}>
              <span style={{ fontSize: isMobile ? '16px' : '18px' }}>🏠</span>
              Página Inicial
            </a>
            
            {/* BOTÃO PERGUNTAS FREQUENTES */}
            <Link href="/faq" legacyBehavior>
              <a style={styles.headerButton}>
                <span style={{ fontSize: isMobile ? '16px' : '18px' }}>❓</span>
                Perguntas Frequentes
              </a>
            </Link>
          </div>
        </header>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="🔍 Buscar produtos..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          style={styles.search}
        />

        {/* CATEGORIES */}
        <div style={styles.categories}>
          <button
            key="Todos"
            onClick={() => {
              setSelectedCategory('Todos');
              setCurrentPage(1);
            }}
            style={{
              ...styles.categoryBtn,
              ...(selectedCategory === 'Todos' && styles.activeCategory)
            }}
          >
            Todos
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
              style={{
                ...styles.categoryBtn,
                ...(selectedCategory === cat && styles.activeCategory)
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCTS GRID */}
        <div style={styles.grid}>
          {currentProducts.map(product => (
            <div 
              key={product.id} 
              style={styles.productCard}
              onMouseOver={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(139, 69, 19, 0.15)';
                }
              }}
              onMouseOut={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 69, 19, 0.1)';
                }
              }}
            >
              <img 
                src={product.image} 
                alt={product.name}
                style={styles.productImage}
                onError={(e) => {
                  e.target.src = '/Logo MP cafe.png';
                }}
              />
              <div style={styles.productInfo}>
                <h3 style={styles.productName}>{product.name}</h3>
                <div style={{
                  fontSize: isMobile ? '11px' : '12px',
                  color: colorPalette.text,
                  backgroundColor: colorPalette.secondary + '30',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  marginBottom: '8px',
                  display: 'inline-block'
                }}>
                  {product.category}
                </div>
                <p style={styles.productPrice}>R$ {product.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(product)}
                  style={styles.addBtn}
                  onMouseOver={(e) => {
                    if (!isMobile) {
                      e.target.style.backgroundColor = colorPalette.accent;
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isMobile) {
                      e.target.style.backgroundColor = colorPalette.primary;
                    }
                  }}
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINAÇÃO */}
        {filteredProducts.length > productsPerPage && (
          <div style={styles.pagination}>
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              style={{
                ...styles.pageButton,
                ...(currentPage === 1 && { opacity: 0.5, cursor: 'not-allowed' })
              }}
            >
              Anterior
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                style={{
                  ...styles.pageButton,
                  ...(page === currentPage && styles.activePage)
                }}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              style={{
                ...styles.pageButton,
                ...(currentPage === totalPages && { opacity: 0.5, cursor: 'not-allowed' })
              }}
            >
              Próxima
            </button>
          </div>
        )}

        {/* BANNER */}
        <div style={styles.bannerContainer}>
          {currentBannerIndex === 0 ? (
            <img 
              src="/images/banner-pague-no-ato-da-entrega.jpeg"
              alt="Pague no ato da entrega - Frete grátis"
              style={styles.bannerImage}
              onError={(e) => {
                e.target.src = '/Logo MP cafe.png';
              }}
            />
          ) : (
            <img 
              src="/images/banner-obrigado.jpeg"
              alt="Obrigado pela preferência - MP Café & Manhã"
              style={styles.bannerImage}
              onError={(e) => {
                e.target.src = '/Logo MP cafe.png';
              }}
            />
          )}
        </div>

        {/* CARRINHO */}
        <Cart 
          cart={cart}
          setCart={setCart}
          removeFromCart={removeFromCart}
        />

        {/* RODAPÉ CLEAN - APENAS INFORMAÇÕES LEGAIS */}
        <FooterClean isMobile={isMobile} />
      </div>
    </>
  );
}