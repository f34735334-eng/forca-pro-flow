import { cn } from "@/lib/utils";

interface FunnelStage {
  label: string;
  value: number;
  percentage: number;
}

const funnelData: FunnelStage[] = [
  { label: "Novos Leads", value: 187, percentage: 100 },
  { label: "Contato Realizado", value: 142, percentage: 76 },
  { label: "Aula Experimental", value: 73, percentage: 39 },
  { label: "Orçamento Enviado", value: 45, percentage: 24 },
  { label: "Matriculados", value: 31, percentage: 17 },
];

export function FunnelChart() {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="mb-6">
        <h3 className="font-semibold text-foreground">Funil de Conversão</h3>
        <p className="text-sm text-muted-foreground">Acompanhamento do mês atual</p>
      </div>
      <div className="space-y-4">
        {funnelData.map((stage, index) => (
          <div key={stage.label} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-foreground">{stage.label}</span>
              <span className="text-muted-foreground">
                {stage.value} <span className="text-xs">({stage.percentage}%)</span>
              </span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-500 ease-out",
                  index === funnelData.length - 1 
                    ? "bg-success" 
                    : "bg-primary"
                )}
                style={{ 
                  width: `${stage.percentage}%`,
                  opacity: 1 - (index * 0.15)
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Taxa de Conversão Total</span>
          <span className="text-lg font-bold text-success">17%</span>
        </div>
      </div>
    </div>
  );
}
