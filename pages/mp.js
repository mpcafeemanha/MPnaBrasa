import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Cart from '../components/Cart';
import Link from 'next/link';
import { useRouter } from 'next/router';

// ========== CONFIGURAÇÃO DE CONTROLE DE VENDAS ========== //
const salesControl = {
  isSalesActive: true,
};

// ========== BANNERS PRODUTOS ========== //
const productBanners = [
  { id: 1, desktop: '/images/banner-churrasco-1.png', mobile: '/images/banner-churrasco-1.png' },
  { id: 2, desktop: '/images/banner-churrasco-2.png', mobile: '/images/banner-churrasco-2.png' },
  { id: 3, desktop: '/images/banner-churrasco-3.png', mobile: '/images/banner-churrasco-3.png' }
];

// ========== CONFIGURAÇÃO MP NA BRASA ========== //
const localConfig = {
  businessName: "MP na Brasa",
  businessType: "Kits de Churrasco Gourmet",
  city: "Joanópolis",
  state: "SP",
  address: "Rua Capitão Antonio Mathias , 720 - Centro",
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

// ========== CATEGORIAS ========== //
const categories = ['Kits Completos', 'Carnes Premium', 'Acompanhamentos', 'Utensílios'];

// ========== PRODUTOS ========== //
const products = [
  { id: 2, name: 'Kit Churrasco Raiz', category: 'Kits Completos', price: 279.90, image: '/images/Kit-Churrasco-Raiz0.png' },
  { id: 3, name: 'Kit Churrasco Premium', category: 'Kits Completos', price: 359.90, image: '/images/Kit-Churrasco-Premium.png' },
  { id: 4, name: 'CONTRA FILÉ BOVINO RESFRIADO COM NOIX NOSSO BEEF FRIGO NOSSO 4 KG', category: 'Carnes Premium', price: 292.99, image: '/images/contra-file-bovino-noix-nosso-beef-4kg.png' },
  { id: 5, name: 'FAROFA DE MANDIOCA TEMPERADA KISABOR 400 G', category: 'Acompanhamentos', price: 9.99, image: '/images/farofa-mandioca-temperada-kisabor-400g.png' },
  { id: 6, name: 'PÃO DE ALHO RESFRIADO AURORA 340 G', category: 'Acompanhamentos', price: 18.99, image: '/images/pao-de-alho-aurora-340g.png' },
  { id: 7, name: 'PICANHA BOVINA RESFRIADA TIPO A NOSSO BEEF FRIGO NOSSO 1,1 KG', category: 'Carnes Premium', price: 127.90, image: '/images/picanha-bovina-tipo-a-nosso-beef-1-1kg.png' },
  { id: 8, name: 'QUEIJO COALHO ESPETO LACTOWAL PCT 7 UN', category: 'Acompanhamentos', price: 24.99, image: '/images/queijo-coalho-espeto-lactowal-7un.png' },
  { id: 9, name: 'SAL GROSSO PARA CHURRASCO MASTER 1 KG', category: 'Acompanhamentos', price: 3.90, image: '/images/sal-grosso-churrasco-master-1kg.png' },
  { id: 10, name: 'LINGUIÇA TOSCANA SADIA 700 G', category: 'Acompanhamentos', price: 30.90, image: '/images/linguica-toscana-sadia-700g.png' },
];

// ========== MODAL PARA DADOS DA ENTREGA ========== //
const DeliveryDataModal = ({ isOpen, onClose, onSave, clientData, isMobile }) => {
  const [formData, setFormData] = useState({ name: '', address: '', phone: '' });

  useEffect(() => {
    if (isOpen) setFormData(clientData);
  }, [isOpen, clientData]);

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9998,
      padding: isMobile ? '15px' : '0'
    }}>
      <div style={{
        backgroundColor: colorPalette.white,
        borderRadius: '15px',
        padding: isMobile ? '20px 15px' : '30px 25px',
        width: isMobile ? '90%' : '500px',
        maxWidth: '95%',
        border: `3px solid ${colorPalette.primary}`
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '25px',
          borderBottom: `2px solid ${colorPalette.primary}`,
          paddingBottom: '10px'
        }}>
          <h3 style={{ color: colorPalette.primary, fontSize: isMobile ? '18px' : '22px', fontWeight: '700', margin: 0 }}>
            📍 Dados para Entrega
          </h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>×</button>
        </div>

        <div style={{ display: 'grid', gap: '20px', marginBottom: '30px' }}>
          <input type="text" name="name" placeholder="Nome completo *" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={modalStyles.input} />
          <input type="tel" name="phone" placeholder="Telefone (WhatsApp) *" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} style={modalStyles.input} />
          <textarea name="address" placeholder="Endereço completo *" rows="3" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} style={modalStyles.textarea} />
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          <button onClick={onClose} style={modalStyles.cancelBtn}>Cancelar</button>
          <button onClick={() => { onSave(formData); onClose(); }} disabled={!formData.name || !formData.phone || !formData.address} style={{...modalStyles.saveBtn, opacity: !formData.name || !formData.phone || !formData.address ? 0.5 : 1}}>💾 Salvar</button>
        </div>
      </div>
    </div>
  );
};

const modalStyles = {
  input: { width: '100%', padding: '12px', borderRadius: '8px', border: `1px solid ${colorPalette.secondary}`, fontSize: '14px', boxSizing: 'border-box' },
  textarea: { width: '100%', padding: '12px', borderRadius: '8px', border: `1px solid ${colorPalette.secondary}`, fontSize: '14px', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box' },
  cancelBtn: { flex: 1, padding: '12px', backgroundColor: colorPalette.white, color: colorPalette.primary, border: `2px solid ${colorPalette.primary}`, borderRadius: '8px', fontWeight: '600', cursor: 'pointer' },
  saveBtn: { flex: 2, padding: '12px', backgroundColor: colorPalette.primary, color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }
};

// ========== COMPONENTE DE PRODUTOS ESGOTADOS ========== //
const OutOfStockMessage = ({ isMobile }) => (
  <div style={{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: colorPalette.white,
    padding: isMobile ? '20px 15px' : '40px 35px',
    borderRadius: '15px',
    maxWidth: isMobile ? '90%' : '550px',
    textAlign: 'center',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
    border: `3px solid ${colorPalette.primary}`,
    zIndex: 9999
  }}>
    <div style={{ fontSize: isMobile ? '50px' : '80px', marginBottom: isMobile ? '12px' : '20px' }}>🛑</div>
    <h2 style={{ color: colorPalette.primary, fontSize: isMobile ? '18px' : '28px', marginBottom: isMobile ? '12px' : '20px', fontWeight: '700' }}>Produtos Temporariamente Esgotados</h2>
    <div style={{ color: colorPalette.dark, fontSize: isMobile ? '14px' : '18px', marginBottom: isMobile ? '12px' : '20px' }}>Sentimos muito, mas nossos kits de churrasco estão temporariamente fora de estoque.</div>
    <a href="/" style={{ backgroundColor: colorPalette.primary, color: colorPalette.white, padding: isMobile ? '12px 25px' : '16px 40px', borderRadius: '30px', fontSize: isMobile ? '14px' : '18px', fontWeight: '600', textDecoration: 'none', display: 'inline-block' }}>Voltar para Página Inicial</a>
  </div>
);

// ========== RODAPÉ ========== //
const FooterClean = ({ isMobile }) => (
  <footer style={footerStyles.container}>
    <div style={footerStyles.content}>
      <h3 style={footerStyles.title}>📋 Informações Legais</h3>
      <div style={footerStyles.links}>
        <Link href="/politica-de-privacidade" style={footerStyles.link}>🔒 Privacidade</Link>
        <Link href="/politica-devolucao-e-reembolso" style={footerStyles.link}>🔄 Devolução e Reembolso</Link>
        <Link href="/termos" style={footerStyles.link}>📄 Termos</Link>
        <Link href="/quem-somos" style={footerStyles.link}>👥 Sobre</Link>
      </div>
      <div style={footerStyles.divider}></div>
      <div style={footerStyles.social}>
        <h4 style={footerStyles.socialTitle}>Siga-nos nas Redes Sociais</h4>
        <div style={footerStyles.socialIcons}>
          <a href="https://www.facebook.com/mpnabrasa" target="_blank" rel="noopener noreferrer" style={footerStyles.socialIcon}><img src="https://i.imgur.com/prULUUA.png" alt="Facebook" style={{ width: '20px' }} /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={footerStyles.socialIcon}><img src="https://i.imgur.com/I0ZZLjG.png" alt="Instagram" style={{ width: '20px' }} /></a>
          <a href={`https://wa.me/5511969180048`} target="_blank" rel="noopener noreferrer" style={footerStyles.socialIcon}><img src="https://i.imgur.com/62MbxLy.png" alt="WhatsApp" style={{ width: '20px' }} /></a>
        </div>
      </div>
          <div style={footerStyles.info}>
            <p style={footerStyles.seoText}>
              <strong>MP na Brasa</strong> - Especialistas em churrasco gourmet em <strong>{localConfig.city}-{localConfig.state}</strong>. 
              Kits completos com carnes selecionadas e acompanhamentos premium para um churrasco perfeito.
            </p>
            <p>© {new Date().getFullYear()} MP na Brasa. Todos os direitos reservados.</p>
            <p>🕒 Funcionamento: quinta a domingo | Pedidos até 10h</p>
          </div>
        </div>
      </footer>
);

const footerStyles = {
  container: { marginTop: '60px', padding: '30px 15px', textAlign: 'center', borderTop: `2px solid ${colorPalette.primary}`, backgroundColor: '#f8f9fa', borderRadius: '12px 12px 0 0', width: '100%', boxSizing: 'border-box' },
  content: { maxWidth: '1200px', margin: '0 auto' },
  title: { color: colorPalette.primary, fontSize: '18px', marginBottom: '25px', fontWeight: '600' },
  links: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px', marginBottom: '30px' },
  link: { color: colorPalette.primary, textDecoration: 'none', fontWeight: '600', fontSize: '14px', padding: '12px 8px', borderRadius: '8px', backgroundColor: 'white', border: `1px solid ${colorPalette.secondary}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' },
  divider: { height: '1px', background: `linear-gradient(90deg, transparent, ${colorPalette.primary}, transparent)`, margin: '25px auto', maxWidth: '300px' },
  social: { marginBottom: '20px' },
  socialTitle: { color: colorPalette.primary, fontSize: '16px', marginBottom: '15px', fontWeight: '600' },
  socialIcons: { display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center', flexWrap: 'wrap' },
  socialIcon: { display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'white', border: `1px solid ${colorPalette.secondary}` },
  info: { textAlign: 'center', paddingTop: '15px', borderTop: `1px solid ${colorPalette.secondary}`, fontSize: '12px', color: '#666' }
};

export default function MPNaBrasa() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clientData, setClientData] = useState({ name: '', address: '', phone: '' });
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  const slideInterval = useRef(null);

  // ========== REDIRECIONAR PARA DETALHES DO PRODUTO ========== //
  const redirectToProductDetails = (productId) => {
    router.push(`/produto/${productId}`);
  };

  // ========== CARREGAR DADOS DO CLIENTE ========== //
  useEffect(() => {
    const savedData = localStorage.getItem('mp_brasa_client_data');
    if (savedData) setClientData(JSON.parse(savedData));
  }, []);

  const saveClientData = (data) => {
    setClientData(data);
    localStorage.setItem('mp_brasa_client_data', JSON.stringify(data));
  };

  // ========== CARROSSEL ========== //
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

  const resetInterval = () => {
    clearInterval(slideInterval.current);
    startInterval();
  };

  const startInterval = () => {
    slideInterval.current = setInterval(() => goToNextSlide(), 6000);
  };

  // Detectar mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    if (product.price <= 0) {
      alert('Este produto está temporariamente indisponível.');
      return;
    }
    setCart(prev => {
      const existing = prev.findIndex(item => item.id === product.id);
      let newCart;
      if (existing !== -1) {
        newCart = [...prev];
        newCart[existing] = { ...newCart[existing], quantity: (newCart[existing].quantity || 1) + 1 };
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
    const matchesSearch = !searchTerm || p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // ESTILOS
  const styles = {
    container: { maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '10px' : '20px', backgroundColor: colorPalette.light, minHeight: '100vh', width: '100%', boxSizing: 'border-box' },
    header: { textAlign: 'center', padding: isMobile ? '20px 15px' : '25px 20px', backgroundColor: colorPalette.white, borderRadius: isMobile ? '10px' : '15px', marginBottom: isMobile ? '20px' : '30px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' },
    logo: { height: isMobile ? '90px' : '120px', marginBottom: isMobile ? '12px' : '15px', borderRadius: '10px', maxWidth: '100%', objectFit: 'contain' },
    search: { width: '100%', maxWidth: isMobile ? '90%' : '500px', margin: isMobile ? '15px auto' : '20px auto', padding: isMobile ? '10px 15px' : '12px 20px', borderRadius: '30px', border: `2px solid ${colorPalette.secondary}`, fontSize: isMobile ? '14px' : '16px', display: 'block', boxSizing: 'border-box' },
    categories: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: isMobile ? '8px' : '10px', margin: isMobile ? '15px 0' : '20px 0', padding: isMobile ? '12px' : '15px', backgroundColor: colorPalette.white, borderRadius: isMobile ? '8px' : '10px' },
    categoryBtn: { padding: isMobile ? '8px 16px' : '10px 20px', borderRadius: '30px', border: 'none', backgroundColor: colorPalette.secondary, color: colorPalette.white, fontWeight: '600', cursor: 'pointer', fontSize: isMobile ? '13px' : '14px' },
    activeCategory: { backgroundColor: colorPalette.primary },
    grid: { display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? '15px' : '20px', margin: isMobile ? '20px 0' : '30px 0' },
    productCard: { backgroundColor: colorPalette.white, borderRadius: isMobile ? '10px' : '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', border: `1px solid ${colorPalette.secondary}`, transition: 'transform 0.3s', position: 'relative' },
    productImage: { width: '100%', height: isMobile ? '130px' : '180px', objectFit: 'cover', backgroundColor: colorPalette.light },
    productInfo: { padding: isMobile ? '12px' : '15px' },
    productName: { fontSize: isMobile ? '14px' : '16px', fontWeight: '600', marginBottom: '8px', color: colorPalette.dark, lineHeight: '1.4' },
    productPrice: { fontSize: isMobile ? '16px' : '20px', fontWeight: '700', color: (product) => product.price <= 0 ? '#999' : colorPalette.success, marginBottom: isMobile ? '12px' : '15px' },
    addBtn: { width: '100%', padding: isMobile ? '10px' : '12px', backgroundColor: (product) => product.price <= 0 ? '#999' : colorPalette.primary, color: colorPalette.white, border: 'none', borderRadius: '6px', fontWeight: '600', cursor: (product) => product.price <= 0 ? 'not-allowed' : 'pointer', fontSize: isMobile ? '14px' : '15px' },
    pagination: { display: 'flex', justifyContent: 'center', alignItems: 'center', margin: isMobile ? '25px 0' : '30px 0', gap: isMobile ? '8px' : '10px', flexWrap: 'wrap' },
    pageButton: { padding: isMobile ? '7px 12px' : '8px 15px', backgroundColor: colorPalette.white, border: `1px solid ${colorPalette.secondary}`, borderRadius: '6px', cursor: 'pointer', fontSize: isMobile ? '13px' : '14px' },
    activePage: { backgroundColor: colorPalette.primary, color: colorPalette.white, borderColor: colorPalette.primary }
  };

  return (
    <>
      <Head>
        <title>{localConfig.businessName} - Kits de Churrasco em {localConfig.city}-{localConfig.state}</title>
        <meta name="description" content={localConfig.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/Logo MP cafe.png" />
        <meta property="og:title" content={`${localConfig.businessName} - Kits de Churrasco Gourmet`} />
        <meta property="og:description" content={localConfig.description} />
        <meta property="og:image" content={localConfig.logo} />
        <meta property="og:url" content={localConfig.url} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={localConfig.url} />
      </Head>

      {!salesControl.isSalesActive && <OutOfStockMessage isMobile={isMobile} />}

      <DeliveryDataModal isOpen={showDeliveryModal} onClose={() => setShowDeliveryModal(false)} onSave={saveClientData} clientData={clientData} isMobile={isMobile} />

      <div style={styles.container}>
        {/* CABEÇALHO TOPO - ESTILO PMG ORIGINAL */}
        <div style={{ backgroundColor: colorPalette.primary, color: colorPalette.white, padding: isMobile ? '10px 12px' : '12px 20px', borderRadius: '8px', marginBottom: isMobile ? '15px' : '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: isMobile ? '6px' : '10px', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
            {/* COLUNA 1: BOTÃO PÁGINA INICIAL */}
            <div style={{ display: 'flex', gap: isMobile ? '6px' : '8px', alignItems: 'center', flexShrink: 0 }}>
              <a href="/" style={{ backgroundColor: colorPalette.white, color: colorPalette.primary, border: `1px solid ${colorPalette.white}`, padding: isMobile ? '6px 10px' : '8px 12px', borderRadius: '20px', fontSize: isMobile ? '12px' : '13px', fontWeight: '600', cursor: 'pointer', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span>🏠</span> Página Inicial
              </a>
            </div>
            
            {/* COLUNA 2: SAUDAÇÃO */}
            <div style={{ flex: 1, textAlign: 'center', padding: isMobile ? '0 5px' : '0 10px', minWidth: isMobile ? '100%' : 'auto', order: isMobile ? 3 : 0, marginTop: isMobile ? '8px' : '0' }}>
              <p style={{ fontSize: isMobile ? '13px' : '14px', fontWeight: '600', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <span>👋</span> {clientData.name ? `Olá ${clientData.name.split(' ')[0]}, seja bem-vindo(a)!` : 'Olá, seja bem-vindo(a)!'}
              </p>
            </div>
            
            {/* COLUNA 3: BOTÃO DADOS DA ENTREGA */}
            <button onClick={() => setShowDeliveryModal(true)} style={{ backgroundColor: colorPalette.accent, color: colorPalette.white, border: `1px solid ${colorPalette.accent}`, padding: isMobile ? '6px 10px' : '8px 12px', borderRadius: '20px', fontSize: isMobile ? '12px' : '13px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', flexShrink: 0 }}>
              <span>📍</span> Dados da Entrega
            </button>
          </div>
        </div>

        {/* HEADER UNIFICADO */}
        <header style={styles.header}>
          <img src="/Logo MP cafe.png" alt={localConfig.businessName} style={styles.logo} />
          <h1 style={{ color: colorPalette.primary, marginBottom: isMobile ? '5px' : '8px', fontSize: isMobile ? '22px' : '30px', fontWeight: '700' }}>{localConfig.businessName}</h1>
          <p style={{ color: colorPalette.accent, fontSize: isMobile ? '14px' : '16px', margin: 0, fontWeight: '500' }}>Você chama a galera, a gente resolve o churrasco. - {localConfig.city}-{localConfig.state}</p>
        </header>

        {/* SEARCH */}
        <input type="text" placeholder="🔍 Buscar kits, carnes, utensílios..." value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }} style={styles.search} />

        {/* CATEGORIES */}
        <div style={styles.categories}>
          <button onClick={() => { setSelectedCategory('Todos'); setCurrentPage(1); }} style={{ ...styles.categoryBtn, ...(selectedCategory === 'Todos' && styles.activeCategory) }}>Todos</button>
          {categories.map(cat => (
            <button key={cat} onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }} style={{ ...styles.categoryBtn, ...(selectedCategory === cat && styles.activeCategory) }}>{cat}</button>
          ))}
        </div>

        {/* PRODUCTS GRID COM LUPA */}
        <div style={styles.grid}>
          {currentProducts.map(product => {
            const isAvailable = product.price > 0;
            return (
              <div key={product.id} style={{ ...styles.productCard, opacity: !isAvailable ? 0.7 : 1 }}>
                {/* BOTÃO LUPA - ESTILO PMG ORIGINAL */}
                <button
                  onClick={() => redirectToProductDetails(product.id)}
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    width: isMobile ? '28px' : '32px',
                    height: isMobile ? '28px' : '32px',
                    backgroundColor: colorPalette.primary,
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease',
                    zIndex: 5,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                  }}
                  onMouseOver={(e) => { e.target.style.backgroundColor = colorPalette.accent; e.target.style.transform = 'scale(1.1)'; }}
                  onMouseOut={(e) => { e.target.style.backgroundColor = colorPalette.primary; e.target.style.transform = 'scale(1)'; }}
                  title="Ver detalhes do produto"
                >
                  🔍
                </button>
                
                <img src={product.image} alt={product.name} style={{ ...styles.productImage, filter: !isAvailable ? 'grayscale(80%)' : 'none' }} onError={(e) => { e.target.src = '/Logo MP cafe.png'; }} />
                <div style={styles.productInfo}>
                  <h3 style={styles.productName}>{product.name}</h3>
                  <div style={{ fontSize: isMobile ? '11px' : '12px', color: colorPalette.text, backgroundColor: colorPalette.secondary + '10', padding: '4px 8px', borderRadius: '4px', marginBottom: '8px', display: 'inline-block' }}>{product.category}</div>
                  <p style={{ ...styles.productPrice, color: !isAvailable ? '#999' : colorPalette.success, textDecoration: !isAvailable ? 'line-through' : 'none' }}>{isAvailable ? `R$ ${product.price.toFixed(2)}` : 'INDISPONÍVEL'}</p>
                  <button onClick={() => addToCart(product)} disabled={!isAvailable} style={{ ...styles.addBtn, backgroundColor: !isAvailable ? '#999' : colorPalette.primary, cursor: !isAvailable ? 'not-allowed' : 'pointer' }}>{isAvailable ? 'Adicionar ao Carrinho' : 'Indisponível'}</button>
                </div>
              </div>
            );
          })}
        </div>

        {/* PAGINAÇÃO */}
        {filteredProducts.length > productsPerPage && (
          <div style={styles.pagination}>
            <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} style={{ ...styles.pageButton, ...(currentPage === 1 && { opacity: 0.5, cursor: 'not-allowed' }) }}>Anterior</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button key={page} onClick={() => setCurrentPage(page)} style={{ ...styles.pageButton, ...(page === currentPage && styles.activePage) }}>{page}</button>
            ))}
            <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} style={{ ...styles.pageButton, ...(currentPage === totalPages && { opacity: 0.5, cursor: 'not-allowed' }) }}>Próxima</button>
          </div>
        )}

        {/* CARROSSEL DE BANNERS */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', margin: isMobile ? '25px auto' : '40px auto', overflow: 'hidden', borderRadius: '10px', boxShadow: '0 4px 12px rgba(139, 0, 0, 0.1)', height: isMobile ? 'calc(100vw / 3)' : '400px', backgroundColor: colorPalette.dark }}>
          <div style={{ display: 'flex', transition: 'transform 0.5s ease', transform: `translateX(-${currentSlide * 100}%)`, height: '100%' }}>
            {productBanners.map((banner) => (
              <div key={banner.id} style={{ width: '100%', flexShrink: 0, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <img src={isMobile ? banner.mobile : banner.desktop} alt={`Banner de Produtos ${banner.id}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" onError={(e) => { e.target.src = '/Logo MP cafe.png'; }} />
              </div>
            ))}
          </div>
          <button onClick={goToPrevSlide} style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '50%', width: '35px', height: '35px', cursor: 'pointer', zIndex: 10 }}><span style={{ fontSize: '16px', color: colorPalette.primary }}>❮</span></button>
          <button onClick={goToNextSlide} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '50%', width: '35px', height: '35px', cursor: 'pointer', zIndex: 10 }}><span style={{ fontSize: '16px', color: colorPalette.primary }}>❯</span></button>
          <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px', zIndex: 10 }}>
            {productBanners.map((_, index) => (
              <button key={index} onClick={() => goToSlide(index)} style={{ width: '8px', height: '8px', borderRadius: '50%', border: 'none', padding: 0, cursor: 'pointer', backgroundColor: currentSlide === index ? colorPalette.primary : 'rgba(255,255,255,0.5)' }} />
            ))}
          </div>
        </div>

        {/* CARRINHO */}
        <Cart cart={cart} setCart={setCart} removeFromCart={removeFromCart} />

        {/* RODAPÉ */}
        <FooterClean isMobile={isMobile} />
      </div>
    </>
  );
}
