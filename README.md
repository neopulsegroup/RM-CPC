# Portal Conecta Caminhos

O **Portal Conecta Caminhos** é uma plataforma digital desenvolvida para facilitar a integração de migrantes em Portugal, conectando-os a oportunidades de emprego, serviços de apoio e orientação burocrática. O sistema serve como um ponto de encontro entre migrantes, empresas e entidades de apoio.

## 🚀 Funcionalidades Principais

### Para Migrantes
*   **Triagem Inicial Interativa**: Um assistente passo-a-passo que avalia a situação atual do migrante (localização, documentação, necessidades) para fornecer orientações personalizadas.
*   **Dashboard Personalizado**: Visualização do progresso, tarefas pendentes e recomendações baseadas no perfil.
*   **Gestão de Documentos**: Orientação sobre NIF, NISS e outros documentos essenciais.
*   **Apoio Multilíngue**: Interface totalmente traduzida em Português, Inglês e Espanhol.

### Para Empresas
*   **Registo e Perfil**: Criação de conta empresarial com validação de NIF e dados de contato.
*   **Publicação de Oportunidades**: Ferramentas para divulgar vagas e conectar-se com talentos.

### Funcionalidades Transversais
*   **Autenticação Segura**: Sistema de login e registo robusto via Firebase Auth.
*   **Design Responsivo**: Interface moderna e adaptável a dispositivos móveis e desktop.
*   **Geolocalização**: Integração de mapas para localização de serviços.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias modernas de desenvolvimento web, focadas em performance e experiência do utilizador.

### Core
*   **[React](https://react.dev/)**: Biblioteca JavaScript para construção de interfaces.
*   **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript com tipagem estática.
*   **[Vite](https://vitejs.dev/)**: Build tool rápida e leve.

### UI & Estilização
*   **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitário.
*   **[shadcn/ui](https://ui.shadcn.com/)**: Coleção de componentes de UI reutilizáveis baseados em Radix UI.
*   **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones consistente e leve.

### Gestão de Estado e Dados
*   **[TanStack Query](https://tanstack.com/query/latest)**: Gestão de estado assíncrono e data fetching.
*   **React Context**: Gestão de estado global (Autenticação, Idioma).

### Backend e Integrações
*   **[Firebase](https://firebase.google.com/)**: Plataforma backend-as-a-service.
    *   **Authentication**: Gestão de identidades e sessões.
    *   **Firestore**: Base de dados NoSQL em tempo real.

### Outras Ferramentas
*   **[React Router](https://reactrouter.com/)**: Navegação e roteamento (SPA).
*   **[React Hook Form](https://react-hook-form.com/)** + **[Zod](https://zod.dev/)**: Gestão e validação de formulários.
*   **[date-fns](https://date-fns.org/)**: Manipulação de datas.

## 📂 Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis (UI, Layout, Forms)
├── contexts/       # Contextos React (Auth, Language)
├── hooks/          # Custom Hooks
├── integrations/   # Configurações de serviços externos (Firebase, Supabase)
├── lib/            # Utilitários e configurações (i18n, utils)
├── pages/          # Componentes de página (Home, Triage, Dashboard, Auth)
└── styles/         # Estilos globais
```

## 🏁 Como Iniciar

### Pré-requisitos
*   Node.js (versão 18 ou superior)
*   npm ou yarn

### Instalação

1.  Clone o repositório:
    ```bash
    git clone <url-do-repositorio>
    cd portal-conecta-caminhos-main
    ```

2.  Instale as dependências:
    ```bash
    npm install
    ```

3.  Configure as variáveis de ambiente:
    Crie um arquivo `.env` na raiz do projeto com as credenciais do Firebase (exemplo baseado no setup atual).

4.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

5.  Acesse a aplicação em `http://localhost:8080`.

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, siga as boas práticas de desenvolvimento, mantenha o estilo de código consistente e certifique-se de testar suas alterações.

---

Desenvolvido com foco na inclusão e apoio à comunidade migrante em Portugal.

---

Desenvolvido com ❤️ por [NEOPULSE](https://neopulse.group/)