# IdentyFlow - Landing Page

![IdentyFlow Logo](assets/icons/favicon.png)

Landing page oficial do **IdentyFlow** - Sistema Inteligente de Gestão Educacional para escolas de beleza e negócios que precisam gerenciar cursos profissionais.

🌐 **Website:** [www.identyflow.com.br](https://www.identyflow.com.br)

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Instalação e Uso](#instalação-e-uso)
- [Deployment](#deployment)
- [Otimizações](#otimizações)
- [Acessibilidade](#acessibilidade)
- [Suporte](#suporte)

---

## 📖 Sobre o Projeto

Esta landing page foi desenvolvida para apresentar o IdentyFlow, um sistema completo de gestão educacional. A página foi construída com foco em:

- **Conversão:** Estrutura otimizada para guiar o visitante até a ação de compra
- **Performance:** Carregamento rápido com Core Web Vitals otimizados
- **Responsividade:** Design mobile-first que funciona em todos os dispositivos
- **Acessibilidade:** Seguindo padrões WCAG AA

### Seções da Landing Page

1. **Hero Section** - Apresentação principal com CTAs
2. **Problemas** - Dores do público-alvo
3. **Funcionalidades** - Features do produto
4. **Demonstração** - Screenshots interativas do sistema
5. **ROI** - Justificativa de valor e retorno do investimento
6. **Planos e Preços** - Tabela de preços com CTAs
7. **Como Funciona** - Passos para começar
8. **FAQ** - Perguntas frequentes
9. **CTA Final** - Chamada para ação final
10. **Footer** - Links e informações de contato

---

## 🛠 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com:
  - CSS Custom Properties (variáveis)
  - Flexbox e CSS Grid
  - Animações e transições
  - Media queries responsivas
- **JavaScript** (Vanilla) - Interatividade
- **Lucide Icons** - Ícones SVG leves
- **Google Fonts** - Tipografia (Poppins + Inter)

### Sem Dependências Externas

A página não requer frameworks CSS ou JavaScript, garantindo:
- Carregamento mais rápido
- Menos pontos de falha
- Maior controle sobre o código

---

## 📁 Estrutura de Arquivos

```
Landing Page/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Scripts JavaScript
├── README.md           # Este arquivo
└── assets/
    ├── images/
    │   ├── dashboard-desktop.png    # Screenshot do dashboard
    │   ├── dashboard-mobile.png     # Versão mobile
    │   ├── dashboard-admin.png      # Painel administrativo
    │   └── og-image.png             # Imagem para compartilhamento
    └── icons/
        └── favicon.png              # Favicon
```

---

## 🚀 Instalação e Uso

### Pré-requisitos

Apenas um navegador web moderno é necessário para visualizar a página.

### Desenvolvimento Local

1. **Clone ou baixe o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/identyflow-landing.git
   cd identyflow-landing
   ```

2. **Abra no navegador:**
   - Opção 1: Abra o arquivo `index.html` diretamente
   - Opção 2: Use um servidor local (recomendado)

3. **Servidor Local com VS Code:**
   - Instale a extensão "Live Server"
   - Clique com botão direito no `index.html`
   - Selecione "Open with Live Server"

4. **Servidor Local com Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   Acesse: `http://localhost:8000`

5. **Servidor Local com Node.js:**
   ```bash
   npx serve
   ```

---

## 🌐 Deployment

### Opção 1: Hospedagem Estática (Recomendado)

A página pode ser hospedada em qualquer serviço de hospedagem estática:

#### Netlify
1. Faça login em [netlify.com](https://netlify.com)
2. Arraste a pasta do projeto para o dashboard
3. Pronto! URL gerada automaticamente

#### Vercel
1. Instale Vercel CLI: `npm i -g vercel`
2. Execute `vercel` na pasta do projeto
3. Siga as instruções

#### GitHub Pages
1. Crie um repositório no GitHub
2. Faça push do código
3. Vá em Settings > Pages
4. Selecione a branch main
5. Acesse pelo URL fornecido

### Opção 2: Servidor Web Tradicional

1. Faça upload dos arquivos via FTP/SFTP
2. Configure o servidor para servir `index.html`
3. Configure HTTPS (recomendado)

### Opção 3: AWS S3 + CloudFront

1. Crie um bucket S3 com website hosting
2. Faça upload dos arquivos
3. Configure CloudFront para CDN e HTTPS

---

## ⚡ Otimizações

### Performance

- [x] CSS e JS sem dependências pesadas
- [x] Lazy loading em imagens
- [x] Animações com `transform` e `opacity` (GPU-accelerated)
- [x] Event listeners com `{ passive: true }`
- [x] `requestAnimationFrame` para scroll events

### SEO

- [x] HTML semântico (`<header>`, `<main>`, `<section>`, `<footer>`)
- [x] Meta tags completas (description, keywords, author)
- [x] Open Graph tags para redes sociais
- [x] Estrutura de headings hierárquica (h1 > h2 > h3)
- [x] Alt text em todas as imagens

### Recomendações Adicionais

1. **Compressão de Imagens:**
   ```bash
   # Converter para WebP (melhor compressão)
   # Use ferramentas como Squoosh, ImageOptim ou TinyPNG
   ```

2. **Minificação (Produção):**
   ```bash
   # CSS
   npx csso styles.css -o styles.min.css
   
   # JavaScript
   npx terser script.js -o script.min.js
   ```

3. **Headers de Cache:**
   Configure no servidor:
   ```
   # Arquivos estáticos: 1 ano
   Cache-Control: public, max-age=31536000
   
   # HTML: sem cache
   Cache-Control: no-cache
   ```

---

## ♿ Acessibilidade

A página segue diretrizes WCAG 2.1 nível AA:

- [x] Contraste de cores adequado (mínimo 4.5:1)
- [x] Navegação completa por teclado
- [x] Focus states visíveis
- [x] ARIA labels em elementos interativos
- [x] Alt text descritivo em imagens
- [x] Estrutura de headings lógica
- [x] Suporte a `prefers-reduced-motion`
- [x] Tamanhos de fonte legíveis

### Testando Acessibilidade

1. **Navegação por Teclado:**
   - Use Tab para navegar
   - Enter/Space para ativar
   - Escape para fechar modais

2. **Leitor de Tela:**
   - Teste com NVDA (Windows) ou VoiceOver (Mac)

3. **Ferramentas Automáticas:**
   - [axe DevTools](https://www.deque.com/axe/)
   - [Lighthouse](https://developers.google.com/web/tools/lighthouse)
   - [WAVE](https://wave.webaim.org/)

---

## 🎨 Identidade Visual

### Cores Principais

| Nome | Código | Uso |
|------|--------|-----|
| Identy Blue | `#4A90E2` | CTAs, links, destaques |
| Flow Purple | `#7B5DFA` | Gradientes, acentos |
| Deep Tech Blue | `#1F2A48` | Textos, footer |
| Electric Lilac | `#A68CFF` | Destaques secundários |

### Tipografia

- **Poppins:** Títulos e destaques
- **Inter:** Textos corridos e interface

---

## 📱 Breakpoints Responsivos

| Dispositivo | Breakpoint | Características |
|-------------|------------|-----------------|
| Mobile | 320px - 767px | Layout em coluna única, menu hamburguer |
| Tablet | 768px - 1023px | Grid de 2 colunas, navegação expandida |
| Desktop | 1024px+ | Layout completo, todas as animações |

---

## 📝 Checklist de Deploy

Antes de publicar, verifique:

- [ ] Todas as imagens estão na pasta `/assets/images/`
- [ ] Favicon está configurado
- [ ] Links de CTAs apontam para URLs corretas
- [ ] Meta tags estão preenchidas
- [ ] og-image.png está criada
- [ ] Google Analytics está configurado (opcional)
- [ ] Testado em mobile, tablet e desktop
- [ ] Testado em Chrome, Firefox, Safari e Edge
- [ ] Testado com navegação por teclado
- [ ] Performance testada com Lighthouse (> 90)

---

## 🔧 Configurações Adicionais

### Adicionar Imagens

As imagens do dashboard devem ser colocadas em `assets/images/`:

1. `dashboard-desktop.png` - Screenshot principal (1200x800px recomendado)
2. `dashboard-mobile.png` - Versão mobile (400x800px recomendado)
3. `dashboard-admin.png` - Painel administrativo (1200x800px recomendado)

### Alterar Informações de Contato

No arquivo `index.html`, atualize:
- Email: `contato@identyflow.com.br`
- Telefone: `(11) 99999-9999`
- Links de redes sociais

### Integrar Analytics

Adicione antes do `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 📞 Suporte

Para dúvidas ou suporte:

- **Email:** contato@identyflow.com.br
- **Website:** [www.identyflow.com.br](https://www.identyflow.com.br)

---

## 📄 Licença

© 2026 IdentyFlow. Todos os direitos reservados.

---

**Desenvolvido com 💜 para transformar a educação profissional.**
