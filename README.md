# Aplicação Player

A Aplicação Player exibe vídeo-aulas organizadas em módulos e aulas. Utiliza o **Redux** para gerenciamento de estado, aplicando o conceito de **Thunk** para operações assíncronas. A interface da aplicação é estilizada com **Tailwind CSS**.

## Índice

- [Descrição](#descrição)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## Descrição

A **Aplicação Player** exibe vídeo-aulas organizadas em módulos e aulas. Utiliza o **Redux** para gerenciamento de estado, aplicando o conceito de **Thunk** para operações assíncronas. A interface da aplicação é estilizada com **Tailwind CSS**.

## Instalação

Para instalar o projeto, siga estas etapas:

1. Clone o repositório:
    ```bash
    git clone https://github.com/RaissaMacedo/dev-store.git
    cd dev-store
    ```
2. Instale as dependências:
    ```bash
    npm install
    ```

## Configuração

Para configurar a aplicação, você precisa criar um arquivo de variáveis de ambiente `.env.local` na raiz do projeto com a seguinte variável:

```env
NEXT_PUBLIC_API_BASE_URL="http://localhost:3000/api"
