

## Plano: Portfólio de Suellen Miranda Amorim

**Resumo**: Portfólio minimalista escuro, bilíngue (PT/EN), com todas as seções, para uma profissional multidisciplinar (dev, designer, backend, SAP, freelancer).

---

### Estrutura de Arquivos

```text
src/
├── i18n/
│   └── translations.ts        # Textos PT e EN
├── contexts/
│   └── LanguageContext.tsx      # Context para idioma
├── components/
│   ├── Navbar.tsx              # Nav fixa + botão idioma
│   ├── HeroSection.tsx         # Nome, título, CTA
│   ├── AboutSection.tsx        # Sobre mim
│   ├── SkillsSection.tsx       # Tech stack + habilidades
│   ├── ExperienceSection.tsx   # Timeline profissional
│   ├── ProjectsSection.tsx     # Grid de projetos
│   ├── ContactSection.tsx      # Formulário + links
│   └── Footer.tsx              # Rodapé
├── pages/
│   └── Index.tsx               # Página principal (single page)
```

---

### Seções do Site

1. **Navbar** - Logo/nome, links de navegação por âncora, botão PT/EN
2. **Hero** - Nome "Suellen Miranda Amorim", subtítulo multidisciplinar, botões CTA (Ver Projetos / Contato)
3. **Sobre** - Texto descritivo, foto placeholder, áreas de atuação
4. **Habilidades** - Cards/badges organizados por categoria (Dev, Design, SAP, Backend)
5. **Experiência** - Timeline vertical com cargos e datas (dados placeholder editáveis)
6. **Projetos** - Grid de cards com imagem, título, descrição, tags de tecnologia
7. **Contato** - Formulário simples (nome, email, mensagem) + links sociais
8. **Footer** - Copyright + links

### Design

- Fundo escuro (`bg-gray-950`), acentos em cor destaque (ex: violeta ou ciano)
- Tipografia clean, animações sutis de scroll
- Totalmente responsivo (mobile-first)
- Smooth scroll entre seções

### Sistema de Idiomas

- Context React com toggle PT/EN
- Arquivo de traduções centralizado com todas as strings
- Botão no navbar para alternar idioma

### Detalhes Técnicos

- Single page com scroll suave via âncoras
- Componentes separados por seção para manutenção fácil
- Dados placeholder prontos para personalização
- Sem dependências extras necessárias (usa lucide-react para ícones, componentes UI existentes)

