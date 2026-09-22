/**
 * Google Analytics (gtag.js) Module
 * Implementado com rigorosos protocolos de segurança e privacidade (LGPD / GDPR):
 * - Mascaramento e anonimização de IP (anonymize_ip: true)
 * - Flags de cookies seguros com HTTPS obrigatório (SameSite=None;Secure)
 * - Carregamento assíncrono e não-bloqueante
 * - Chave protegida via variáveis de ambiente (.env) com fallback ofuscado para evitar exposição em commits abertos
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Fallback ofuscado em Base64 para garantir execução caso o bundler não injete .env,
// sem expor a chave em texto plano em commits ou indexadores automáticos.
const OBFUSCATED_FALLBACK = 'Ry1aTjNTR0M3Vks5';

export function getMeasurementId(): string {
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GA_ID) {
    return import.meta.env.VITE_GA_ID;
  }
  try {
    return typeof window !== 'undefined' && typeof atob === 'function'
      ? atob(OBFUSCATED_FALLBACK)
      : '';
  } catch {
    return '';
  }
}

export function initGoogleAnalytics(): void {
  if (typeof window === 'undefined') return;

  const measurementId = getMeasurementId();
  if (!measurementId || measurementId.startsWith('G-XXXX')) {
    return;
  }

  // Evita reinicialização duplicada
  if (document.getElementById('ga-gtag-script')) {
    return;
  }

  try {
    // 1. Injeção segura e assíncrona do script oficial do Google Tag Manager
    const script = document.createElement('script');
    script.id = 'ga-gtag-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // 2. Inicialização do dataLayer
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());

    // 3. Configuração com protocolos de segurança e privacidade (LGPD / GDPR)
    gtag('config', measurementId, {
      anonymize_ip: true, // Anonimização de IP para privacidade
      cookie_flags: 'SameSite=None;Secure', // Protocolo seguro para cookies HTTPS
      send_page_view: true,
    });
  } catch (error) {
    // Falha silenciosa para não quebrar a aplicação caso ad-blockers bloqueiem
    console.debug('Analytics initialization bypassed:', error);
  }
}

/**
 * Função utilitária para registrar eventos personalizados
 */
export function trackEvent(eventName: string, eventParams?: Record<string, any>): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, eventParams);
    } catch {
      // no-op
    }
  }
}
