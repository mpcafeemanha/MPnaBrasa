// hook/useTrackUser.js
import { useEffect, useRef } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function useTrackUser() {
  const intervalRef = useRef(null);
  
  useEffect(() => {
    console.log('🔍 Hook de rastreamento iniciado');
    
    const trackActivity = async () => {
      try {
        // 1. Gera ou recupera visitor_id - NÃO MEXE NO CARRINHO
        let visitorId = localStorage.getItem('visitor_id_mpnabrasa');
        if (!visitorId) {
          visitorId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
          localStorage.setItem('visitor_id_mpnabrasa', visitorId);
          console.log('🆔 Novo visitante ID:', visitorId);
        }
        
        // 2. Busca próximo número sequencial
        let visitorNumber = 1;
        
        try {
          const { data: lastVisitor, error } = await supabase
            .from('contador_visitantes')
            .select('ultimo_numero')
            .single();
          
          if (error && error.code === 'PGRST116') {
            await supabase
              .from('contador_visitantes')
              .insert([{ ultimo_numero: 1 }]);
            visitorNumber = 1;
          } else if (!error && lastVisitor) {
            visitorNumber = lastVisitor.ultimo_numero + 1;
            await supabase
              .from('contador_visitantes')
              .update({ ultimo_numero: visitorNumber })
              .eq('id', 1);
            console.log('🔢 Número sequencial:', visitorNumber);
            
            // ✅ SALVA APENAS O VISITOR_NUMBER, NÃO MEXE NO CARRINHO
            localStorage.setItem('visitor_number', visitorNumber.toString());
          }
        } catch (error) {
          console.log('⚠️ Erro no contador:', error.message);
        }
        
        // 3. Buscar dados do cliente no localStorage
        const clientData = JSON.parse(localStorage.getItem('mp_brasa_client_data') || '{}');
        const hasClientData = clientData.name && clientData.phone && clientData.address;
        
        // 4. Coleta dados do visitante
        const dadosAtividade = {
          pagina_atual: window.location.pathname,
          url_completa: window.location.href,
          titulo_pagina: document.title,
          ultima_atividade: new Date().toISOString(),
          sessao_id: visitorId,
          user_agent: navigator.userAgent,
          referrer: document.referrer || 'direto',
          tipo_visita: hasClientData ? 'cliente_identificado' : 'anonimo',
          nome_usuario: hasClientData ? clientData.name : `Visitante ${visitorNumber}`,
          email_usuario: hasClientData ? clientData.email || `${clientData.name?.toLowerCase().replace(/\s/g, '')}@cliente.com` : `visitante${visitorNumber}@anonimo.com`,
          visitor_number: visitorNumber,
          telefone_cliente: hasClientData ? clientData.phone : null,
          endereco_cliente: hasClientData ? clientData.address : null
        };
        
        // 5. Verifica se já existe registro
        const { data: registroExistente, error: checkError } = await supabase
          .from('clientes_online')
          .select('id, created_at')
          .eq('sessao_id', visitorId)
          .eq('pagina_atual', window.location.pathname)
          .maybeSingle();
        
        if (!registroExistente) {
          const { error: insertError } = await supabase
            .from('clientes_online')
            .insert([dadosAtividade]);
          
          if (insertError) {
            console.log('❌ Erro ao inserir:', insertError.message);
          } else {
            console.log('✅ Novo visitante registrado:', hasClientData ? clientData.name : `Visitante ${visitorNumber}`);
          }
        } else {
          const tempoConectado = new Date() - new Date(registroExistente.created_at);
          const segundos = Math.floor(tempoConectado / 1000);
          const minutos = Math.floor(segundos / 60);
          
          let tempoFormatado = `${segundos} segundos`;
          if (minutos > 0) {
            tempoFormatado = `${minutos}m ${segundos % 60}s`;
          }
          
          const { error: updateError } = await supabase
            .from('clientes_online')
            .update({
              ...dadosAtividade,
              tempo_conexao: tempoFormatado
            })
            .eq('id', registroExistente.id);
          
          if (!updateError) {
            console.log('✅ Registro atualizado - Tempo:', tempoFormatado);
          }
        }
        
      } catch (error) {
        console.log('💥 Erro no tracking:', error.message);
      }
    };
    
    // Executa imediatamente
    trackActivity();
    
    // Configura intervalo de 30 segundos
    intervalRef.current = setInterval(trackActivity, 30000);
    
    // Limpeza
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        console.log('🧹 Hook de rastreamento limpo');
      }
    };
  }, []);
}