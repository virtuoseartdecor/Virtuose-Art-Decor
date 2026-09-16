# Virtuose Art Decor — Boutique Sensorial & Experiências

> Plataforma institucional e editorial para a **Virtuose Art Decor**, desenvolvida com estética *soft-pastel*, *color-blocking* refinado, micro-interações *ui-motion* e navegação fluida de alta performance.

---

## 🏛️ Tecnologias & Arquitetura

- **Core**: React 19 + TypeScript + Vite
- **Estilização**: Tailwind CSS v4 + Vanilla CSS Design Tokens
- **Animações & Física**: GSAP (GreenSock) + `@studio-freight/lenis` (Smooth Scroll)
- **Ícones**: Lucide React
- **Imagens & Assets**: WebP de alta fidelidade e SVG otimizados

---

## 🚀 Como Executar Localmente

```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev

# 3. Gerar a build de produção
npm run build
```

---

## 🌐 Como Fazer o Upload e Publicar na Hostinger

Este repositório já está 100% configurado para a Hostinger com regras completas de servidor no arquivo `public/.htaccess` (Redirecionamento automático HTTPS, Roteamento SPA para evitar erro 404, Compressão Gzip/Deflate, Caching LiteSpeed e Cabeçalhos de Segurança).

Existem duas formas principais de integração com a Hostinger:

---

### Método 1: Deploy Automático via GitHub Actions (Recomendado)

O repositório inclui o fluxo em `.github/workflows/deploy.yml`. Toda vez que você fizer `git push` para a branch `main`, o GitHub compila a aplicação e envia os arquivos otimizados diretamente para a Hostinger.

#### Passo a passo para ativar:
1. No seu painel da **Hostinger (hPanel)**:
   - Vá em **Acesso FTP** (ou Contas FTP).
   - Anote o **Host / Servidor FTP**, **Nome de Usuário FTP** e sua **Senha**.
2. No seu repositório no **GitHub**:
   - Vá em **Settings** > **Secrets and variables** > **Actions**.
   - Clique em **New repository secret** e adicione as 3 variáveis:
     - `FTP_SERVER`: Seu servidor FTP da Hostinger (ex: `ftp.seudominio.com.br` ou o IP do servidor).
     - `FTP_USERNAME`: Seu usuário FTP.
     - `FTP_PASSWORD`: Sua senha FTP.
3. Pronto! A cada novo commit, o GitHub Actions fará o build e o upload automático para a pasta `public_html/`.

---

### Método 2: Usando a Ferramenta Git Nativa da Hostinger (hPanel)

1. Acesse o **hPanel** da Hostinger.
2. Na barra de pesquisa ou no menu lateral, acesse **Git** (em *Avançado*).
3. Preencha os campos:
   - **Repositório**: `https://github.com/virtuoseartdecor/Virtuose-Art-Decor.git`
   - **Branch**: `main`
   - **Diretório de Instalação**: `public_html` (ou subpasta desejada).
4. Clique em **Criar**.
5. Se o seu plano não possuir Node.js no servidor para rodar `npm run build` na nuvem, você pode:
   - Utilizar o **Método 1 (GitHub Actions)**, que faz o build nos servidores do GitHub gratuitamente; OU
   - Copiar o conteúdo da pasta `dist/` local para o `public_html` pelo **Gerenciador de Arquivos** da Hostinger.

---

### 🛡️ Otimizações do `.htaccess` Incluídas
- **Forçar HTTPS**: Redirecionamento automático 301 para tráfego seguro com SSL.
- **Roteamento SPA**: Evita erro 404 ao atualizar a página em qualquer rota.
- **Cache LiteSpeed / Apache**: Imagens WebP e fontes armazenadas em cache por até 1 ano.
- **Compressão Gzip / Brotli**: Carregamento ultra-rápido de HTML, CSS e JavaScript.
- **Segurança**: Headers `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN` e `Referrer-Policy`.
