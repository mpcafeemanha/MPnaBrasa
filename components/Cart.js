import { useState, useEffect } from 'react';

const Cart = ({ cart, setCart, removeFromCart }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showAddedFeedback, setShowAddedFeedback] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  // WhatsApp do MP na Brasa
  const WHATSAPP_NUMBER = '5511913572902';
  const MINIMUM_ORDER = 80.00;

  // Cores gourmet do MP na Brasa
  const colorPalette = {
    primary: '#8B0000', // Vermelho vinho
    secondary: '#2C2C2C', // Preto/cinza escuro
    accent: '#B22222', // Vermelho firebrick
    light: '#F8F8F8', // Cinza muito claro
    dark: '#1A1A1A', // Preto quase puro
    white: '#FFFFFF',
    success: '#228B22',
    danger: '#DC3545',
    text: '#333333'
  };

  // ✅ 1. Verificação de mobile
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      if (!mobile) {
        setIsCollapsed(true);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ✅ 2. Feedback visual quando carrinho muda
  useEffect(() => {
    if (cart.length > 0) {
      setShowAddedFeedback(true);
      const timer = setTimeout(() => setShowAddedFeedback(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [cart.length]);

  // ✅ 3. Função para alternar carrinho
  const toggleCart = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };

  // ✅ 4. Agrupa itens do carrinho
  const groupedCart = cart.reduce((acc, product) => {
    const existing = acc.find(p => p.id === product.id);
    const quantity = product.quantity || 1;
    
    if (existing) {
      existing.quantity += quantity;
      existing.totalPrice += product.price * quantity;
    } else {
      acc.push({
        ...product,
        quantity: quantity,
        totalPrice: product.price * quantity
      });
    }
    return acc;
  }, []);

  const total = groupedCart.reduce((sum, product) => sum + product.totalPrice, 0);
  const isTotalValid = total >= MINIMUM_ORDER;

  // ✅ 5. Função para ajustar quantidade
  const adjustQuantity = (productId, adjustment) => {
    const newCart = [...cart];
    let productFound = false;

    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === productId) {
        const newQuantity = (newCart[i].quantity || 1) + adjustment;
        
        if (newQuantity <= 0) {
          newCart.splice(i, 1);
        } else {
          newCart[i] = {
            ...newCart[i],
            quantity: newQuantity
          };
        }
        productFound = true;
        break;
      }
    }

    if (!productFound && adjustment > 0) {
      const productToAdd = groupedCart.find(p => p.id === productId);
      if (productToAdd) {
        newCart.push({
          ...productToAdd,
          quantity: 1
        });
      }
    }

    setCart(newCart);
    localStorage.setItem('mp_brasa_cart', JSON.stringify(newCart));
  };

  // ✅ 6. Gerar mensagem do WhatsApp
  const generateWhatsAppMessage = () => {
    const itemsText = groupedCart.map(product => {
      return `▪ ${product.name} (${product.quantity}x) - R$ ${product.totalPrice.toFixed(2)}`;
    }).join('\n');

    const paymentText = paymentMethod === 'Dinheiro' ? 'Dinheiro' : 
                       paymentMethod === 'Cartão de Débito' ? 'Cartão de Débito' : 
                       paymentMethod === 'Cartão de Crédito' ? 'Cartão de Crédito' : '';

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `🔥 *PEDIDO - MP na Brasa* 🔥\n\n` +
      `👤 *Cliente:* [Nome do cliente]\n` +
      `📍 *Endereço:* [Endereço de entrega]\n\n` +
      `🥩 *ITENS DO PEDIDO:*\n${itemsText}\n\n` +
      `💰 *TOTAL: R$ ${total.toFixed(2)}*\n` +
      `💳 *Pagamento:* ${paymentText}\n` +
      `🚚 *Entrega:* Frete grátis\n\n` +
      `Por favor, confirme meu pedido de churrasco!`
    )}`;
  };

  // ✅ 7. Estilos inline - RESPONSIVO
  const styles = {
    cartButton: {
      position: 'fixed',
      right: isMobile ? '20px' : '15px',
      bottom: isMobile ? '20px' : '15px',
      backgroundColor: colorPalette.primary,
      color: colorPalette.white,
      border: 'none',
      borderRadius: '50%',
      width: isMobile ? '65px' : '60px',
      height: isMobile ? '65px' : '60px',
      fontSize: isMobile ? '26px' : '24px',
      boxShadow: '0 4px 15px rgba(139, 0, 0, 0.3)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      transition: 'all 0.2s ease',
      zIndex: 1002
    },
    cartBadge: {
      position: 'absolute',
      top: '-5px',
      right: '-5px',
      backgroundColor: colorPalette.danger,
      color: colorPalette.white,
      borderRadius: '50%',
      width: isMobile ? '26px' : '24px',
      height: isMobile ? '26px' : '24px',
      fontSize: isMobile ? '13px' : '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      border: '2px solid white'
    },
    cartContainer: {
      position: 'fixed',
      right: isMobile ? (isOpen ? '0' : '-100%') : (isCollapsed ? '-400px' : '15px'),
      bottom: isMobile ? '0' : 'auto',
      top: isMobile ? 'auto' : '15px',
      width: isMobile ? '100%' : '400px',
      height: isMobile ? '85vh' : 'auto',
      backgroundColor: colorPalette.white,
      borderRadius: isMobile ? '20px 20px 0 0' : '12px',
      boxShadow: '0 -5px 25px rgba(139, 0, 0, 0.15)',
      padding: isMobile ? '20px 15px' : '15px',
      zIndex: 1000,
      maxHeight: isMobile ? '85vh' : '85vh',
      overflowY: 'auto',
      overflowX: 'hidden',
      fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      transition: isMobile ? 'transform 0.3s ease-out' : 'right 0.3s ease-in-out',
      transform: isMobile ? (isOpen ? 'translateY(0)' : 'translateY(100%)') : 'none',
      opacity: isMobile ? (isOpen ? 1 : 0) : (isCollapsed ? 0 : 1),
      pointerEvents: isMobile ? (isOpen ? 'auto' : 'none') : (isCollapsed ? 'none' : 'auto'),
      boxSizing: 'border-box'
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.6)',
      zIndex: 999,
      backdropFilter: 'blur(3px)'
    },
    feedback: {
      position: 'absolute',
      top: '-15px',
      right: '-15px',
      backgroundColor: colorPalette.success,
      color: colorPalette.white,
      borderRadius: '15px',
      padding: isMobile ? '6px 12px' : '4px 8px',
      fontSize: isMobile ? '13px' : '12px',
      fontWeight: 'bold',
      animation: 'fadeInOut 2s ease-in-out',
      zIndex: 1002,
      whiteSpace: 'nowrap'
    }
  };

  return (
    <>
      {/* Botão flutuante do carrinho */}
      <div style={{
        position: 'fixed',
        right: isMobile ? '20px' : '15px',
        bottom: isMobile ? '20px' : '15px',
        zIndex: 1001
      }}>
        <button 
          onClick={toggleCart}
          style={styles.cartButton}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          🛒 
          {cart.length > 0 && (
            <span style={styles.cartBadge}>
              {cart.reduce((sum, item) => sum + (item.quantity || 1), 0)}
            </span>
          )}
        </button>

        {showAddedFeedback && (
          <div style={styles.feedback}>
            ✅ Item adicionado!
          </div>
        )}
      </div>

      {/* Overlay para mobile */}
      {isMobile && isOpen && (
        <div 
          style={styles.overlay}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Container principal do carrinho */}
      <div style={styles.cartContainer}>
        
        {/* Header do carrinho */}
        <div style={{
          position: 'sticky',
          top: 0,
          backgroundColor: colorPalette.white,
          paddingBottom: '12px',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: `2px solid ${colorPalette.secondary}`,
          marginBottom: '15px'
        }}>
          <h2 style={{ 
            fontSize: isMobile ? '18px' : '16px', 
            fontWeight: 700, 
            margin: 0, 
            color: colorPalette.dark
          }}>
            🥩 Seu Carrinho ({cart.length})
          </h2>
          <button 
            onClick={toggleCart}
            style={{ 
              background: 'none', 
              border: 'none', 
              fontSize: isMobile ? '24px' : '20px', 
              cursor: 'pointer', 
              color: colorPalette.accent,
              padding: '6px',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = colorPalette.light}
            onMouseOut={(e) => e.target.style.background = 'none'}
          >
            ×
          </button>
        </div>

        {/* Banner de frete grátis */}
        <div style={{
          backgroundColor: '#E8F5E8',
          color: colorPalette.success,
          padding: isMobile ? '12px' : '10px',
          borderRadius: '8px',
          textAlign: 'center',
          marginBottom: '15px',
          fontSize: isMobile ? '13px' : '12px',
          fontWeight: 700,
          border: `1px solid ${colorPalette.success}20`
        }}>
          🚚 FRETE GRÁTIS • PEDIDO MÍNIMO R$ {MINIMUM_ORDER.toFixed(2)}
        </div>

        {groupedCart.length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '30px 15px', 
            color: colorPalette.text 
          }}>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>🥩</div>
            <p style={{ fontSize: '16px', fontWeight: 500, marginBottom: '5px' }}>
              Seu carrinho está vazio
            </p>
            <p style={{ fontSize: '14px', color: colorPalette.accent }}>
              Adicione kits de churrasco para continuar
            </p>
          </div>
        ) : (
          <>
            {/* Lista de produtos */}
            <div style={{ 
              marginBottom: '15px', 
              maxHeight: isMobile ? 'calc(85vh - 350px)' : 'calc(85vh - 400px)', 
              overflowY: 'auto',
              paddingRight: '5px'
            }}>
              {groupedCart.map((product) => (
                <div 
                  key={`${product.id}-${product.quantity}`} 
                  style={{ 
                    padding: isMobile ? '15px 0' : '12px 0', 
                    borderBottom: `2px solid ${colorPalette.light}`,
                    marginBottom: '6px'
                  }}
                >
                  {/* Layout do produto */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: isMobile ? '12px' : '10px',
                    marginBottom: '10px'
                  }}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      style={{ 
                        width: isMobile ? '60px' : '50px', 
                        height: isMobile ? '60px' : '50px', 
                        borderRadius: '6px', 
                        objectFit: 'cover', 
                        border: `1px solid ${colorPalette.secondary}`,
                        flexShrink: 0,
                        backgroundColor: colorPalette.light
                      }}
                      onError={(e) => {
                        e.target.src = '/Logo MP cafe.png';
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <p style={{ 
                        fontWeight: 600, 
                        margin: '0 0 5px 0', 
                        color: colorPalette.dark, 
                        fontSize: isMobile ? '14px' : '13px',
                        lineHeight: '1.3'
                      }}>
                        {product.name}
                      </p>
                      <p style={{ 
                        margin: '2px 0 0', 
                        fontSize: isMobile ? '12px' : '11px', 
                        color: colorPalette.accent
                      }}>
                        🔪 {product.quantity}x • R$ {product.price.toFixed(2)} cada
                      </p>
                    </div>
                  </div>

                  {/* Controles de quantidade e preço */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    marginTop: '10px',
                    paddingLeft: isMobile ? '0' : '60px'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: isMobile ? '10px' : '6px',
                      background: colorPalette.light,
                      borderRadius: '20px',
                      padding: isMobile ? '6px 10px' : '4px 8px'
                    }}>
                      <button
                        onClick={() => adjustQuantity(product.id, -1)}
                        style={{ 
                          background: colorPalette.danger, 
                          color: colorPalette.white,
                          border: 'none', 
                          borderRadius: '50%', 
                          width: isMobile ? '28px' : '24px', 
                          height: isMobile ? '28px' : '24px', 
                          cursor: 'pointer',
                          fontSize: isMobile ? '16px' : '14px',
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.opacity = '0.8'}
                        onMouseOut={(e) => e.target.style.opacity = '1'}
                      > - </button>
                      <span style={{ 
                        fontSize: isMobile ? '14px' : '12px', 
                        fontWeight: '600',
                        minWidth: '18px',
                        textAlign: 'center',
                        color: colorPalette.dark
                      }}>
                        {product.quantity}
                      </span>
                      <button
                        onClick={() => adjustQuantity(product.id, 1)}
                        style={{ 
                          background: colorPalette.success, 
                          color: colorPalette.white,
                          border: 'none', 
                          borderRadius: '50%', 
                          width: isMobile ? '28px' : '24px', 
                          height: isMobile ? '28px' : '24px', 
                          cursor: 'pointer',
                          fontSize: isMobile ? '16px' : '14px',
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.opacity = '0.8'}
                        onMouseOut={(e) => e.target.style.opacity = '1'}
                      > + </button>
                    </div>
                    
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: isMobile ? '12px' : '8px' 
                    }}>
                      <p style={{ 
                        fontWeight: 700, 
                        margin: 0, 
                        color: colorPalette.primary, 
                        fontSize: isMobile ? '15px' : '14px'
                      }}>
                        R$ {product.totalPrice.toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        style={{ 
                          background: colorPalette.danger, 
                          color: colorPalette.white, 
                          border: 'none', 
                          borderRadius: '50%',
                          width: isMobile ? '32px' : '28px',
                          height: isMobile ? '32px' : '28px',
                          cursor: 'pointer', 
                          fontSize: isMobile ? '16px' : '14px',
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s'
                      }}
                        onMouseOver={(e) => e.target.style.opacity = '0.8'}
                        onMouseOut={(e) => e.target.style.opacity = '1'}
                      > × </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Aviso de pagamento */}
            <div style={{ 
              backgroundColor: '#FFF3E0', 
              color: '#E65100', 
              padding: isMobile ? '12px' : '10px', 
              borderRadius: '8px', 
              marginBottom: '15px', 
              textAlign: 'center',
              border: '1px solid #FFE0B2',
              fontSize: isMobile ? '12px' : '11px',
              fontWeight: 500
            }}>
              ⚠️ Pague no ato da entrega (Dinheiro, Débito ou Crédito)
            </div>

            {/* Resumo do pedido */}
            <div style={{ 
              backgroundColor: colorPalette.light, 
              padding: isMobile ? '15px' : '12px', 
              borderRadius: '10px', 
              marginBottom: '15px', 
              border: `2px solid ${colorPalette.secondary}` 
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ color: colorPalette.dark, fontSize: isMobile ? '14px' : '13px' }}>
                  Subtotal:
                </span>
                <span style={{ fontWeight: 600, fontSize: isMobile ? '14px' : '13px' }}>
                  R$ {total.toFixed(2)}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ color: colorPalette.dark, fontSize: isMobile ? '14px' : '13px' }}>
                  Frete:
                </span>
                <span style={{ color: colorPalette.success, fontWeight: 600, fontSize: isMobile ? '14px' : '13px' }}>
                  Grátis
                </span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                paddingTop: '12px', 
                borderTop: `2px solid ${colorPalette.secondary}` 
              }}>
                <span style={{ fontWeight: 700, fontSize: isMobile ? '15px' : '14px' }}>
                  Total:
                </span>
                <span style={{ 
                  fontWeight: 700, 
                  color: colorPalette.primary, 
                  fontSize: isMobile ? '16px' : '15px' 
                }}>
                  R$ {total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Seleção de pagamento */}
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ 
                fontSize: isMobile ? '15px' : '14px', 
                fontWeight: 700, 
                marginBottom: '12px', 
                color: colorPalette.dark 
              }}>
                💳 Forma de Pagamento
              </h3>
              <div style={{ display: 'grid', gap: '8px' }}>
                {['Dinheiro', 'Cartão de Débito', 'Cartão de Crédito'].map(method => (
                  <label 
                    key={method} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      padding: isMobile ? '12px 10px' : '10px 12px', 
                      borderRadius: '8px', 
                      background: paymentMethod === method ? `${colorPalette.success}20` : colorPalette.light, 
                      border: `2px solid ${paymentMethod === method ? colorPalette.success : colorPalette.secondary}`, 
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      fontSize: isMobile ? '14px' : '13px'
                    }}
                  >
                    <input 
                      type="radio" 
                      name="payment" 
                      value={method} 
                      checked={paymentMethod === method} 
                      onChange={() => setPaymentMethod(method)} 
                      style={{ 
                        marginRight: '12px', 
                        accentColor: colorPalette.success,
                        width: isMobile ? '16px' : '14px',
                        height: isMobile ? '16px' : '14px'
                      }} 
                    />
                    {method}
                  </label>
                ))}
              </div>
            </div>

            {/* Botão finalizar */}
            <button
              onClick={() => window.open(generateWhatsAppMessage(), '_blank')}
              disabled={!isTotalValid || !paymentMethod}
              style={{ 
                width: '100%', 
                padding: isMobile ? '16px' : '14px', 
                background: isTotalValid && paymentMethod ? colorPalette.primary : colorPalette.secondary, 
                color: colorPalette.white, 
                border: 'none', 
                borderRadius: '10px', 
                fontWeight: 700, 
                fontSize: isMobile ? '15px' : '14px', 
                cursor: isTotalValid && paymentMethod ? 'pointer' : 'not-allowed',
                transition: 'all 0.3s',
                boxShadow: isTotalValid && paymentMethod ? `0 4px 15px rgba(139, 0, 0, 0.3)` : 'none'
              }}
              onMouseOver={(e) => {
                if (isTotalValid && paymentMethod) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = `0 6px 20px rgba(139, 0, 0, 0.4)`;
                }
              }}
              onMouseOut={(e) => {
                if (isTotalValid && paymentMethod) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = `0 4px 15px rgba(139, 0, 0, 0.3)`;
                }
              }}
            > 
              📲 {isMobile ? 'FINALIZAR PEDIDO' : 'Finalizar Pedido'} 
            </button>

            {!isTotalValid && (
              <p style={{ 
                color: colorPalette.danger, 
                textAlign: 'center', 
                marginTop: '12px', 
                fontSize: isMobile ? '12px' : '11px',
                fontWeight: 500
              }}>
                🔥 Pedido mínimo: R$ {MINIMUM_ORDER.toFixed(2)}
              </p>
            )}
          </>
        )}
      </div>

      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(10px); }
          20% { opacity: 1; transform: translateY(0); }
          80% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
        
        /* Scrollbar personalizada */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: ${colorPalette.light};
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${colorPalette.secondary};
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: ${colorPalette.primary};
        }
        
        /* Ajustes para telas muito pequenas */
        @media (max-width: 360px) {
          .cart-container {
            padding: 15px 10px !important;
          }
          
          .cart-button {
            width: 60px !important;
            height: 60px !important;
            font-size: 24px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Cart;
