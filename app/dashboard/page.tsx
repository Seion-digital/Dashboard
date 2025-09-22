"use client";

import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/dashboard/site-header";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  IconMap,
  IconRocket,
  IconMail,
  IconChartDonut,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { BusinessDiscoveryTrendsChart } from "@/components/charts/business-discovery-trends-chart";
import { IndustryDistributionChart } from "@/components/charts/industry-distribution-chart";
import { SuccessMetricsGaugeChart } from "@/components/charts/success-metrics-gauge-chart";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

export default function DashboardPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <main className="p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            {/* Left column */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Live Location Selector */}
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Live Location Selector</CardTitle>
                    <CardDescription>
                      Interactive map for real-time location detection
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {loading ? <Skeleton className="h-64 w-full" /> : <div className="h-64 w-full rounded-md bg-gray-200 dark:bg-gray-800" />}
                  </CardContent>
                </Card>

                {/* Real-Time Statistics Cards */}
                <Card>
                  <CardHeader>
                    <CardTitle>Total Businesses Discovered</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {loading ? <Skeleton className="h-10 w-24" /> : <p className="text-4xl font-bold">1,234</p>}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Businesses Analyzed Today</CardTitle>
                  </CardHeader>
                  <CardContent>
                  {loading ? <Skeleton className="h-10 w-16" /> : <p className="text-4xl font-bold">56</p>}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Active Email Campaigns</CardTitle>
                  </CardHeader>
                  <CardContent>
                  {loading ? <Skeleton className="h-10 w-12" /> : <p className="text-4xl font-bold">12</p>}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Success Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {loading ? <Skeleton className="h-24 w-full" /> : <SuccessMetricsGaugeChart />}
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right column */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* Functional Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button
                      className="w-full justify-start"
                      onClick={() => toast.success("New discovery process started!")}
                    >
                      <IconMap className="mr-2 h-4 w-4" />
                      New Discovery
                    </Button>
                    <Button
                      className="w-full justify-start"
                      onClick={() => toast.info("Campaign creation wizard opened.")}
                    >
                      <IconRocket className="mr-2 h-4 w-4" />
                      Launch Campaign
                    </Button>
                    <Button
                      className="w-full justify-start"
                      onClick={() => toast.error("Email generation failed. Please try again.")}
                    >
                      <IconMail className="mr-2 h-4 w-4" />
                      Generate Emails
                    </Button>
                  </CardContent>
                </Card>

                {/* Live Activity Feed */}
                <Card>
                  <CardHeader>
                    <CardTitle>Live Activity Feed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {loading ? (
                        <div className="space-y-4">
                            <Skeleton className="h-6 w-full" />
                            <Skeleton className="h-6 w-full" />
                            <Skeleton className="h-6 w-full" />
                        </div>
                    ) : (
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <IconChartDonut className="mr-2 h-4 w-4" />
                        <span>Business analyzed: TechCorp</span>
                      </li>
                      <li className="flex items-center">
                        <IconMail className="mr-2 h-4 w-4" />
                        <span>Email sent: Digital Dynamics</span>
                      </li>
                      <li className="flex items-center">
                        <IconChartDonut className="mr-2 h-4 w-4" />
                        <span>Business analyzed: Innovate LLC</span>
                      </li>
                    </ul>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Business Discovery Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  {loading ? <Skeleton className="h-[300px] w-full" /> : <BusinessDiscoveryTrendsChart />}
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Industry Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  {loading ? <Skeleton className="h-[300px] w-full" /> : <IndustryDistributionChart />}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
