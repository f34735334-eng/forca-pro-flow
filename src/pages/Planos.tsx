import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Star, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Básico",
    price: "89",
    period: "mês",
    description: "Ideal para quem quer começar a treinar",
    features: [
      "Acesso à musculação",
      "Horário comercial (6h às 22h)",
      "Avaliação física mensal",
      "Acesso ao app de treinos",
    ],
    notIncluded: [
      "Aulas coletivas",
      "Piscina",
      "Estacionamento",
    ],
    popular: false,
  },
  {
    name: "Completo",
    price: "149",
    period: "mês",
    description: "O mais escolhido pelos nossos alunos",
    features: [
      "Acesso total à academia",
      "Todas as aulas coletivas",
      "Horário estendido (5h às 23h)",
      "Avaliação física quinzenal",
      "Acesso ao app de treinos",
      "Nutricionista online",
      "Armário incluso",
    ],
    notIncluded: [
      "Personal trainer",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "249",
    period: "mês",
    description: "Experiência completa com acompanhamento",
    features: [
      "Tudo do plano Completo",
      "Personal trainer 2x/semana",
      "Acompanhamento nutricional",
      "Acesso VIP 24 horas",
      "Piscina e sauna",
      "Estacionamento gratuito",
      "Toalha e kit de higiene",
      "Desconto em parceiros",
    ],
    notIncluded: [],
    popular: false,
  },
];

const annualPlans = [
  { name: "Básico", originalPrice: "1.068", price: "890", savings: "178" },
  { name: "Completo", originalPrice: "1.788", price: "1.490", savings: "298" },
  { name: "Premium", originalPrice: "2.988", price: "2.490", savings: "498" },
];

const Planos = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Planos e Preços</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Escolha o plano ideal para você
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos planos flexíveis que se adaptam aos seus objetivos e orçamento. Todos com acesso à nossa estrutura de qualidade.
          </p>
        </div>
      </section>

      {/* Monthly Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground">Planos Mensais</h2>
            <p className="text-muted-foreground mt-2">Sem fidelidade, cancele quando quiser</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={plan.name}
                className={cn(
                  "relative rounded-2xl border p-8 animate-fade-up",
                  plan.popular 
                    ? "border-primary bg-card shadow-lg scale-105" 
                    : "border-border bg-card"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      <Star className="w-4 h-4 fill-current" />
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                </div>

                <div className="text-center mb-8">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <Check className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm opacity-50">
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                        <div className="w-1 h-[2px] bg-muted-foreground" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full gap-2" 
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link to="/contato">
                    Começar Agora
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Plans */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-success/10 text-success text-sm font-medium mb-4">
              Economize até R$ 498
            </span>
            <h2 className="text-2xl font-bold text-foreground">Planos Anuais</h2>
            <p className="text-muted-foreground mt-2">Pague menos e garanta seu ano de treinos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {annualPlans.map((plan, index) => (
              <div 
                key={plan.name}
                className="bg-card rounded-xl border border-border p-6 text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-semibold text-foreground mb-2">{plan.name} Anual</h3>
                <p className="text-sm text-muted-foreground line-through">R$ {plan.originalPrice}</p>
                <p className="text-3xl font-bold text-foreground">
                  R$ {plan.price}
                  <span className="text-sm font-normal text-muted-foreground">/ano</span>
                </p>
                <p className="text-sm text-success mt-2">Economia de R$ {plan.savings}</p>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/contato">Assinar Anual</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground text-center mb-12">Perguntas Frequentes</h2>
            
            <div className="space-y-6">
              {[
                { q: "Posso trocar de plano depois?", a: "Sim! Você pode fazer upgrade ou downgrade a qualquer momento. A diferença será calculada proporcionalmente." },
                { q: "Existe taxa de matrícula?", a: "Não cobramos taxa de matrícula em nenhum dos nossos planos." },
                { q: "Como funciona o período de experiência?", a: "Oferecemos uma aula experimental gratuita para você conhecer nossa estrutura antes de decidir." },
                { q: "Posso cancelar a qualquer momento?", a: "Planos mensais podem ser cancelados a qualquer momento sem multa. Planos anuais têm desconto por fidelidade." },
                { q: "O plano inclui todos os horários?", a: "Depende do plano escolhido. O Básico tem horário comercial, enquanto Completo e Premium têm acesso estendido." },
              ].map((faq, index) => (
                <div key={index} className="bg-card rounded-lg border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ainda tem dúvidas?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Agende uma visita e conheça nossa estrutura pessoalmente.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contato">Agendar Visita Grátis</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Planos;
