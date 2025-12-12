import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { 
  Plus, 
  Search, 
  MoreHorizontal, 
  FileText, 
  Send, 
  Eye, 
  Copy,
  CheckCircle2,
  Clock,
  XCircle
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Orcamento {
  id: string;
  leadName: string;
  planName: string;
  value: string;
  duration: string;
  status: "rascunho" | "enviado" | "visualizado" | "aceito" | "recusado";
  createdAt: string;
  validUntil: string;
}

const orcamentos: Orcamento[] = [
  { id: "1", leadName: "Maria Santos", planName: "Plano Anual Premium", value: "R$ 1.250,00", duration: "12 meses", status: "enviado", createdAt: "14/07/2024", validUntil: "21/07/2024" },
  { id: "2", leadName: "Carlos Oliveira", planName: "Plano Semestral", value: "R$ 720,00", duration: "6 meses", status: "visualizado", createdAt: "13/07/2024", validUntil: "20/07/2024" },
  { id: "3", leadName: "Luciana Costa", planName: "Plano Trimestral", value: "R$ 420,00", duration: "3 meses", status: "rascunho", createdAt: "12/07/2024", validUntil: "19/07/2024" },
  { id: "4", leadName: "Fernando Lima", planName: "Plano Anual Básico", value: "R$ 950,00", duration: "12 meses", status: "aceito", createdAt: "10/07/2024", validUntil: "17/07/2024" },
  { id: "5", leadName: "Camila Rodrigues", planName: "Plano Mensal", value: "R$ 150,00", duration: "1 mês", status: "recusado", createdAt: "08/07/2024", validUntil: "15/07/2024" },
  { id: "6", leadName: "Roberto Santos", planName: "Plano Semestral Premium", value: "R$ 890,00", duration: "6 meses", status: "enviado", createdAt: "07/07/2024", validUntil: "14/07/2024" },
];

const statusConfig = {
  rascunho: { label: "Rascunho", icon: FileText, className: "bg-muted text-muted-foreground" },
  enviado: { label: "Enviado", icon: Send, className: "bg-info/10 text-info" },
  visualizado: { label: "Visualizado", icon: Eye, className: "bg-warning/10 text-warning" },
  aceito: { label: "Aceito", icon: CheckCircle2, className: "bg-success/10 text-success" },
  recusado: { label: "Recusado", icon: XCircle, className: "bg-destructive/10 text-destructive" },
};

const Orcamentos = () => {
  return (
    <MainLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Orçamentos</h1>
          <p className="text-muted-foreground mt-1">Gerencie propostas e planos personalizados</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Novo Orçamento
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
        {Object.entries(statusConfig).map(([key, config], index) => {
          const count = orcamentos.filter(o => o.status === key).length;
          return (
            <div 
              key={key}
              className="bg-card rounded-lg border border-border p-4 animate-fade-up opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center gap-2">
                <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", config.className)}>
                  <config.icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{count}</p>
                  <p className="text-xs text-muted-foreground">{config.label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Search */}
      <div className="relative max-w-md mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input 
          placeholder="Buscar orçamentos..." 
          className="pl-10"
        />
      </div>

      {/* Orçamentos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orcamentos.map((orcamento, index) => {
          const status = statusConfig[orcamento.status];
          return (
            <div 
              key={orcamento.id}
              className="bg-card rounded-xl border border-border p-5 hover:border-primary/30 transition-all duration-200 animate-fade-up opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-foreground">{orcamento.leadName}</h3>
                  <p className="text-sm text-muted-foreground">{orcamento.planName}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="w-4 h-4 mr-2" />
                      Visualizar
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Copy className="w-4 h-4 mr-2" />
                      Duplicar
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Send className="w-4 h-4 mr-2" />
                      Reenviar
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-2xl font-bold text-foreground">{orcamento.value}</span>
                <span className="text-sm text-muted-foreground">/ {orcamento.duration}</span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className={cn("status-badge", status.className)}>
                  <status.icon className="w-3 h-3" />
                  {status.label}
                </span>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Válido até</p>
                  <p className="text-sm font-medium text-foreground">{orcamento.validUntil}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </MainLayout>
  );
};

export default Orcamentos;
