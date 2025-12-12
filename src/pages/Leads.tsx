import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  Phone, 
  Mail, 
  MessageSquare,
  Calendar,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  interest: string;
  source: string;
  status: "novo" | "contato" | "experimental" | "orcamento" | "matriculado";
  createdAt: string;
}

const leads: Lead[] = [
  { id: "1", name: "João Silva", email: "joao@email.com", phone: "(11) 99999-1234", interest: "Spinning", source: "Instagram", status: "experimental", createdAt: "15/07/2024" },
  { id: "2", name: "Maria Santos", email: "maria@email.com", phone: "(11) 98888-5678", interest: "Plano Anual", source: "Google Ads", status: "orcamento", createdAt: "14/07/2024" },
  { id: "3", name: "Carlos Oliveira", email: "carlos@email.com", phone: "(11) 97777-9012", interest: "Natação", source: "Indicação", status: "contato", createdAt: "14/07/2024" },
  { id: "4", name: "Ana Paula", email: "ana@email.com", phone: "(11) 96666-3456", interest: "CrossFit", source: "Google Ads", status: "matriculado", createdAt: "13/07/2024" },
  { id: "5", name: "Pedro Almeida", email: "pedro@email.com", phone: "(11) 95555-7890", interest: "Yoga", source: "Instagram", status: "experimental", createdAt: "12/07/2024" },
  { id: "6", name: "Luciana Costa", email: "luciana@email.com", phone: "(11) 94444-1234", interest: "Pilates", source: "Indicação", status: "novo", createdAt: "11/07/2024" },
  { id: "7", name: "Fernando Lima", email: "fernando@email.com", phone: "(11) 93333-5678", interest: "Musculação", source: "Site", status: "novo", createdAt: "10/07/2024" },
  { id: "8", name: "Camila Rodrigues", email: "camila@email.com", phone: "(11) 92222-9012", interest: "Funcional", source: "Instagram", status: "contato", createdAt: "09/07/2024" },
];

const statusConfig = {
  novo: { label: "Novo", className: "bg-info/10 text-info" },
  contato: { label: "Contato", className: "bg-warning/10 text-warning" },
  experimental: { label: "Experimental", className: "bg-primary/10 text-primary" },
  orcamento: { label: "Orçamento", className: "bg-accent text-accent-foreground" },
  matriculado: { label: "Matriculado", className: "bg-success/10 text-success" },
};

const Leads = () => {
  return (
    <MainLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Leads</h1>
          <p className="text-muted-foreground mt-1">Gerencie seu funil de conversão</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Novo Lead
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Buscar por nome, email ou telefone..." 
            className="pl-10"
          />
        </div>
        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos</SelectItem>
            <SelectItem value="novo">Novo</SelectItem>
            <SelectItem value="contato">Contato</SelectItem>
            <SelectItem value="experimental">Experimental</SelectItem>
            <SelectItem value="orcamento">Orçamento</SelectItem>
            <SelectItem value="matriculado">Matriculado</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Origem" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todas</SelectItem>
            <SelectItem value="instagram">Instagram</SelectItem>
            <SelectItem value="google">Google Ads</SelectItem>
            <SelectItem value="indicacao">Indicação</SelectItem>
            <SelectItem value="site">Site</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Status Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {["Todos", "Novo", "Contato", "Experimental", "Orçamento", "Matriculado"].map((tab, index) => (
          <Button
            key={tab}
            variant={index === 0 ? "default" : "outline"}
            size="sm"
            className="flex-shrink-0"
          >
            {tab}
            {index === 0 && <span className="ml-2 bg-primary-foreground/20 px-2 py-0.5 rounded-full text-xs">{leads.length}</span>}
          </Button>
        ))}
      </div>

      {/* Leads Table */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Nome</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Contato</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Interesse</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Origem</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Data</th>
                <th className="text-right px-6 py-4 text-sm font-medium text-muted-foreground">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {leads.map((lead, index) => {
                const status = statusConfig[lead.status];
                return (
                  <tr 
                    key={lead.id} 
                    className="hover:bg-muted/30 transition-colors animate-fade-up opacity-0"
                    style={{ animationFillMode: "forwards", animationDelay: `${index * 0.05}s` }}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-medium text-primary">
                            {lead.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                          </span>
                        </div>
                        <span className="font-medium text-foreground">{lead.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Mail className="w-3.5 h-3.5" />
                          {lead.email}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="w-3.5 h-3.5" />
                          {lead.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-foreground">{lead.interest}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-muted-foreground">{lead.source}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={cn("status-badge", status.className)}>
                        {status.label}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-muted-foreground">{lead.createdAt}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MessageSquare className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Calendar className="w-4 h-4" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
                            <DropdownMenuItem>Editar lead</DropdownMenuItem>
                            <DropdownMenuItem>Agendar aula</DropdownMenuItem>
                            <DropdownMenuItem>Gerar orçamento</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Arquivar</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
};

export default Leads;
