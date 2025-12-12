import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Dumbbell, 
  Users, 
  Clock, 
  Trophy,
  Star,
  CheckCircle2,
  Play
} from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { value: "2.500+", label: "Alunos Ativos" },
  { value: "15+", label: "Modalidades" },
  { value: "50+", label: "Profissionais" },
  { value: "98%", label: "Satisfação" },
];

const features = [
  {
    icon: Dumbbell,
    title: "Equipamentos Modernos",
    description: "Aparelhos de última geração das melhores marcas do mercado mundial.",
  },
  {
    icon: Users,
    title: "Professores Qualificados",
    description: "Equipe de profissionais certificados e especializados em cada modalidade.",
  },
  {
    icon: Clock,
    title: "Horário Flexível",
    description: "Funcionamos das 5h às 23h para se adaptar à sua rotina.",
  },
  {
    icon: Trophy,
    title: "Resultados Reais",
    description: "Metodologia comprovada com milhares de histórias de transformação.",
  },
];

const modalities = [
  { name: "Musculação", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop" },
  { name: "CrossFit", image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&h=300&fit=crop" },
  { name: "Spinning", image: "https://images.unsplash.com/photo-1594737626072-90dc274bc2bd?w=400&h=300&fit=crop" },
  { name: "Yoga", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop" },
  { name: "Natação", image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=300&fit=crop" },
  { name: "Pilates", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop" },
];

const testimonials = [
  {
    name: "Ana Paula Silva",
    role: "Aluna há 2 anos",
    text: "Comecei há 6 meses e já perdi 12kg! A equipe é incrível e o ambiente super motivador. Mudou minha vida!",
    rating: 5,
  },
  {
    name: "Carlos Oliveira",
    role: "Aluno há 1 ano",
    text: "Melhor academia que já frequentei. Equipamentos novos, professores atenciosos e resultados rápidos.",
    rating: 5,
  },
  {
    name: "Mariana Costa",
    role: "Aluna há 3 anos",
    text: "O CrossFit da Força Pro é sensacional! Fiz amigos para a vida toda e minha disposição nunca foi tão boa.",
    rating: 5,
  },
];

const Home = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-foreground">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop"
            alt="Academia Força Pro"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <Dumbbell className="w-4 h-4" />
              A academia que transforma vidas
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Supere seus limites.{" "}
              <span className="text-primary">Conquiste</span> resultados.
            </h1>
            <p className="text-lg text-background/80 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Na Força Pro, oferecemos estrutura completa, professores especializados e uma comunidade que vai te apoiar em cada passo da sua jornada fitness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button size="lg" asChild className="gap-2">
                <Link to="/contato">
                  Agendar Aula Grátis
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent text-background border-background/30 hover:bg-background/10">
                <Play className="w-4 h-4" />
                Conheça Nossa Estrutura
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-background/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-background/50" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-primary-foreground/80 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Por que nos escolher</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Tudo que você precisa em um só lugar
            </h2>
            <p className="text-muted-foreground">
              Estrutura completa, profissionais qualificados e um ambiente acolhedor para você alcançar seus objetivos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalities Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Modalidades</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                Encontre o treino perfeito para você
              </h2>
            </div>
            <Button variant="outline" asChild>
              <Link to="/modalidades">Ver Todas as Modalidades</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {modalities.map((mod, index) => (
              <Link 
                key={mod.name}
                to="/modalidades"
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={mod.image}
                  alt={mod.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-background">{mod.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Depoimentos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              O que nossos alunos dizem
            </h2>
            <p className="text-muted-foreground">
              Histórias reais de transformação e conquistas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="bg-card rounded-2xl border border-border p-8 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-warning fill-warning" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {testimonial.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Pronto para começar sua transformação?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Agende sua aula experimental gratuita e conheça nossa estrutura. Sem compromisso!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="gap-2">
              <Link to="/contato">
                Agendar Aula Grátis
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
              <Link to="/planos">Ver Planos e Preços</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
