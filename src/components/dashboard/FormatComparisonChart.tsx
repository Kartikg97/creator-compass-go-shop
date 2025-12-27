import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { getFormatComparisonData } from "@/data/dashboardData";

const COLORS = [
  "hsl(var(--chart-accent))",
  "hsl(var(--primary))",
  "hsl(var(--chart-secondary))",
  "hsl(var(--chart-muted))",
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
        <p className="font-medium text-foreground mb-1">{data.format}</p>
        <p className="text-sm text-muted-foreground">
          Avg Engagement: <span className="text-accent font-medium">{(data.avgEngagement * 100).toFixed(1)}%</span>
        </p>
      </div>
    );
  }
  return null;
};

export const FormatComparisonChart = () => {
  const formatData = useMemo(() => getFormatComparisonData(), []);

  return (
    <div className="chart-container opacity-0 animate-slide-up" style={{ animationDelay: '400ms' }}>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-foreground mb-1">
          Format Performance Comparison
        </h2>
        <p className="text-sm text-muted-foreground">
          Not all engagement is equal — TikTok and Reels drive the highest quality engagement
        </p>
      </div>
      
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={formatData}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={true} vertical={false} />
            <XAxis 
              type="number"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
            />
            <YAxis 
              dataKey="format"
              type="category"
              stroke="hsl(var(--muted-foreground))"
              fontSize={13}
              tickLine={false}
              axisLine={false}
              width={120}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="avgEngagement" 
              radius={[0, 6, 6, 0]}
              barSize={36}
            >
              {formatData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
