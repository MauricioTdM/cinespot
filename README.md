# CineSpot: Explorador de Filmes com React e TMDB

## 📖 Sobre o Projeto

 O CineSpot é uma aplicação web desenvolvida como parte da "Atividade 5 - Consumo de API com ReactJS" do curso Desenvolvedor Full Stack Jr. da +praTi em parceria com a Codifica Edu. O projeto consiste em uma interface interativa que consome a API do The Movie Database (TMDB) para permitir que usuários busquem filmes, explorem detalhes e mantenham uma lista pessoal de favoritos.

 Esta aplicação foi construída com o objetivo de praticar e demonstrar habilidades em ReactJS, manipulação de estado, consumo de APIs REST e estilização moderna com Tailwind CSS.

## ✨ Funcionalidades Implementadas

 O projeto atende a todos os requisitos obrigatórios da atividade, oferecendo uma experiência de usuário completa e fluida.

### 1. 🔍 Página de Busca

 * Campo de Pesquisa Dinâmico: Uma barra de busca permite que o usuário digite o termo desejado para encontrar filmes.

 * Exibição de Resultados: Os filmes encontrados são exibidos em um layout de grade, mostrando o pôster, título e ano de lançamento.

 * Acesso aos Detalhes: Cada filme possui um botão para que o usuário possa visualizar mais informações.

### 2. 📄 Paginação

 * Navegação Intuitiva: Sistema de paginação para navegar facilmente entre os resultados da busca, garantindo boa performance e usabilidade.

### 3. 🎬 Página de Detalhes

 * Informações Abrangentes: Ao selecionar um filme, o usuário é levado a uma página dedicada que exibe informações completas, como sinopse, elenco principal, diretor, gênero e avaliação dos usuários.

### 4. ❤️ Lista de Favoritos

 * Gerenciamento de Favoritos: Um botão de "favoritar" permite ao usuário adicionar ou remover filmes de sua lista pessoal.

 * Persistência de Dados: A lista de favoritos é salva no localStorage do navegador, garantindo que as preferências do usuário não sejam perdidas ao fechar ou recarregar a página.

### 5. ⏳ Tratamento de Erros e Carregamento

 * Feedback Visual: Indicadores de carregamento (loading) são exibidos enquanto a aplicação aguarda a resposta da API.

 * Mensagens Claras: Mensagens de erro são mostradas caso a API falhe ou a busca não retorne resultados, guiando o usuário sobre o que aconteceu.

## 🛠️ Tecnologias Utilizadas

 * React.js: Biblioteca JavaScript para a construção de interfaces de usuário.

 * Tailwind CSS: Framework CSS utility-first para estilização rápida e responsiva.

 * React Router Dom: Para o gerenciamento de rotas e navegação entre páginas.

 * Axios: Cliente HTTP baseado em Promises para realizar requisições à API do TMDB.

 * TMDB API: Fonte de todos os dados sobre os filmes.

## 🚀 Como Executar o Projeto Localmente

 Para executar este projeto em sua máquina, siga os passos abaixo.

### Pré-requisitos

 * Node.js: Certifique-se de ter o Node.js instalado (versão 16 ou superior).

 * Gerenciador de Pacotes: npm ou yarn.

 * Chave da API do TMDB: É necessário ter uma chave de API válida do TMDB. Você pode obter uma gratuitamente registrando-se no site oficial.

### Guia de Instalação

 1. Clone o repositório:

        git clone https://github.com/MauricioTdM/cinespot.git

 2. Acesse o diretório do projeto:

        cd cinespot

 3. Instale as dependências:

        npm install     # ou     yarn install         

 4. Configure as variáveis de ambiente:

    * Crie um arquivo .env na raiz do projeto.

    * Adicione sua chave da API do TMDB a este arquivo, conforme o exemplo abaixo:

            VITE_API_KEY=SUA_CHAVE_DE_API_AQUI             

 5. Inicie a aplicação:

        npm run dev     # ou, se não estiver usando Vite:     # npm start         

 6. Abra seu navegador e acesse http://localhost:5173 (ou a porta indicada no seu terminal).