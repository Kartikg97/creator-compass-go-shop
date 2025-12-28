import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface FlippableInsightCardProps {
  icon: LucideIcon;
  iconColor?: string;
  frontTitle: string;
  backTitle: string;
  backValue: string;
  backSubtitle: string;
  delay?: number;
}

export const FlippableInsightCard = ({ 
  icon: Icon, 
  iconColor = "text-primary",
  frontTitle,
  backTitle, 
  backValue, 
  backSubtitle,
  delay = 0 
}: FlippableInsightCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="opacity-0 animate-slide-up perspective-1000 h-[180px] cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={cn(
          "relative w-full h-full transition-transform duration-500 transform-style-preserve-3d",
          isFlipped && "rotate-y-180"
        )}
      >
        {/* Front Face */}
        <div className="absolute inset-0 backface-hidden">
          <div className="insight-card h-full flex flex-col items-center justify-center text-center">
            <div className={cn("p-3 rounded-lg bg-secondary mb-4", iconColor.replace('text-', 'bg-') + '/10')}>
              <Icon className={cn("w-8 h-8", iconColor)} />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{frontTitle}</h3>
            <p className="text-sm text-muted-foreground mt-2">Tap to reveal</p>
          </div>
        </div>
        
        {/* Back Face */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="insight-card h-full flex flex-col justify-center">
            <p className="text-sm font-medium text-muted-foreground mb-1">{backTitle}</p>
            <h3 className="stat-value text-foreground mb-2">{backValue}</h3>
            <p className="text-sm text-muted-foreground">{backSubtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
