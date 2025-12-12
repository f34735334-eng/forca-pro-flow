import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado pelo interesse!",
    });
    
    setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
    setIsSubmitting(false);
  };

  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma aula experimental gratuita.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Contato</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Fale conosco
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Agende sua aula experimental gratuita ou tire suas dúvidas. Estamos prontos para te ajudar!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Agende sua Aula Experimental
              </h2>
              <p className="text-muted-foreground mb-8">
                Preencha o formulário e entraremos em contato para confirmar seu agendamento.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone / WhatsApp</Label>
                    <Input
                      id="phone"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">Modalidade de interesse</Label>
                  <Select
                    value={formData.interest}
                    onValueChange={(value) => setFormData({ ...formData, interest: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma modalidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="musculacao">Musculação</SelectItem>
                      <SelectItem value="crossfit">CrossFit</SelectItem>
                      <SelectItem value="spinning">Spinning</SelectItem>
                      <SelectItem value="yoga">Yoga</SelectItem>
                      <SelectItem value="natacao">Natação</SelectItem>
                      <SelectItem value="pilates">Pilates</SelectItem>
                      <SelectItem value="funcional">Funcional</SelectItem>
                      <SelectItem value="outro">Ainda não decidi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem (opcional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Conte-nos mais sobre seus objetivos..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Agendar Aula Grátis"}
                  <Send className="w-4 h-4" />
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center mb-4">Ou fale direto pelo WhatsApp</p>
                <Button variant="outline" size="lg" className="w-full gap-2" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    Chamar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Informações de Contato</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Telefone</h3>
                      <p className="text-muted-foreground">(11) 99999-9999</p>
                      <p className="text-muted-foreground">(11) 3333-3333</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">E-mail</h3>
                      <p className="text-muted-foreground">contato@forcapro.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Endereço</h3>
                      <p className="text-muted-foreground">Av. Paulista, 1000 - Bela Vista</p>
                      <p className="text-muted-foreground">São Paulo - SP, 01310-100</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Horário de Funcionamento</h3>
                      <p className="text-muted-foreground">Seg a Sex: 5h às 23h</p>
                      <p className="text-muted-foreground">Sábado: 7h às 14h</p>
                      <p className="text-muted-foreground">Domingo: 8h às 12h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-border h-[300px] bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975885389844!2d-46.65390668502156!3d-23.56509698468095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1625151234567!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Força Pro"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contato;
