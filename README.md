# Portfólio - Suellen Miranda

Aplicação web de portfólio profissional desenvolvida com React, TypeScript e Vite.
O projeto reúne apresentação pessoal, experiências, projetos, links de contato e seções de currículo.

## Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router

## Requisitos

- Node.js 20+ (recomendado)
- npm

## Como rodar localmente

```bash
git clone https://github.com/SuellenMiranda/my-digital-canvas.git
cd my-digital-canvas
npm install
npm run dev
```

Aplicação local: `http://localhost:8080/`

## Scripts disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento
- `npm run build`: gera build de produção
- `npm run preview`: serve localmente a build gerada
- `npm run lint`: executa o lint do projeto
- `npm run test`: executa testes com Vitest

## Deploy (GitHub Pages)

O projeto utiliza GitHub Actions para deploy automático no GitHub Pages.

### Fluxo

1. Faça push na branch `main`
2. O workflow `.github/workflows/deploy-pages.yml` executa build e deploy
3. O site é publicado no GitHub Pages

### Configuração no GitHub

- Em `Settings > Pages`, defina `Source` como `GitHub Actions`
- Em `Settings > Actions > General`, habilite `Read and write permissions` para workflows

## Estrutura principal

- `src/`: código-fonte React
- `public/`: arquivos estáticos
- `.github/workflows/`: automações de CI/CD

## Licença

Este projeto é de uso pessoal/profissional para apresentação de portfólio.
