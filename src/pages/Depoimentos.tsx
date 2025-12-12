import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { 
  Star, 
  Search, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  MoreHorizontal,
  Quote
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

interface Depoimento {
  id: string;
  clientName: string;
  modality: string;
  rating: number;
  text: string;
  status: "pendente" | "aprovado" | "rejeitado";
  createdAt: string;
  imageUrl?: string;
}

const depoimentos: Depoimento[] = [
  { 
    id: "1", 
    clientName: "Ana Paula Silva", 
    modality: "CrossFit", 
    rating: 5, 
    text: "Comecei há 6 meses e já perdi 12kg! A equipe é incrível e o ambiente super motivador. Recomendo demais!", 
    status: "aprovado", 
    createdAt: "14/07/2024" 
  },
  { 
    id: "2", 
    clientName: "Luciana Costa", 
    modality: "Pilates", 
    rating: 5, 
    text: "As aulas de Pilates mudaram minha postura e acabaram com minhas dores nas costas. A professora Mariana é excelente!", 
    status: "pendente", 
    createdAt: "11/07/2024" 
  },
  { 
    id: "3", 
    clientName: "Roberto Santos", 
    modality: "Musculação", 
    rating: 4, 
    text: "Academia muito completa, equipamentos novos e bem conservados. Só poderia ter mais horários de aulas coletivas no final de semana.", 
    status: "aprovado", 
    createdAt: "10/07/2024" 
  },
  { 
    id: "4", 
    clientName: "Juliana Ferreira", 
    modality: "Spinning", 
    rating: 5, 
    text: "As aulas de spinning são demais! Energia lá em cima, música boa e o Carlos é um instrutor fantástico!", 
    status: "pendente", 
    createdAt: "09/07/2024" 
  },
  { 
    id: "5", 
    clientName: "Marcos Oliveira", 
    modality: "Natação", 
    rating: 5, 
    text: "Meus filhos adoram as aulas de natação. Professores muito atenciosos e piscina sempre limpa.", 
    status: "aprovado", 
    createdAt: "07/07/2024" 
  },
  { 
    id: "6", 
    clientName: "Patricia Lima", 
    modality: "Yoga", 
    rating: 3, 
    text: "Boas aulas mas a sala poderia ser mais ventilada.", 
    status: "rejeitado", 
    createdAt: "05/07/2024" 
  },
];

const statusConfig = {
  pendente: { label: "Pendente", icon: Clock, className: "bg-warning/10 text-warning" },
  aprovado: { label: "Aprovado", icon: CheckCircle2, className: "bg-success/10 text-success" },
  rejeitado: { label: "Rejeitado", icon: XCircle, className: "bg-destructive/10 text-destructive" },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star 
          key={star} 
          className={cn(
            "w-4 h-4",
            star <= rating ? "text-warning fill-warning" : "text-muted"
          )} 
        />
      ))}
    </div>
  );
}

const Depoimentos = () => {
  const pendentes = depoimentos.filter(d => d.status === "pendente");
  const aprovados = depoimentos.filter(d => d.status === "aprovado");
  const rejeitados = depoimentos.filter(d => d.status === "rejeitado");

  return (
    <MainLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Depoimentos</h1>
          <p className="text-muted-foreground mt-1">Gerencie os depoimentos dos alunos</p>
        </div>
        <Button className="gap-2">
          <Star className="w-4 h-4" />
          Solicitar Depoimento
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{pendentes.length}</p>
              <p className="text-sm text-muted-foreground">Pendentes</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{aprovados.length}</p>
              <p className="text-sm text-muted-foreground">Aprovados</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Star className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">4.7</p>
              <p className="text-sm text-muted-foreground">Média Geral</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="pendentes" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="pendentes" className="gap-2">
            Pendentes
            <span className="bg-warning/20 text-warning px-2 py-0.5 rounded-full text-xs">{pendentes.length}</span>
          </TabsTrigger>
          <TabsTrigger value="aprovados">Aprovados</TabsTrigger>
          <TabsTrigger value="rejeitados">Rejeitados</TabsTrigger>
          <TabsTrigger value="todos">Todos</TabsTrigger>
        </TabsList>

        <TabsContent value="pendentes">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pendentes.map((dep, index) => (
              <DepoimentoCard key={dep.id} depoimento={dep} index={index} showActions />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="aprovados">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aprovados.map((dep, index) => (
              <DepoimentoCard key={dep.id} depoimento={dep} index={index} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="rejeitados">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rejeitados.map((dep, index) => (
              <DepoimentoCard key={dep.id} depoimento={dep} index={index} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="todos">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {depoimentos.map((dep, index) => (
              <DepoimentoCard key={dep.id} depoimento={dep} index={index} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
};

function DepoimentoCard({ 
  depoimento, 
  index, 
  showActions = false 
}: { 
  depoimento: Depoimento; 
  index: number;
  showActions?: boolean;
}) {
  const status = statusConfig[depoimento.status];

  return (
    <div 
      className="bg-card rounded-xl border border-border p-6 animate-fade-up opacity-0"
      style={{ animationFillMode: "forwards", animationDelay: `${index * 0.05}s` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <span className="text-lg font-semibold text-primary">
              {depoimento.clientName.split(" ").map(n => n[0]).join("").slice(0, 2)}
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{depoimento.clientName}</h3>
            <p className="text-sm text-muted-foreground">{depoimento.modality}</p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {showActions && (
              <>
                <DropdownMenuItem className="text-success">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Aprovar
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  <XCircle className="w-4 h-4 mr-2" />
                  Rejeitar
                </DropdownMenuItem>
              </>
            )}
            <DropdownMenuItem>Editar</DropdownMenuItem>
            <DropdownMenuItem>Excluir</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <StarRating rating={depoimento.rating} />

      <div className="mt-4 relative">
        <Quote className="absolute -top-2 -left-1 w-6 h-6 text-muted/50" />
        <p className="text-foreground pl-5">{depoimento.text}</p>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
        <span className={cn("status-badge", status.className)}>
          <status.icon className="w-3 h-3" />
          {status.label}
        </span>
        <span className="text-sm text-muted-foreground">{depoimento.createdAt}</span>
      </div>
    </div>
  );
}

export default Depoimentos;
