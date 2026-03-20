# Documentacao Completa do Projeto

## Visao Geral

Este repositorio contem o portifolio pessoal da Suellen Miranda, construido com React + TypeScript + Vite.
O site e uma SPA (Single Page Application), com foco em:

- apresentacao profissional
- experiencias e projetos
- curriculos e carta de apresentacao
- contato e redes sociais
- suporte a dois idiomas (PT/EN)
- tema claro/escuro

---

## Stack Tecnica

- `React 18` (UI)
- `TypeScript` (tipagem)
- `Vite` (build e dev server)
- `Tailwind CSS` (estilizacao)
- `shadcn/ui` (componentes base)
- `React Router` (roteamento SPA)
- `TanStack React Query` (infra pronta no app)

---

## Estrutura de Pastas (principal)

- `src/main.tsx`: ponto de entrada da aplicacao
- `src/App.tsx`: providers globais + rotas
- `src/pages/Index.tsx`: composicao da home (ordem das secoes)
- `src/pages/NotFound.tsx`: pagina 404 interna da SPA
- `src/components/`: secoes e componentes de interface
- `src/contexts/`: contexto de idioma e tema
- `src/i18n/translations.ts`: textos em PT e EN
- `src/data/skills.ts`: dados das skills exibidas
- `src/lib/assets.ts`: helper para URL de assets em Pages
- `src/index.css`: tokens de tema, base CSS e utilitarios
- `public/images/`: imagens estaticas usadas nas secoes
- `.github/workflows/deploy-pages.yml`: pipeline de deploy no GitHub Pages

---

## Fluxo de Renderizacao da App

1. `src/main.tsx` renderiza `<App />`
2. `src/App.tsx` inicializa:
   - `QueryClientProvider`
   - `TooltipProvider`
   - `Toaster` / `Sonner`
   - `BrowserRouter` com `basename` ajustado para GitHub Pages
3. Rota `/` renderiza `src/pages/Index.tsx`
4. `Index.tsx` monta as secoes na ordem:
   - `Navbar`
   - `HeroSection`
   - `AboutSection`
   - `SkillsSection`
   - `ExperienceSection`
   - `ProjectsSection`
   - `CoverLetterSection`
   - `DISCSection`
   - `ResumesSection`
   - `ContactSection`
   - `Footer`

---

## Onde Editar Cada Parte do Site

## Navegacao / Header

- Arquivo: `src/components/Navbar.tsx`
- O que editar:
  - links do menu
  - botao de idioma
  - botao de tema
  - comportamento do menu mobile

## Hero (topo com nome/foto/CTAs)

- Arquivo: `src/components/HeroSection.tsx`
- O que editar:
  - frase principal
  - badges de tecnologias
  - imagens rotativas
  - espacos responsivos no mobile

## Sobre mim

- Arquivo: `src/components/AboutSection.tsx`

## Habilidades

- Arquivos:
  - `src/components/SkillsSection.tsx`
  - `src/data/skills.ts`

## Experiencias

- Arquivo: `src/components/ExperienceSection.tsx`
- Dados de texto (PT/EN): `src/i18n/translations.ts` em `experience.items`

## Projetos

- Arquivo: `src/components/ProjectsSection.tsx`
- Dados de texto (PT/EN): `src/i18n/translations.ts` em `projects.items`

## Carta de apresentacao

- Arquivo: `src/components/CoverLetterSection.tsx`
- Textos base: `src/i18n/translations.ts` em `resumes.cl_*`

## DISC

- Arquivo: `src/components/DISCSection.tsx`
- Textos: `src/i18n/translations.ts` em `disc.*`

## Curriculos

- Arquivo: `src/components/ResumesSection.tsx`
- Textos: `src/i18n/translations.ts` em `resumes.*`

## Contato + "Me siga"

- Arquivo: `src/components/ContactSection.tsx`
- O que editar:
  - emails
  - CTA LinkedIn
  - links sociais
  - cores dos icones por rede

## Rodape

- Arquivo: `src/components/Footer.tsx`

---

## Idiomas (PT/EN)

- Fonte unica de textos: `src/i18n/translations.ts`
- Estrutura:
  - `translations.pt`
  - `translations.en`
- Contexto de idioma:
  - `src/contexts/LanguageContext.tsx`
- Troca de idioma acontece no `Navbar`.

Boa pratica: ao adicionar qualquer novo texto na interface, sempre adicionar PT e EN para manter consistencia.

---

## Tema Claro/Escuro

- Contexto: `src/contexts/ThemeContext.tsx`
- Tokens de cores: `src/index.css` em `:root` e `.dark`
- Componente de toggle: `src/components/ThemeToggle.tsx`

O tema atual fica salvo em `localStorage` com a chave `theme`.

---

## Assets e Imagens

- Imagens locais: `public/images/`
- Em componentes React, prefira usar `assetUrl()`:
  - arquivo: `src/lib/assets.ts`
- Motivo: garante caminho correto no GitHub Pages com subpasta do repositorio.

Exemplo:

```ts
import { assetUrl } from "@/lib/assets";

const img = assetUrl("images/me.jpg");
```

---

## Responsividade (Mobile)

Pontos principais ja tratados:

- menu mobile com overlay e fechamento ao tocar fora (`Navbar.tsx`)
- bloqueio de scroll do body com menu aberto (`Navbar.tsx`)
- eliminacao de scroll horizontal global (`src/index.css`)
- protecao de overflow no hero (`HeroSection.tsx`)

Se aparecer novo overflow lateral, revisar elementos com:

- `width` fixo muito grande
- `position: absolute` com `translate`
- `iframe` sem limite de largura

---

## Deploy no GitHub Pages

- Workflow: `.github/workflows/deploy-pages.yml`
- Disparo: push em `main`
- Etapas:
  1. `npm install`
  2. `npm run build`
  3. copia `dist/index.html` para `dist/404.html` (fallback SPA)
  4. upload artifact
  5. deploy com `actions/deploy-pages`

Configuracao importante:

- No build, usa `GITHUB_PAGES_BASE=/${{ github.event.repository.name }}/`
- Isso garante compatibilidade com nome do repo (inclusive maiusculas/minusculas).

Em `Settings > Pages`:

- Source: `GitHub Actions`

Em `Settings > Actions > General`:

- Workflow permissions: `Read and write permissions`

---

## Scripts NPM

- `npm run dev`: ambiente local
- `npm run build`: build de producao
- `npm run preview`: preview da build
- `npm run lint`: analise de lint
- `npm run test`: testes com Vitest

---

## Como Rodar Localmente

```bash
npm install
npm run dev
```

Acesso padrao local: `http://localhost:8080/`

---

## Guia Rapido de Manutencao

### Atualizar texto de uma secao

1. Editar chaves em `src/i18n/translations.ts` (PT e EN)
2. Conferir componente correspondente em `src/components/`

### Trocar imagem

1. Salvar arquivo em `public/images/`
2. Referenciar com `assetUrl("images/nome.ext")`

### Adicionar nova secao na home

1. Criar componente em `src/components/NovaSecao.tsx`
2. Importar em `src/pages/Index.tsx`
3. Inserir no `<main>` na ordem desejada
4. Se tiver texto, adicionar no `translations.ts`

### Publicar alteracoes

1. Commit + push para `main`
2. Aguardar workflow "Deploy to GitHub Pages"
3. Validar site publicado

---

## Observacoes Tecnicas

- O projeto usa alias `@` para `src` (configurado em `vite.config.ts`).
- O roteamento usa apenas a rota principal e fallback `*`.
- `React Query` esta configurado globalmente e pode ser usado para dados remotos futuros.
- A pasta `src/components/ui/` contem componentes base reutilizaveis do shadcn/ui.

---

## Checklist Antes de Deploy

- [ ] Sem erro de lint (`npm run lint`)
- [ ] Build gerando (`npm run build`)
- [ ] Conteudo PT/EN sincronizado
- [ ] Links externos validos
- [ ] Sem overflow horizontal no mobile
- [ ] Imagens carregando no Pages

