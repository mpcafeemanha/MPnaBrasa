import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Cart from '../../components/Cart'; 
import useTrackUser from '../../hook/useTrackUser';
import { supabase } from '../../lib/supabaseClient';

// ========== CONFIGURAÇÃO MP NA BRASA ========== //
const localConfig = {
  businessName: "MP na Brasa",
  businessType: "Kits de Churrasco Gourmet",
  city: "Joanópolis",
  state: "SP",
  deliveryArea: "Joanópolis e região",
  url: "https://mpnabrasa.shop",
  logo: "/Logo MP cafe.png",
  whatsapp: "5511969180048",
  phone: "(11) 96918-0048",
  description: "Kits completos de churrasco gourmet com carnes premium, acompanhamentos selecionados e utensílios de qualidade para um churrasco perfeito."
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

// ========== CONFIGURAÇÃO DAS PALAVRAS-CHAVE ========== //
const categoryKeywords = {
  'Kits Completos': 'kit churrasco, churrasco completo, kit churrasco gourmet',
  'Carnes Premium': 'carne premium, picanha, contrafilé, carne bovina',
  'Acompanhamentos': 'farofa, pão de alho, queijo coalho, sal grosso, linguiça',
  'Utensílios': 'utensílios churrasco, espetos, grelha'
};

const generateImageSEO = (product) => {
  const categoryKey = categoryKeywords[product.category] || 'produto para churrasco';
  return {
    alt: `${product.name} - ${categoryKey} - MP na Brasa`,
    title: `${product.name} - MP na Brasa`,
  };
};

const generateSlug = (name) => {
  return name
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
    .substring(0, 60);
};

const generateDescription = (product) => {
  const descriptions = {
    'Kits Completos': `Kit completo de churrasco com ${product.name}. Perfeito para reunir a família e os amigos.`,
    'Carnes Premium': `Carne premium selecionada: ${product.name}. Ideal para um churrasco de qualidade.`,
    'Acompanhamentos': `${product.name} - O acompanhamento perfeito para seu churrasco.`,
    'Utensílios': `${product.name} - Utensílio de qualidade para um churrasco prático.`
  };
  return descriptions[product.category] || `${product.name}. Produto de alta qualidade para seu churrasco.`;
};

const generateBrand = (product) => {
  const brandMap = {
    'NOSSO BEEF': 'Nosso Beef',
    'AURORA': 'Aurora',
    'SADIA': 'Sadia',
    'LACTOWAL': 'Lactowal',
    'MASTER': 'Master',
    'KISABOR': 'Kisabor',
    'default': 'MP na Brasa'
  };
  const foundBrand = Object.keys(brandMap).find(brand => 
    product.name.toUpperCase().includes(brand)
  );
  return brandMap[foundBrand] || brandMap.default;
};
  
export async function getStaticProps({ params }) {
  const id = parseInt(params.id.split('-')[0]);
  const product = products.find(p => p.id === id);
  if (!product) return { notFound: true };
  return { props: { product }, revalidate: 3600 };
}

export default function ProductPage({ product: initialProduct }) {
  // ========== HOOK DE RASTREAMENTO DE VISITANTES ========== //
  useTrackUser(); // ✅ ADICIONAR ESTA LINHA
  
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(initialProduct);
  const [loading, setLoading] = useState(!initialProduct);
  const [isMobile, setIsMobile] = useState(false);
  const [showAddedFeedback, setShowAddedFeedback] = useState(false);
  const [clientData, setClientData] = useState({ name: '', address: '', phone: '' });
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  
// ========== ESTADO DO CARRINHO ========== //
const [cart, setCart] = useState([]);
const [total, setTotal] = useState(0);
const [cartLoaded, setCartLoaded] = useState(false); // NOVO: flag de carregamento

// ========== CARREGAR CARRINHO DO LOCALSTORAGE ========== //
useEffect(() => {
  const savedCart = localStorage.getItem('mp_brasa_cart');
  console.log('📦 [PRODUTO] Carregando carrinho do localStorage:', savedCart);
  if (savedCart) {
    const parsed = JSON.parse(savedCart);
    console.log('📦 [PRODUTO] Carrinho carregado:', parsed.length, 'itens');
    setCart(parsed);
    setTotal(parsed.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0));
  } else {
    console.log('📦 [PRODUTO] Nenhum carrinho encontrado no localStorage');
  }
  setCartLoaded(true); // Marca que o carregamento terminou
}, []);

// ========== SALVAR CARRINHO NO LOCALSTORAGE ========== //
useEffect(() => {
  // SÓ SALVA SE JÁ TIVER CARREGADO (evita salvar vazio)
  if (!cartLoaded) return;
  
  if (cart.length > 0) {
    console.log('💾 [PRODUTO] Salvando carrinho no localStorage:', cart.length, 'itens');
    localStorage.setItem('mp_brasa_cart', JSON.stringify(cart));
  } else {
    console.log('💾 [PRODUTO] Carrinho vazio, não salvando');
    // Não faz nada quando está vazio
  }
}, [cart, cartLoaded]);

  // ========== FUNÇÃO ADICIONAR AO CARRINHO ========== //
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

  // ========== FUNÇÃO REMOVER DO CARRINHO ========== //
  const removeFromCart = (productId) => {
    setCart(prev => {
      const newCart = prev.filter(item => item.id !== productId);
      setTotal(newCart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0));
      return newCart;
    });
  };

  useEffect(() => {
    const savedData = localStorage.getItem('mp_brasa_client_data');
    if (savedData) setClientData(JSON.parse(savedData));
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!initialProduct && id) {
      const productId = parseInt(id.split('-')[0]);
      setProduct(products.find(p => p.id === productId));
      setLoading(false);
    }
  }, [id, initialProduct]);

  const getProductStatus = (product) => ({
    available: product?.price > 0,
    price: product?.price > 0 ? `R$ ${product.price.toFixed(2)}` : 'Indisponível',
    priceStyle: product?.price > 0 ? styles.productPrice : styles.unavailablePrice,
    buttonText: product?.price > 0 ? 'Adicionar ao Carrinho' : 'Indisponível',
    buyButtonText: product?.price > 0 ? 'Comprar Agora' : 'Produto Indisponível',
    disabled: product?.price === 0,
    cardOpacity: product?.price === 0 ? 0.7 : 1
  });

  const handleAddToCart = () => {
    if (!product || !getProductStatus(product).available) return;
    addToCart(product);
    setShowAddedFeedback(true);
    setTimeout(() => setShowAddedFeedback(false), 2000);
  };

  const isProductInCart = product && cart.some(item => item.id === product.id);
  const handleBuyNow = () => {
    if (!product || !getProductStatus(product).available) return;
    handleAddToCart();
    // Opcional: redirecionar para o carrinho
    // router.push('/carrinho');
  };

  const DeliveryDataModal = ({ isOpen, onClose, onSave, clientData }) => {
    const [formData, setFormData] = useState({ name: '', address: '', phone: '' });

    useEffect(() => {
      if (isOpen) setFormData(clientData);
    }, [isOpen, clientData]);

    if (!isOpen) return null;

    return (
      <div style={modalStyles.overlay}>
        <div style={modalStyles.container}>
          <div style={modalStyles.header}>
            <h3 style={modalStyles.title}>📍 Dados para Entrega</h3>
            <button onClick={onClose} style={modalStyles.closeBtn}>×</button>
          </div>
          <div style={modalStyles.form}>
            <input type="text" name="name" placeholder="Nome completo *" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={modalStyles.input} />
            <input type="tel" name="phone" placeholder="Telefone (WhatsApp) *" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} style={modalStyles.input} />
            <textarea name="address" placeholder="Endereço completo *" rows="3" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} style={modalStyles.textarea} />
          </div>
          <div style={modalStyles.buttons}>
            <button onClick={onClose} style={modalStyles.cancelBtn}>Cancelar</button>
            <button onClick={() => { onSave(formData); onClose(); }} disabled={!formData.name || !formData.phone || !formData.address} style={{...modalStyles.saveBtn, opacity: !formData.name || !formData.phone || !formData.address ? 0.5 : 1}}>💾 Salvar</button>
          </div>
        </div>
      </div>
    );
  };

  if (loading) return <div style={{ padding: '50px', textAlign: 'center' }}>Carregando...</div>;
  if (!product) return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Produto não encontrado</h1>
      <button onClick={() => router.push('/')} style={{ backgroundColor: colorPalette.primary, color: 'white', padding: '12px 24px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' }}>Voltar</button>
    </div>
  );

  const canonicalUrl = `${localConfig.url}/produto/${product.id}-${generateSlug(product.name)}`;
  const seo = generateImageSEO(product);
  const status = getProductStatus(product);

  return (
    <>
      <Head>
        <title>{product.name} | MP na Brasa | {product.category}</title>
        <meta name="description" content={`${product.name} - ${product.category}. ${status.available ? `R$ ${product.price.toFixed(2)}` : 'Indisponível'}. ${localConfig.description}`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${product.name} | MP na Brasa`} />
        <meta property="og:description" content={`${product.name} - ${product.category}. ${status.available ? `R$ ${product.price.toFixed(2)}` : ''}`} />
        <meta property="og:image" content={product.image} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="product" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="product:price:amount" content={product.price.toFixed(2)} />
        <meta property="product:price:currency" content="BRL" />
        <meta property="product:availability" content={status.available ? "in stock" : "out of stock"} />
      </Head>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": generateDescription(product),
        "category": product.category,
        "image": product.image,
        "brand": { "@type": "Brand", "name": generateBrand(product) },
        "offers": { "@type": "Offer", "price": product.price > 0 ? product.price.toFixed(2) : "0.00", "priceCurrency": "BRL", "availability": status.available ? "https://schema.org/InStock" : "https://schema.org/OutOfStock" }
      }) }} />

      {showAddedFeedback && (
        <div style={feedbackStyles.container}>
          ✅ Produto adicionado ao carrinho!
        </div>
      )}

      <DeliveryDataModal isOpen={showDeliveryModal} onClose={() => setShowDeliveryModal(false)} onSave={(data) => { setClientData(data); localStorage.setItem('mp_brasa_client_data', JSON.stringify(data)); }} clientData={clientData} />

      <div style={styles.container}>
        
        {/* CABEÇALHO - MESMO ESTILO DO ORIGINAL PMG */}
        <div style={styles.header}>
          <div style={styles.headerContent}>
            {/* TÍTULO PRINCIPAL */}
            <h1 style={styles.title}>MP NA BRASA</h1>
            
            {/* MENSAGEM DE BOAS-VINDAS */}
            {clientData.name && (
              <div style={styles.welcomeMessage}>
                Olá {clientData.name.split(' ')[0]}, seja bem-vindo(a)!
              </div>
            )}
            
            {/* BOTÕES DE NAVEGAÇÃO */}
            <div style={styles.navButtons}>
              <button 
                style={styles.navButton}
                onClick={() => router.push('/')}
              >
                Página Inicial
              </button>
              <button 
                style={styles.navButton}
                onClick={() => router.push('/mp')}
              >
                Mais produtos
              </button>
              <button 
                style={styles.deliveryButton}
                onClick={() => setShowDeliveryModal(true)}
              >
                📍 Dados da Entrega
              </button>
            </div>
          </div>
        </div>

        {/* PRODUTO */}
        <div style={{
          ...styles.productContainer,
          opacity: status.cardOpacity
        }}>
          
          {/* IMAGEM DO PRODUTO - FUNDO BRANCO */}
          <div style={styles.imageContainer}>
            <img 
              src={product.image} 
              alt={seo.alt}
              title={seo.title}
              style={styles.productImage}
              onError={(e) => {
                e.target.src = localConfig.logo;
              }}
            />
            {!status.available && (
              <div style={styles.unavailableBadge}>
                INDISPONÍVEL
              </div>
            )}
          </div>

          {/* INFORMAÇÕES DO PRODUTO */}
          <div style={styles.productInfo}>
            <div style={styles.productNameContainer}>
              <h1 style={styles.productName}>
                {product.name}
              </h1>
              <div style={styles.brandBadge}>
                <span style={styles.badge}>MP NA BRASA</span>
              </div>
            </div>

            <div style={styles.productCategory}>
              {product.category}
            </div>

            {/* PREÇO */}
            <div style={status.priceStyle}>
              {status.price}
            </div>

            {/* BOTÕES DE AÇÃO */}
            <div style={styles.actionButtons}>
              <button
                onClick={handleAddToCart}
                disabled={!status.available}
                style={{
                  ...styles.addToCartButton,
                  backgroundColor: !status.available ? '#ccc' : (isProductInCart ? colorPalette.success : colorPalette.primary),
                  cursor: !status.available ? 'not-allowed' : 'pointer'
                }}
              >
                <span style={styles.buttonIcon}>🛒</span>
                {status.buttonText}
              </button>
              
              <button
                onClick={handleBuyNow}
                disabled={!status.available}
                style={{
                  ...styles.buyNowButton,
                  backgroundColor: !status.available ? '#ccc' : colorPalette.accent,
                  cursor: !status.available ? 'not-allowed' : 'pointer'
                }}
              >
                {status.buyButtonText}
              </button>
            </div>

            {/* DESCRIÇÃO */}
            <div style={styles.descriptionSection}>
              <h2 style={styles.sectionTitle}>Descrição do Produto</h2>
              <p style={styles.descriptionText}>
                {generateDescription(product)}
              </p>
            </div>

            {/* INFORMAÇÕES DE ENTREGA - SIMPLIFICADA */}
            <div style={styles.deliveryInfo}>
              <h3 style={styles.sectionTitle}>🚚 Informações de Entrega</h3>
              
              <div style={styles.deliveryList}>
                <div style={styles.deliveryItem}>
                  <span style={styles.checkIcon}>✓</span>
                  Entrega em até 1 hora
                </div>
                <div style={styles.deliveryItem}>
                  <span style={styles.checkIcon}>✓</span>
                  Funcionamos: quinta a domingo
                </div>
                <div style={styles.deliveryItem}>
                  <span style={styles.checkIcon}>✓</span>
                  Pedidos até às 10h
                </div>
                <div style={styles.deliveryItem}>
                  <span style={styles.checkIcon}>✓</span>
                  Área de entrega: {localConfig.deliveryArea}
                </div>
              </div>

              {!clientData.name && (
                <button
                  onClick={() => setShowDeliveryModal(true)}
                  style={styles.setAddressButton}
                >
                  📍 Cadastrar endereço para entrega
                </button>
              )}

              {clientData.address && (
                <div style={styles.savedAddress}>
                  <strong>📍 Endereço cadastrado:</strong>
                  <p style={{ margin: '5px 0 0 0', fontSize: '13px' }}>{clientData.address}</p>
                </div>
              )}
            </div>

            {/* VANTAGENS */}
            <div style={styles.advantagesSection}>
              <h3 style={styles.sectionTitle}>🌟 Por que comprar na MP na Brasa?</h3>
              <div style={styles.advantagesList}>
                <div style={styles.advantageItem}>
                  <span style={styles.advantageIcon}>🥩</span>
                  Carnes premium
                </div>
                <div style={styles.advantageItem}>
                  <span style={styles.advantageIcon}>⚡</span>
                  Entrega rápida
                </div>
                <div style={styles.advantageItem}>
                  <span style={styles.advantageIcon}>🎯</span>
                  Kits completos
                </div>
                <div style={styles.advantageItem}>
                  <span style={styles.advantageIcon}>⭐</span>
                  Qualidade garantida
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CARRINHO */}
      <Cart cart={cart} setCart={setCart} removeFromCart={removeFromCart} />

      {/* RODAPÉ - MESMO ESTILO DO ORIGINAL */}
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
              <a href="https://www.facebook.com/mpnabrasa" target="_blank" rel="noopener noreferrer" style={footerStyles.socialIcon}>
                <img src="https://i.imgur.com/prULUUA.png" alt="Facebook" style={{ width: '20px', height: '20px' }} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={footerStyles.socialIcon}>
                <img src="https://i.imgur.com/I0ZZLjG.png" alt="Instagram" style={{ width: '20px', height: '20px' }} />
              </a>
              <a href={`https://wa.me/${localConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" style={footerStyles.socialIcon}>
                <img src="https://i.imgur.com/62MbxLy.png" alt="WhatsApp" style={{ width: '20px', height: '20px' }} />
              </a>
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

      <style jsx>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; transform: translateY(-10px); }
          10%, 90% { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 768px) {
          .productContainer {
            flex-direction: column;
          }
          
          .productImage {
            width: 100%;
            height: 250px;
          }
          
          .navButtons {
            flex-direction: column;
            gap: 10px;
          }
          
          .navButton, .deliveryButton {
            width: 100%;
          }
          
          .actionButtons {
            flex-direction: column;
          }
          
          .addToCartButton, .buyNowButton {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

// ========== ESTILOS (mesmos que você já tinha) ========== //
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '15px',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh'
  },
  
  header: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    marginBottom: '20px',
    padding: '15px',
    zIndex: '100'
  },
  
  headerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px'
  },
  
  title: {
    color: colorPalette.primary,
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0',
    textAlign: 'center'
  },
  
  welcomeMessage: {
    backgroundColor: '#f8f9fa',
    padding: '8px 15px',
    borderRadius: '20px',
    fontSize: '14px',
    color: '#333',
    fontWeight: '600'
  },
  
  navButtons: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    width: '100%',
    flexWrap: 'wrap'
  },
  
  navButton: {
    backgroundColor: colorPalette.primary,
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    minWidth: '120px'
  },
  
  deliveryButton: {
    backgroundColor: colorPalette.accent,
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    minWidth: '120px'
  },
  
  productContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    marginBottom: '40px'
  },
  
  imageContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative'
  },
  
  productImage: {
    width: '100%',
    maxWidth: '500px',
    height: '300px',
    objectFit: 'contain',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    backgroundColor: colorPalette.white
  },
  
  unavailableBadge: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '14px',
    fontWeight: 'bold'
  },
  
  productInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  
  productNameContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  
  productName: {
    fontSize: '22px',
    color: '#333',
    fontWeight: 'bold',
    margin: '0',
    lineHeight: '1.3'
  },
  
  brandBadge: {
    marginTop: '5px'
  },
  
  badge: {
    backgroundColor: colorPalette.primary,
    color: 'white',
    padding: '6px 12px',
    borderRadius: '5px',
    fontSize: '14px',
    fontWeight: 'bold',
    display: 'inline-block'
  },
  
  productCategory: {
    fontSize: '14px',
    color: '#666',
    backgroundColor: '#f0f0f0',
    padding: '6px 12px',
    borderRadius: '15px',
    display: 'inline-block',
    alignSelf: 'flex-start'
  },
  
  productPrice: {
    fontSize: '26px',
    color: colorPalette.success,
    fontWeight: 'bold',
    margin: '0'
  },
  
  unavailablePrice: {
    fontSize: '26px',
    color: '#999',
    fontWeight: 'bold',
    margin: '0',
    textDecoration: 'line-through'
  },
  
  actionButtons: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap'
  },
  
  addToCartButton: {
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flex: '1',
    minWidth: '200px',
    justifyContent: 'center'
  },
  
  buyNowButton: {
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    flex: '1',
    minWidth: '200px'
  },
  
  buttonIcon: {
    fontSize: '18px'
  },
  
  descriptionSection: {
    marginTop: '10px'
  },
  
  sectionTitle: {
    color: colorPalette.primary,
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  
  descriptionText: {
    color: '#666',
    lineHeight: '1.6',
    fontSize: '14px',
    margin: '0'
  },
  
  deliveryInfo: {
    backgroundColor: '#f8f9fa',
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #e9ecef'
  },
  
  deliveryList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  
  deliveryItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    color: '#555'
  },
  
  checkIcon: {
    color: '#28a745',
    fontWeight: 'bold'
  },
  
  setAddressButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: colorPalette.accent,
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '15px'
  },
  
  savedAddress: {
    marginTop: '15px',
    padding: '10px',
    backgroundColor: '#e8f5e8',
    borderRadius: '6px',
    fontSize: '13px',
    borderLeft: `3px solid ${colorPalette.success}`
  },
  
  advantagesSection: {
    backgroundColor: '#e8f5e8',
    padding: '15px',
    borderRadius: '8px',
    border: `1px solid ${colorPalette.primary}`
  },
  
  advantagesList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '10px'
  },
  
  advantageItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    color: '#333'
  },
  
  advantageIcon: {
    fontSize: '16px'
  }
};

const footerStyles = {
  container: {
    marginTop: '60px',
    padding: '30px 15px',
    textAlign: 'center',
    color: '#666',
    fontSize: '14px',
    borderTop: `2px solid ${colorPalette.primary}`,
    backgroundColor: '#f8f9fa',
    borderRadius: '12px 12px 0 0',
    boxShadow: '0 -2px 10px rgba(139, 0, 0, 0.1)',
    width: '100%',
    boxSizing: 'border-box'
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%'
  },
  title: {
    color: colorPalette.primary,
    fontSize: '18px',
    marginBottom: '25px',
    fontWeight: '600'
  },
  links: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '15px',
    marginBottom: '30px',
    width: '100%'
  },
  link: {
    color: colorPalette.primary,
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '14px',
    padding: '12px 8px',
    borderRadius: '8px',
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    minHeight: '50px',
    transition: 'all 0.3s'
  },
  divider: {
    height: '1px',
    background: `linear-gradient(90deg, transparent, ${colorPalette.primary}, transparent)`,
    margin: '25px auto',
    maxWidth: '300px',
    width: '100%'
  },
  social: {
    marginBottom: '20px'
  },
  socialTitle: {
    color: colorPalette.primary,
    fontSize: '16px',
    marginBottom: '15px',
    fontWeight: '600'
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  socialIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  info: {
    textAlign: 'center',
    paddingTop: '15px',
    borderTop: '1px solid #e0e0e0'
  },
  seoText: {
    margin: '0 0 15px 0',
    fontSize: '11px',
    color: '#999',
    lineHeight: '1.4',
    fontStyle: 'italic',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 10px'
  }
};

const modalStyles = {
  overlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9998 },
  container: { backgroundColor: '#fff', borderRadius: '15px', padding: '25px', width: '90%', maxWidth: '500px', border: `3px solid ${colorPalette.primary}` },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: `2px solid ${colorPalette.primary}`, paddingBottom: '10px' },
  title: { color: colorPalette.primary, fontSize: '20px', fontWeight: '700', margin: 0 },
  closeBtn: { background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' },
  form: { display: 'grid', gap: '15px', marginBottom: '25px' },
  input: { width: '100%', padding: '12px', borderRadius: '8px', border: `1px solid #ccc`, fontSize: '14px', boxSizing: 'border-box' },
  textarea: { width: '100%', padding: '12px', borderRadius: '8px', border: `1px solid #ccc`, fontSize: '14px', resize: 'vertical' , fontFamily: 'inherit', boxSizing: 'border-box' },
  buttons: { display: 'flex', gap: '15px' },
  cancelBtn: { flex: 1, padding: '12px', backgroundColor: '#fff', color: colorPalette.primary, border: `2px solid ${colorPalette.primary}`, borderRadius: '8px', fontWeight: '600', cursor: 'pointer' },
  saveBtn: { flex: 2, padding: '12px', backgroundColor: colorPalette.primary, color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }
};

const feedbackStyles = {
  container: { position: 'fixed', top: '20px', right: '20px', backgroundColor: '#27AE60', color: 'white', padding: '12px 20px', borderRadius: '8px', zIndex: 9999, animation: 'fadeInOut 2s ease-in-out', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(39, 174, 96, 0.3)' }
};

// Remova ou corrija o getStaticPaths no final do arquivo
export async function getStaticPaths() {
  // Retorna paths vazio para gerar apenas sob demanda
  return {
    paths: [],
    fallback: 'blocking' // ou true, dependendo da sua necessidade
  };
}
