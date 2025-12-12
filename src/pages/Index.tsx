import { MainLayout } from "@/components/layout/MainLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { LeadsList } from "@/components/dashboard/LeadsList";
import { FunnelChart } from "@/components/dashboard/FunnelChart";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { CategoryBreakdown } from "@/components/dashboard/CategoryBreakdown";
import { Users, Calendar, FileText, TrendingUp } from "lucide-react";

const metrics = [
  {
    title: "Novos Leads (Mês)",
    value: "187",
    change: "+12%",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    title: "Aulas Exp. Agendadas",
    value: "73",
    change: "+8%",
    changeType: "positive" as const,
    icon: Calendar,
  },
  {
    title: "Orçamentos Solicitados",
    value: "45",
    change: "+5%",
    changeType: "positive" as const,
    icon: FileText,
  },
  {
    title: "Conversão Lead → Aluno",
    value: "23%",
    change: "+3%",
    changeType: "positive" as const,
    icon: TrendingUp,
  },
];

const Index = () => {
  return (
    <MainLayout>
      {/* Header */}
      <div className="mb-8 animate-fade-up opacity-0" style={{ animationFillMode: "forwards" }}>
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
          Olá, bem-vindo de volta! 👋
        </h1>
        <p className="text-muted-foreground mt-1">
          Aqui está o resumo da sua academia hoje.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="mb-8 animate-fade-up opacity-0 stagger-1" style={{ animationFillMode: "forwards" }}>
        <QuickActions />
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((metric, index) => (
          <div 
            key={metric.title}
            className={`animate-fade-up opacity-0 stagger-${index + 2}`}
            style={{ animationFillMode: "forwards" }}
          >
            <MetricCard {...metric} />
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leads List - Takes 2 columns */}
        <div className="lg:col-span-2 animate-fade-up opacity-0 stagger-6" style={{ animationFillMode: "forwards" }}>
          <LeadsList />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="animate-fade-up opacity-0 stagger-6" style={{ animationFillMode: "forwards", animationDelay: "0.35s" }}>
            <FunnelChart />
          </div>
          <div className="animate-fade-up opacity-0" style={{ animationFillMode: "forwards", animationDelay: "0.4s" }}>
            <CategoryBreakdown />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
