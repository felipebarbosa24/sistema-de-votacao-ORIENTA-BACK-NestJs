# Sistema de Votação Estudantil - Back-end ⚙️🗳️

API desenvolvida em **NestJS**, responsável por gerenciar o back-end do sistema de votação estudantil **ORIENTA**, desenvolvido em parceria com a **FACEPE** e a **Capyvara Company**.
Esta aplicação fornece endpoints para autenticação, gerenciamento de eleições, chapas e votos, além de servir como base de integração com o front-end.

---

## 📝 Descrição do Projeto

O **sistema de votação estudantil (back-end)** é um servidor Node.js construído com o framework **NestJS**, que gerencia e centraliza as informações das eleições, garantindo segurança, escalabilidade e uma arquitetura modular robusta para fácil integração.

---

## ✨ Funcionalidades

*   **Autenticação e Autorização** – Sistema seguro com JWT e Passport.js para proteger rotas e gerenciar perfis de usuário.
*   **Integração com MongoDB** – Persistência de dados utilizando Mongoose para modelagem de esquemas.
*   **Validação de Dados** – Garante a integridade dos dados de entrada (DTOs) com `class-validator` e `class-transformer`.
*   **Arquitetura Modular** – Código organizado em módulos, controllers e services, facilitando a manutenção e expansão.
*   **Configuração de Ambiente** – Gerenciamento de variáveis de ambiente com `.env` para diferentes estágios (desenvolvimento, produção).

---

## 🚀 Tecnologias Utilizadas

*   **NestJS** – Framework progressivo de Node.js para aplicações server-side eficientes e escaláveis.
*   **TypeScript** – Superset do JavaScript que adiciona tipagem estática.
*   **Node.js** – Ambiente de execução JavaScript.
*   **MongoDB** – Banco de dados NoSQL orientado a documentos.
*   **Mongoose** – ODM (Object Data Modeling) para MongoDB e Node.js.
*   **Passport.js** – Middleware de autenticação para Node.js.
    *   `passport-jwt` para estratégia de autenticação com JSON Web Tokens.
    *   `passport-local` para estratégia de autenticação com usuário e senha.
*   **Jest** & **Supertest** – Ferramentas para testes unitários e de ponta a ponta (E2E).

---

## 🛠️ Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** (ou Yarn/pnpm) instalados:

*   Node.js: versão 20 ou superior
*   npm: versão 10 ou superior

---

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/felipebarbosa24/sistema-de-votacao-ORIENTA-BACK-2.git
    cd sistema-de-votacao-orienta-back-2
    ```

2.  Instale as dependências:
    ```bash
    npm install
    ```

3.  Crie um arquivo `.env` na raiz do projeto baseando no template. Exemplo:
    ```env
    PORT=
    MONGO_URI=
    JWT_SECRET=
    ```

---

### Execução

1.  Inicie o servidor em modo de desenvolvimento (com hot-reload):
    ```bash
    npm run start:dev
    ```

2.  O servidor será iniciado em: `http://localhost:3000` (ou a porta definida no seu `.env`).

### Outros Scripts

```bash
# Compilar para produção
$ npm run build

# Iniciar em modo de produção
$ npm run start:prod

# Rodar testes unitários
$ npm run test

# Rodar testes e2e
$ npm run test:e2e

# Gerar relatório de cobertura de testes
$ npm run test:cov
```

---

## 📂 Estrutura do Projeto

A estrutura segue o padrão recomendado pelo NestJS, promovendo organização e escalabilidade.

```
📦 sistema-de-votacao-orienta-back-2
├── 📁 dist/                   # Arquivos compilados para produção
├── 📁 node_modules/           # Dependências do projeto
├── 📁 src/                     # Código-fonte da aplicação
│   ├── 📁 auth/                # Módulo de autenticação (controllers, services, strategies)
│   ├── 📁 users/               # Módulo de gerenciamento de usuários
│   ├── 📁 polls/               # Módulo para eleições, chapas e votos
│   ├── app.module.ts         # Módulo raiz da aplicação
│   └── main.ts               # Ponto de entrada da aplicação
├── 📁 test/                    # Testes de ponta a ponta (E2E)
├── .env.example              # Exemplo de arquivo de variáveis de ambiente
├── .gitignore                # Arquivos e pastas ignorados pelo Git
├── package.json              # Dependências e scripts do projeto
└── README.md                 # Documentação do projeto
```
