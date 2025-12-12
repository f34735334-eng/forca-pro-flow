import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Plus, Clock, User, MapPin } from "lucide-react";

interface TimeSlot {
  id: string;
  time: string;
  client?: string;
  modality?: string;
  instructor?: string;
  status: "disponivel" | "confirmado" | "realizada" | "cancelado";
}

interface DaySchedule {
  date: string;
  dayName: string;
  dayNumber: number;
  slots: TimeSlot[];
}

const weekSchedule: DaySchedule[] = [
  {
    date: "2024-07-15",
    dayName: "Seg",
    dayNumber: 15,
    slots: [
      { id: "1", time: "08:00", client: "João Silva", modality: "Spinning", instructor: "Carlos", status: "confirmado" },
      { id: "2", time: "09:00", status: "disponivel" },
      { id: "3", time: "10:00", client: "Maria Santos", modality: "Funcional", instructor: "Ana", status: "confirmado" },
      { id: "4", time: "14:00", status: "disponivel" },
      { id: "5", time: "18:00", client: "Pedro Almeida", modality: "CrossFit", instructor: "Bruno", status: "confirmado" },
    ]
  },
  {
    date: "2024-07-16",
    dayName: "Ter",
    dayNumber: 16,
    slots: [
      { id: "6", time: "07:00", client: "Ana Paula", modality: "Yoga", instructor: "Fernanda", status: "realizada" },
      { id: "7", time: "09:00", status: "disponivel" },
      { id: "8", time: "11:00", client: "Luciana Costa", modality: "Pilates", instructor: "Mariana", status: "confirmado" },
      { id: "9", time: "15:00", status: "disponivel" },
      { id: "10", time: "19:00", client: "Fernando Lima", modality: "Musculação", instructor: "Carlos", status: "confirmado" },
    ]
  },
  {
    date: "2024-07-17",
    dayName: "Qua",
    dayNumber: 17,
    slots: [
      { id: "11", time: "08:00", status: "disponivel" },
      { id: "12", time: "10:00", client: "Camila Rodrigues", modality: "Natação", instructor: "Paulo", status: "cancelado" },
      { id: "13", time: "14:00", status: "disponivel" },
      { id: "14", time: "16:00", status: "disponivel" },
      { id: "15", time: "18:00", client: "Roberto Santos", modality: "CrossFit", instructor: "Bruno", status: "confirmado" },
    ]
  },
  {
    date: "2024-07-18",
    dayName: "Qui",
    dayNumber: 18,
    slots: [
      { id: "16", time: "07:00", status: "disponivel" },
      { id: "17", time: "09:00", client: "Juliana Ferreira", modality: "Spinning", instructor: "Carlos", status: "confirmado" },
      { id: "18", time: "11:00", status: "disponivel" },
      { id: "19", time: "15:00", client: "Marcos Oliveira", modality: "Funcional", instructor: "Ana", status: "confirmado" },
      { id: "20", time: "19:00", status: "disponivel" },
    ]
  },
  {
    date: "2024-07-19",
    dayName: "Sex",
    dayNumber: 19,
    slots: [
      { id: "21", time: "08:00", client: "Patricia Lima", modality: "Yoga", instructor: "Fernanda", status: "confirmado" },
      { id: "22", time: "10:00", status: "disponivel" },
      { id: "23", time: "14:00", client: "Ricardo Costa", modality: "Pilates", instructor: "Mariana", status: "confirmado" },
      { id: "24", time: "16:00", status: "disponivel" },
      { id: "25", time: "18:00", status: "disponivel" },
    ]
  },
];

const statusConfig = {
  disponivel: { label: "Disponível", className: "border-dashed border-2 border-border bg-muted/30 hover:bg-muted hover:border-primary/50" },
  confirmado: { label: "Confirmado", className: "bg-primary/10 border border-primary/30" },
  realizada: { label: "Realizada", className: "bg-success/10 border border-success/30" },
  cancelado: { label: "Cancelado", className: "bg-destructive/10 border border-destructive/30 opacity-60" },
};

const AulasExperimentais = () => {
  const today = 17;

  return (
    <MainLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Aulas Experimentais</h1>
          <p className="text-muted-foreground mt-1">Gerencie agendamentos de aulas experimentais</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Novo Agendamento
        </Button>
      </div>

      {/* Calendar Navigation */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <h2 className="text-lg font-semibold text-foreground">Julho 2024</h2>
          <Button variant="outline" size="icon">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">Hoje</Button>
          <Button variant="outline" size="sm">Semana</Button>
          <Button variant="outline" size="sm">Mês</Button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6">
        {Object.entries(statusConfig).map(([key, value]) => (
          <div key={key} className="flex items-center gap-2">
            <div className={cn("w-3 h-3 rounded", value.className.split(" ").filter(c => c.startsWith("bg-")).join(" "))} />
            <span className="text-sm text-muted-foreground">{value.label}</span>
          </div>
        ))}
      </div>

      {/* Week View */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="grid grid-cols-5 divide-x divide-border">
          {weekSchedule.map((day, dayIndex) => (
            <div key={day.date} className="min-w-0">
              {/* Day Header */}
              <div 
                className={cn(
                  "p-4 text-center border-b border-border",
                  day.dayNumber === today && "bg-primary/5"
                )}
              >
                <p className="text-sm text-muted-foreground">{day.dayName}</p>
                <p 
                  className={cn(
                    "text-2xl font-bold mt-1",
                    day.dayNumber === today ? "text-primary" : "text-foreground"
                  )}
                >
                  {day.dayNumber}
                </p>
              </div>

              {/* Time Slots */}
              <div className="p-3 space-y-3">
                {day.slots.map((slot, slotIndex) => {
                  const config = statusConfig[slot.status];
                  return (
                    <div
                      key={slot.id}
                      className={cn(
                        "p-3 rounded-lg cursor-pointer transition-all duration-200 animate-scale-in opacity-0",
                        config.className
                      )}
                      style={{ 
                        animationFillMode: "forwards", 
                        animationDelay: `${(dayIndex * 0.05) + (slotIndex * 0.03)}s` 
                      }}
                    >
                      <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                        {slot.time}
                      </div>
                      {slot.client ? (
                        <div className="mt-2 space-y-1">
                          <div className="flex items-center gap-2 text-sm">
                            <User className="w-3.5 h-3.5 text-muted-foreground" />
                            <span className="text-foreground truncate">{slot.client}</span>
                          </div>
                          <p className="text-xs text-muted-foreground truncate">
                            {slot.modality} • {slot.instructor}
                          </p>
                        </div>
                      ) : (
                        <p className="mt-2 text-xs text-muted-foreground">
                          Clique para agendar
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
        <div className="bg-card rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground">Esta Semana</p>
          <p className="text-2xl font-bold text-foreground mt-1">12</p>
          <p className="text-xs text-muted-foreground">agendamentos</p>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground">Confirmados</p>
          <p className="text-2xl font-bold text-success mt-1">9</p>
          <p className="text-xs text-muted-foreground">75% do total</p>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground">Realizadas</p>
          <p className="text-2xl font-bold text-info mt-1">1</p>
          <p className="text-xs text-muted-foreground">esta semana</p>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground">Disponíveis</p>
          <p className="text-2xl font-bold text-primary mt-1">13</p>
          <p className="text-xs text-muted-foreground">horários livres</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default AulasExperimentais;
