# Next.js Blog App Router

Blog desenvolvido com **Next.js 15**, utilizando **App Router**, **Server Components**, **rotas dinâmicas**, **SEO dinâmico** e geração estática de páginas.

O projeto foi desenvolvido com o objetivo de praticar os principais conceitos do desenvolvimento moderno utilizando Next.js.

---

## 🚀 Demonstração

Aplicação publicada na Vercel:

```
https://nextjs-blog-app-router.vercel.app
```

---

## 📌 Sobre o projeto

O Next.js Blog é uma aplicação de blog onde os artigos são carregados dinamicamente através de um arquivo JSON local.

Cada artigo possui uma rota própria utilizando rotas dinâmicas do App Router.

Exemplo:

```
/artigos/introducao-nextjs-15
```

Cada página possui metadados próprios gerados dinamicamente para melhorar SEO.

---

# Funcionalidades

- Listagem de artigos na página inicial
- Rotas dinâmicas utilizando `[slug]`
- Busca de dados através de JSON local
- Server Components
- Geração estática com `generateStaticParams`
- SEO dinâmico utilizando `generateMetadata`
- Página personalizada para conteúdo inexistente
- Loading state para carregamento de páginas
- Layout responsivo

---

# Tecnologias utilizadas

## Front-end

- Next.js 15
- React 19
- TypeScript
- HTML5
- CSS3

## Recursos Next.js

- App Router
- Server Components
- Dynamic Routes
- Static Site Generation (SSG)
- generateStaticParams
- generateMetadata
- next/image
- next/link

## Ferramentas

- Node.js
- NPM
- Git
- GitHub
- Vercel

---

# Estrutura do projeto

```
nextjs-blog-app-router

├── app
│   ├── artigos
│   │   └── [slug]
│   │       ├── page.tsx
│   │       └── loading.tsx
│   │
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   └── not-found.tsx

├── components
│   ├── ArticleCard.tsx
│   ├── Badge.tsx
│   ├── Container.tsx
│   ├── EmptyState.tsx
│   ├── Footer.tsx
│   └── Header.tsx

├── data
│   └── artigos.json
│
├── lib
│   └── articles.ts
│
├── public
│
├── package.json
└── README.md
```

---

# Conceitos aplicados

## App Router

O projeto utiliza o sistema moderno de rotas do Next.js baseado na estrutura de pastas.

---

## Server Components

As páginas utilizam componentes executados no servidor, evitando buscas desnecessárias no cliente.

---

## Rotas Dinâmicas

Os artigos são gerados através da rota:

```
app/artigos/[slug]/page.tsx
```

permitindo criar páginas individuais para cada conteúdo.

---

## Static Site Generation

A função:

```
generateStaticParams()
```

gera previamente as páginas dos artigos durante o build.

---

## SEO Dinâmico

Cada artigo possui:

- title personalizado
- description personalizada

utilizando:

```
generateMetadata()
```

---

# Como executar o projeto

Clone o repositório:

```bash
https://github.com/GabrielCyberDev/nextjs-blog-app-router
```

Entre na pasta:

```bash
cd nextjs-blog-app-router
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Acesse:

```
http://localhost:3000
```

---

# Build de produção

Gerar build:

```bash
npm run build
```

Executar versão de produção:

```bash
npm start
```

---

# Deploy

O projeto está publicado na Vercel e integrado ao GitHub através de uma pipeline de CI/CD utilizando GitHub Actions.

## Links

Aplicação:

https://nextjs-blog-app-router.vercel.app/

Repositório:

https://github.com/GabrielCyberDev/nextjs-blog-app-router

GitHub Actions:

https://github.com/GabrielCyberDev/nextjs-blog-app-router/actions

## Pipeline

A cada push ou Pull Request para a branch `main`, o GitHub Actions executa automaticamente:

- Instalação das dependências (`npm ci`)
- Análise de código (`npm run lint`)
- Execução dos testes (`npm test`)
- Build da aplicação (`npm run build`)

Caso todas as etapas sejam concluídas com sucesso, o workflow libera o job de deploy responsável pela publicação automática na Vercel.

## Secrets utilizados

Para que o deploy automático funcione corretamente, os seguintes secrets devem estar configurados no repositório GitHub:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Esses secrets permitem que o GitHub Actions autentique na Vercel e publique automaticamente uma nova versão da aplicação.
---

# Autor

Gabriel Costa

Projeto desenvolvido para prática de desenvolvimento avançado utilizando Next.js 15.