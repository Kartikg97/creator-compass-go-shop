import { useMemo } from "react";
import { getEngagementBucketData } from "@/data/dashboardData";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export const EngagementBucketTable = () => {
  const bucketData = useMemo(() => getEngagementBucketData(), []);

  return (
    <div className="chart-container opacity-0 animate-slide-up" style={{ animationDelay: '300ms' }}>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-foreground mb-1">
          Engagement Bucket Breakdown
        </h2>
        <p className="text-sm text-muted-foreground">
          Higher engagement quality consistently predicts higher revenue within 48 hours
        </p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                Engagement Level
              </th>
              <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">
                Avg Revenue (48h)
              </th>
              <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">
                Lift vs Avg
              </th>
            </tr>
          </thead>
          <tbody>
            {bucketData.map((bucket, index) => (
              <tr 
                key={bucket.level}
                className="border-b border-border/50 last:border-0 hover:bg-secondary/50 transition-colors"
              >
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-2.5 h-2.5 rounded-full",
                      bucket.level === "Low" && "bg-destructive",
                      bucket.level === "Medium" && "bg-warning",
                      bucket.level === "High" && "bg-success"
                    )} />
                    <div>
                      <p className="font-medium text-foreground">{bucket.level}</p>
                      <p className="text-xs text-muted-foreground">{bucket.threshold}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-right">
                  <span className="font-semibold text-foreground">£{bucket.avgRevenue}</span>
                </td>
                <td className="py-4 px-4 text-right">
                  <div className={cn(
                    "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-sm font-medium",
                    bucket.lift > 0 && "bg-success/10 text-success",
                    bucket.lift < 0 && "bg-destructive/10 text-destructive",
                    bucket.lift === 0 && "bg-secondary text-muted-foreground"
                  )}>
                    {bucket.lift > 0 && <TrendingUp className="w-3.5 h-3.5" />}
                    {bucket.lift < 0 && <TrendingDown className="w-3.5 h-3.5" />}
                    {bucket.lift === 0 && <Minus className="w-3.5 h-3.5" />}
                    {bucket.lift > 0 ? '+' : ''}{bucket.lift}%
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
