import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Briefcase, CheckCircle, Shield, Heart } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Index() {
  const { t } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      title: t.features.items.training.title,
      description: t.features.items.training.description,
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      icon: Users,
      title: t.features.items.support.title,
      description: t.features.items.support.description,
      color: 'bg-green-500/10 text-green-600',
    },
    {
      icon: Briefcase,
      title: t.features.items.employment.title,
      description: t.features.items.employment.description,
      color: 'bg-purple-500/10 text-purple-600',
    },
  ];

  const stats = [
    { value: '500+', label: 'Migrantes Apoiados' },
    { value: '50+', label: 'Empresas Parceiras' },
    { value: '95%', label: 'Taxa de Satisfação' },
    { value: '12', label: 'Regiões de Portugal' },
  ];

  const values = [
    { icon: Heart, label: 'Inclusão' },
    { icon: Shield, label: 'Dignidade' },
    { icon: CheckCircle, label: 'Respeito' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 cpc-gradient-bg opacity-95" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        
        <div className="relative cpc-container py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/registar?role=migrant">
                  {t.hero.cta.migrant}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/registar?role=company">
                  {t.hero.cta.company}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Values Pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {values.map((value) => (
                <div
                  key={value.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-sm"
                >
                  <value.icon className="h-4 w-4" />
                  {value.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="cpc-section">
        <div className="cpc-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.features.title}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="cpc-card p-8 text-center group hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="cpc-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cpc-section">
        <div className="cpc-container">
          <div className="cpc-card p-8 md:p-12 text-center cpc-gradient-bg text-primary-foreground rounded-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para começar?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
              Junte-se a centenas de migrantes e empresas que já fazem parte da nossa comunidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/registar">{t.nav.register}</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/sobre">Saber Mais</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
