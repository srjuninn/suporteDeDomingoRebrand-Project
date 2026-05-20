
# Suporte de Domingo — Rebrand

> Rebrand do site **Suporte de Domingo** criado como atividade do curso técnico do SENAI.

## Visão geral

Este rebrand apresenta uma landing page responsiva que mostra os serviços oferecidos pela empresa. O objetivo do projeto é demonstrar habilidades de front-end (React + SCSS), práticas de design responsivo e internacionalização, além de organização de código em componentes reutilizáveis.

Público-alvo do README: desenvolvedores que queiram rodar, entender ou contribuir com o projeto.

## Principais funcionalidades

- Layout responsivo com foco em mobile-first.
- Cards de serviços com interação e opção de seleção.
- Scroll horizontal no mobile para navegar pelos serviços.
- Internacionalização com `i18next` (pt, es, en).
- Abertura rápida para WhatsApp via utilitário `src/utils/openWhatsapp.js`.

## Estrutura do repositório (detalhada)

- `index.html` — entrada estática que carrega o bundle do Vite.
- `package.json` — scripts e dependências.
- `vite.config.js` — configurações do Vite.
- `src/`
   - `main.jsx` — inicialização da aplicação e providers (i18n, etc.).
   - `App.jsx` — componente raiz que organiza layouts.
   - `assets/` — imagens e `icons/` (SVGs em componentes React).
   - `components/` — componentes genéricos e reutilizáveis:
      - `Button/` — botão padrão com ícone
      - `LeftService/`, `MiddleService/`, `RightService/` — variações dos cards de serviço
   - `layouts/` — páginas/seções compostas por components:
      - `Header/`, `Main/`, `Services/`, `Footer/`
      - `Services/Service.jsx` — coordena os cards e descrição ativa
   - `styles/` — SCSS compartilhado
      - `_variables.scss`, `_mixins.scss`, `_breakpoints.scss`, `_reset.scss`
   - `locales/` — pastas `pt/`, `es/`, `en/` com `translation.json`
   - `utils/` — helpers (ex.: `openWhatsapp.js`)

## Componentes chave

- `Services/Service.jsx` — array de serviços, seleção e descrição ativa.
- `LeftService`, `MiddleService`, `RightService` — cada um tem seu próprio SCSS e SVGs.
- `assets/icons/` — ícones exportados como componentes React aceitando `width`/`height`.

## Tecnologias e dependências

- React (JSX)
- Vite (bundler de desenvolvimento e build)
- SCSS
- i18next (internacionalização)
- Dependências adicionais podem estar listadas em `package.json` (verifique lá para versões exatas).

## Scripts úteis

- `npm run dev` — roda o servidor de desenvolvimento (HMR)
- `npm run build` — gera build de produção em `dist/`
- `npm run preview` — serve o conteúdo de `dist` localmente para testes finais

## Variáveis de ambiente

- `VITE_WHATSAPP_NUMBER` — número de destino usado por `src/utils/openWhatsapp.js` (ex.: `+5511999999999`)
- `VITE_WHATSAPP_MESSAGE` — mensagem padrão ao abrir o WhatsApp

Coloque as variáveis em um arquivo `.env` na raiz durante o desenvolvimento, por exemplo:

```
VITE_WHATSAPP_NUMBER=+5511999999999
VITE_WHATSAPP_MESSAGE=Olá,%20gostaria%20de%20mais%20informações
```

## Boas práticas de desenvolvimento

- Componentize quando um elemento se repete.
- Mantenha variáveis e mixins SCSS em `src/styles` para consistência.
- Prefira propriedades flexbox e `scroll-snap` para comportamento tipo carrossel no mobile.

## Como contribuir

1. Fork o repositório.
2. Crie uma branch com um nome descritivo: `feature/nome-da-feature`.
3. Abra um Pull Request com descrição clara do que foi alterado.

Para alterações visuais, inclua prints ou um link para uma demo do deploy.

## Nota sobre o rebrand

Este projeto é um rebrand da empresa "Suporte de Domingo" realizado como atividade prática do curso técnico do SENAI. O objetivo foi aplicar conceitos de design e front-end aprendidos durante o curso.

---
