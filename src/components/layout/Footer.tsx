import { Link } from "react-router-dom";
import { Dumbbell, Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">Força Pro</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Transforme seu corpo e sua vida. Somos mais do que uma academia, somos uma comunidade focada em resultados.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-3">
              {["Início", "Modalidades", "Planos", "Horários", "Contato"].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === "Início" ? "/" : `/${item.toLowerCase()}`}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Modalidades */}
          <div>
            <h4 className="font-semibold mb-4">Modalidades</h4>
            <ul className="space-y-3">
              {["Musculação", "CrossFit", "Spinning", "Yoga", "Natação", "Pilates"].map((item) => (
                <li key={item}>
                  <span className="text-background/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="w-4 h-4 text-primary" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="w-4 h-4 text-primary" />
                contato@forcapro.com.br
              </li>
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © 2024 Força Pro. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/50">
            <a href="#" className="hover:text-background transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-background transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
