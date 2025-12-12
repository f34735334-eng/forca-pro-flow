import { Plus, Calendar, FileText, MessageSquare, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const actions = [
  { icon: Plus, label: "Novo Lead", variant: "default" as const },
  { icon: Calendar, label: "Agendar Aula", variant: "outline" as const },
  { icon: FileText, label: "Gerar Orçamento", variant: "outline" as const },
  { icon: MessageSquare, label: "WhatsApp", variant: "outline" as const },
];

export function QuickActions() {
  return (
    <div className="flex flex-wrap gap-3">
      {actions.map((action) => (
        <Button
          key={action.label}
          variant={action.variant}
          className={action.variant === "default" ? "gap-2" : "gap-2"}
        >
          <action.icon className="w-4 h-4" />
          {action.label}
        </Button>
      ))}
    </div>
  );
}
