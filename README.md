# 🎮 DAOC Games

Catálogo de jogos desenvolvido com React e Tailwind CSS, consumindo a API RAWG.

## ⚠️ IMPORTANTE - Configuração da API Key

Antes de rodar o projeto, você precisa obter uma chave de API gratuita:

1. Acesse https://rawg.io/apidocs
2. Clique em "Get API Key"
3. Faça um cadastro rápido (email + senha)
4. Copie sua chave de API
5. Adicione sua key em src/services/api.js

Sem a API key o projeto não vai funcionar!

## Tecnologias

- React 19
- Vite
- Tailwind CSS v4
- RAWG API

## Como rodar
```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

Depois acesse http://localhost:5173

## Funcionalidades

- Listagem de jogos populares
- Sistema de busca
- Detalhes de cada jogo (clique no card)
- Design responsivo
- Loading states

Projeto desenvolvido como avaliação na disciplina de Desenvolvimento de Aplicações Orientada a Componentes


## Observações

- A API tem limite de requisições, então evite fazer muitas buscas seguidas
- As imagens podem demorar um pouco pra carregar dependendo da internet
