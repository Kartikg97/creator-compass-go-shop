import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { FlippableInsightCard } from "@/components/dashboard/FlippableInsightCard";
import { RevenueEngagementChart } from "@/components/dashboard/RevenueEngagementChart";
import { EngagementBucketTable } from "@/components/dashboard/EngagementBucketTable";
import { FormatComparisonChart } from "@/components/dashboard/FormatComparisonChart";
import { RecommendedActions } from "@/components/dashboard/RecommendedActions";
import { Video, Eye, ShoppingBag } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <DashboardHeader />
        
        {/* Section 1: Top Summary Cards */}
        <section className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            <FlippableInsightCard
              icon={Video}
              iconColor="text-chart-accent"
              frontTitle="What format is working for you"
              backTitle="Best Performing Format"
              backValue="TikTok Videos"
              backSubtitle="+34% avg revenue lift within 48h"
              delay={100}
            />
            <FlippableInsightCard
              icon={Eye}
              iconColor="text-accent"
              frontTitle="How many views you should target"
              backTitle="Views Threshold"
              backValue="70k–100k+"
              backSubtitle="Revenue spikes above 25% only occur after days with ~70k–100k+ total views"
              delay={200}
            />
            <FlippableInsightCard
              icon={ShoppingBag}
              iconColor="text-primary"
              frontTitle="What content you should post more often"
              backTitle="Content Type"
              backValue="Product-led Content"
              backSubtitle="~35–45% higher lagged revenue compared to lifestyle-only content"
              delay={300}
            />
          </div>
        </section>
        
        {/* Section 2: Revenue vs Engagement Chart */}
        <section className="mt-8">
          <RevenueEngagementChart />
        </section>
        
        {/* Section 3 & 4: Two column layout */}
        <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FormatComparisonChart />
          <EngagementBucketTable />
        </section>
        
        {/* Section 5: Recommended Actions */}
        <section className="mt-8">
          <RecommendedActions />
        </section>
        
        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-border opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              Powered by <span className="font-medium text-foreground">Go.Shop</span> — AI-powered creator commerce
            </p>
            <p>Data: Dec 1–16, 2025 • 30 posts • £8,920 revenue</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
