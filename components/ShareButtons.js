import React, { useEffect, useState } from 'react';

// ========== PALETA DE CORES MP NA BRASA ========== //
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

// Função para gerar slug (MESMA do seu arquivo principal)
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

export default function ShareButtons(props) {
  const { articleTitle, articleId, articlesPerPage = 1 } = props;
  const [shareUrl, setShareUrl] = useState('');
  const [isReady, setIsReady] = useState(false);

  // Geração da URL CORRIGIDA com slug amigável para MP na Brasa
  useEffect(() => {
    if (typeof window !== 'undefined' && articleId && articleTitle) {
      // Gera o slug do título do artigo atual
      const slug = gerarSlug(articleTitle);
      
      // URL com slug amigável - CORRIGIDO PARA MP NA BRASA
      const shareUrl = `${window.location.origin}/brasa-news/${slug}`;
      
      console.log('🔗 URL gerada com slug:', shareUrl);
      console.log('📝 Título do artigo:', articleTitle);
      console.log('🆔 ID do artigo:', articleId);
      
      setShareUrl(shareUrl);
      setIsReady(true);
    }
  }, [articleId, articleTitle]);

  const message = `🔥 "${articleTitle}" - MP na Brasa! Churrasco gourmet em Joanópolis! 👇\n${shareUrl}`;

  const copyLink = () => {
    if (shareUrl) {
      navigator.clipboard.writeText(shareUrl)
        .then(() => {
          const btn = document.getElementById(`copy-btn-${articleId}`);
          if (btn) {
            const originalText = btn.textContent;
            btn.textContent = '✓ Copiado!';
            btn.style.backgroundColor = colorPalette.success;
            
            setTimeout(() => {
              btn.textContent = originalText;
              btn.style.backgroundColor = colorPalette.dark;
            }, 2000);
          }
        })
        .catch(err => {
          console.error('Erro ao copiar:', err);
        });
    }
  };

  const btnStyle = {
    color: '#fff', 
    padding: '6px 12px', 
    borderRadius: '6px',
    textDecoration: 'none', 
    border: 'none',
    cursor: 'pointer', 
    fontSize: '12px',
    flex: 1,
    textAlign: 'center',
    transition: 'all 0.2s ease',
    fontWeight: '500',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px'
  };

  if (!isReady) {
    return (
      <div style={{marginTop: '12px', padding: '8px 0', borderTop: `1px solid ${colorPalette.secondary}`, borderBottom: `1px solid ${colorPalette.secondary}`}}>
        <p style={{fontSize: '12px', color: '#666', marginBottom: '8px', fontWeight: '500'}}>📤 Compartilhe:</p>
        <div style={{display: 'flex', gap: '8px'}}>
          <div style={{...btnStyle, backgroundColor: '#ccc', opacity: 0.5, cursor: 'default'}}>📱 WhatsApp</div>
          <div style={{...btnStyle, backgroundColor: '#ccc', opacity: 0.5, cursor: 'default'}}>📘 Facebook</div>
          <div style={{...btnStyle, backgroundColor: '#ccc', opacity: 0.5, cursor: 'default'}}>🔗 Copiar Link</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{marginTop: '12px', padding: '8px 0', borderTop: `1px solid ${colorPalette.secondary}`, borderBottom: `1px solid ${colorPalette.secondary}`}}>
      <p style={{fontSize: '12px', color: '#666', marginBottom: '8px', fontWeight: '500'}}>📤 Compartilhe este artigo:</p>
      
      <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
        {/* WhatsApp */}
        <a
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{...btnStyle, backgroundColor: '#25D366'}}
          onMouseOver={(e) => e.target.style.opacity = '0.9'}
          onMouseOut={(e) => e.target.style.opacity = '1'}
        >
          <span>📱</span> WhatsApp
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{...btnStyle, backgroundColor: '#1877F2'}}
          onMouseOver={(e) => e.target.style.opacity = '0.9'}
          onMouseOut={(e) => e.target.style.opacity = '1'}
        >
          <span>📘</span> Facebook
        </a>

        {/* Copiar Link */}
        <button
          id={`copy-btn-${articleId}`}
          onClick={copyLink}
          style={{...btnStyle, backgroundColor: colorPalette.dark}}
          onMouseOver={(e) => e.target.style.opacity = '0.9'}
          onMouseOut={(e) => e.target.style.opacity = '1'}
        >
          <span>🔗</span> Copiar Link
        </button>
      </div>
      
      {/* URL que será compartilhada (oculta - apenas para debug) */}
      <div style={{
        marginTop: '6px',
        fontSize: '9px',
        color: '#888',
        wordBreak: 'break-all',
        display: 'none'
      }}>
        URL: {shareUrl}
      </div>
    </div>
  );
}