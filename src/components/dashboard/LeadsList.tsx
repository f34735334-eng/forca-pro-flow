import { cn } from "@/lib/utils";
import { CheckCircle2, Clock, Calendar, MessageSquare, FileText, Star, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Lead {
  id: string;
  name: string;
  action: string;
  details: string;
  status: "confirmado" | "pendente" | "realizada" | "aguardando";
  date: string;
  time: string;
  type: "aula" | "orcamento" | "chat" | "reserva" | "depoimento";
}

const mockLeads: Lead[] = [
  {
    id: "1",
    name: "João Silva",
    action: "Agendou Aula Experimental",
    details: "Spinning",
    status: "confirmado",
    date: "15/07",
    time: "10:00",
    type: "aula"
  },
  {
    id: "2",
    name: "Maria Santos",
    action: "Solicitou Orçamento",
    details: "Plano Anual (R$ 1.250,00)",
    status: "pendente",
    date: "14/07",
    time: "14:30",
    type: "orcamento"
  },
  {
    id: "3",
    name: "Carlos Oliveira",
    action: "Mensagem no Chat",
    details: "Dúvidas sobre Natação",
    status: "aguardando",
    date: "14/07",
    time: "09:15",
    type: "chat"
  },
  {
    id: "4",
    name: "Ana Paula",
    action: "Aula Experimental",
    details: "CrossFit",
    status: "realizada",
    date: "13/07",
    time: "18:00",
    type: "aula"
  },
  {
    id: "5",
    name: "Pedro Almeida",
    action: "Reserva em Yoga",
    details: "Aula das 19h",
    status: "confirmado",
    date: "12/07",
    time: "19:00",
    type: "reserva"
  },
  {
    id: "6",
    name: "Luciana Costa",
    action: "Depoimento recebido",
    details: "Pilates",
    status: "pendente",
    date: "11/07",
    time: "16:45",
    type: "depoimento"
  },
];

const statusConfig = {
  confirmado: { label: "Confirmado", className: "status-badge-success" },
  pendente: { label: "Pendente", className: "status-badge-warning" },
  realizada: { label: "Realizada", className: "status-badge-info" },
  aguardando: { label: "Aguardando", className: "status-badge-pending" },
};

const typeIcons = {
  aula: Calendar,
  orcamento: FileText,
  chat: MessageSquare,
  reserva: Calendar,
  depoimento: Star,
};

export function LeadsList() {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="px-6 py-4 border-b border-border flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-foreground">Leads Recentes</h3>
          <p className="text-sm text-muted-foreground">Últimas atividades do funil</p>
        </div>
        <Button variant="outline" size="sm">
          Ver todos
        </Button>
      </div>
      <div className="divide-y divide-border">
        {mockLeads.map((lead, index) => {
          const status = statusConfig[lead.status];
          const Icon = typeIcons[lead.type];
          
          return (
            <div 
              key={lead.id} 
              className={cn(
                "px-6 py-4 hover:bg-muted/50 transition-colors animate-fade-up opacity-0",
                `stagger-${index + 1}`
              )}
              style={{ animationFillMode: "forwards" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">{lead.name}</span>
                    <span className={cn("status-badge", status.className)}>
                      {lead.status === "confirmado" || lead.status === "realizada" ? (
                        <CheckCircle2 className="w-3 h-3" />
                      ) : (
                        <Clock className="w-3 h-3" />
                      )}
                      {status.label}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {lead.action} - {lead.details}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-medium text-foreground">{lead.date}</p>
                  <p className="text-xs text-muted-foreground">às {lead.time}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
                    <DropdownMenuItem>Entrar em contato</DropdownMenuItem>
                    <DropdownMenuItem>Editar status</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
