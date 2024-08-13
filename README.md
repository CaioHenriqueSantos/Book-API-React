# Book API React

**Book API React** é um projeto desenvolvido em React que consome uma API de livros para fornecer uma experiência interativa de exploração de livros. O aplicativo permite a navegação entre páginas de resultados e exibe detalhes dos livros de forma dinâmica.

## Funcionalidades

- **Navegação entre páginas**: Permite aos usuários navegar para a próxima e anterior página de resultados de livros.
- **Exibição de livros**: Mostra uma lista de livros com informações detalhadas.
- **Atualização de dados**: Atualiza dinamicamente os dados exibidos com base na interação do usuário.

## Tecnologias Utilizadas

- **React**: Biblioteca para a construção da interface de usuário.
- **Context API**: Gerencia o estado global da aplicação, incluindo dados dos livros e navegação.
- **Fetch API**: Consome dados de uma API externa de livros.

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/CaioHenriqueSantos/Book-API-React.git
   
2. **Navegue até o diretório do projeto:**

   ```bash
   cd Book-API-React

3. **Instale as dependências:**

   ```bash
   npm install

## Instalação

1. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm start

## Estrutura do Projeto

- **src/components/**: Contém componentes reutilizáveis, como Header, Footer, Loading, e ListItems.

- **src/services/**: Contém serviços para buscar dados da API (fetchApi).

- **src/context/**: Contém o contexto e o provider para gerenciar o estado global (Context e Provider).

- **src/pages/**: Contém páginas da aplicação, como a página inicial (Home).


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
