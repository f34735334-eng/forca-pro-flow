import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Leads from "./pages/Leads";
import AulasExperimentais from "./pages/AulasExperimentais";
import Orcamentos from "./pages/Orcamentos";
import GradeAulas from "./pages/GradeAulas";
import Depoimentos from "./pages/Depoimentos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/aulas-experimentais" element={<AulasExperimentais />} />
          <Route path="/orcamentos" element={<Orcamentos />} />
          <Route path="/grade-aulas" element={<GradeAulas />} />
          <Route path="/depoimentos" element={<Depoimentos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
