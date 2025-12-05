import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Calendar,
  BookOpen,
  Briefcase,
  User,
  ChevronRight,
  Clock,
  ArrowRight,
} from 'lucide-react';

// Sub-pages
import TrailsPage from './migrant/TrailsPage';
import TrailDetailPage from './migrant/TrailDetailPage';
import ModuleViewerPage from './migrant/ModuleViewerPage';
import JobsPage from './migrant/JobsPage';
import JobDetailPage from './migrant/JobDetailPage';

function MigrantHome() {
  const { t } = useLanguage();
  const { profile } = useAuth();

  const upcomingSessions = [
    {
      id: 1,
      type: 'Mediação Cultural',
      professional: 'João Santos',
      date: '15 Dez 2024',
      time: '14:00',
    },
  ];

  const trails = [
    { id: 1, name: 'Direitos Laborais em Portugal', progress: 60, modules: 5, completed: 3 },
    { id: 2, name: 'Cultura Portuguesa', progress: 30, modules: 8, completed: 2 },
    { id: 3, name: 'Sistema de Saúde', progress: 0, modules: 4, completed: 0 },
  ];

  const jobs = [
    { id: 1, title: 'Auxiliar de Limpeza', company: 'CleanPro', location: 'Lisboa' },
    { id: 2, title: 'Operador de Armazém', company: 'LogiTech', location: 'Sintra' },
  ];

  const navItems = [
    { icon: Calendar, label: t.dashboard.sessions, href: '/dashboard/migrante/sessoes', count: 1 },
    { icon: BookOpen, label: t.dashboard.trails, href: '/dashboard/migrante/trilhas' },
    { icon: Briefcase, label: t.dashboard.employment, href: '/dashboard/migrante/emprego' },
    { icon: User, label: t.dashboard.profile, href: '/dashboard/migrante/perfil' },
  ];

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">
          {t.dashboard.welcome}, {profile?.name}!
        </h1>
        <p className="text-muted-foreground mt-1">
          Aqui está o resumo do seu percurso
        </p>
      </div>

      {/* Quick Nav */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className="cpc-card p-4 flex flex-col items-center text-center hover:border-primary/50 transition-colors"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                <item.icon className="h-6 w-6" />
              </div>
              {item.count && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {item.count}
                </span>
              )}
            </div>
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Upcoming Sessions */}
        <div className="cpc-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              {t.dashboard.nextSessions}
            </h2>
            <Link to="/dashboard/migrante/sessoes" className="text-sm text-primary hover:underline">
              Ver todas
            </Link>
          </div>

          {upcomingSessions.length > 0 ? (
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <div
                  key={session.id}
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium">{session.type}</p>
                    <p className="text-sm text-muted-foreground">
                      Com {session.professional}
                    </p>
                  </div>
                  <div className="text-right text-sm">
                    <p className="font-medium">{session.date}</p>
                    <p className="text-muted-foreground">{session.time}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-4">{t.dashboard.noSessions}</p>
              <Button size="sm">
                {t.dashboard.bookSession}
              </Button>
            </div>
          )}
        </div>

        {/* Trails Progress */}
        <div className="cpc-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              {t.dashboard.trails}
            </h2>
            <Link to="/dashboard/migrante/trilhas" className="text-sm text-primary hover:underline">
              Ver todas
            </Link>
          </div>

          <div className="space-y-4">
            {trails.map((trail) => (
              <div key={trail.id} className="p-4 rounded-lg bg-muted/50">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-sm">{trail.name}</p>
                  <span className="text-xs text-muted-foreground">
                    {trail.completed}/{trail.modules} módulos
                  </span>
                </div>
                <Progress value={trail.progress} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Job Recommendations */}
        <div className="cpc-card p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Ofertas Recomendadas
            </h2>
            <Link to="/dashboard/migrante/emprego" className="text-sm text-primary hover:underline">
              Ver todas
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {jobs.map((job) => (
              <Link
                key={job.id}
                to="/dashboard/migrante/emprego"
                className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <div>
                  <p className="font-medium">{job.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {job.company} • {job.location}
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 cpc-card p-6 cpc-gradient-bg text-primary-foreground">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">Precisa de apoio?</h3>
            <p className="opacity-90 text-sm">
              Agende uma sessão com um dos nossos profissionais
            </p>
          </div>
          <Button variant="hero-outline" size="lg">
            Agendar Sessão
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </>
  );
}

export default function MigrantDashboard() {
  return (
    <Layout>
      <div className="cpc-section">
        <div className="cpc-container">
          <Routes>
            <Route index element={<MigrantHome />} />
            <Route path="trilhas" element={<TrailsPage />} />
            <Route path="trilhas/:trailId" element={<TrailDetailPage />} />
            <Route path="trilhas/:trailId/modulo/:moduleId" element={<ModuleViewerPage />} />
            <Route path="emprego" element={<JobsPage />} />
            <Route path="emprego/:jobId" element={<JobDetailPage />} />
          </Routes>
        </div>
      </div>
    </Layout>
  );
}
