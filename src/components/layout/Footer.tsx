import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border">
      <div className="cpc-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img src={logo} alt="CPC Logo" className="h-10 w-auto mb-4" />
            <p className="text-muted-foreground text-sm max-w-md">
              Connecting People & Companies — Plataforma de inclusão socioprofissional para migrantes em Portugal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t.nav.about}
              </Link>
              <Link to="/como-funciona" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t.nav.howItWorks}
              </Link>
              <Link to="/contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t.nav.contact}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t.contact.title}</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@cpc-portugal.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+351 210 000 000</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Lisboa, Portugal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CPC. {t.footer.rights}.
          </p>
          <div className="flex gap-4">
            <Link to="/privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t.footer.privacy}
            </Link>
            <Link to="/termos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
