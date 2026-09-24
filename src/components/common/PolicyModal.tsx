import React, { useEffect } from 'react';
import { X, Shield, RefreshCw, FileText } from 'lucide-react';

export type PolicyType = 'privacidade' | 'trocas' | 'termos' | null;

interface PolicyModalProps {
  type: PolicyType;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  const contentMap = {
    privacidade: {
      icon: Shield,
      title: 'Política de Privacidade & LGPD',
      subtitle: 'Transparência, respeito e segurança no tratamento dos seus dados',
      text: (
        <div className="space-y-4 text-xs sm:text-sm text-[#1c241b]/85 leading-relaxed font-sans">
          <p>
            A <strong>Vírtuose Art Decor</strong> preza pela discrição, elegância e segurança em todas as interações. Esta política descreve como tratamos informações em conformidade com a <em>Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD)</em>.
          </p>
          <h4 className="font-serif text-lg text-[#1c241b] pt-2 font-medium">1. Coleta de Dados Consciente</h4>
          <p>
            Coletamos estritamente os dados necessários para o atendimento exclusivo, entrega de pedidos de curadoria e comunicação de novidades autorais, tais como nome, telefone celular, endereço e e-mail fornecidos voluntariamente via WhatsApp ou formulários.
          </p>
          <h4 className="font-serif text-lg text-[#1c241b] pt-2 font-medium">2. Uso e Sigilo</h4>
          <p>
            Suas informações são utilizadas exclusivamente para personalizar sua experiência sensorial, viabilizar entregas e responder a consultas sobre nossas peças. Em nenhuma hipótese comercializamos ou cedemos seus dados a terceiros não autorizados.
          </p>
          <h4 className="font-serif text-lg text-[#1c241b] pt-2 font-medium">3. Direitos do Titular</h4>
          <p>
            Você pode, a qualquer momento, solicitar a confirmação, retificação ou exclusão permanente dos seus dados de nossos registros mediante contato formal com nosso canal oficial de privacidade pelo e-mail <strong>falecom@virtuoseartdecor.com.br</strong>.
          </p>
        </div>
      ),
    },
    trocas: {
      icon: RefreshCw,
      title: 'Política de Trocas & Devoluções',
      subtitle: 'Cuidado artesanal com conformidade ao Código de Defesa do Consumidor',
      text: (
        <div className="space-y-4 text-xs sm:text-sm text-[#1c241b]/85 leading-relaxed font-sans">
          <p>
            Todas as criações da <strong>Vírtuose Art Decor</strong> passam por rigorosa inspeção manual para garantir integridade, beleza e excelência botânica antes de chegarem ao seu destino.
          </p>
          <h4 className="font-serif text-lg text-[#1c241b] pt-2 font-medium">1. Direito de Arrependimento (CDC, Art. 49)</h4>
          <p>
            Para compras realizadas à distância (via WhatsApp, telefone ou site), o cliente tem até <strong>7 (sete) dias corridos</strong> a partir da data de entrega para manifestar o arrependimento e solicitar devolução ou troca sem custos adicionais de frete para a devolução inicial.
          </p>
          <h4 className="font-serif text-lg text-[#1c241b] pt-2 font-medium">2. Condições das Peças</h4>
          <p>
            O produto deve ser restituído em sua embalagem original de linho/tecido, acompanhado de eventuais acessórios e sem qualquer indício de uso indevido. No caso de velas, difusores e home sprays, a embalagem não deve apresentar lacre violado ou consumo.
          </p>
          <h4 className="font-serif text-lg text-[#1c241b] pt-2 font-medium">3. Procedimento de Concierge</h4>
          <p>
            Para iniciar um processo de troca ou devolução, basta entrar em contato com nossa equipe pelo WhatsApp <strong>(71) 99624-1487</strong> ou e-mail <strong>falecom@virtuoseartdecor.com.br</strong> com o número do pedido e fotos da peça. Nossa equipe orientará a coleta ou postagem com total presteza.
          </p>
        </div>
      ),
    },
    termos: {
      icon: FileText,
      title: 'Termos de Uso & Curadoria',
      subtitle: 'Direitos autorais, integridade de marca e condições de atendimento',
      text: (
        <div className="space-y-4 text-xs sm:text-sm text-[#1c241b]/85 leading-relaxed font-sans">
          <p>
            Bem-vindo à plataforma editorial e institucional da <strong>Vírtuose Art Decor</strong>. Ao navegar por este ambiente, você concorda com os termos aqui dispostos.
          </p>
          <h4 className="font-serif text-lg text-[#1c241b] pt-2 font-medium">1. Propriedade Intelectual</h4>
          <p>
            Todas as imagens, fotografias autorais, textos poéticos, logotipos, monogramas e identidades olfativas e botânicas são propriedades exclusivas da Vírtuose Art Decor. É expressamente vedada a reprodução ou uso comercial não autorizado.
          </p>
          <h4 className="font-serif text-lg text-[#1c241b] pt-2 font-medium">2. Edições Limitadas & Variações Naturais</h4>
          <p>
            Por se tratarem de composições artesanais e botânicas vivas ou desidratadas, pequenas nuances de tonalidade, forma e textura são características intrínsecas à nobreza e singularidade de cada obra, não configurando defeito de fabricação.
          </p>
          <h4 className="font-serif text-lg text-[#1c241b] pt-2 font-medium">3. Visitação e Agendamento</h4>
          <p>
            O atendimento presencial em nosso ateliê físico (Apipema Center, Ondina - Salvador/BA) ocorre em horário comercial e por agendamento prévio para consultoria sensorial privativa.
          </p>
        </div>
      ),
    },
  };

  const current = contentMap[type];
  const Icon = current.icon;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-[#f7f4ed] text-[#1c241b] rounded-sm shadow-2xl border border-[#9EA88B]/40 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 sm:p-8 bg-[#E8E0D3] border-b border-[#1c241b]/10">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#f7f4ed] border border-[#9EA88B]/50 flex items-center justify-center text-[#9EA88B] flex-shrink-0 shadow-xs">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h3 id="policy-modal-title" className="font-serif text-xl sm:text-2xl font-light text-[#1c241b]">
                {current.title}
              </h3>
              <p className="font-sans text-[11px] sm:text-xs text-[#1c241b]/70 font-light mt-0.5">
                {current.subtitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#1c241b] hover:text-[#9EA88B] hover:bg-[#1c241b]/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9EA88B]"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto overscroll-contain flex-grow">
          {current.text}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#E8E0D3]/60 border-t border-[#1c241b]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans">
          <span className="text-[#1c241b]/70">Dúvidas? Fale com nosso Concierge.</span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="https://wa.me/5571996241487"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial text-center py-2 px-4 bg-[#9EA88B] hover:bg-[#8e987b] text-[#1c241b] font-semibold uppercase text-[10px] tracking-wider rounded-xs transition-colors"
            >
              WhatsApp Concierge
            </a>
            <button
              onClick={onClose}
              className="py-2 px-4 bg-[#1c241b]/10 hover:bg-[#1c241b]/15 text-[#1c241b] font-medium text-[10px] uppercase tracking-wider rounded-xs transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
