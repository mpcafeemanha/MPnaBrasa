import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Cart from '../components/Cart';
import Link from 'next/link';

// ========== CONFIGURAÇÃO DE CONTROLE DE VENDAS ========== //
const salesControl = {
  isSalesActive: true, // MUDE PARA true PARA ATIVAR VENDAS, false PARA DESATIVAR
};

// ========== BANNERS PRODUTOS ========== //
const productBanners = [
  { 
    id: 1,
    desktop: '/images/banner-churrasco-1.png',
    mobile: '/images/banner-churrasco-1.png',
  },
  { 
    id: 2,
    desktop: '/images/banner-churrasco-2.png',
    mobile: '/images/banner-churrasco-2.png',
  },
  { 
    id: 3,
    desktop: '/images/banner-churrasco-3.png',
    mobile: '/images/banner-churrasco-3.png',
  }
];

// ========== CONFIGURAÇÃO CHURRASCO ========== //
const localConfig = {
  businessName: "MP na Brasa",
  businessType: "Kits de Churrasco Gourmet",
  city: "Joanópolis",
  state: "SP",
    address: "Rua Capitão Antonio Mathias , 720 - Centro",
  cep: "12980-000",
  phone: "(11) 91357-2902",
  whatsapp: "5511913572902",
  description: "Kits completos de churrasco gourmet com carnes premium, acompanhamentos selecionados e utensílios de qualidade para um churrasco perfeito.",
  deliveryArea: "Joanópolis e região"
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

// ========== CATEGORIAS ========== //
const categories = ['Kits Completos', 'Carnes Premium', 'Acompanhamentos', 'Utensílios'];

// ========== PRODUTOS COM CATEGORIAS ========== //
const products = [
  { id: 1, name: 'Kit Churrasco Familiar (4-6p)', category: 'Kits Completos', price: 249.90, image: '/images/kit-familiar.jpg' },
  { id: 2, name: 'Kit Churrasco Premium (8-10p)', category: 'Kits Completos', price: 399.90, image: '/images/kit-premium.jpg' },
  { id: 3, name: 'Kit Mega Churrasco (15-20p)', category: 'Kits Completos', price: 699.90, image: '/images/kit-mega.jpg' },
  { id: 4, name: 'Picanha Angus Kg', category: 'Carnes Premium', price: 89.90, image: '/images/picanha.jpg' },
  { id: 5, name: 'Costela Bovino Kg', category: 'Carnes Premium', price: 69.90, image: '/images/costela.jpg' },
  { id: 6, name: 'Linguicinha Toscana Kg', category: 'Carnes Premium', price: 39.90, image: '/images/linguica.jpg' },
  { id: 7, name: 'Coração de Frango Kg', category: 'Carnes Premium', price: 34.90, image: '/images/coracao.jpg' },
  { id: 8, name: 'Farofa Especial 500g', category: 'Acompanhamentos', price: 18.90, image: '/images/farofa.jpg' },
  { id: 9, name: 'Vinagrete Premium 500g', category: 'Acompanhamentos', price: 15.90, image: '/images/vinagrete.jpg' },
  { id: 10, name: 'Pão de Alho Recheado (6un)', category: 'Acompanhamentos', price: 24.90, image: '/images/pao-alho.jpg' },
  { id: 11, name: 'Churrasqueira Portátil', category: 'Utensílios', price: 189.90, image: '/images/churrasqueira.jpg' },
  { id: 12, name: 'Kit Facas Profissional', category: 'Utensílios', price: 129.90, image: '/images/facas.jpg' },
];

// ========== RODAPÉ CLEAN - MESMO ESTILO ========== //
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
    boxShadow: '0 -2px 10px rgba(139, 0, 0, 0.1)',
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
                e.target.style.boxShadow = '0 4px 8px rgba(139, 0, 0, 0.2)';
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
                e.target.style.boxShadow = '0 4px 8px rgba(139, 0, 0, 0.2)';
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
                e.target.style.boxShadow = '0 4px 8px rgba(139, 0, 0, 0.2)';
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
                e.target.style.boxShadow = '0 4px 8px rgba(139, 0, 0, 0.2)';
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
                src="https://i.imgur.com/62MbxLy.png" 
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
            <strong>MP na Brasa</strong> - Especialistas em churrasco gourmet em <strong>{localConfig.city}-{localConfig.state}</strong>. 
            Kits completos com carnes selecionadas, acompanhamentos premium e tudo que você precisa para um churrasco perfeito.
          </p>
          
          <p style={{ 
            margin: '8px 0', 
            fontSize: isMobile ? '13px' : '14px',
            color: colorPalette.dark,
            lineHeight: '1.5'
          }}>
            © {new Date().getFullYear()} MP na Brasa. Todos os direitos reservados.
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

// ========== COMPONENTE DE PRODUTOS ESGOTADOS (VERSÃO CORRIGIDA SEM OVERFLOW) ========== //
const OutOfStockMessage = ({ isMobile }) => {
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: colorPalette.white,
      padding: isMobile ? '20px 15px' : '40px 35px',
      borderRadius: '15px',
      // 🔥 CORREÇÃO CRUCIAL: maxWidth em % e box-sizing
      maxWidth: isMobile ? '90%' : '550px', // USAR % NO MOBILE
      width: isMobile ? '90%' : 'auto',
      textAlign: 'center',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
      border: `3px solid ${colorPalette.primary}`,
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box', // 🔥 INCLUI PADDING NA LARGURA
      overflow: 'hidden',
      // 🔥 GARANTIR QUE NÃO EXCEDA A TELA
      wordWrap: 'break-word',
      overflowWrap: 'break-word'
    }}>
      {/* Efeito de fundo sutil */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '5px',
        background: `linear-gradient(90deg, ${colorPalette.primary}, ${colorPalette.accent})`
      }} />
      
      <div style={{
        fontSize: isMobile ? '50px' : '80px',
        marginBottom: isMobile ? '12px' : '20px',
        lineHeight: '1'
      }}>
        🛑
      </div>
      
      <h2 style={{
        color: colorPalette.primary,
        fontSize: isMobile ? '18px' : '28px',
        marginBottom: isMobile ? '12px' : '20px',
        fontWeight: '700',
        lineHeight: '1.2', // 🔥 LINHA MAIS COMPACTA
        textAlign: 'center',
        width: '100%',
        wordBreak: 'break-word'
      }}>
        Produtos Temporariamente Esgotados
      </h2>
      
      <div style={{
        color: colorPalette.dark,
        fontSize: isMobile ? '14px' : '18px',
        lineHeight: '1.4',
        marginBottom: isMobile ? '12px' : '20px',
        textAlign: 'center',
        width: '100%',
        wordBreak: 'break-word'
      }}>
        Sentimos muito, mas nossos kits de churrasco estão temporariamente fora de estoque.
      </div>
      
      <div style={{
        color: colorPalette.dark,
        fontSize: isMobile ? '14px' : '18px',
        lineHeight: '1.4',
        marginBottom: isMobile ? '15px' : '20px',
        textAlign: 'center',
        width: '100%',
        fontWeight: '500',
        wordBreak: 'break-word'
      }}>
        Estamos trabalhando para reabastecer o mais rápido possível!
      </div>
      
      <div style={{
        color: colorPalette.secondary,
        fontSize: isMobile ? '12px' : '16px',
        fontStyle: 'italic',
        marginBottom: isMobile ? '20px' : '35px',
        padding: isMobile ? '10px 12px' : '15px 20px',
        backgroundColor: colorPalette.light,
        borderRadius: '8px',
        borderLeft: `4px solid ${colorPalette.accent}`,
        lineHeight: '1.4',
        textAlign: 'center',
        width: '100%',
        wordBreak: 'break-word',
        boxSizing: 'border-box'
      }}>
        Agradecemos sua compreensão e interesse em nossos produtos gourmet.
      </div>
      
      <a 
        href="/"
        style={{
          backgroundColor: colorPalette.primary,
          color: colorPalette.white,
          border: 'none',
          padding: isMobile ? '12px 25px' : '16px 40px',
          borderRadius: '30px',
          fontSize: isMobile ? '14px' : '18px',
          fontWeight: '600',
          cursor: 'pointer',
          textDecoration: 'none',
          display: 'inline-block',
          boxShadow: '0 4px 15px rgba(139, 0, 0, 0.3)',
          width: isMobile ? '100%' : '80%', // 🔥 100% NO MOBILE
          maxWidth: '280px',
          margin: '0 auto',
          textAlign: 'center',
          wordBreak: 'break-word',
          boxSizing: 'border-box'
        }}
      >
        Voltar para Página Inicial
      </a>
    </div>
  );
};

export default function MPNaBrasa() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  // ========== FUNÇÕES DO CARROSSEL ========== //
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === productBanners.length - 1 ? 0 : prev + 1));
    resetInterval();
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? productBanners.length - 1 : prev - 1));
    resetInterval();
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetInterval();
  };

  // Controle do intervalo automático
  const resetInterval = () => {
    clearInterval(slideInterval.current);
    startInterval();
  };

  const startInterval = () => {
    slideInterval.current = setInterval(() => {
      goToNextSlide();
    }, 6000); // 6 segundos para cada banner
  };

  // Detectar mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Iniciar carrossel automático
  useEffect(() => {
    startInterval();
    return () => clearInterval(slideInterval.current);
  }, []);

  // Carrinho
  useEffect(() => {
    const saved = localStorage.getItem('mp_brasa_cart');
    if (saved) {
      const parsed = JSON.parse(saved);
      setCart(parsed);
      setTotal(parsed.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('mp_brasa_cart', JSON.stringify(cart));
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

  // 🔥 ESTILOS ATUALIZADOS PARA EVITAR OVERFLOW HORIZONTAL
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '10px' : '20px',
      backgroundColor: colorPalette.light,
      minHeight: '100vh',
      position: 'relative',
      filter: !salesControl.isSalesActive ? 'blur(3px)' : 'none',
      pointerEvents: !salesControl.isSalesActive ? 'none' : 'auto',
      userSelect: !salesControl.isSalesActive ? 'none' : 'auto',
      // 🔥 CORREÇÃO: GARANTIR QUE NÃO EXCEDA LARGURA
      width: '100%',
      boxSizing: 'border-box',
      overflowX: 'hidden' // 🔥 IMPEDE SCROLL HORIZONTAL NA PÁGINA
    },
    header: {
      textAlign: 'center',
      padding: isMobile ? '20px 15px' : '25px 20px',
      backgroundColor: colorPalette.white,
      borderRadius: isMobile ? '10px' : '15px',
      marginBottom: isMobile ? '20px' : '30px',
      border: `2px solid ${colorPalette.secondary}`,
      boxShadow: '0 4px 12px rgba(44, 44, 44, 0.1)',
      width: '100%',
      boxSizing: 'border-box'
    },
    logo: {
      height: isMobile ? '90px' : '120px',
      marginBottom: isMobile ? '12px' : '15px',
      borderRadius: '10px',
      maxWidth: '100%',
      objectFit: 'contain'
    },
    headerButtonsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: isMobile ? '10px' : '15px',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginTop: isMobile ? '15px' : '20px',
      paddingTop: isMobile ? '15px' : '20px',
      borderTop: `1px solid ${colorPalette.secondary}`,
      width: '100%',
      boxSizing: 'border-box'
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
      boxShadow: '0 2px 5px rgba(139, 0, 0, 0.2)',
      boxSizing: 'border-box',
      ':hover': {
        backgroundColor: colorPalette.white,
        color: colorPalette.primary,
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 10px rgba(139, 0, 0, 0.3)'
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
      display: 'block',
      boxSizing: 'border-box'
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
      boxShadow: '0 2px 10px rgba(44, 44, 44, 0.05)',
      width: '100%',
      boxSizing: 'border-box'
    },
    categoryBtn: {
      padding: isMobile ? '8px 16px' : '10px 20px',
      borderRadius: '30px',
      border: 'none',
      backgroundColor: colorPalette.secondary,
      color: colorPalette.white,
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s',
      fontSize: isMobile ? '13px' : '14px',
      boxSizing: 'border-box'
    },
    activeCategory: {
      backgroundColor: colorPalette.primary,
      color: colorPalette.white
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: isMobile ? '15px' : '20px',
      margin: isMobile ? '20px 0' : '30px 0',
      width: '100%',
      boxSizing: 'border-box'
    },
    productCard: {
      backgroundColor: colorPalette.white,
      borderRadius: isMobile ? '10px' : '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(44, 44, 44, 0.1)',
      border: `1px solid ${colorPalette.secondary}`,
      transition: 'transform 0.3s, box-shadow 0.3s',
      width: '100%',
      boxSizing: 'border-box'
    },
    productImage: {
      width: '100%',
      height: isMobile ? '130px' : '180px',
      objectFit: 'cover',
      backgroundColor: colorPalette.light
    },
    productInfo: {
      padding: isMobile ? '12px' : '15px',
      width: '100%',
      boxSizing: 'border-box'
    },
    productName: {
      fontSize: isMobile ? '14px' : '16px',
      fontWeight: '600',
      marginBottom: '8px',
      color: colorPalette.dark,
      lineHeight: '1.4',
      wordBreak: 'break-word'
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
      fontSize: isMobile ? '14px' : '15px',
      boxSizing: 'border-box'
    },
    pagination: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: isMobile ? '25px 0' : '30px 0',
      gap: isMobile ? '8px' : '10px',
      flexWrap: 'wrap',
      width: '100%',
      boxSizing: 'border-box'
    },
    pageButton: {
      padding: isMobile ? '7px 12px' : '8px 15px',
      backgroundColor: colorPalette.white,
      border: `1px solid ${colorPalette.secondary}`,
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: isMobile ? '13px' : '14px',
      color: colorPalette.dark,
      boxSizing: 'border-box'
    },
    activePage: {
      backgroundColor: colorPalette.primary,
      color: colorPalette.white,
      borderColor: colorPalette.primary
    }
  };

  return (
    <>
      <Head>
        <title>{localConfig.businessName} - Kits de Churrasco em {localConfig.city}-{localConfig.state}</title>
        <meta name="description" content={localConfig.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/Logo MP cafe.png" />
        
        {/* Schema.org */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FoodEstablishment",
            "name": localConfig.businessName,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": localConfig.address,
              "addressLocality": localConfig.city,
              "addressRegion": localConfig.state,
              "postalCode": localConfig.cep
            },
            "telephone": localConfig.phone,
            "servesCuisine": "Brazilian Barbecue",
            "openingHours": "Mo-Su 08:00-20:00"
          })
        }} />
      </Head>

      {/* ========== MENSAGEM DE PRODUTOS ESGOTADOS ========== */}
      {!salesControl.isSalesActive && <OutOfStockMessage isMobile={isMobile} />}

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
            Você chama a galera, a gente resolve o churrasco. - {localConfig.city}-{localConfig.state}
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
          placeholder="🔍 Buscar kits, carnes, utensílios..."
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
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(44, 44, 44, 0.15)';
                }
              }}
              onMouseOut={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(44, 44, 44, 0.1)';
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
                  backgroundColor: colorPalette.secondary + '10',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  marginBottom: '8px',
                  display: 'inline-block',
                  wordBreak: 'break-word'
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

        {/* ========== CARROSSEL DE BANNERS ========== */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1200px',
          margin: isMobile ? '25px auto' : '40px auto',
          overflow: 'hidden',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(139, 0, 0, 0.1)',
          height: isMobile ? '200px' : '350px',
          backgroundColor: colorPalette.white,
          border: `2px solid ${colorPalette.primary}`
        }}>
          <div style={{
            display: 'flex',
            transition: 'transform 0.5s ease',
            transform: `translateX(-${currentSlide * 100}%)`,
            height: '100%'
          }}>
            {productBanners.map((banner) => (
              <div 
                key={banner.id} 
                style={{
                  width: '100%',
                  flexShrink: 0,
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >
                <img 
                  src={isMobile ? banner.mobile : banner.desktop}
                  alt={`Banner de Produtos ${banner.id}`}
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = '/Logo MP cafe.png';
                  }}
                />
              </div>
            ))}
          </div>
          
          {/* Botões de navegação */}
          <button 
            onClick={goToPrevSlide}
            style={{
              position: 'absolute',
              top: '50%',
              left: isMobile ? '10px' : '20px',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.7)',
              border: 'none',
              borderRadius: '50%',
              width: isMobile ? '35px' : '40px',
              height: isMobile ? '35px' : '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              boxShadow: '0 2px 5px rgba(139, 0, 0, 0.2)'
            }}
            aria-label="Slide anterior"
          >
            <span style={{ fontSize: isMobile ? '16px' : '20px', color: colorPalette.primary }}>❮</span>
          </button>
          
          <button 
            onClick={goToNextSlide}
            style={{
              position: 'absolute',
              top: '50%',
              right: isMobile ? '10px' : '20px',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.7)',
              border: 'none',
              borderRadius: '50%',
              width: isMobile ? '35px' : '40px',
              height: isMobile ? '35px' : '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              boxShadow: '0 2px 5px rgba(139, 0, 0, 0.2)'
            }}
            aria-label="Próximo slide"
          >
            <span style={{ fontSize: isMobile ? '16px' : '20px', color: colorPalette.primary }}>❯</span>
          </button>
          
          {/* Indicadores de slide */}
          <div style={{
            position: 'absolute',
            bottom: isMobile ? '15px' : '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: isMobile ? '6px' : '8px',
            zIndex: 10
          }}>
            {productBanners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: isMobile ? '8px' : '10px',
                  height: isMobile ? '8px' : '10px',
                  borderRadius: '50%',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  backgroundColor: currentSlide === index ? colorPalette.primary : 'rgba(255,255,255,0.5)',
                  transition: 'background-color 0.3s'
                }}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
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
