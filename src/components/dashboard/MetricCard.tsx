import { cn } from "@/lib/utils";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  className?: string;
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  changeType = "neutral", 
  icon: Icon,
  className 
}: MetricCardProps) {
  return (
    <div className={cn("metric-card group", className)}>
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
          {change && (
            <div className="flex items-center gap-1">
              {changeType === "positive" ? (
                <TrendingUp className="w-4 h-4 text-success" />
              ) : changeType === "negative" ? (
                <TrendingDown className="w-4 h-4 text-destructive" />
              ) : null}
              <span 
                className={cn(
                  "text-sm font-medium",
                  changeType === "positive" && "text-success",
                  changeType === "negative" && "text-destructive",
                  changeType === "neutral" && "text-muted-foreground"
                )}
              >
                {change}
              </span>
            </div>
          )}
        </div>
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
    </div>
  );
}
