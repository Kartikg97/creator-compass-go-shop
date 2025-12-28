import { Video, Repeat, Bell, Package, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActionItem {
  icon: typeof Video;
  iconColor: string;
  title: string;
  description: string;
}

const actions: ActionItem[] = [
  {
    icon: Video,
    iconColor: "text-chart-accent",
    title: "Post 3–4 TikTok videos per week",
    description: "Focus on product usage and styling tutorials. TikTok drives the highest engagement quality and strongest revenue correlation.",
  },
  {
    icon: Repeat,
    iconColor: "text-primary",
    title: "Pair TikTok + IG Reel within 24h",
    description: "Cross-posting to Instagram Reels within a day of TikTok amplifies reach and compounds the revenue effect.",
  },
  {
    icon: Bell,
    iconColor: "text-muted-foreground",
    title: "Use Stories for reminders, not launches",
    description: "Stories have low engagement quality. Reserve them for sale reminders, shipping deadlines, and quick updates.",
  },
  {
    icon: Package,
    iconColor: "text-success",
    title: "Lean into THE BOX content during peaks",
    description: "THE BOX (£49) drives the majority of revenue. Feature it prominently in your highest-effort content pieces.",
  },
];

export const RecommendedActions = () => {
  return (
    <div className="chart-container opacity-0 animate-slide-up" style={{ animationDelay: '500ms' }}>
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <CheckCircle2 className="w-5 h-5 text-success" />
          <h2 className="text-xl font-semibold text-foreground">
            What should you do more of?
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Actionable recommendations based on your content performance data
        </p>
      </div>
      
      <div className="space-y-3">
        {actions.map((action, index) => (
          <div 
            key={index}
            className="action-item"
          >
            <div className={cn(
              "p-2 rounded-lg bg-secondary shrink-0",
              action.iconColor.replace('text-', 'bg-') + '/10'
            )}>
              <action.icon className={cn("w-5 h-5", action.iconColor)} />
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-1">{action.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{action.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
