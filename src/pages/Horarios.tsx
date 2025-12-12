import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ClassSchedule {
  time: string;
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
}

const schedule: ClassSchedule[] = [
  { time: "06:00", monday: "Funcional", tuesday: "Spinning", wednesday: "Funcional", thursday: "Spinning", friday: "Funcional", saturday: "" },
  { time: "07:00", monday: "Spinning", tuesday: "Yoga", wednesday: "Spinning", thursday: "Yoga", friday: "Spinning", saturday: "" },
  { time: "08:00", monday: "Yoga", tuesday: "Funcional", wednesday: "Yoga", thursday: "Funcional", friday: "Yoga", saturday: "CrossFit" },
  { time: "09:00", monday: "Natação", tuesday: "Natação", wednesday: "Natação", thursday: "Natação", friday: "Natação", saturday: "Yoga" },
  { time: "10:00", monday: "Pilates", tuesday: "Pilates", wednesday: "Pilates", thursday: "Pilates", friday: "Pilates", saturday: "Natação" },
  { time: "11:00", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "", saturday: "" },
  { time: "12:00", monday: "HIIT", tuesday: "", wednesday: "HIIT", thursday: "", friday: "HIIT", saturday: "" },
  { time: "17:00", monday: "Funcional", tuesday: "Zumba", wednesday: "Funcional", thursday: "Zumba", friday: "Funcional", saturday: "" },
  { time: "18:00", monday: "CrossFit", tuesday: "CrossFit", wednesday: "CrossFit", thursday: "CrossFit", friday: "Zumba", saturday: "" },
  { time: "19:00", monday: "Spinning", tuesday: "Pilates", wednesday: "Spinning", thursday: "Pilates", friday: "Spinning", saturday: "" },
  { time: "20:00", monday: "Yoga", tuesday: "Funcional", wednesday: "Yoga", thursday: "Funcional", friday: "", saturday: "" },
  { time: "21:00", monday: "Alongamento", tuesday: "", wednesday: "Alongamento", thursday: "", friday: "", saturday: "" },
];

const classColors: Record<string, string> = {
  "Spinning": "bg-primary/15 text-primary border-primary/30",
  "CrossFit": "bg-destructive/15 text-destructive border-destructive/30",
  "Yoga": "bg-success/15 text-success border-success/30",
  "Natação": "bg-info/15 text-info border-info/30",
  "Pilates": "bg-info/15 text-info border-info/30",
  "Funcional": "bg-warning/15 text-warning border-warning/30",
  "Zumba": "bg-primary/15 text-primary border-primary/30",
  "HIIT": "bg-destructive/15 text-destructive border-destructive/30",
  "Alongamento": "bg-muted text-muted-foreground border-border",
};

const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const dayKeys = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"] as const;

const Horarios = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Grade de Horários</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Encontre o melhor horário para você
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira nossa grade completa de aulas coletivas. Musculação e área de cardio funcionam das 5h às 23h.
          </p>
        </div>
      </section>

      {/* Legend */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(classColors).map(([name, color]) => (
              <div key={name} className="flex items-center gap-2">
                <div className={cn("w-3 h-3 rounded border", color.split(" ")[0], color.split(" ")[2])} />
                <span className="text-sm text-muted-foreground">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Table */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr>
                  <th className="p-4 text-left text-sm font-semibold text-muted-foreground w-24">Horário</th>
                  {days.map((day) => (
                    <th key={day} className="p-4 text-center text-sm font-semibold text-foreground">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, index) => (
                  <tr key={row.time} className="border-t border-border">
                    <td className="p-4 text-sm font-medium text-muted-foreground">{row.time}</td>
                    {dayKeys.map((day) => {
                      const className = row[day];
                      return (
                        <td key={day} className="p-2 text-center">
                          {className ? (
                            <span className={cn(
                              "inline-block px-3 py-2 rounded-lg text-sm font-medium border",
                              classColors[className] || "bg-muted text-muted-foreground"
                            )}>
                              {className}
                            </span>
                          ) : (
                            <span className="text-muted-foreground/30">—</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">Musculação</h3>
              <p className="text-sm text-muted-foreground">Seg a Sex: 5h às 23h</p>
              <p className="text-sm text-muted-foreground">Sábado: 7h às 14h</p>
              <p className="text-sm text-muted-foreground">Domingo: 8h às 12h</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">Piscina</h3>
              <p className="text-sm text-muted-foreground">Seg a Sex: 6h às 21h</p>
              <p className="text-sm text-muted-foreground">Sábado: 8h às 14h</p>
              <p className="text-sm text-muted-foreground">Domingo: Fechado</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">Atendimento</h3>
              <p className="text-sm text-muted-foreground">Seg a Sex: 6h às 22h</p>
              <p className="text-sm text-muted-foreground">Sábado: 8h às 14h</p>
              <p className="text-sm text-muted-foreground">Domingo: Fechado</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Quer experimentar uma aula?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Agende sua aula experimental gratuita e conheça nossas modalidades.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contato">Agendar Aula Grátis</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Horarios;
