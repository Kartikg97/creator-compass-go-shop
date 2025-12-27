import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface InsightCardProps {
  icon: LucideIcon;
  iconColor?: string;
  title: string;
  value: string;
  subtitle: string;
  delay?: number;
}

export const InsightCard = ({ 
  icon: Icon, 
  iconColor = "text-primary",
  title, 
  value, 
  subtitle,
  delay = 0 
}: InsightCardProps) => {
  return (
    <div 
      className="insight-card opacity-0 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn("p-2.5 rounded-lg bg-secondary", iconColor.replace('text-', 'bg-') + '/10')}>
          <Icon className={cn("w-5 h-5", iconColor)} />
        </div>
      </div>
      <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
      <h3 className="stat-value text-foreground mb-2">{value}</h3>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
};
