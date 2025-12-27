import { BarChart3, Calendar } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <header className="opacity-0 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10">
            <BarChart3 className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              Creator Analytics
            </h1>
            <p className="text-muted-foreground text-sm">
              Monsieur Grooming • @danedgar
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-lg text-sm">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">Dec 1 – 16, 2025</span>
        </div>
      </div>
    </header>
  );
};
