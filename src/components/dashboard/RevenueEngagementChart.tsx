import { useMemo } from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { getRevenueEngagementChartData } from "@/data/dashboardData";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
        <p className="font-medium text-foreground mb-1">{data.fullDate}</p>
        <p className="text-xs text-muted-foreground mb-2">{data.platform} • {data.type}</p>
        <div className="space-y-1 text-sm">
          <p className="text-muted-foreground">
            Avg Lag Sales: <span className="text-primary font-medium">£{data.revenue}</span>
          </p>
          <p className="text-muted-foreground">
            Engagement: <span className="text-accent font-medium">{data.engagement}%</span>
          </p>
          <p className={`font-medium ${data.lift >= 0 ? 'text-emerald-600' : 'text-rose-500'}`}>
            Lift: {data.lift >= 0 ? '+' : ''}{data.lift}%
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export const RevenueEngagementChart = () => {
  const chartData = useMemo(() => getRevenueEngagementChartData(), []);

  return (
    <div className="chart-container opacity-0 animate-slide-up" style={{ animationDelay: '200ms' }}>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-foreground mb-1">
          Revenue vs Engagement Quality
        </h2>
        <p className="text-sm text-muted-foreground">
          Showing the 24-48h lag between high-engagement content and revenue spikes
        </p>
      </div>
      
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis 
              dataKey="date" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              yAxisId="left"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `£${value}`}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            
            {/* Vertical markers for high-performing content days */}
            {chartData.filter(d => d.hasTikTok || d.hasReel).map((d, i) => (
              <ReferenceLine 
                key={i}
                x={d.date} 
                stroke={d.hasTikTok ? "hsl(var(--chart-accent))" : "hsl(var(--primary))"}
                strokeDasharray="4 4"
                strokeOpacity={0.5}
                yAxisId="left"
              />
            ))}
            
            <Bar 
              yAxisId="left"
              dataKey="revenue" 
              fill="hsl(var(--primary))"
              radius={[4, 4, 0, 0]}
              opacity={0.9}
            />
            <Line 
              yAxisId="right"
              type="monotone"
              dataKey="engagement" 
              stroke="hsl(var(--accent))"
              strokeWidth={3}
              dot={{ fill: "hsl(var(--accent))", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center gap-6 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-primary" />
          <span className="text-muted-foreground">Daily Revenue</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-accent" />
          <span className="text-muted-foreground">Engagement Score</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-chart-accent" style={{ borderStyle: 'dashed' }} />
          <span className="text-muted-foreground">TikTok Post</span>
        </div>
      </div>
    </div>
  );
};
