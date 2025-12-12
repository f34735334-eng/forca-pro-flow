import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Clock, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

const modalities = [
  {
    name: "Musculação",
    description: "Treinos personalizados com equipamentos de última geração para hipertrofia, definição ou emagrecimento.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    features: ["Equipamentos Technogym", "Personal disponível", "Programa individualizado"],
    intensity: "Moderada a Alta",
    duration: "60-90 min",
    capacity: "Livre",
  },
  {
    name: "CrossFit",
    description: "Treinamento funcional de alta intensidade que combina força, cardio e ginástica em workouts variados.",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&h=400&fit=crop",
    features: ["Box exclusivo", "Turmas reduzidas", "Competições internas"],
    intensity: "Alta",
    duration: "60 min",
    capacity: "25 pessoas",
  },
  {
    name: "Spinning",
    description: "Aulas de ciclismo indoor com música envolvente e instrutor motivador para queimar calorias.",
    image: "https://images.unsplash.com/photo-1594737626072-90dc274bc2bd?w=600&h=400&fit=crop",
    features: ["Bikes premium", "Iluminação especial", "Monitoramento cardíaco"],
    intensity: "Alta",
    duration: "45 min",
    capacity: "20 bikes",
  },
  {
    name: "Yoga",
    description: "Práticas de yoga para flexibilidade, equilíbrio mental e conexão corpo-mente.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
    features: ["Sala climatizada", "Vinyasa e Hatha", "Meditação guiada"],
    intensity: "Leve a Moderada",
    duration: "60-75 min",
    capacity: "15 pessoas",
  },
  {
    name: "Natação",
    description: "Aulas para todos os níveis, do iniciante ao avançado, em piscina aquecida e tratada.",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&h=400&fit=crop",
    features: ["Piscina 25m aquecida", "Turmas por nível", "Natação livre"],
    intensity: "Moderada",
    duration: "45-60 min",
    capacity: "10 por raia",
  },
  {
    name: "Pilates",
    description: "Método que fortalece a musculatura profunda, melhora postura e alivia dores.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
    features: ["Solo e aparelhos", "Fisioterapeuta", "Turmas pequenas"],
    intensity: "Leve a Moderada",
    duration: "50 min",
    capacity: "8 pessoas",
  },
  {
    name: "Funcional",
    description: "Treinos dinâmicos que melhoram força, resistência e condicionamento geral.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    features: ["Área externa", "Circuitos variados", "Treino em grupo"],
    intensity: "Moderada a Alta",
    duration: "45 min",
    capacity: "30 pessoas",
  },
  {
    name: "Zumba",
    description: "Aulas de dança com ritmos latinos que tornam o exercício divertido e eficiente.",
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=600&h=400&fit=crop",
    features: ["Ritmos variados", "Para todas as idades", "Alta queima calórica"],
    intensity: "Moderada a Alta",
    duration: "60 min",
    capacity: "40 pessoas",
  },
];

const Modalidades = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Nossas Modalidades</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Encontre o treino ideal para você
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos mais de 15 modalidades diferentes para atender todos os objetivos e preferências. Do treino intenso ao relaxamento.
          </p>
        </div>
      </section>

      {/* Modalities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {modalities.map((mod, index) => (
              <div 
                key={mod.name}
                className={cn(
                  "flex flex-col lg:flex-row gap-8 lg:gap-12 items-center animate-fade-up",
                  index % 2 === 1 && "lg:flex-row-reverse"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                    <img 
                      src={mod.image}
                      alt={mod.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                        {mod.name}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <h2 className="text-3xl font-bold text-foreground">{mod.name}</h2>
                  <p className="text-muted-foreground leading-relaxed">{mod.description}</p>

                  {/* Info Pills */}
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm">
                      <Flame className="w-4 h-4 text-primary" />
                      {mod.intensity}
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      {mod.duration}
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm">
                      <Users className="w-4 h-4 text-primary" />
                      {mod.capacity}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {mod.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="gap-2">
                    <Link to="/contato">
                      Agendar Aula Experimental
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Não sabe por onde começar?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Nossa equipe vai te ajudar a escolher a modalidade ideal para seus objetivos.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contato">Falar com um Consultor</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Modalidades;
