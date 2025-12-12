import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Users, Clock, MapPin } from "lucide-react";

interface ClassSession {
  id: string;
  name: string;
  instructor: string;
  room: string;
  time: string;
  duration: string;
  capacity: number;
  enrolled: number;
  color: string;
}

interface DayClasses {
  dayName: string;
  classes: ClassSession[];
}

const weekClasses: DayClasses[] = [
  {
    dayName: "Segunda",
    classes: [
      { id: "1", name: "Spinning", instructor: "Carlos", room: "Sala 1", time: "07:00", duration: "45min", capacity: 20, enrolled: 18, color: "bg-primary" },
      { id: "2", name: "Yoga", instructor: "Fernanda", room: "Sala 2", time: "08:00", duration: "60min", capacity: 15, enrolled: 12, color: "bg-success" },
      { id: "3", name: "CrossFit", instructor: "Bruno", room: "Box", time: "18:00", duration: "60min", capacity: 25, enrolled: 23, color: "bg-destructive" },
      { id: "4", name: "Pilates", instructor: "Mariana", room: "Sala 2", time: "19:00", duration: "50min", capacity: 12, enrolled: 10, color: "bg-info" },
    ]
  },
  {
    dayName: "Terça",
    classes: [
      { id: "5", name: "Funcional", instructor: "Ana", room: "Área Externa", time: "06:30", duration: "45min", capacity: 30, enrolled: 22, color: "bg-warning" },
      { id: "6", name: "Natação", instructor: "Paulo", room: "Piscina", time: "09:00", duration: "60min", capacity: 10, enrolled: 8, color: "bg-info" },
      { id: "7", name: "Zumba", instructor: "Juliana", room: "Sala 1", time: "19:00", duration: "60min", capacity: 25, enrolled: 25, color: "bg-primary" },
    ]
  },
  {
    dayName: "Quarta",
    classes: [
      { id: "8", name: "Spinning", instructor: "Carlos", room: "Sala 1", time: "07:00", duration: "45min", capacity: 20, enrolled: 15, color: "bg-primary" },
      { id: "9", name: "Yoga", instructor: "Fernanda", room: "Sala 2", time: "08:00", duration: "60min", capacity: 15, enrolled: 14, color: "bg-success" },
      { id: "10", name: "HIIT", instructor: "Bruno", room: "Box", time: "12:00", duration: "30min", capacity: 20, enrolled: 18, color: "bg-destructive" },
      { id: "11", name: "Pilates", instructor: "Mariana", room: "Sala 2", time: "19:00", duration: "50min", capacity: 12, enrolled: 12, color: "bg-info" },
    ]
  },
  {
    dayName: "Quinta",
    classes: [
      { id: "12", name: "Funcional", instructor: "Ana", room: "Área Externa", time: "06:30", duration: "45min", capacity: 30, enrolled: 28, color: "bg-warning" },
      { id: "13", name: "Natação", instructor: "Paulo", room: "Piscina", time: "09:00", duration: "60min", capacity: 10, enrolled: 10, color: "bg-info" },
      { id: "14", name: "CrossFit", instructor: "Bruno", room: "Box", time: "18:00", duration: "60min", capacity: 25, enrolled: 20, color: "bg-destructive" },
    ]
  },
  {
    dayName: "Sexta",
    classes: [
      { id: "15", name: "Spinning", instructor: "Carlos", room: "Sala 1", time: "07:00", duration: "45min", capacity: 20, enrolled: 16, color: "bg-primary" },
      { id: "16", name: "Yoga Restaurativo", instructor: "Fernanda", room: "Sala 2", time: "08:00", duration: "75min", capacity: 15, enrolled: 10, color: "bg-success" },
      { id: "17", name: "Zumba", instructor: "Juliana", room: "Sala 1", time: "18:00", duration: "60min", capacity: 25, enrolled: 22, color: "bg-primary" },
      { id: "18", name: "Alongamento", instructor: "Mariana", room: "Sala 2", time: "19:00", duration: "45min", capacity: 20, enrolled: 15, color: "bg-muted-foreground" },
    ]
  },
  {
    dayName: "Sábado",
    classes: [
      { id: "19", name: "CrossFit", instructor: "Bruno", room: "Box", time: "09:00", duration: "60min", capacity: 25, enrolled: 21, color: "bg-destructive" },
      { id: "20", name: "Yoga", instructor: "Fernanda", room: "Sala 2", time: "10:00", duration: "60min", capacity: 15, enrolled: 15, color: "bg-success" },
    ]
  },
];

const GradeAulas = () => {
  return (
    <MainLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Grade de Aulas</h1>
          <p className="text-muted-foreground mt-1">Visualize e gerencie as aulas coletivas</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="font-medium px-4">15 - 20 Jul, 2024</span>
          <Button variant="outline" size="icon">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Modality Legend */}
      <div className="flex flex-wrap gap-3 mb-6">
        {[
          { name: "Spinning", color: "bg-primary" },
          { name: "Yoga", color: "bg-success" },
          { name: "CrossFit/HIIT", color: "bg-destructive" },
          { name: "Pilates/Natação", color: "bg-info" },
          { name: "Funcional", color: "bg-warning" },
        ].map((mod) => (
          <div key={mod.name} className="flex items-center gap-2">
            <div className={cn("w-3 h-3 rounded", mod.color)} />
            <span className="text-sm text-muted-foreground">{mod.name}</span>
          </div>
        ))}
      </div>

      {/* Weekly Grid */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="grid grid-cols-6 divide-x divide-border">
          {weekClasses.map((day, dayIndex) => (
            <div key={day.dayName} className="min-w-0">
              {/* Day Header */}
              <div className="p-4 text-center border-b border-border bg-muted/30">
                <p className="font-semibold text-foreground">{day.dayName}</p>
              </div>

              {/* Classes */}
              <div className="p-3 space-y-3 min-h-[400px]">
                {day.classes.map((classSession, classIndex) => {
                  const isFull = classSession.enrolled >= classSession.capacity;
                  const fillPercentage = (classSession.enrolled / classSession.capacity) * 100;
                  
                  return (
                    <div
                      key={classSession.id}
                      className="rounded-lg border border-border overflow-hidden cursor-pointer hover:shadow-md transition-all duration-200 animate-scale-in opacity-0"
                      style={{ 
                        animationFillMode: "forwards", 
                        animationDelay: `${(dayIndex * 0.03) + (classIndex * 0.02)}s` 
                      }}
                    >
                      <div className={cn("h-1", classSession.color)} />
                      <div className="p-3">
                        <p className="font-medium text-foreground text-sm truncate">{classSession.name}</p>
                        <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {classSession.time} • {classSession.duration}
                        </div>
                        <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          {classSession.room}
                        </div>
                        <div className="mt-2">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-muted-foreground">{classSession.instructor}</span>
                            <span className={cn(
                              "font-medium",
                              isFull ? "text-destructive" : "text-foreground"
                            )}>
                              {classSession.enrolled}/{classSession.capacity}
                            </span>
                          </div>
                          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                            <div 
                              className={cn(
                                "h-full rounded-full transition-all",
                                isFull ? "bg-destructive" : classSession.color
                              )}
                              style={{ width: `${Math.min(fillPercentage, 100)}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default GradeAulas;
