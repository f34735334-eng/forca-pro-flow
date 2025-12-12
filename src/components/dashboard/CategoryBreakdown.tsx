import { Calendar, FileText, HelpCircle, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { 
    icon: Calendar, 
    label: "Aula Experimental", 
    count: 73, 
    color: "bg-primary/10 text-primary" 
  },
  { 
    icon: FileText, 
    label: "Orçamento Plano", 
    count: 45, 
    color: "bg-info/10 text-info" 
  },
  { 
    icon: HelpCircle, 
    label: "Dúvida Geral", 
    count: 38, 
    color: "bg-warning/10 text-warning" 
  },
  { 
    icon: UserCheck, 
    label: "Matrícula", 
    count: 31, 
    color: "bg-success/10 text-success" 
  },
];

export function CategoryBreakdown() {
  const total = categories.reduce((acc, cat) => acc + cat.count, 0);

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="mb-6">
        <h3 className="font-semibold text-foreground">Categorias de Leads</h3>
        <p className="text-sm text-muted-foreground">Distribuição por tipo de interesse</p>
      </div>
      <div className="space-y-4">
        {categories.map((category) => {
          const percentage = Math.round((category.count / total) * 100);
          return (
            <div 
              key={category.label} 
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", category.color)}>
                <category.icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground text-sm">{category.label}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={cn("h-full rounded-full", category.color.replace("/10", ""))}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground w-10">{percentage}%</span>
                </div>
              </div>
              <span className="text-lg font-semibold text-foreground">{category.count}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
