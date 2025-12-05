export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    // Navigation
    nav: {
      home: 'Início',
      about: 'Sobre',
      howItWorks: 'Como Funciona',
      contact: 'Contacto',
      login: 'Entrar',
      register: 'Registar',
      dashboard: 'Painel',
      logout: 'Sair',
    },
    // Hero
    hero: {
      title: 'Conectar Pessoas e Empresas',
      subtitle: 'Plataforma de inclusão socioprofissional para migrantes em Portugal',
      cta: {
        migrant: 'Sou Pessoa Migrante',
        company: 'Sou Empresa',
      },
    },
    // Features
    features: {
      title: 'Como Podemos Ajudar',
      subtitle: 'Oferecemos um percurso completo de integração',
      items: {
        training: {
          title: 'Capacitação Cultural',
          description: 'Trilhas formativas para preparar você para o mercado português',
        },
        support: {
          title: 'Apoio Personalizado',
          description: 'Acompanhamento com mediadores, juristas e psicólogos',
        },
        employment: {
          title: 'Inserção Profissional',
          description: 'Conexão direta com empresas e oportunidades de emprego',
        },
      },
    },
    // About
    about: {
      title: 'Sobre o CPC',
      subtitle: 'Connecting People & Companies',
      mission: 'Missão',
      missionText: 'Facilitar a integração socioprofissional de pessoas migrantes em Portugal, promovendo a capacitação, o apoio personalizado e a conexão com oportunidades de emprego.',
      values: 'Valores',
      valuesText: 'Inclusão, Respeito, Dignidade, Cooperação e Desenvolvimento Sustentável.',
    },
    // How It Works
    howItWorks: {
      title: 'Como Funciona',
      subtitle: 'Um percurso em três etapas',
      steps: {
        step1: {
          title: 'Capacitação e Preparação',
          description: 'Acesso a trilhas formativas sobre cultura, direitos, trabalho e saúde em Portugal.',
        },
        step2: {
          title: 'Apoio Personalizado',
          description: 'Sessões com mediadores culturais, apoio jurídico e psicológico conforme suas necessidades.',
        },
        step3: {
          title: 'Inserção Socioprofissional',
          description: 'Conexão com empresas, criação de CV e candidatura a ofertas de emprego.',
        },
      },
    },
    // Contact
    contact: {
      title: 'Contacto',
      subtitle: 'Entre em contacto connosco',
      form: {
        name: 'Nome',
        email: 'Email',
        message: 'Mensagem',
        submit: 'Enviar Mensagem',
        success: 'Mensagem enviada com sucesso!',
      },
      info: {
        address: 'Morada',
        phone: 'Telefone',
        email: 'Email',
        hours: 'Horário de Atendimento',
      },
    },
    // Auth
    auth: {
      login: 'Entrar',
      register: 'Criar Conta',
      email: 'Email',
      password: 'Palavra-passe',
      confirmPassword: 'Confirmar Palavra-passe',
      phone: 'Telemóvel',
      forgotPassword: 'Esqueceu a palavra-passe?',
      noAccount: 'Não tem conta?',
      hasAccount: 'Já tem conta?',
      selectRole: 'Selecione o seu perfil',
      roles: {
        migrant: 'Pessoa Migrante',
        company: 'Empresa',
        cpc: 'Equipa CPC',
      },
    },
    // Dashboard
    dashboard: {
      welcome: 'Bem-vindo(a)',
      sessions: 'Sessões',
      nextSessions: 'Próximas Sessões',
      noSessions: 'Sem sessões agendadas',
      bookSession: 'Agendar Sessão',
      trails: 'Trilhas Formativas',
      progress: 'Progresso',
      employment: 'Emprego',
      profile: 'Perfil',
      notifications: 'Notificações',
    },
    // Triage
    triage: {
      title: 'Triagem Inicial',
      subtitle: 'Responda algumas perguntas para personalizarmos o seu percurso',
      legalStatus: 'Situação Legal',
      workStatus: 'Situação Laboral',
      housingStatus: 'Situação Habitacional',
      language: 'Nível de Português',
      skills: 'Competências',
      interests: 'Áreas de Interesse',
      urgencies: 'Necessidades Urgentes',
      submit: 'Completar Triagem',
    },
    // Common
    common: {
      loading: 'A carregar...',
      error: 'Ocorreu um erro',
      save: 'Guardar',
      cancel: 'Cancelar',
      next: 'Próximo',
      back: 'Voltar',
      submit: 'Submeter',
      search: 'Pesquisar',
      filter: 'Filtrar',
      all: 'Todos',
      none: 'Nenhum',
      yes: 'Sim',
      no: 'Não',
    },
    // Footer
    footer: {
      rights: 'Todos os direitos reservados',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Uso',
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      howItWorks: 'How It Works',
      contact: 'Contact',
      login: 'Login',
      register: 'Register',
      dashboard: 'Dashboard',
      logout: 'Logout',
    },
    // Hero
    hero: {
      title: 'Connecting People & Companies',
      subtitle: 'A socio-professional inclusion platform for migrants in Portugal',
      cta: {
        migrant: "I'm a Migrant",
        company: "I'm a Company",
      },
    },
    // Features
    features: {
      title: 'How We Can Help',
      subtitle: 'We offer a complete integration journey',
      items: {
        training: {
          title: 'Cultural Training',
          description: 'Learning paths to prepare you for the Portuguese market',
        },
        support: {
          title: 'Personalized Support',
          description: 'Guidance from mediators, lawyers, and psychologists',
        },
        employment: {
          title: 'Professional Integration',
          description: 'Direct connection with companies and job opportunities',
        },
      },
    },
    // About
    about: {
      title: 'About CPC',
      subtitle: 'Connecting People & Companies',
      mission: 'Mission',
      missionText: 'To facilitate the socio-professional integration of migrants in Portugal, promoting training, personalized support, and connection with job opportunities.',
      values: 'Values',
      valuesText: 'Inclusion, Respect, Dignity, Cooperation, and Sustainable Development.',
    },
    // How It Works
    howItWorks: {
      title: 'How It Works',
      subtitle: 'A journey in three steps',
      steps: {
        step1: {
          title: 'Training & Preparation',
          description: 'Access to learning paths about culture, rights, work, and health in Portugal.',
        },
        step2: {
          title: 'Personalized Support',
          description: 'Sessions with cultural mediators, legal and psychological support based on your needs.',
        },
        step3: {
          title: 'Socio-Professional Integration',
          description: 'Connection with companies, CV creation, and job application.',
        },
      },
    },
    // Contact
    contact: {
      title: 'Contact',
      subtitle: 'Get in touch with us',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
        success: 'Message sent successfully!',
      },
      info: {
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        hours: 'Office Hours',
      },
    },
    // Auth
    auth: {
      login: 'Login',
      register: 'Create Account',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      phone: 'Phone',
      forgotPassword: 'Forgot password?',
      noAccount: "Don't have an account?",
      hasAccount: 'Already have an account?',
      selectRole: 'Select your profile',
      roles: {
        migrant: 'Migrant',
        company: 'Company',
        cpc: 'CPC Team',
      },
    },
    // Dashboard
    dashboard: {
      welcome: 'Welcome',
      sessions: 'Sessions',
      nextSessions: 'Upcoming Sessions',
      noSessions: 'No scheduled sessions',
      bookSession: 'Book Session',
      trails: 'Learning Paths',
      progress: 'Progress',
      employment: 'Employment',
      profile: 'Profile',
      notifications: 'Notifications',
    },
    // Triage
    triage: {
      title: 'Initial Assessment',
      subtitle: 'Answer a few questions to personalize your journey',
      legalStatus: 'Legal Status',
      workStatus: 'Work Status',
      housingStatus: 'Housing Status',
      language: 'Portuguese Level',
      skills: 'Skills',
      interests: 'Areas of Interest',
      urgencies: 'Urgent Needs',
      submit: 'Complete Assessment',
    },
    // Common
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      save: 'Save',
      cancel: 'Cancel',
      next: 'Next',
      back: 'Back',
      submit: 'Submit',
      search: 'Search',
      filter: 'Filter',
      all: 'All',
      none: 'None',
      yes: 'Yes',
      no: 'No',
    },
    // Footer
    footer: {
      rights: 'All rights reserved',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
    },
  },
};

export type Translations = typeof translations.pt;
